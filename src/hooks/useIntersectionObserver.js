import { useState, useEffect, useRef, useCallback, useMemo } from 'react'

const useIntersectionObserver = (options = {}) => {
  const [isInView, setIsInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)
  const elementRef = useRef(null)
  const observerRef = useRef(null)

  const defaultOptions = useMemo(() => ({
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: false,
    ...options
  }), [options])

  const observe = useCallback(() => {
    if (elementRef.current && !observerRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          const inView = entry.isIntersecting
          setIsInView(inView)
          
          if (inView && !hasBeenInView) {
            setHasBeenInView(true)
          }
          
          // Auto-disconnect bei triggerOnce
          if (inView && defaultOptions.triggerOnce) {
            observerRef.current?.disconnect()
          }
        },
        defaultOptions
      )
      
      observerRef.current.observe(elementRef.current)
    }
  }, [defaultOptions, hasBeenInView])

  useEffect(() => {
    observe()
    
    return () => {
      observerRef.current?.disconnect()
      observerRef.current = null
    }
  }, [observe])

  return [elementRef, isInView, hasBeenInView]
}

export default useIntersectionObserver
