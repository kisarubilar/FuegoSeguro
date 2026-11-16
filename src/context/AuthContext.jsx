import { createContext, useContext, useState, useCallback } from 'react'
import { leer, guardar, nuevoId, hashTexto } from '../services/storage.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => leer('fs_sesion', null))

  const registrar = useCallback(async ({ nombre, email, comuna, password }) => {
    const usuarios = leer('fs_usuarios', [])
    const correo = email.trim().toLowerCase()
    if (usuarios.some((u) => u.email === correo)) {
      throw new Error('Ya existe una cuenta con ese correo.')
    }
    const nuevo = {
      id: nuevoId(),
      nombre: nombre.trim(),
      email: correo,
      comuna: comuna.trim(),
      hash: await hashTexto(password),
    }
    guardar('fs_usuarios', [...usuarios, nuevo])
    const sesion = { id: nuevo.id, nombre: nuevo.nombre, email: nuevo.email, comuna: nuevo.comuna }
    guardar('fs_sesion', sesion)
    setUsuario(sesion)
  }, [])

  const iniciarSesion = useCallback(async ({ email, password }) => {
    const usuarios = leer('fs_usuarios', [])
    const correo = email.trim().toLowerCase()
    const hash = await hashTexto(password)
    const encontrado = usuarios.find((u) => u.email === correo && u.hash === hash)
    if (!encontrado) throw new Error('Correo o contraseña incorrectos.')
    const sesion = {
      id: encontrado.id,
      nombre: encontrado.nombre,
      email: encontrado.email,
      comuna: encontrado.comuna,
    }
    guardar('fs_sesion', sesion)
    setUsuario(sesion)
  }, [])

  const cerrarSesion = useCallback(() => {
    localStorage.removeItem('fs_sesion')
    setUsuario(null)
  }, [])

  return (
    <AuthContext.Provider value={{ usuario, registrar, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return ctx
}
