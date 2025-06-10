import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import useOptimizedMousePosition from '../hooks/useOptimizedMousePosition'
import useWindowEvent from '../hooks/useWindowEvent'

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  /* Performance-Optimierung */
  will-change: transform;
  transform: translateZ(0);
`

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 900;
  text-align: center;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #feca57, #ff9ff3);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease infinite;
  margin-bottom: 2rem;
  filter: drop-shadow(0 0 30px rgba(255, 107, 107, 0.5));
  /* Performance-Optimierung */
  will-change: background-position;

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`

const Subtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: #fff;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: 3rem;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  opacity: 0.9;
`

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: ${props => props.rounded ? '50%' : '0'};
  filter: blur(1px);
  opacity: 0.6;
  /* Performance-Optimierung */
  will-change: transform;
  transform: translateZ(0);
`

const InteractiveButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  background: linear-gradient(45deg, #feca57, #ff9ff3, #4ecdc4);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(254, 202, 87, 0.3);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, #ff6b6b, #45b7d1, #feca57);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  span {
    position: relative;
    z-index: 1;
  }
`

const HeroSection = ({ onChaosToggle }) => {
  const [shapes, setShapes] = useState([])
  
  // Optimierter Mouse Position Hook
  const mousePosition = useOptimizedMousePosition(32) // Reduziert auf 30fps für Hero
  
  // Memoized Shape-Konfiguration
  const shapeConfig = useMemo(() => ({
    count: 8, // Reduziert von 15 für bessere Performance
    colors: [
      'rgba(255, 107, 107, 0.4)', // Reduzierte Opazität
      'rgba(78, 205, 196, 0.4)',
      'rgba(69, 183, 209, 0.4)',
      'rgba(254, 202, 87, 0.4)',
      'rgba(255, 159, 243, 0.4)'
    ]
  }), [])

  const generateShapes = useCallback(() => {
    const newShapes = []
    for (let i = 0; i < shapeConfig.count; i++) {
      newShapes.push({
        id: i,
        size: Math.random() * 80 + 20, // Kleinere Shapes
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        color: shapeConfig.colors[Math.floor(Math.random() * shapeConfig.colors.length)],
        rounded: Math.random() > 0.5
      })
    }
    setShapes(newShapes)
  }, [shapeConfig])

  // Optimierte Event-Listener mit Custom Hook
  useWindowEvent('resize', generateShapes)

  useEffect(() => {
    generateShapes()
  }, [generateShapes])

  // Memoized Animation-Variants
  const titleVariants = useMemo(() => ({
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  }), [])

  const subtitleVariants = useMemo(() => ({
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, delay: 0.3, ease: "easeOut" }
    }
  }), [])

  const buttonVariants = useMemo(() => ({
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, delay: 0.6, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(254, 202, 87, 0.4)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  }), [])

  return (
    <HeroContainer>
      {shapes.map((shape) => {
        // Optimierte Maus-Interaktion mit reduzierter Intensität
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - shape.x, 2) + 
          Math.pow(mousePosition.y - shape.y, 2)
        )
        const influence = Math.max(0, 200 - distance) / 200 * 0.05 // Reduzierte Intensität
        
        return (
          <FloatingShape
            key={shape.id}
            size={shape.size}
            color={shape.color}
            rounded={shape.rounded}
            animate={{
              x: shape.x + (mousePosition.x - shape.x) * influence,
              y: shape.y + (mousePosition.y - shape.y) * influence,
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 15, // Langsamere Animation für bessere Performance
              repeat: Infinity,
              ease: "easeInOut",
              x: { type: "spring", stiffness: 50, damping: 20 },
              y: { type: "spring", stiffness: 50, damping: 20 }
            }}
            style={{
              left: 0,
              top: 0
            }}
          />
        )
      })}

      <Title
        variants={titleVariants}
        initial="initial"
        animate="animate"
      >
        UNLEASHED CHAOS
      </Title>

      <Subtitle
        variants={subtitleVariants}
        initial="initial"
        animate="animate"
      >
        Erlebe interaktive Kunst, die Grenzen sprengt und Chaos in Schönheit verwandelt
      </Subtitle>

      <InteractiveButton
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        onClick={onChaosToggle}
      >
        <span>CHAOS ENTFESSELN</span>
      </InteractiveButton>
    </HeroContainer>
  )
}

export default HeroSection
