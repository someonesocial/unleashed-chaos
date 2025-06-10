import { useEffect, useMemo } from 'react'

const useWindowEvent = (event, handler, options = {}) => {
  const eventOptions = useMemo(() => ({
    passive: true,
    ...options
  }), [options])

  useEffect(() => {
    if (!handler) return

    window.addEventListener(event, handler, eventOptions)
    
    return () => {
      window.removeEventListener(event, handler, eventOptions)
    }
  }, [event, handler, eventOptions])
}

export default useWindowEvent
