import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled, { createGlobalStyle } from 'styled-components'
import ParticleBackground from './components/ParticleBackground'
import HeroSection from './components/HeroSection'
import InteractiveShapes from './components/InteractiveShapes'
import ChaosGallery from './components/ChaosGallery'
import SoundReactive from './components/SoundReactive'
import ScrollMagic from './components/ScrollMagic'
import './App.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #000;
    overflow-x: hidden;
    cursor: none;
  }

  html {
    scroll-behavior: smooth;
  }
`

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(45deg, #000, #1a0033, #000, #330066, #000);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`

const CustomCursor = styled(motion.div)`
  position: fixed;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, #ff6b6b, #4ecdc4, #45b7d1);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  box-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
`

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    // Simulate loading for dramatic effect
    setTimeout(() => setIsLoading(false), 3000)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <CustomCursor
          animate={{ x: cursorPosition.x - 10, y: cursorPosition.y - 10 }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
        
        <ParticleBackground />
        
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              style={{
                position: 'fixed',
                inset: 0,
                background: 'linear-gradient(45deg, #000, #ff6b6b, #4ecdc4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                style={{
                  color: 'white',
                  fontSize: '4rem',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                  textShadow: [
                    '0 0 20px #ff6b6b',
                    '0 0 40px #4ecdc4',
                    '0 0 20px #ff6b6b'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                UNLEASHED<br />CHAOS
              </motion.h1>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <HeroSection />
              <InteractiveShapes />
              <SoundReactive />
              <ChaosGallery />
              <ScrollMagic />
            </motion.div>
          )}
        </AnimatePresence>
      </AppContainer>
    </>
  )
}

export default App
