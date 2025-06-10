import { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const ButtonContainer = styled(motion.div)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
`

const ChaosToggle = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #feca57);
  background-size: 300% 300%;
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: gradientShift 3s ease infinite;
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`

const ExplosionEffect = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #ff6b6b, transparent);
  border-radius: 50%;
  pointer-events: none;
`

const ChaosButton = ({ chaosMode, onToggle }) => {
  const [explosions, setExplosions] = useState([])

  const handleClick = () => {
    // Create explosion effect
    const newExplosion = {
      id: Date.now(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    }
    setExplosions(prev => [...prev, newExplosion])
    
    // Remove explosion after animation
    setTimeout(() => {
      setExplosions(prev => prev.filter(exp => exp.id !== newExplosion.id))
    }, 1000)
    
    onToggle()
  }

  return (
    <>
      <ButtonContainer>
        <ChaosToggle
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={chaosMode ? { 
            rotate: [0, 360], 
            scale: [1, 1.2, 1] 
          } : {}}
          transition={chaosMode ? { 
            duration: 2, 
            repeat: Infinity 
          } : {}}
          onClick={handleClick}
        >
          {chaosMode ? '🌪️ CHAOS ON' : '⚡ ACTIVATE CHAOS'}
        </ChaosToggle>
      </ButtonContainer>

      {explosions.map(explosion => (
        <ExplosionEffect
          key={explosion.id}
          initial={{ 
            scale: 0, 
            x: explosion.x, 
            y: explosion.y, 
            opacity: 1 
          }}
          animate={{ 
            scale: 10, 
            opacity: 0 
          }}
          transition={{ duration: 1 }}
        />
      ))}
    </>
  )
}

export default ChaosButton
