const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ruta de prueba del backend
app.api = app.get('/api/status', (req, res) => {
  res.json({ message: 'Backend de Fuego Seguro funcionando correctamente 🚀' });
});

// Ruta temporal para recibir reportes en el futuro
app.post('/api/reportes', (req, res) => {
  const nuevoReporte = req.body;
  console.log('Reporte recibido en el backend:', nuevoReporte);
  res.status(201).json({ success: true, message: 'Reporte registrado con éxito en el servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});