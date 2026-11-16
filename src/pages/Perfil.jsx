import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { MEDIDAS } from '../data/recursos.js'
import { leer, guardar } from '../services/storage.js'
import MapaUbicacion from '../components/MapaUbicacion.jsx'
import useGuardados from '../hooks/useGuardados.js'

const DIA = 24 * 60 * 60 * 1000

function AuthForm() {
  const { registrar, iniciarSesion } = useAuth()
  const [modo, setModo] = useState('login')
  const [form, setForm] = useState({ nombre: '', email: '', comuna: '', password: '' })
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)
  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const enviar = async (e) => {
    e.preventDefault()
    setError('')
    setCargando(true)
    try {
      if (modo === 'login') await iniciarSesion(form)
      else await registrar(form)
    } catch (err) {
      setError(err.message)
    } finally {
      setCargando(false)
    }
  }

  return (
    <section className="section auth-wrap">
      <form className="panel auth" onSubmit={enviar}>
        <div className="tabs">
          <button type="button" className={modo === 'login' ? 'on' : ''} onClick={() => setModo('login')}>Iniciar sesión</button>
          <button type="button" className={modo === 'registro' ? 'on' : ''} onClick={() => setModo('registro')}>Crear cuenta</button>
        </div>
        {modo === 'registro' && (
          <>
            <label className="field">Nombre<input name="nombre" value={form.nombre} onChange={cambiar} required /></label>
            <label className="field">Comuna / sector<input name="comuna" value={form.comuna} onChange={cambiar} required /></label>
          </>
        )}
        <label className="field">Correo<input type="email" name="email" value={form.email} onChange={cambiar} required /></label>
        <label className="field">Contraseña<input type="password" name="password" minLength={6} value={form.password} onChange={cambiar} required /></label>
        <button className="btn btn-primary" disabled={cargando}>{modo === 'login' ? 'Entrar' : 'Registrarme'}</button>
        {error && <p className="notice error" role="alert">{error}</p>}
        <p className="muted">Versión de demostración: tus datos se guardan solo en este navegador.</p>
      </form>
    </section>
  )
}

// Boceto: Mapa ubicación + nombre → Checklist (con imagen) → Notificaciones → Guardados
function PerfilUsuario({ usuario }) {
  const { cerrarSesion } = useAuth()
  const claveCheck = `fs_checklist_${usuario.id}`
  const claveUbi = `fs_ubicacion_${usuario.id}`
  const [hechos, setHechos] = useState(() => leer(claveCheck, {}))
  const [ubi, setUbi] = useState(() => leer(claveUbi, null))
  const [permiso, setPermiso] = useState(() => ('Notification' in window ? Notification.permission : 'no-disponible'))
  const [aviso, setAviso] = useState('')
  const { lista: guardados, alternar } = useGuardados()

  const estado = (m) => {
    const h = hechos[m.id]
    if (!h) return { hecho: false, pendiente: true, dias: 0 }
    const dias = Math.ceil((h.ultima + m.frecuenciaDias * DIA - Date.now()) / DIA)
    return { hecho: dias > 0, pendiente: dias <= 0, dias, proxima: new Date(h.ultima + m.frecuenciaDias * DIA) }
  }

  const alternarMedida = (m) => {
    const copia = { ...hechos }
    if (estado(m).hecho) delete copia[m.id]
    else copia[m.id] = { ultima: Date.now() }
    setHechos(copia)
    guardar(claveCheck, copia)
  }

  const pendientes = MEDIDAS.filter((m) => estado(m).pendiente)
  const proximas = MEDIDAS.filter((m) => {
    const e = estado(m)
    return e.hecho && e.dias <= 3
  })

  // Notificación del navegador (solo si la persona la activó)
  useEffect(() => {
    if (permiso === 'granted' && pendientes.length > 0) {
      try {
        new Notification('FuegoSeguro', {
          body: `Tienes ${pendientes.length} medida${pendientes.length > 1 ? 's' : ''} pendiente${pendientes.length > 1 ? 's' : ''} en tu checklist.`,
        })
      } catch {
        // algunos móviles no permiten new Notification(): se ignora
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permiso])

  const activarNotificaciones = async () => {
    if (!('Notification' in window)) {
      setAviso('Tu navegador no admite notificaciones. Verás los avisos aquí en tu perfil.')
      return
    }
    setPermiso(await Notification.requestPermission())
  }

  const usarUbicacion = () => {
    if (!navigator.geolocation) {
      setAviso('Tu navegador no permite obtener la ubicación.')
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const nueva = { lat: pos.coords.latitude, lon: pos.coords.longitude }
        setUbi(nueva)
        guardar(claveUbi, nueva)
        setAviso('')
      },
      () => setAviso('No se pudo obtener la ubicación.')
    )
  }

  return (
    <>
      <section className="profile-hero">
        <div className="profile-map">
          <MapaUbicacion lat={ubi?.lat} lon={ubi?.lon} titulo="Mapa de tu ubicación" alto={280} />
        </div>
        <div className="profile-card">
          <div className="avatar" aria-hidden="true">{usuario.nombre.charAt(0).toUpperCase()}</div>
          <div>
            <h1>{usuario.nombre}</h1>
            <p>📍 {usuario.comuna}</p>
          </div>
          <div className="profile-actions">
            <button className="btn btn-outline" onClick={usarUbicacion}>Usar mi ubicación</button>
            <button className="btn btn-ghost" onClick={cerrarSesion}>Cerrar sesión</button>
          </div>
        </div>
      </section>
      {aviso && <p className="notice" role="status">{aviso}</p>}

      <section className="section">
        <h2 className="section-title">Checklist</h2>
        <ul className="checklist">
          {MEDIDAS.map((m) => {
            const e = estado(m)
            return (
              <li key={m.id} className={`check-row ${e.hecho ? 'done' : ''}`}>
                <label className="check-box">
                  <input type="checkbox" checked={e.hecho} onChange={() => alternarMedida(m)} aria-label={m.titulo} />
                  <span />
                </label>
                <div className="check-text">
                  <strong>{m.titulo}</strong>
                  <p>{m.descripcion}</p>
                  <small className={e.pendiente ? 'due' : 'ok'}>
                    {e.pendiente
                      ? `Pendiente · se repite cada ${m.frecuenciaDias} días`
                      : `Hecho · próxima vez: ${e.proxima.toLocaleDateString('es-CL')}`}
                  </small>
                </div>
                <img src={m.imagen} alt="" loading="lazy" />
              </li>
            )
          })}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Notificaciones</h2>
        <div className="panel notif">
          {pendientes.length === 0 && proximas.length === 0 && <p>Todo al día. ¡Buen trabajo cuidando tu terreno!</p>}
          {pendientes.length > 0 && (
            <ul>
              {pendientes.map((m) => <li key={m.id} className="due">⚠ Pendiente: {m.titulo}</li>)}
            </ul>
          )}
          {proximas.length > 0 && (
            <ul>
              {proximas.map((m) => <li key={m.id}>⏰ Pronto: {m.titulo}</li>)}
            </ul>
          )}
          {permiso !== 'granted' && permiso !== 'no-disponible' && (
            <button className="btn btn-outline" onClick={activarNotificaciones}>🔔 Activar avisos del navegador</button>
          )}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Guardados</h2>
        {guardados.length === 0 ? (
          <p className="muted center">Aún no guardas nada. Usa ☆ Guardar en los videos y PDF.</p>
        ) : (
          <div className="media">
            <div className="media-track">
              {guardados.map((g) => (
                <article key={g.id} className="media-card">
                  <a href={g.url} target="_blank" rel="noopener noreferrer" className="media-thumb">
                    <img src={g.imagen} alt="" loading="lazy" />
                    <span className="media-kind">{g.tipo === 'video' ? 'Video' : 'PDF'}</span>
                  </a>
                  <div className="media-body">
                    <strong>{g.titulo}</strong>
                    <button className="save-btn on" onClick={() => alternar(g)}>★ Quitar</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default function Perfil() {
  const { usuario } = useAuth()
  if (!usuario) {
    return (
      <>
        <section className="page-head">
          <span className="chip">Perfil</span>
          <h1>Iniciar sesión</h1>
          <p>Crea una cuenta para tener tu checklist y recibir recordatorios de prevención.</p>
        </section>
        <AuthForm />
      </>
    )
  }
  return <PerfilUsuario usuario={usuario} />
}
