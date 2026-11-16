import { useState } from 'react'
import { leer, guardar, nuevoId } from '../services/storage.js'
import { TELEFONOS } from '../data/recursos.js'
import MapaUbicacion from '../components/MapaUbicacion.jsx'

const TIPOS = ['Humo', 'Fuego activo', 'Quema sospechosa', 'Vegetación seca / riesgo', 'Otro']
const VACIO = { tipo: TIPOS[0], comuna: '', descripcion: '', lat: '', lon: '' }

// Reduce la foto para que quepa en el almacenamiento del navegador.
function reducirImagen(archivo, max = 800) {
  return new Promise((resolve, reject) => {
    const lector = new FileReader()
    lector.onerror = reject
    lector.onload = () => {
      const im = new Image()
      im.onerror = reject
      im.onload = () => {
        const escala = Math.min(1, max / Math.max(im.width, im.height))
        const c = document.createElement('canvas')
        c.width = Math.round(im.width * escala)
        c.height = Math.round(im.height * escala)
        c.getContext('2d').drawImage(im, 0, 0, c.width, c.height)
        resolve(c.toDataURL('image/jpeg', 0.7))
      }
      im.src = lector.result
    }
    lector.readAsDataURL(archivo)
  })
}

// Boceto: Reporte → "Nuevo incendio" → Imagen + Descripción → Ubicación (mapa) → botón Reportar
export default function Reporte() {
  const [form, setForm] = useState(VACIO)
  const [foto, setFoto] = useState('')
  const [reportes, setReportes] = useState(() => leer('fs_reportes', []))
  const [mensaje, setMensaje] = useState('')

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const elegirFoto = async (e) => {
    const archivo = e.target.files?.[0]
    if (!archivo) return
    try {
      setFoto(await reducirImagen(archivo))
    } catch {
      setMensaje('No se pudo leer la imagen. Prueba con otra.')
    }
  }

  const usarUbicacion = () => {
    if (!navigator.geolocation) {
      setMensaje('Tu navegador no permite obtener la ubicación.')
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setForm((f) => ({ ...f, lat: pos.coords.latitude.toFixed(5), lon: pos.coords.longitude.toFixed(5) }))
        setMensaje('')
      },
      () => setMensaje('No se pudo obtener la ubicación. Escribe las coordenadas a mano.')
    )
  }

  const lat = parseFloat(form.lat)
  const lon = parseFloat(form.lon)
  const hayCoords = Number.isFinite(lat) && Number.isFinite(lon)

  const enviar = (e) => {
    e.preventDefault()
    const nuevo = { id: nuevoId(), fecha: new Date().toISOString(), ...form, foto }
    const lista = [nuevo, ...reportes]
    try {
      localStorage.setItem('fs_reportes', JSON.stringify(lista))
    } catch {
      setMensaje('No hay espacio para guardar la imagen. Envía el reporte sin foto.')
      return
    }
    setReportes(lista)
    setForm(VACIO)
    setFoto('')
    setMensaje('Reporte guardado en este dispositivo. Si es una emergencia, llama también al 130 o 132.')
  }

  const eliminar = (id) => {
    const lista = reportes.filter((r) => r.id !== id)
    guardar('fs_reportes', lista)
    setReportes(lista)
  }

  return (
    <>
      <section className="page-head">
        <span className="chip">Reportar</span>
        <h1>Reporte</h1>
        <p>En una emergencia, llama primero:</p>
        <div className="row-center">
          {TELEFONOS.map((t) => (
            <a key={t.numero} className="btn btn-light" href={`tel:${t.numero}`}>{t.numero} · {t.nombre}</a>
          ))}
        </div>
      </section>

      <form className="section report-form" onSubmit={enviar}>
        <div className="form-bar">
          <h2>Nuevo incendio</h2>
          <select name="tipo" value={form.tipo} onChange={cambiar} aria-label="Tipo de situación">
            {TIPOS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>

        <div className="form-two">
          <div className="panel">
            <h3>Imagen</h3>
            <label className="photo-drop">
              {foto ? <img src={foto} alt="Vista previa de tu foto" /> : <span>📷 Toca para subir o tomar una foto</span>}
              <input type="file" accept="image/*" capture="environment" onChange={elegirFoto} hidden />
            </label>
            {foto && <button type="button" className="link-btn" onClick={() => setFoto('')}>Quitar imagen</button>}
          </div>

          <div className="panel">
            <h3>Descripción</h3>
            <label className="field">Comuna / sector
              <input name="comuna" value={form.comuna} onChange={cambiar} required placeholder="Ej: Pirque" />
            </label>
            <label className="field">¿Qué observas?
              <textarea name="descripcion" rows="5" value={form.descripcion} onChange={cambiar} required placeholder="Humo, color, dirección del viento, vegetación cercana…" />
            </label>
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h3>Ubicación</h3>
            <button type="button" className="btn btn-outline" onClick={usarUbicacion}>📍 Usar mi ubicación</button>
          </div>
          <div className="map-frame">
            <MapaUbicacion lat={hayCoords ? lat : undefined} lon={hayCoords ? lon : undefined} titulo="Ubicación del reporte" alto={320} />
          </div>
          <div className="form-two coords">
            <label className="field">Latitud<input name="lat" value={form.lat} onChange={cambiar} placeholder="-33.45" inputMode="decimal" /></label>
            <label className="field">Longitud<input name="lon" value={form.lon} onChange={cambiar} placeholder="-70.66" inputMode="decimal" /></label>
          </div>
        </div>

        <button className="btn btn-primary btn-block" type="submit">Reportar</button>
        {mensaje && <p className="notice" role="status">{mensaje}</p>}
      </form>

      <section className="section">
        <h2 className="section-title">Tus reportes ({reportes.length})</h2>
        {reportes.length === 0 && <p className="muted center">Aún no hay reportes.</p>}
        <ul className="report-list">
          {reportes.map((r) => (
            <li key={r.id} className="panel">
              {r.foto && <img src={r.foto} alt="" />}
              <div>
                <strong>{r.tipo}</strong> · {r.comuna}
                <small>{new Date(r.fecha).toLocaleString('es-CL')}</small>
                <p>{r.descripcion}</p>
              </div>
              <button className="link-btn" onClick={() => eliminar(r.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
