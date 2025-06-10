import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const FloatingElementsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
`

const FloatingElement = styled(motion.div)`
  position: absolute;
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  text-shadow: 0 0 20px currentColor;
  pointer-events: none;
  user-select: none;
`

const ScreenShake = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10000;
  background: rgba(255, 107, 107, 0.1);
  mix-blend-mode: overlay;
`

const ChaosEffects = ({ chaosMode }) => {
  const [floatingElements, setFloatingElements] = useState([])
  const [screenShake, setScreenShake] = useState(false)

  useEffect(() => {
    const emojis = ['⚡', '🌪️', '💥', '🔥', '⭐', '💫', '🌈', '🎆', '🎨', '🎭']
    const phrases = ['CHAOS!', 'WILD!', 'UNLEASHED!', 'BOOM!', 'MAGIC!']
    if (chaosMode) {
      const interval = setInterval(() => {
        const newElement = {
          id: Date.now() + Math.random(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          content: Math.random() > 0.5 ? 
            emojis[Math.floor(Math.random() * emojis.length)] :
            phrases[Math.floor(Math.random() * phrases.length)],
          size: Math.random() * 40 + 20,
          color: `hsl(${Math.random() * 360}, 70%, 50%)`
        }
        
        setFloatingElements(prev => [...prev, newElement])
        
        setTimeout(() => {
          setFloatingElements(prev => prev.filter(el => el.id !== newElement.id))
        }, 3000)
      }, 500)

      return () => clearInterval(interval)
    }
  }, [chaosMode])

  useEffect(() => {
    if (chaosMode) {
      const shakeInterval = setInterval(() => {
        setScreenShake(true)
        setTimeout(() => setScreenShake(false), 200)
      }, 3000)

      return () => clearInterval(shakeInterval)
    }
  }, [chaosMode])

  return (
    <>
      <FloatingElementsContainer>
        {floatingElements.map(element => (
          <FloatingElement
            key={element.id}
            size={element.size}
            color={element.color}
            initial={{ 
              x: element.x, 
              y: element.y, 
              opacity: 0, 
              scale: 0 
            }}
            animate={{ 
              y: element.y - 200,
              opacity: [0, 1, 1, 0],
              scale: [0, 1.2, 1, 0.8],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 3,
              ease: "easeOut"
            }}
          >
            {element.content}
          </FloatingElement>
        ))}
      </FloatingElementsContainer>

      {screenShake && (
        <ScreenShake
          animate={{
            x: [0, -5, 5, -5, 5, 0],
            y: [0, -5, 5, -5, 5, 0]
          }}
          transition={{ duration: 0.2 }}
        />
      )}
    </>
  )
}

export default ChaosEffects
