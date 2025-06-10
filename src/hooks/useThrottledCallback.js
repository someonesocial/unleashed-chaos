import { useRef, useCallback } from 'react'

const useThrottledCallback = (callback, delay) => {
  const lastCallTime = useRef(0)
  const timeoutRef = useRef(null)

  return useCallback((...args) => {
    const now = Date.now()
    const timeSinceLastCall = now - lastCallTime.current

    if (timeSinceLastCall >= delay) {
      lastCallTime.current = now
      callback(...args)
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      timeoutRef.current = setTimeout(() => {
        lastCallTime.current = Date.now()
        callback(...args)
      }, delay - timeSinceLastCall)
    }
  }, [callback, delay])
}

export default useThrottledCallback
