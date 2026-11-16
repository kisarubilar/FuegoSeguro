import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANTE: si tu repositorio en GitHub se llama distinto a "FuegoSeguro",
// cambia el valor de base por '/NOMBRE-DE-TU-REPO/'.
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/FuegoSeguro/' : '/',
})
