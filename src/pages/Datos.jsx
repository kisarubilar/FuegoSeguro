import { DATO_CLAVE, CONAF, RECOMENDACIONES, PDFS, VIDEOS } from '../data/recursos.js'
import NewsSection from '../components/NewsSection.jsx'
import MediaCarousel from '../components/MediaCarousel.jsx'

// Boceto: Últimas noticias → Videos → PDF → Pie de página
export default function Datos() {
  return (
    <>
      <section className="page-head">
        <span className="chip">Datos</span>
        <h1>Datos e información</h1>
        <p>Información visual, clara y respaldada por fuentes oficiales.</p>
      </section>

      <section className="stat-band">
        <strong>{DATO_CLAVE.porcentaje}</strong>
        <div>
          <p>{DATO_CLAVE.texto}</p>
          <small>{DATO_CLAVE.nota}</small>
        </div>
        <a className="btn btn-light" href={CONAF.incendios} target="_blank" rel="noopener noreferrer">
          Información oficial de CONAF
        </a>
      </section>

      <NewsSection />

      <section className="section">
        <h2 className="section-title">Videos</h2>
        <MediaCarousel titulo="Aprende en pocos minutos" items={VIDEOS} />
      </section>

      <section className="section">
        <h2 className="section-title">PDF</h2>
        <MediaCarousel titulo="Guías para descargar" items={PDFS} />
      </section>

      <section className="section">
        <h2 className="section-title">Recomendaciones clave</h2>
        <div className="tips-grid">
          {RECOMENDACIONES.map((r) => (
            <article key={r.titulo} className="tip">
              <img src={r.imagen} alt="" loading="lazy" />
              <div>
                <h3>{r.titulo}</h3>
                <p>{r.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
