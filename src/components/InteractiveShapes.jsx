import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const ShapesContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`

const ShapeElement = styled(motion.div)`
  position: absolute;
  border-radius: ${props => props.borderRadius || '0px'};
  background: ${props => props.background};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  cursor: pointer;
  filter: ${props => props.filter || 'none'};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`

const Title = styled(motion.h2)`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
  color: white;
  text-align: center;
  z-index: 10;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
`

const InteractiveShapes = () => {
  const [shapes, setShapes] = useState([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    const generateShapes = () => {
      const shapeTypes = [
        { type: 'circle', borderRadius: '50%' },
        { type: 'square', borderRadius: '0px' },
        { type: 'rounded-square', borderRadius: '20px' },
        { type: 'pill', borderRadius: '100px' }
      ]

      const colors = [
        'linear-gradient(45deg, #ff6b6b, #ee5a6f)',
        'linear-gradient(45deg, #4ecdc4, #44a08d)',
        'linear-gradient(45deg, #45b7d1, #96c93d)',
        'linear-gradient(45deg, #feca57, #ff9ff3)',
        'linear-gradient(45deg, #fd79a8, #fdcb6e)',
        'linear-gradient(45deg, #6c5ce7, #a29bfe)'
      ]

      const newShapes = Array.from({ length: 20 }, (_, i) => {
        const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)]
        const size = Math.random() * 100 + 50
        return {
          id: i,
          x: Math.random() * (window.innerWidth - size),
          y: Math.random() * (window.innerHeight - size),
          width: size,
          height: size,
          borderRadius: shapeType.borderRadius,
          background: colors[Math.floor(Math.random() * colors.length)],
          rotationSpeed: (Math.random() - 0.5) * 2,
          scale: 1,
          filter: Math.random() > 0.7 ? 'blur(2px)' : 'none'
        }
      })
      setShapes(newShapes)
    }

    generateShapes()
    
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const handleResize = () => {
      generateShapes()
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleShapeClick = (shapeId) => {
    setShapes(prev => prev.map(shape => 
      shape.id === shapeId 
        ? {
            ...shape,
            x: Math.random() * (window.innerWidth - shape.width),
            y: Math.random() * (window.innerHeight - shape.height),
            scale: shape.scale === 1 ? 1.5 : 1
          }
        : shape
    ))
  }

  return (
    <ShapesContainer ref={containerRef}>
      <Title
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        INTERAKTIVE DIMENSIONEN
      </Title>

      {shapes.map((shape) => {
        const distanceFromMouse = Math.sqrt(
          Math.pow(mousePos.x - shape.x, 2) + Math.pow(mousePos.y - shape.y, 2)
        )
        const influence = Math.max(0, 200 - distanceFromMouse) / 200
        
        return (
          <ShapeElement
            key={shape.id}
            width={shape.width}
            height={shape.height}
            borderRadius={shape.borderRadius}
            background={shape.background}
            filter={shape.filter}
            animate={{
              x: shape.x + (mousePos.x - shape.x) * influence * 0.1,
              y: shape.y + (mousePos.y - shape.y) * influence * 0.1,
              rotate: shape.rotationSpeed * influence * 180,
              scale: shape.scale + influence * 0.3
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            whileHover={{
              scale: shape.scale * 1.2,
              rotate: 180,
              filter: 'brightness(1.5) saturate(1.5)'
            }}
            whileTap={{
              scale: shape.scale * 0.8
            }}
            onClick={() => handleShapeClick(shape.id)}
          />
        )
      })}
    </ShapesContainer>
  )
}

export default InteractiveShapes
