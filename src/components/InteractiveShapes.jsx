import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import useOptimizedMousePosition from '../hooks/useOptimizedMousePosition'
import useWindowEvent from '../hooks/useWindowEvent'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const ShapesContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: ${props => props.chaosMode 
    ? 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 25%, #feca57 50%, #ff9ff3 75%, #45b7d1 100%)'
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  background-size: ${props => props.chaosMode ? '400% 400%' : '100% 100%'};
  animation: ${props => props.chaosMode ? 'gradientShift 3s ease infinite' : 'none'};
  /* Performance-Optimierung */
  will-change: ${props => props.chaosMode ? 'background-position' : 'auto'};
  transform: translateZ(0);

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
  /* Performance-Optimierung */
  will-change: transform;
  backface-visibility: hidden;
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
  /* Performance-Optimierung */
  will-change: transform, color;
`

const InteractiveShapes = ({ chaosMode }) => {
  const [shapes, setShapes] = useState([])
  
  // Performance-optimierter Mouse Position Hook
  const mousePosition = useOptimizedMousePosition(16) // 60fps
  
  // Intersection Observer für bessere Performance
  const [intersectionRef, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false
  })

  // Memoized Shape-Konfiguration
  const shapeConfig = useMemo(() => ({
    count: chaosMode ? 12 : 8, // Reduziert für bessere Performance
    shapeTypes: [
      { type: 'circle', borderRadius: '50%' },
      { type: 'square', borderRadius: '0px' },
      { type: 'rounded-square', borderRadius: '20px' },
      { type: 'pill', borderRadius: '100px' }
    ],
    colors: [
      'linear-gradient(45deg, #ff6b6b, #ee5a6f)',
      'linear-gradient(45deg, #4ecdc4, #44a08d)',
      'linear-gradient(45deg, #45b7d1, #96c93d)',
      'linear-gradient(45deg, #feca57, #ff9ff3)',
      'linear-gradient(45deg, #fd79a8, #fdcb6e)',
    ]
  }), [chaosMode])

  const generateShapes = useCallback(() => {
    if (!isInView) return // Nur generieren wenn sichtbar
    
    const newShapes = []
    for (let i = 0; i < shapeConfig.count; i++) {
      const shapeType = shapeConfig.shapeTypes[Math.floor(Math.random() * shapeConfig.shapeTypes.length)]
      const size = Math.random() * 80 + 40 // Kleinere Shapes
      
      newShapes.push({
        id: i,
        ...shapeType,
        width: size,
        height: size,
        x: Math.random() * (window.innerWidth - size),
        y: Math.random() * (window.innerHeight - size),
        background: shapeConfig.colors[Math.floor(Math.random() * shapeConfig.colors.length)],
        scale: 1,
        rotationSpeed: (Math.random() - 0.5) * 2,
        filter: chaosMode ? `hue-rotate(${Math.random() * 360}deg)` : 'none'
      })
    }
    setShapes(newShapes)
  }, [shapeConfig, isInView, chaosMode])

  const handleShapeClick = useCallback((shapeId) => {
    setShapes(prev => prev.map(shape => 
      shape.id === shapeId 
        ? {
            ...shape,
            x: Math.random() * (window.innerWidth - shape.width),
            y: Math.random() * (window.innerHeight - shape.height),
            scale: shape.scale === 1 ? 1.3 : 1
          }
        : shape
    ))
  }, [])

  // Optimierte Event-Listener
  useWindowEvent('resize', generateShapes)

  useEffect(() => {
    generateShapes()
  }, [generateShapes])

  // Memoized Title Animation
  const titleAnimation = useMemo(() => ({
    initial: { opacity: 0, y: -50 },
    animate: { 
      opacity: 1, 
      y: 0,
      color: chaosMode 
        ? ['#fff', '#ff6b6b', '#4ecdc4', '#feca57', '#ff9ff3', '#fff']
        : '#fff'
    },
    transition: chaosMode ? {
      duration: 2,
      repeat: Infinity,
      color: { duration: 2, repeat: Infinity }
    } : { duration: 1 }
  }), [chaosMode])

  return (
    <ShapesContainer ref={intersectionRef} chaosMode={chaosMode} className="will-change-transform">
      <Title
        initial={titleAnimation.initial}
        whileInView={titleAnimation.animate}
        animate={titleAnimation.animate}
        transition={titleAnimation.transition}
      >
        {chaosMode ? 'CHAOTISCHE DIMENSIONEN' : 'INTERAKTIVE DIMENSIONEN'}
      </Title>

      {isInView && shapes.map((shape) => {
        // Optimierte Maus-Interaktion mit reduzierter Berechnung
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - shape.x, 2) + Math.pow(mousePosition.y - shape.y, 2)
        )
        const maxDistance = chaosMode ? 250 : 200
        const influence = Math.max(0, maxDistance - distance) / maxDistance
        const intensityMultiplier = chaosMode ? 0.2 : 0.1 // Reduzierte Intensität
        
        return (
          <ShapeElement
            key={shape.id}
            width={shape.width}
            height={shape.height}
            borderRadius={shape.borderRadius}
            background={shape.background}
            filter={shape.filter}
            animate={{
              x: shape.x + (mousePosition.x - shape.x) * influence * intensityMultiplier,
              y: shape.y + (mousePosition.y - shape.y) * influence * intensityMultiplier,
              rotate: shape.rotationSpeed * influence * (chaosMode ? 180 : 90),
              scale: shape.scale + influence * (chaosMode ? 0.4 : 0.2)
            }}
            transition={{
              type: "spring",
              stiffness: chaosMode ? 300 : 200,
              damping: chaosMode ? 15 : 20,
              mass: 0.5
            }}
            whileHover={{
              scale: shape.scale * (chaosMode ? 1.3 : 1.1),
              rotate: chaosMode ? 360 : 180,
              filter: chaosMode ? 'brightness(1.5) saturate(2) hue-rotate(90deg)' : 'brightness(1.2) saturate(1.3)'
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
