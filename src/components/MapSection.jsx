import { useState } from 'react'
import { CAPAS_MAPA } from '../data/recursos.js'
import MapaUbicacion from './MapaUbicacion.jsx'

export default function MapSection() {
  const [activa, setActiva] = useState(CAPAS_MAPA[0].id)
  const capa = CAPAS_MAPA.find((c) => c.id === activa)

  return (
    <section className="section" id="mapa">
      <h2 className="section-title">Mapa actual</h2>
      <div className="map-grid">
        <div className="map-frame">
          <MapaUbicacion titulo="Mapa de la Región Metropolitana" />
        </div>

        <aside className="map-side">
          <ul className="legend">
            {CAPAS_MAPA.map((c, i) => (
              <li key={c.id}>
                <button className={`legend-btn ${activa === c.id ? 'active' : ''}`} onClick={() => setActiva(c.id)}>
                  <span className="legend-num">{i + 1}</span>
                  {c.etiqueta}
                </button>
              </li>
            ))}
          </ul>
          <p className="legend-detail">{capa.detalle}</p>
          <p className="muted">Mapa referencial. Las capas de riesgo se irán incorporando con datos oficiales.</p>
        </aside>
      </div>
    </section>
  )
}
