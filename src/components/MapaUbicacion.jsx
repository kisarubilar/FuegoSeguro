// Mapa de OpenStreetMap incrustado (sin librerías ni claves).
// Sin coordenadas: vista de la Región Metropolitana. Con lat/lon: acerca y pone un pin.
const RM = '-71.7%2C-34.3%2C-69.8%2C-32.9'

export function urlMapa(lat, lon) {
  if (typeof lat !== 'number' || typeof lon !== 'number') {
    return `https://www.openstreetmap.org/export/embed.html?bbox=${RM}&layer=mapnik`
  }
  const bbox = [lon - 0.02, lat - 0.012, lon + 0.02, lat + 0.012].map((n) => n.toFixed(5)).join('%2C')
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat.toFixed(5)}%2C${lon.toFixed(5)}`
}

export default function MapaUbicacion({ lat, lon, titulo = 'Mapa', alto = 360 }) {
  return (
    <iframe
      className="map-iframe"
      title={titulo}
      src={urlMapa(lat, lon)}
      loading="lazy"
      style={{ minHeight: alto }}
    />
  )
}
