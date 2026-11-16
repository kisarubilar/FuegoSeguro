// Capa de almacenamiento simple sobre localStorage.
// Es lo que permite que la web funcione "en vivo" en GitHub Pages (sin servidor).
// Cuando uses el backend (carpeta /backend), solo tendrás que reemplazar estas funciones por fetch().

export function leer(clave, porDefecto) {
  try {
    const crudo = localStorage.getItem(clave)
    return crudo ? JSON.parse(crudo) : porDefecto
  } catch {
    return porDefecto
  }
}

export function guardar(clave, valor) {
  try {
    localStorage.setItem(clave, JSON.stringify(valor))
  } catch {
    // almacenamiento lleno o bloqueado: se ignora
  }
}

export function nuevoId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

// Hash SHA-256 para no guardar la contraseña en texto plano.
// OJO: es una protección de DEMOSTRACIÓN; la autenticación real debe hacerse en el backend.
export async function hashTexto(texto) {
  const datos = new TextEncoder().encode(texto)
  const buf = await crypto.subtle.digest('SHA-256', datos)
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}
