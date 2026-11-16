import { Link } from 'react-router-dom'
import { TELEFONOS, img } from '../data/recursos.js'

export default function ReportSection() {
  return (
    <section className="section" id="reporte">
      <div className="report-banner">
        <img src={img('hero-fuego')} alt="" className="report-bg" loading="lazy" />
        <div className="report-shade" />
        <div className="report-text">
          <h2>Reporta humo o fuego</h2>
          <p>
            Si ves una columna de humo, un foco de fuego o una conducta de riesgo, avisa.
            Tu reporte ayuda a actuar a tiempo.
          </p>
          <ul className="phones">
            {TELEFONOS.map((t) => (
              <li key={t.numero}>
                <a href={`tel:${t.numero}`}><strong>{t.numero}</strong> {t.nombre}</a>
              </li>
            ))}
          </ul>
          <Link to="/reporte" className="btn btn-light">Hacer un reporte</Link>
        </div>
      </div>
    </section>
  )
}
