import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const MonitorContainer = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  z-index: 10000;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 107, 107, 0.3);
  min-width: 200px;
  
  ${props => !props.visible && `
    transform: translateX(-100%);
    opacity: 0;
    pointer-events: none;
  `}
  
  transition: all 0.3s ease;
`

const ToggleButton = styled.button`
  position: fixed;
  top: 10px;
  left: ${props => props.monitorVisible ? '220px' : '10px'};
  background: rgba(255, 107, 107, 0.8);
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  z-index: 10001;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 107, 107, 1);
    transform: scale(1.05);
  }
`

const MetricRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  
  .label {
    color: #ccc;
  }
  
  .value {
    color: ${props => {
      if (props.warning) return '#ff9f40';
      if (props.error) return '#ff6384';
      return '#4bc0c0';
    }};
    font-weight: bold;
  }
`

const PerformanceMonitor = ({ enabled = false }) => {
  const [metrics, setMetrics] = useState({
    fps: 0,
    memory: 0,
    renderTime: 0,
    componentCount: 0
  })
  const [visible, setVisible] = useState(enabled)
  const frameCount = useRef(0)
  const lastTime = useRef(performance.now())
  const renderStartTime = useRef(0)

  useEffect(() => {
    if (!visible) return

    let animationFrame

    const updateMetrics = () => {
      const now = performance.now()
      frameCount.current++

      // FPS Berechnung
      if (now - lastTime.current >= 1000) {
        const fps = Math.round((frameCount.current * 1000) / (now - lastTime.current))
        frameCount.current = 0
        lastTime.current = now

        // Memory Usage (falls verfügbar)
        const memory = performance.memory 
          ? Math.round(performance.memory.usedJSHeapSize / 1048576) // MB
          : 0

        // Render Time (geschätzt)
        const renderTime = now - renderStartTime.current

        // Component Count (geschätzt basierend auf DOM-Elementen)
        const componentCount = document.querySelectorAll('[data-reactroot] *').length

        setMetrics({
          fps,
          memory,
          renderTime: Math.round(renderTime * 100) / 100,
          componentCount
        })
      }

      renderStartTime.current = now
      animationFrame = requestAnimationFrame(updateMetrics)
    }

    updateMetrics()

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [visible])

  // Nur in Development Mode anzeigen
  const isDevelopment = typeof window !== 'undefined' && 
    typeof window.location !== 'undefined' && 
    window.location.hostname === 'localhost'
  
  if (!isDevelopment && !enabled) {
    return null
  }

  return (
    <>
      <ToggleButton 
        monitorVisible={visible}
        onClick={() => setVisible(!visible)}
        title="Performance Monitor Toggle"
      >
        📊
      </ToggleButton>
      
      <MonitorContainer visible={visible}>
        <div style={{ marginBottom: '8px', fontWeight: 'bold', color: '#ff6b6b' }}>
          Performance Monitor
        </div>
        
        <MetricRow error={metrics.fps < 30} warning={metrics.fps < 50}>
          <span className="label">FPS:</span>
          <span className="value">{metrics.fps}</span>
        </MetricRow>
        
        {metrics.memory > 0 && (
          <MetricRow error={metrics.memory > 100} warning={metrics.memory > 50}>
            <span className="label">Memory:</span>
            <span className="value">{metrics.memory} MB</span>
          </MetricRow>
        )}
        
        <MetricRow warning={metrics.renderTime > 16}>
          <span className="label">Render:</span>
          <span className="value">{metrics.renderTime} ms</span>
        </MetricRow>
        
        <MetricRow warning={metrics.componentCount > 1000}>
          <span className="label">Elements:</span>
          <span className="value">{metrics.componentCount}</span>
        </MetricRow>
        
        <div style={{ marginTop: '8px', fontSize: '10px', color: '#888' }}>
          Press F12 for DevTools
        </div>
      </MonitorContainer>
    </>
  )
}

export default PerformanceMonitor
