import React, { useState } from 'react'

const ResourcesSection = () => {
  const [tab, setTab] = useState('pdf')

  return (
    <section id="info" className="my-5 p-4 bg-white rounded shadow-sm">
      <h2 className="h4 border-bottom pb-2 mb-4 text-danger fw-bold">
        Material de Educación y Prevención (CONAF)
      </h2>

      <div className="d-flex gap-2 mb-4">
        <button 
          className={`btn ${tab === 'pdf' ? 'btn-danger' : 'btn-outline-danger'}`}
          onClick={() => setTab('pdf')}
        >
          📄 Guías y PDFs
        </button>
        <button 
          className={`btn ${tab === 'video' ? 'btn-danger' : 'btn-outline-danger'}`}
          onClick={() => setTab('video')}
        >
          🎥 Videos Informativos
        </button>
      </div>

      <div className="row g-3">
        {tab === 'pdf' ? (
          <>
            <div className="col-md-6">
              <div className="p-3 border rounded bg-light d-flex justify-content-between align-items-center">
                <div>
                  <span className="badge bg-secondary mb-1">CONAF</span>
                  <h3 className="h6 m-0 fw-bold">¿Cómo construir un cortafuegos eficaz?</h3>
                </div>
                <button className="btn btn-sm btn-outline-dark">Descargar</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 border rounded bg-light d-flex justify-content-between align-items-center">
                <div>
                  <span className="badge bg-secondary mb-1">Prevención</span>
                  <h3 className="h6 m-0 fw-bold">Vegetación menos inflamable</h3>
                </div>
                <button className="btn btn-sm btn-outline-dark">Descargar</button>
              </div>
            </div>
          </>
        ) : (
          <div className="col-md-6">
            <div className="p-3 border rounded bg-light d-flex justify-content-between align-items-center">
              <div>
                <span className="badge bg-danger mb-1">3:45 min</span>
                <h3 className="h6 m-0 fw-bold">Desmalezado preventivo en el hogar</h3>
              </div>
              <button className="btn btn-sm btn-danger">Ver Video</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ResourcesSection