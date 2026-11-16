// ============================================================
// Contenido editable del sitio. Cambia aquí textos, enlaces e imágenes
// sin tocar los componentes.
//
// IMÁGENES: ahora son ilustraciones en public/img/*.svg.
// Para usar fotos reales, copia tus archivos (jpg/png/webp) a public/img/
// y cambia el nombre aquí, por ejemplo: img('mi-foto.jpg')
// ============================================================

// Ruta de una imagen dentro de public/img (funciona local y en GitHub Pages)
export const img = (nombre) =>
  `${import.meta.env.BASE_URL}img/${nombre.includes('.') ? nombre : nombre + '.svg'}`

// Enlaces base de CONAF. VERIFÍCALOS en tu navegador antes de publicar:
// si CONAF reorganiza su sitio, solo debes actualizarlos aquí.
export const CONAF = {
  inicio: 'https://www.conaf.cl',
  incendios: 'https://www.conaf.cl/incendios-forestales/',
  prensa: 'https://www.conaf.cl/sala-de-prensa/',
}

export const TELEFONOS = [
  { nombre: 'CONAF (incendios forestales)', numero: '130' },
  { nombre: 'Bomberos', numero: '132' },
]

// Dato central del estudio (Región Metropolitana).
export const DATO_CLAVE = {
  porcentaje: '99,3%',
  texto: 'de los incendios forestales tiene causa humana',
  nota: 'Dato del estudio de FuegoSeguro (Región Metropolitana). Contrástalo con las cifras oficiales de CONAF.',
}

// Diapositivas que se mueven en la portada
export const SLIDES = [
  {
    id: 's1',
    imagen: img('hero-fuego'),
    etiqueta: 'El problema',
    titulo: 'Casi todos los incendios los causamos las personas',
    texto: 'Conocer el riesgo es el primer paso para evitarlo en tu sector.',
    cta: { texto: 'Ver datos', a: '/datos' },
  },
  {
    id: 's2',
    imagen: img('hero-casa'),
    etiqueta: 'Tu terreno',
    titulo: 'Un perímetro despejado protege tu hogar',
    texto: 'Cortafuegos y distancia con la vegetación: medidas simples que marcan la diferencia.',
    cta: { texto: 'Crear recordatorios', a: '/perfil' },
  },
  {
    id: 's3',
    imagen: img('hero-ruta'),
    etiqueta: 'Actúa a tiempo',
    titulo: 'Reporta humo o fuego en segundos',
    texto: 'Tu aviso ayuda a las brigadas a llegar antes.',
    cta: { texto: 'Reportar', a: '/reporte' },
  },
]

// Noticias: fuentes oficiales. Para titulares en vivo, enlaza a la sala de prensa.
export const NOTICIAS = [
  {
    id: 'n1',
    titulo: 'Sala de prensa de CONAF',
    resumen: 'Comunicados y noticias oficiales de CONAF, incluida la temporada de incendios forestales.',
    fuente: 'CONAF',
    imagen: img('noticia-humo'),
    url: CONAF.prensa,
  },
  {
    id: 'n2',
    titulo: 'Incendios forestales: información oficial',
    resumen: 'Prevención, estadísticas y recomendaciones para la comunidad, directo desde CONAF.',
    fuente: 'CONAF',
    imagen: img('noticia-cortafuego'),
    url: CONAF.incendios,
  },
  {
    id: 'n3',
    titulo: 'Sitio oficial de CONAF',
    resumen: 'Portal institucional de la Corporación Nacional Forestal.',
    fuente: 'CONAF',
    imagen: img('noticia-mapa'),
    url: CONAF.inicio,
  },
]

export const CAPAS_MAPA = [
  { id: 'interfaz', etiqueta: 'Zonas de interfaz urbano-forestal', detalle: 'Sectores donde las viviendas colindan con vegetación: mayor riesgo.' },
  { id: 'cortafuegos', etiqueta: 'Cortafuegos', detalle: 'Franjas sin vegetación que frenan el avance del fuego.' },
  { id: 'agua', etiqueta: 'Puntos de agua', detalle: 'Fuentes de agua útiles para brigadas y vecinos.' },
]

// Reemplaza "url" por los PDF y videos reales (idealmente de CONAF).
export const PDFS = [
  { id: 'p1', tipo: 'pdf', titulo: 'Guía de prevención para tu predio', descripcion: 'Medidas básicas de cortafuegos y manejo de vegetación.', imagen: img('pdf-1'), url: CONAF.incendios },
  { id: 'p2', tipo: 'pdf', titulo: 'Qué hacer en una emergencia', descripcion: 'Pasos de evacuación y contactos clave.', imagen: img('pdf-2'), url: CONAF.incendios },
  { id: 'p3', tipo: 'pdf', titulo: 'Preparación de la vivienda', descripcion: 'Techos, canaletas y distancias seguras.', imagen: img('pdf-3'), url: CONAF.incendios },
]

export const VIDEOS = [
  { id: 'v1', tipo: 'video', titulo: 'Cómo hacer un cortafuego', descripcion: 'Explicación paso a paso.', imagen: img('video-1'), url: CONAF.incendios },
  { id: 'v2', tipo: 'video', titulo: 'Quemas: riesgos y normas', descripcion: 'Por qué las quemas descontroladas son peligrosas.', imagen: img('video-2'), url: CONAF.incendios },
  { id: 'v3', tipo: 'video', titulo: 'Plan familiar de evacuación', descripcion: 'Prepara a tu familia antes de la temporada.', imagen: img('video-3'), url: CONAF.incendios },
]

// Checklist del perfil: cada medida se repite según su frecuencia.
export const MEDIDAS = [
  { id: 'cortafuegos', titulo: 'Mantener cortafuegos', descripcion: 'Despeja y revisa la franja cortafuego alrededor de tu predio.', frecuenciaDias: 30, imagen: img('check-cortafuegos') },
  { id: 'distancia', titulo: 'Distancia con la vegetación', descripcion: 'Poda y separa la vegetación de tu vivienda y deja un perímetro limpio.', frecuenciaDias: 30, imagen: img('check-distancia') },
  { id: 'canaletas', titulo: 'Limpiar techos y canaletas', descripcion: 'Retira hojas secas y material combustible acumulado.', frecuenciaDias: 15, imagen: img('check-canaletas') },
  { id: 'pasto', titulo: 'Cortar pasto seco', descripcion: 'Mantén el pasto bajo y sin material seco cerca de la casa.', frecuenciaDias: 15, imagen: img('check-pasto') },
  { id: 'lena', titulo: 'Ordenar leña y combustibles', descripcion: 'Guárdalos lejos de la vivienda y de la vegetación.', frecuenciaDias: 60, imagen: img('check-lena') },
  { id: 'plan', titulo: 'Revisar plan de evacuación', descripcion: 'Repasa rutas, contactos y mochila de emergencia con tu familia.', frecuenciaDias: 90, imagen: img('check-plan') },
]

export const RECOMENDACIONES = [
  { titulo: 'No hagas quemas', texto: 'Evita quemar pastizales o residuos. La mayoría de los incendios nace de actividades humanas.', imagen: img('hero-fuego') },
  { titulo: 'Crea un perímetro seguro', texto: 'Mantén una franja despejada entre la vegetación y tu vivienda.', imagen: img('check-distancia') },
  { titulo: 'Cuida tus herramientas', texto: 'Chispas de maquinaria, fogatas y colillas pueden iniciar un incendio.', imagen: img('check-pasto') },
  { titulo: 'Avisa a tiempo', texto: 'Si ves humo o fuego, llama de inmediato a CONAF (130) o Bomberos (132).', imagen: img('hero-ruta') },
]
