import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SLIDES, DATO_CLAVE } from '../data/recursos.js'
import useAutoplay from '../hooks/useAutoplay.js'

// Portada con imágenes que se mueven: una tras otra, con zoom suave.
export default function HeroIntro() {
  const [i, setI] = useState(0)
  const [pausa, setPausa] = useState(false)
  const siguiente = () => setI((v) => (v + 1) % SLIDES.length)
  const anterior = () => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length)

  useAutoplay(siguiente, 6000, !pausa)

  return (
    <section
      className="hero"
      onMouseEnter={() => setPausa(true)}
      onMouseLeave={() => setPausa(false)}
      aria-roledescription="carrusel"
      aria-label="Portada"
    >
      {SLIDES.map((s, idx) => (
        <div key={s.id} className={`hero-slide ${idx === i ? 'on' : ''}`} aria-hidden={idx !== i}>
          <img src={s.imagen} alt="" className="hero-img" />
          <div className="hero-shade" />
          <div className="hero-copy">
            <span className="chip">{s.etiqueta}</span>
            <h1>{s.titulo}</h1>
            <p>{s.texto}</p>
            <Link to={s.cta.a} className="btn btn-light" tabIndex={idx === i ? 0 : -1}>{s.cta.texto}</Link>
          </div>
        </div>
      ))}

      <aside className="hero-stat">
        <strong>{DATO_CLAVE.porcentaje}</strong>
        <span>{DATO_CLAVE.texto}</span>
      </aside>

      <div className="hero-controls">
        <button className="round-btn on-dark" onClick={anterior} aria-label="Anterior">‹</button>
        <div className="dots">
          {SLIDES.map((s, idx) => (
            <button key={s.id} className={`dot ${idx === i ? 'on' : ''}`} onClick={() => setI(idx)} aria-label={`Ir a la diapositiva ${idx + 1}`} />
          ))}
        </div>
        <button className="round-btn on-dark" onClick={siguiente} aria-label="Siguiente">›</button>
      </div>
    </section>
  )
}
