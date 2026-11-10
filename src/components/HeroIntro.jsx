import React from 'react'

const HeroIntro = () => {
  return (
    <div className="hero-section mb-5">
      <div className="row align-items-center">
        <div className="col-lg-8">
          <span className="badge bg-white text-danger mb-3 px-3 py-2 rounded-pill fw-bold shadow-sm">
            Plataforma Oficial de Prevención
          </span>
          <h1 className="display-5 fw-bold mb-3 text-white">
            Prevención y Monitoreo de Incendios Forestales
          </h1>
          <p className="lead text-light mb-4 opacity-75">
            Protegemos nuestros bosques mediante tecnología de ubicación en tiempo real, educación oficial y reportes ciudadanos eficientes.
          </p>
          <div className="d-flex gap-3">
            <a href="#reporte" className="btn btn-light text-danger fw-bold px-4 py-2">
              Reportar Incendio
            </a>
            <a href="#info" className="btn btn-outline-light px-4 py-2">
              Ver Guías y Recursos
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroIntro