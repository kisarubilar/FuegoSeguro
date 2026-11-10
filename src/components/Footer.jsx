import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-5 mt-5">
      <div className="container">
        <div className="row g-4 justify-content-between text-start">
          <div className="col-md-4">
            <h5 className="text-warning fw-bold mb-3">🔥 Fuego Seguro</h5>
            <p className="text-light small opacity-75">
              Sistema inteligente de prevención, visualización de riesgos y respuesta rápida ante incendios forestales.
            </p>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold text-warning mb-3">Accesos Directos</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><a href="#info" className="text-light text-decoration-none opacity-75">Datos e Información CONAF</a></li>
              <li><a href="#reporte" className="text-light text-decoration-none opacity-75">Generar un Reporte</a></li>
              <li><a href="#perfil" className="text-light text-decoration-none opacity-75">Mi Perfil</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold text-warning mb-3">Emergencias 24/7</h6>
            <ul className="list-unstyled small text-light d-flex flex-column gap-2">
              <li>CONAF: <strong className="text-danger bg-white px-2 py-1 rounded">130</strong></li>
              <li>Bomberos: <strong className="text-danger bg-white px-2 py-1 rounded">132</strong></li>
              <li>Carabineros: <strong className="text-danger bg-white px-2 py-1 rounded">133</strong></li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <p className="small text-light opacity-50 mb-0">&copy; 2026 Fuego Seguro — Desarrollado para la prevención institucional y comunitaria.</p>
      </div>
    </footer>
  )
}

export default Footer