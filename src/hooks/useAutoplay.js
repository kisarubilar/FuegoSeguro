import { useEffect, useRef } from 'react'

// Ejecuta `fn` cada `ms` milisegundos mientras `activo` sea true.
// Respeta a quienes prefieren menos movimiento.
export default function useAutoplay(fn, ms, activo = true) {
  const guardada = useRef(fn)
  guardada.current = fn

  useEffect(() => {
    if (!activo) return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => guardada.current(), ms)
    return () => clearInterval(id)
  }, [ms, activo])
}
