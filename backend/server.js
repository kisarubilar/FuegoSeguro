// Backend OPCIONAL de FuegoSeguro (Express).
// GitHub Pages solo sirve archivos estáticos, así que este servidor NO corre allí:
// para usarlo, despliégalo aparte (Render, Railway, Fly.io, etc.) o ejecútalo en tu PC.
//
//   cd backend && npm install && npm start   →  http://localhost:4000/api/health

import express from 'express'
import cors from 'cors'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { randomUUID } from 'node:crypto'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.join(__dirname, 'data')
const ARCHIVO = path.join(DATA_DIR, 'reportes.json')
const PORT = process.env.PORT || 4000

// Orígenes permitidos (frontend local y GitHub Pages). Cambia TU-USUARIO.
const ORIGENES = [
  'http://localhost:5173',
  'https://TU-USUARIO.github.io',
]

fs.mkdirSync(DATA_DIR, { recursive: true })
if (!fs.existsSync(ARCHIVO)) fs.writeFileSync(ARCHIVO, '[]')

const leerReportes = () => JSON.parse(fs.readFileSync(ARCHIVO, 'utf8'))
const guardarReportes = (lista) => fs.writeFileSync(ARCHIVO, JSON.stringify(lista, null, 2))

const app = express()
app.use(cors({ origin: ORIGENES }))
app.use(express.json({ limit: '100kb' }))

app.get('/api/health', (_req, res) => res.json({ ok: true, servicio: 'FuegoSeguro' }))

app.get('/api/reportes', (_req, res) => res.json(leerReportes()))

app.post('/api/reportes', (req, res) => {
  const { tipo, comuna, descripcion, ubicacion } = req.body ?? {}
  if (!tipo || !comuna || !descripcion) {
    return res.status(400).json({ error: 'Faltan campos: tipo, comuna y descripcion son obligatorios.' })
  }
  const nuevo = {
    id: randomUUID(),
    fecha: new Date().toISOString(),
    tipo: String(tipo).slice(0, 60),
    comuna: String(comuna).slice(0, 80),
    descripcion: String(descripcion).slice(0, 1000),
    ubicacion: String(ubicacion ?? '').slice(0, 80),
  }
  guardarReportes([nuevo, ...leerReportes()])
  res.status(201).json(nuevo)
})

app.listen(PORT, () => console.log(`API FuegoSeguro en http://localhost:${PORT}`))
