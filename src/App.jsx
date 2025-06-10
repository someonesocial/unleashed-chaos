import React, { Suspense, lazy, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled, { createGlobalStyle } from 'styled-components'
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
    width: 100vw;
    min-width: 0;
  }

  html {
    scroll-behavior: smooth;
  }
`

const AppContainer = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  background: ${props => props.chaosMode 
    ? 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #feca57, #ff9ff3, #45b7d1)'
    : 'linear-gradient(45deg, #000, #1a0033, #000, #330066, #000)'};
  background-size: 400% 400%;
  animation: gradientShift ${props => props.chaosMode ? '2s' : '15s'} ease infinite;
  transition: all 0.5s ease;

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`

const CustomCursor = styled(motion.div)`
  position: fixed;
  width: ${props => props.chaosMode ? '40px' : '20px'};
  height: ${props => props.chaosMode ? '40px' : '20px'};
  background: ${props => props.chaosMode 
    ? 'radial-gradient(circle, #ff6b6b, #4ecdc4, #feca57, #ff9ff3)'
    : 'radial-gradient(circle, #ff6b6b, #4ecdc4, #45b7d1)'};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  box-shadow: 0 0 ${props => props.chaosMode ? '40px' : '20px'} rgba(255, 107, 107, 0.5);
  transition: all 0.3s ease;
`

// Lazy Loading für schwere Komponenten
const ParticleBackground = React.memo(lazy(() => import('./components/ParticleBackground')))
const HeroSection = React.memo(lazy(() => import('./components/HeroSection')))
const InteractiveShapes = React.memo(lazy(() => import('./components/InteractiveShapes')))
const ChaosGallery = React.memo(lazy(() => import('./components/ChaosGallery')))
const SoundReactive = React.memo(lazy(() => import('./components/SoundReactive')))
const ScrollMagic = React.memo(lazy(() => import('./components/ScrollMagic')))
const ChaosButton = React.memo(lazy(() => import('./components/ChaosButton')))
const ChaosEffects = React.memo(lazy(() => import('./components/ChaosEffects')))
const MiniGame = React.memo(lazy(() => import('./components/MiniGame')))

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [chaosMode, setChaosMode] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setClickCount(prev => prev + 1);
      
      // Easter egg: activate chaos mode after 10 clicks
      if (clickCount >= 9 && !chaosMode) {
        setChaosMode(true);
        // Auto-deactivate after 30 seconds
        setTimeout(() => setChaosMode(false), 30000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [clickCount, chaosMode]);

  const toggleChaosMode = () => {
    setChaosMode((prev) => !prev);
  };

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<div className="loading-screen">Lädt...</div>}>
        <AppContainer 
          chaosMode={chaosMode}
          animate={chaosMode ? {
            filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
          } : {}}
          transition={chaosMode ? {
            duration: 5,
            repeat: Infinity
          } : {}}
        >
          <CustomCursor
            chaosMode={chaosMode}
            animate={{ 
              x: cursorPosition.x - (chaosMode ? 20 : 10), 
              y: cursorPosition.y - (chaosMode ? 20 : 10),
              rotate: chaosMode ? [0, 360] : 0
            }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 28,
              rotate: chaosMode ? { duration: 2, repeat: Infinity } : {}
            }}
            className="will-change-transform"
          />
          <ParticleBackground chaosMode={chaosMode} />
          <HeroSection onChaosToggle={toggleChaosMode} />
          <InteractiveShapes chaosMode={chaosMode} />
          <ChaosGallery chaosMode={chaosMode} />
          <SoundReactive chaosMode={chaosMode} />
          <ScrollMagic chaosMode={chaosMode} />
          <ChaosButton chaosMode={chaosMode} onToggle={toggleChaosMode} />
          <ChaosEffects chaosMode={chaosMode} />
          <MiniGame chaosMode={chaosMode} />
        </AppContainer>
      </Suspense>
    </>
  );
}

export default App
