# 🔥 FuegoSeguro

**Prevención de incendios forestales en Chile**, con foco en la Región Metropolitana.

🌐 **Ver el sitio en vivo:** [https://kisarubilar.github.io/FuegoSeguro/](https://kisarubilar.github.io/FuegoSeguro/)

---

## Sobre el proyecto

En los estudios realizados para la Región Metropolitana, **el 99,3 % de los incendios forestales tiene causa humana**. Eso significa que la mayoría se puede prevenir con información y hábitos simples.

FuegoSeguro es una plataforma web pensada para **las personas que viven en zonas forestales** y cuidan su terreno. Entrega información de forma visual, accesible y versátil, respaldada por fuentes oficiales como [CONAF](https://www.conaf.cl/incendios-forestales/), y ayuda a mantener al día las medidas de prevención.

### Objetivos
- Informar de manera clara y visual sobre la prevención de incendios forestales.
- Dirigir a las personas a información y noticias oficiales de CONAF.
- Permitir **registrarse y tener recordatorios** de medidas como cortafuegos, distancia segura con la vegetación, limpieza de techos y canaletas, entre otras.
- Facilitar el **reporte** de humo o fuego con foto, descripción y ubicación.

## Secciones

| Sección | Qué incluye |
|---|---|
| **Inicio** | Portada con imágenes en movimiento, últimas noticias, mapa, información (PDF y videos) y acceso a reportar |
| **Datos** | Dato clave del estudio, noticias, videos, guías en PDF y recomendaciones, con enlaces oficiales de CONAF |
| **Reportar** | Formulario "Nuevo incendio" con imagen, descripción y ubicación en mapa |
| **Perfil** | Inicio de sesión, mapa de ubicación, checklist de medidas con imágenes, notificaciones y contenidos guardados |

## Tecnologías

- [React 18](https://react.dev) + [Vite](https://vitejs.dev)
- React Router (rutas con `HashRouter`, compatible con GitHub Pages)
- CSS propio, sin librerías de estilos
- Mapas de [OpenStreetMap](https://www.openstreetmap.org)
- Backend opcional en Node.js + Express (carpeta `backend/`)
- Despliegue automático con GitHub Actions

## Estructura

```
FuegoSeguro/
├── backend/            API opcional (Express)
├── public/img/         Imágenes e ilustraciones
├── src/
│   ├── components/     Navbar, HeroIntro, NewsSection, MapSection, ...
│   ├── pages/          Home, Datos, Reporte, Perfil
│   ├── context/        Sesión de usuario
│   ├── hooks/          Autoplay y guardados
│   ├── services/       Almacenamiento local
│   ├── data/           Textos, enlaces e imágenes editables
│   ├── App.jsx
│   └── App.css
├── .github/workflows/  Despliegue a GitHub Pages
└── index.html
```

## Ejecutar en tu computador

Requiere [Node.js](https://nodejs.org) 18 o superior.

```bash
git clone https://github.com/kisarubilar/FuegoSeguro.git
cd FuegoSeguro
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Publicación

El sitio se publica solo en GitHub Pages cada vez que se sube un cambio a la rama `main`.

## Personalizar el contenido

Textos, enlaces de CONAF, noticias, PDF, videos, medidas del checklist e imágenes se editan en `src/data/recursos.js`. Para usar fotos reales, cópialas a `public/img/` y cámbialas allí (por ejemplo `img('mi-foto.jpg')`).

## Estado y limitaciones

Esta es una versión de demostración:
- Cuentas, reportes, checklist y guardados se almacenan **solo en el navegador** de cada persona; no se envían a ningún servidor.
- Las noticias, PDF y videos enlazan a fuentes oficiales; se deben revisar y reemplazar por los enlaces exactos.
- El backend de `backend/` es un punto de partida para guardar reportes de forma centralizada.

## En una emergencia

📞 **130** CONAF (incendios forestales) · **132** Bomberos
