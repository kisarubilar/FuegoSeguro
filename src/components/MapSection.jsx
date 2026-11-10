import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const MapSection = () => {
  const positionRM = [-33.4489, -70.6693]

  return (
    <section className="my-5 p-4 bg-white rounded shadow-sm">
      <h2 className="h4 border-bottom pb-2 mb-4 text-danger fw-bold">
        Mapa de Monitoreo en Tiempo Real
      </h2>
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="rounded overflow-hidden shadow-sm" style={{ height: '350px' }}>
            <MapContainer center={positionRM} zoom={10} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={positionRM}>
                <Popup>Ubicación actual de monitoreo - Región Metropolitana</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="p-3 border rounded bg-light h-100 d-flex flex-column justify-content-center">
            <h3 className="h6 fw-bold mb-3 text-dark">Simbología y Leyenda</h3>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              <li className="d-flex align-items-center gap-2">
                <span className="badge bg-danger rounded-circle p-2">🔥</span>
                <small className="fw-medium">Foco de incendio activo</small>
              </li>
              <li className="d-flex align-items-center gap-2">
                <span className="badge bg-warning text-dark rounded-circle p-2">⚠️</span>
                <small className="fw-medium">Zona de mayor riesgo</small>
              </li>
              <li className="d-flex align-items-center gap-2">
                <span className="badge bg-primary rounded-circle p-2">🚒</span>
                <small className="fw-medium">Ubicación de Bomberos</small>
              </li>
              <li className="d-flex align-items-center gap-2">
                <span className="badge bg-info rounded-circle p-2">💧</span>
                <small className="fw-medium">Fuentes de agua / Grifos</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection