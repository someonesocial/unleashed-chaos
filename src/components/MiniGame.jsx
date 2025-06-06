import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const GameContainer = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  width: 300px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  padding: 1rem;
  backdrop-filter: blur(10px);
  border: 2px solid #ff6b6b;
  z-index: 1000;
`

const GameTitle = styled.h3`
  color: #ff6b6b;
  margin-bottom: 1rem;
  text-align: center;
`

const ScoreDisplay = styled.div`
  color: white;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.2rem;
`

const Target = styled(motion.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
`

const MiniGame = ({ chaosMode }) => {
  const [score, setScore] = useState(0)
  const [targets, setTargets] = useState([])
  const [gameActive, setGameActive] = useState(false)

  useEffect(() => {
    if (chaosMode && !gameActive) {
      setGameActive(true)
      setScore(0)
    } else if (!chaosMode) {
      setGameActive(false)
      setTargets([])
    }
  }, [chaosMode, gameActive])

  useEffect(() => {
    if (gameActive) {
      const interval = setInterval(() => {
        const newTarget = {
          id: Date.now(),
          x: Math.random() * (window.innerWidth - 100),
          y: Math.random() * (window.innerHeight - 100)
        }
        
        setTargets(prev => [...prev, newTarget])
        
        setTimeout(() => {
          setTargets(prev => prev.filter(target => target.id !== newTarget.id))
        }, 2000)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [gameActive])

  const handleTargetClick = (targetId) => {
    setScore(prev => prev + 10)
    setTargets(prev => prev.filter(target => target.id !== targetId))
  }

  if (!chaosMode) return null

  return (
    <>
      <GameContainer
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
      >
        <GameTitle>🎯 CHAOS CATCHER</GameTitle>
        <ScoreDisplay>Score: {score}</ScoreDisplay>
        <div style={{ color: 'white', fontSize: '0.9rem', textAlign: 'center' }}>
          Click the floating targets!
        </div>
      </GameContainer>

      {targets.map(target => (
        <Target
          key={target.id}
          initial={{ 
            x: target.x, 
            y: target.y, 
            scale: 0 
          }}
          animate={{ 
            scale: [0, 1.2, 1],
            rotate: [0, 360]
          }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => handleTargetClick(target.id)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        />
      ))}
    </>
  )
}

export default MiniGame
