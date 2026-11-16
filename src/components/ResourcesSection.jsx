import MediaCarousel from './MediaCarousel.jsx'
import { PDFS, VIDEOS } from '../data/recursos.js'

// Home: PDF y Videos lado a lado (como en el boceto).
export default function ResourcesSection() {
  return (
    <section className="section" id="informacion">
      <h2 className="section-title">Información</h2>
      <div className="resources-grid">
        <MediaCarousel titulo="Guías en PDF" items={PDFS} compacto />
        <MediaCarousel titulo="Videos" items={VIDEOS} compacto />
      </div>
    </section>
  )
}
