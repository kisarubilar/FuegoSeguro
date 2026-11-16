import { useState } from 'react'
import { NOTICIAS, CONAF } from '../data/recursos.js'
import useAutoplay from '../hooks/useAutoplay.js'

// Boceto: lista "Últimas noticias" a la izquierda y noticia grande con imagen a la derecha.
export default function NewsSection() {
  const [i, setI] = useState(0)
  const [pausa, setPausa] = useState(false)
  useAutoplay(() => setI((v) => (v + 1) % NOTICIAS.length), 5500, !pausa)
  const actual = NOTICIAS[i]

  return (
    <section className="section" id="noticias">
      <h2 className="section-title">Últimas noticias</h2>
      <div className="news-grid" onMouseEnter={() => setPausa(true)} onMouseLeave={() => setPausa(false)}>
        <ul className="news-list">
          {NOTICIAS.map((n, idx) => (
            <li key={n.id}>
              <button className={`news-item ${idx === i ? 'on' : ''}`} onClick={() => setI(idx)}>
                <img src={n.imagen} alt="" loading="lazy" />
                <span>
                  <strong>{n.titulo}</strong>
                  <small>{n.fuente}</small>
                </span>
              </button>
            </li>
          ))}
          <li>
            <a className="link-more" href={CONAF.prensa} target="_blank" rel="noopener noreferrer">
              Ver todas las noticias →
            </a>
          </li>
        </ul>

        <article className="news-feature">
          {NOTICIAS.map((n, idx) => (
            <img key={n.id} src={n.imagen} alt="" className={idx === i ? 'on' : ''} />
          ))}
          <div className="news-feature-text">
            <span className="chip">{actual.fuente}</span>
            <h3>{actual.titulo}</h3>
            <p>{actual.resumen}</p>
            <a className="btn btn-light" href={actual.url} target="_blank" rel="noopener noreferrer">
              Leer en CONAF
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
