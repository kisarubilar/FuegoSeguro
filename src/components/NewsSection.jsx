import React from 'react'

const NewsSection = () => {
  return (
    <section className="my-5 p-4 bg-white rounded shadow-sm">
      <h2 className="h4 border-bottom pb-2 mb-4 text-danger fw-bold">
        Noticias y Actualidad
      </h2>
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card border-0 h-100">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80" 
              className="card-img-top rounded mb-3" 
              alt="Noticia Principal" 
              style={{ maxHeight: '350px', objectFit: 'cover' }}
            />
            <div className="card-body px-0">
              <span className="badge bg-danger mb-2">Alerta Reciente</span>
              <h3 className="card-title h5 fw-bold">
                Medidas preventivas ante altas temperaturas en la Región Metropolitana
              </h3>
              <p className="card-text text-muted">
                Autoridades entregan recomendaciones clave para evitar focos de fuego durante la temporada de calor.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <h3 className="h6 text-muted fw-bold mb-3">Últimas Noticias</h3>
          <div className="d-flex flex-column gap-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="d-flex align-items-center gap-3 p-2 rounded border">
                <img 
                  src="https://images.unsplash.com/photo-1511497584788-876761c11969?auto=format&fit=crop&w=100&q=80" 
                  alt="Thumbnail" 
                  className="rounded" 
                  style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                />
                <div>
                  <h4 className="h6 mb-1 text-dark" style={{ fontSize: '0.85rem' }}>
                    Recomendaciones de prevención #{item}
                  </h4>
                  <small className="text-muted">Hace 2 horas</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection