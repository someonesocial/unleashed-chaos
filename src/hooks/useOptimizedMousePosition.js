import { useState, useEffect, useCallback, useRef } from 'react'

const useOptimizedMousePosition = (throttleMs = 16) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const lastTimeRef = useRef(0)
  const animationFrameRef = useRef(null)

  const updatePosition = useCallback((e) => {
    const now = Date.now()
    
    if (now - lastTimeRef.current >= throttleMs) {
      setPosition({ x: e.clientX, y: e.clientY })
      lastTimeRef.current = now
    } else {
      // Verwende requestAnimationFrame für smooth updates
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
        lastTimeRef.current = Date.now()
      })
    }
  }, [throttleMs])

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', updatePosition)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [updatePosition])

  return position
}

export default useOptimizedMousePosition
