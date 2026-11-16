# FuegoSeguro 🔥

Sitio web de prevención de incendios forestales en Chile (Región Metropolitana).
React + Vite, con backend opcional en Express.

## Páginas
- **Inicio**: intro, noticias, mapa, información (PDF / videos), reporte.
- **Datos**: dato clave, recomendaciones y enlaces oficiales de CONAF.
- **Reporte**: formulario de reportes (se guardan en el navegador).
- **Perfil / Iniciar sesión**: cuenta y recordatorios (cortafuegos, distancia con la vegetación, etc.).

## Probar en tu computador
```bash
npm install
npm run dev        # abre http://localhost:5173
```

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub llamado `FuegoSeguro` (si usas otro nombre, cambia `base` en `vite.config.js`).
2. En la carpeta del proyecto:
   ```bash
   git init
   git add .
   git commit -m "Primera versión de FuegoSeguro"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/FuegoSeguro.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Espera a que termine la pestaña **Actions**. Tu sitio quedará en
   `https://TU-USUARIO.github.io/FuegoSeguro/`.

## Imágenes
Las imágenes son ilustraciones en `public/img/`. Para usar fotos reales (jpg/png/webp), cópialas ahí y cambia el nombre en `src/data/recursos.js` (por ejemplo `img('mi-foto.jpg')`).

## Contenido editable
Todos los textos y enlaces (CONAF, noticias, PDFs, videos, medidas) están en `src/data/recursos.js`.
Verifica y reemplaza los enlaces por las páginas exactas de CONAF.

## Backend (opcional)
```bash
cd backend && npm install && npm start
```
GitHub Pages no ejecuta servidores; si lo quieres en línea, despliégalo en Render, Railway u otro.
