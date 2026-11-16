import { useState, useCallback } from 'react'
import { leer, guardar } from '../services/storage.js'

const CLAVE = 'fs_guardados'

// Lista de PDFs y videos guardados por la persona (se ve en su Perfil).
export default function useGuardados() {
  const [lista, setLista] = useState(() => leer(CLAVE, []))

  const alternar = useCallback((item) => {
    setLista((actual) => {
      const nueva = actual.some((g) => g.id === item.id)
        ? actual.filter((g) => g.id !== item.id)
        : [...actual, { id: item.id, tipo: item.tipo, titulo: item.titulo, descripcion: item.descripcion, imagen: item.imagen, url: item.url }]
      guardar(CLAVE, nueva)
      return nueva
    })
  }, [])

  const estaGuardado = (id) => lista.some((g) => g.id === id)
  return { lista, alternar, estaGuardado }
}
