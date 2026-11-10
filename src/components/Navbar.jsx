import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#home">
          🔥 Fuego Seguro
        </a>
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon filter-dark"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li className="nav-item">
              <a className="nav-link" href="#info">Datos / Información</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reporte">Reporte</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#perfil">Perfil</a>
            </li>
            <li className="nav-item ms-lg-2">
              <a className="btn btn-outline-danger btn-sm px-3" href="#faq">
                Preguntas Frecuentes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar