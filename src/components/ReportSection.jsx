import React from 'react'

const ReportSection = () => {
  return (
    <section id="reporte" className="my-5 p-4 bg-white rounded shadow-sm border border-danger">
      <h2 className="h4 border-bottom pb-2 mb-4 text-danger fw-bold">
        Reporte Ciudadano
      </h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label fw-bold">Nivel de Incendio / Riesgo</label>
              <input type="range" className="form-range" min="1" max="5" id="fireLevel" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Título del Reporte</label>
              <input type="text" className="form-control" placeholder="Ej: Humo visible en quebrada" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Descripción del Evento</label>
              <textarea className="form-control" rows="3" placeholder="Detalla lo que observas..."></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Adjuntar Evidencia (Foto / Video)</label>
              <input className="form-control" type="file" accept="image/*,video/*" />
            </div>
          </div>

          <div className="col-lg-6">
            <label className="form-label fw-bold">Ubicación del Incendio</label>
            <div 
              className="bg-secondary rounded d-flex justify-content-center align-items-center text-white mb-3" 
              style={{ height: '220px' }}
            >
              <small>[ Haz clic en el mapa para marcar la ubicación ]</small>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button type="submit" className="btn btn-danger btn-lg px-5 fw-bold">
            Enviar Reporte a Autoridades
          </button>
        </div>
      </form>
    </section>
  )
}

export default ReportSection