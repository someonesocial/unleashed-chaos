import React, { Suspense, lazy, useState, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import useOptimizedMousePosition from './hooks/useOptimizedMousePosition'
import useWindowEvent from './hooks/useWindowEvent'
import './App.css'

// Performance-optimierte Theme-Definition
const createTheme = (chaosMode) => ({
  colors: {
    primary: chaosMode ? '#ff6b6b' : '#4ecdc4',
    secondary: chaosMode ? '#4ecdc4' : '#45b7d1',
    accent: chaosMode ? '#feca57' : '#ff9ff3',
    background: chaosMode 
      ? 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #feca57, #ff9ff3, #45b7d1)'
      : 'linear-gradient(45deg, #000, #1a0033, #000, #330066, #000)',
    text: '#ffffff'
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
    xlarge: '4rem'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px'
  },
  animations: {
    fast: '0.2s',
    medium: '0.5s',
    slow: '1s'
  }
})

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
    /* Performance-Optimierungen */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  html {
    scroll-behavior: smooth;
  }
  
  /* Performance-Hints für Browser */
  .will-change-transform {
    will-change: transform;
  }
  
  .will-change-opacity {
    will-change: opacity;
  }
  
  .gpu-accelerated {
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
`

// Optimierte Styled Components mit Theme
const AppContainer = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  background-size: 400% 400%;
  animation: gradientShift ${props => props.chaosMode ? '2s' : '15s'} ease infinite;
  transition: all ${props => props.theme.animations.medium} ease;
  /* GPU-Beschleunigung */
  transform: translateZ(0);
  backface-visibility: hidden;

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
  transition: all ${props => props.theme.animations.fast} ease;
  /* Performance-Optimierung */
  will-change: transform;
`

// Performance-optimiertes Loading Component
const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #000, #1a0033);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  z-index: 9999;
  
  &::after {
    content: '';
    width: 50px;
    height: 50px;
    border: 3px solid transparent;
    border-top: 3px solid #ff6b6b;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-left: 1rem;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
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
const PerformanceMonitor = React.memo(lazy(() => import('./components/PerformanceMonitor')))

function App() {
  const [chaosMode, setChaosMode] = useState(false)
  
  // Performance-optimierter Mouse Position Hook
  const cursorPosition = useOptimizedMousePosition(16) // 60fps throttling
  
  // Memoized Theme für Performance
  const theme = useMemo(() => createTheme(chaosMode), [chaosMode])
  
  // Optimierter Click Handler
  const handleClick = useCallback(() => {
    // Easter egg: activate chaos mode after 10 clicks
    setChaosMode(prev => {
      if (!prev) {
        // Auto-deactivate after 30 seconds
        setTimeout(() => setChaosMode(false), 30000)
        return true
      }
      return prev
    })
  }, [])

  const toggleChaosMode = useCallback(() => {
    setChaosMode(prev => !prev)
  }, [])

  // Optimierte Event-Listener mit Custom Hook
  useWindowEvent('click', handleClick)

  // Memoized Cursor Animation
  const cursorAnimation = useMemo(() => ({
    x: cursorPosition.x - (chaosMode ? 20 : 10), 
    y: cursorPosition.y - (chaosMode ? 20 : 10),
    rotate: chaosMode ? [0, 360] : 0
  }), [cursorPosition.x, cursorPosition.y, chaosMode])

  const cursorTransition = useMemo(() => ({
    type: "spring", 
    stiffness: 500, 
    damping: 28,
    rotate: chaosMode ? { duration: 2, repeat: Infinity } : {}
  }), [chaosMode])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* eslint-disable-next-line no-undef */}
      <PerformanceMonitor enabled={typeof process !== 'undefined' && process.env?.NODE_ENV === 'development'} />
      <Suspense fallback={<LoadingScreen>Chaos wird geladen...</LoadingScreen>}>
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
            animate={cursorAnimation}
            transition={cursorTransition}
            className="will-change-transform gpu-accelerated"
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
    </ThemeProvider>
  )
}

export default App
