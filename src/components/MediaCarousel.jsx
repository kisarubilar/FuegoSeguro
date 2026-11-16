import { useRef, useState } from 'react'
import useAutoplay from '../hooks/useAutoplay.js'
import useGuardados from '../hooks/useGuardados.js'

// Carrusel horizontal de tarjetas con imagen (videos o PDF).
// `compacto` muestra 1 tarjeta a la vez (para columnas angostas); si no, hasta 3.
export default function MediaCarousel({ titulo, items, compacto = false }) {
  const pista = useRef(null)
  const [pausa, setPausa] = useState(false)
  const { alternar, estaGuardado } = useGuardados()

  const mover = (dir) => {
    const el = pista.current
    if (!el) return
    const paso = el.firstElementChild ? el.firstElementChild.getBoundingClientRect().width + 20 : 300
    const fin = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
    if (dir > 0 && fin) el.scrollTo({ left: 0, behavior: 'smooth' })
    else if (dir < 0 && el.scrollLeft <= 4) el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' })
    else el.scrollBy({ left: dir * paso, behavior: 'smooth' })
  }

  useAutoplay(() => mover(1), 4500, !pausa)

  return (
    <div
      className={`media ${compacto ? 'compacto' : ''}`}
      onMouseEnter={() => setPausa(true)}
      onMouseLeave={() => setPausa(false)}
      onFocus={() => setPausa(true)}
      onBlur={() => setPausa(false)}
    >
      <div className="media-head">
        <h3>{titulo}</h3>
        <div className="media-arrows">
          <button className="round-btn" onClick={() => mover(-1)} aria-label={`${titulo}: anterior`}>‹</button>
          <button className="round-btn" onClick={() => mover(1)} aria-label={`${titulo}: siguiente`}>›</button>
        </div>
      </div>

      <div className="media-track" ref={pista}>
        {items.map((it) => (
          <article key={it.id} className="media-card">
            <a href={it.url} target="_blank" rel="noopener noreferrer" className="media-thumb">
              <img src={it.imagen} alt="" loading="lazy" />
              <span className="media-kind">{it.tipo === 'video' ? 'Video' : 'PDF'}</span>
            </a>
            <div className="media-body">
              <strong>{it.titulo}</strong>
              <p>{it.descripcion}</p>
              <button
                className={`save-btn ${estaGuardado(it.id) ? 'on' : ''}`}
                onClick={() => alternar(it)}
                aria-pressed={estaGuardado(it.id)}
              >
                {estaGuardado(it.id) ? '★ Guardado' : '☆ Guardar'}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
