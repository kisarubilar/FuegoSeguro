import { Link } from 'react-router-dom'
import { Logo } from './Navbar.jsx'
import { CONAF, TELEFONOS } from '../data/recursos.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Logo claro />
          <p className="footer-note">
            Prevención de incendios forestales en Chile, con foco en la Región Metropolitana.
          </p>
        </div>
        <nav className="footer-links" aria-label="Pie de página">
          <Link to="/">Inicio</Link>
          <Link to="/datos">Datos</Link>
          <Link to="/reporte">Reportar</Link>
          <Link to="/perfil">Perfil</Link>
          <a href={CONAF.incendios} target="_blank" rel="noopener noreferrer">CONAF</a>
        </nav>
        <ul className="footer-phones">
          {TELEFONOS.map((t) => (
            <li key={t.numero}><a href={`tel:${t.numero}`}><strong>{t.numero}</strong> {t.nombre}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
