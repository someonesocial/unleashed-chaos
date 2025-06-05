import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
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
`

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: ${props => props.rounded ? '50%' : '0'};
  filter: blur(1px);
  opacity: 0.7;
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

const HeroSection = () => {
  const [shapes, setShapes] = useState([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const generateShapes = () => {
      const newShapes = []
      for (let i = 0; i < 15; i++) {
        newShapes.push({
          id: i,
          size: Math.random() * 100 + 20,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          color: [
            'rgba(255, 107, 107, 0.6)',
            'rgba(78, 205, 196, 0.6)',
            'rgba(69, 183, 209, 0.6)',
            'rgba(254, 202, 87, 0.6)',
            'rgba(255, 159, 243, 0.6)'
          ][Math.floor(Math.random() * 5)],
          rounded: Math.random() > 0.5
        })
      }
      setShapes(newShapes)
    }

    generateShapes()
    window.addEventListener('resize', generateShapes)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', generateShapes)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleChaosMode = () => {
    // Trigger a chaos animation
    setShapes(prev => prev.map(shape => ({
      ...shape,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 150 + 30
    })))
  }

  return (
    <HeroContainer>
      {shapes.map((shape) => (
        <FloatingShape
          key={shape.id}
          size={shape.size}
          color={shape.color}
          rounded={shape.rounded}
          animate={{
            x: [shape.x, shape.x + (mousePosition.x - shape.x) * 0.1],
            y: [shape.y, shape.y + (mousePosition.y - shape.y) * 0.1],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <Title
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
      >
        UNLEASHED CHAOS
      </Title>

      <Subtitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Tauchen Sie ein in eine Welt, wo Kreativität keine Grenzen kennt.
        Erleben Sie das Unmögliche. Spüren Sie das Unvorhersagbare.
        Willkommen im Chaos der Sinne.
      </Subtitle>

      <InteractiveButton
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleChaosMode}
      >
        <span>CHAOS ENTFESSELN</span>
      </InteractiveButton>
    </HeroContainer>
  )
}

export default HeroSection
