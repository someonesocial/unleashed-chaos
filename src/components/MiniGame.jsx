import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const GameContainer = styled(motion.div)`
  position: fixed;
  top: calc(100vh * 5 + 800px);
  right: 2rem;
  width: 350px;
  height: 450px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 20px;
  padding: 1rem;
  backdrop-filter: blur(15px);
  border: 3px solid #ff6b6b;
  box-shadow: 0 0 30px rgba(255, 107, 107, 0.3);
  z-index: 500;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1200px) {
    top: calc(100vh * 5 + 600px);
    right: 1rem;
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 400px;
    top: calc(100vh * 4 + 800px);
    right: 1rem;
  }
  
  @media (max-width: 480px) {
    width: 250px;
    height: 350px;
    top: calc(100vh * 4 + 600px);
    right: 0.5rem;
  }
`

const GameArea = styled.div`
  position: relative;
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 2px solid rgba(255, 107, 107, 0.3);
  margin-top: 1rem;
  overflow: hidden;
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
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 0 15px rgba(255, 107, 107, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.3);
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
        // Exakte Berechnungen basierend auf der GameArea
        const targetDiameter = 40; // Durchmesser des Kreises
        const gameAreaPadding = 4; // Sicherheitsabstand zu den Rändern
        const minDistance = 50; // Mindestabstand zwischen Kreisen (etwas größer als Durchmesser)
        
        // GameContainer: 350px breit, 450px hoch
        // Container padding: 16px (1rem) auf jeder Seite
        // GameArea margin-top: 16px (1rem)
        // GameArea border: 2px auf jeder Seite
        // Header bereich (Title + Score + Text): ca. 120px
        
        const availableWidth = 350 - (16 * 2) - (2 * 2); // 314px (Container - padding - border)
        const availableHeight = 450 - 120 - 16 - (16 * 2) - (2 * 2); // 280px (Container - header - margin - padding - border)
        
        // Sichere Position: Kreis muss komplett innerhalb der GameArea bleiben
        const safeWidth = availableWidth - targetDiameter - gameAreaPadding;
        const safeHeight = availableHeight - targetDiameter - gameAreaPadding;
        
        // Funktion um zu prüfen, ob zwei Kreise sich überlappen
        const checkCollision = (x1, y1, x2, y2, minDist) => {
          const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          return distance < minDist;
        };
        
        // Neue Position finden, die nicht mit vorhandenen Kreisen kollidiert
        let attempts = 0;
        let validPosition = false;
        let newX, newY;
        
        while (!validPosition && attempts < 50) { // Maximale Versuche begrenzen
          newX = Math.max(gameAreaPadding, Math.random() * safeWidth);
          newY = Math.max(gameAreaPadding, Math.random() * safeHeight);
          
          validPosition = true;
          
          // Prüfen ob neue Position mit vorhandenen Kreisen kollidiert
          for (const target of targets) {
            if (checkCollision(newX, newY, target.x, target.y, minDistance)) {
              validPosition = false;
              break;
            }
          }
          
          attempts++;
        }
        
        // Nur einen neuen Kreis hinzufügen, wenn eine gültige Position gefunden wurde
        if (validPosition) {
          const newTarget = {
            id: Date.now(),
            x: newX,
            y: newY
          }
          
          setTargets(prev => [...prev, newTarget])
          
          setTimeout(() => {
            setTargets(prev => prev.filter(target => target.id !== newTarget.id))
          }, 2000)
        }
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [gameActive, targets])

  const handleTargetClick = (targetId) => {
    setScore(prev => prev + 10)
    setTargets(prev => prev.filter(target => target.id !== targetId))
  }

  if (!chaosMode) return null

  return (
    <GameContainer
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      exit={{ x: 300 }}
    >
      <GameTitle>🎯 CHAOS CATCHER</GameTitle>
      <ScoreDisplay>Score: {score}</ScoreDisplay>
      <div style={{ color: 'white', fontSize: '0.9rem', textAlign: 'center' }}>
        Click the floating targets!
      </div>
      
      <GameArea>
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
      </GameArea>
    </GameContainer>
  )
}

export default MiniGame
