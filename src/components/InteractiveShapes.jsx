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
  background: ${props => props.chaosMode 
    ? 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 25%, #feca57 50%, #ff9ff3 75%, #45b7d1 100%)'
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  background-size: ${props => props.chaosMode ? '400% 400%' : '100% 100%'};
  animation: ${props => props.chaosMode ? 'gradientShift 3s ease infinite' : 'none'};

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
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

const InteractiveShapes = ({ chaosMode }) => {
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

      const newShapes = Array.from({ length: chaosMode ? 35 : 20 }, (_, i) => {
        const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)]
        const size = Math.random() * (chaosMode ? 150 : 100) + (chaosMode ? 30 : 50)
        return {
          id: i,
          x: Math.random() * (window.innerWidth - size),
          y: Math.random() * (window.innerHeight - size),
          width: size,
          height: size,
          borderRadius: shapeType.borderRadius,
          background: colors[Math.floor(Math.random() * colors.length)],
          rotationSpeed: (Math.random() - 0.5) * (chaosMode ? 5 : 2),
          scale: 1,
          filter: Math.random() > (chaosMode ? 0.3 : 0.7) ? 'blur(2px)' : 'none'
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
  }, [chaosMode])

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
    <ShapesContainer ref={containerRef} chaosMode={chaosMode} className="will-change-transform">
      <Title
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={chaosMode ? {
          color: ['#fff', '#ff6b6b', '#4ecdc4', '#feca57', '#ff9ff3', '#fff']
        } : {}}
        transition={chaosMode ? {
          duration: 2,
          repeat: Infinity
        } : { duration: 1 }}
      >
        {chaosMode ? 'CHAOTISCHE DIMENSIONEN' : 'INTERAKTIVE DIMENSIONEN'}
      </Title>

      {shapes.map((shape) => {
        const distanceFromMouse = Math.sqrt(
          Math.pow(mousePos.x - shape.x, 2) + Math.pow(mousePos.y - shape.y, 2)
        )
        const influence = Math.max(0, (chaosMode ? 300 : 200) - distanceFromMouse) / (chaosMode ? 300 : 200)
        
        return (
          <ShapeElement
            key={shape.id}
            width={shape.width}
            height={shape.height}
            borderRadius={shape.borderRadius}
            background={shape.background}
            filter={shape.filter}
            animate={{
              x: shape.x + (mousePos.x - shape.x) * influence * (chaosMode ? 0.3 : 0.1),
              y: shape.y + (mousePos.y - shape.y) * influence * (chaosMode ? 0.3 : 0.1),
              rotate: shape.rotationSpeed * influence * (chaosMode ? 360 : 180),
              scale: shape.scale + influence * (chaosMode ? 0.8 : 0.3)
            }}
            transition={{
              type: "spring",
              stiffness: chaosMode ? 400 : 300,
              damping: chaosMode ? 20 : 30
            }}
            whileHover={{
              scale: shape.scale * (chaosMode ? 1.5 : 1.2),
              rotate: chaosMode ? 720 : 180,
              filter: chaosMode ? 'brightness(2) saturate(2) hue-rotate(90deg)' : 'brightness(1.5) saturate(1.5)'
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
