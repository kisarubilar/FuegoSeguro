import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export function Logo({ claro = false }) {
  return (
    <Link to="/" className={`logo ${claro ? 'claro' : ''}`} aria-label="FuegoSeguro, ir al inicio">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M12 2c1 4-3 6-3 10a4 4 0 0 0 8 0c0-2-1-3-1-5 3 2 5 5 5 8a9 9 0 0 1-18 0c0-6 5-8 9-13z" fill="currentColor" />
        </svg>
      </span>
      <span className="logo-text">Fuego<b>Seguro</b></span>
    </Link>
  )
}

// Boceto: logo a la izquierda y barra de categorías a la derecha.
export default function Navbar() {
  const [abierto, setAbierto] = useState(false)
  const { usuario } = useAuth()
  const cerrar = () => setAbierto(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Logo />
        <button className="nav-toggle" aria-label="Abrir menú" aria-expanded={abierto} onClick={() => setAbierto((v) => !v)}>
          <span /><span /><span />
        </button>
        <nav className={`nav-links ${abierto ? 'open' : ''}`}>
          <NavLink to="/" end onClick={cerrar}>Inicio</NavLink>
          <NavLink to="/datos" onClick={cerrar}>Datos</NavLink>
          <NavLink to="/reporte" onClick={cerrar}>Reportar</NavLink>
          <NavLink to="/perfil" onClick={cerrar}>{usuario ? 'Mi perfil' : 'Iniciar sesión'}</NavLink>
        </nav>
      </div>
    </header>
  )
}
