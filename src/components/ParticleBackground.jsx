import { useCallback, useMemo } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const ParticleBackground = ({ chaosMode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const options = useMemo(() => ({
    background: {
      color: {
        value: "transparent", // Entfernt den roten Hintergrund für bessere Performance
      },
    },
    fpsLimit: 60, // Reduziert für bessere Performance
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2, // Reduziert von 4
        },
        repulse: {
          distance: chaosMode ? 250 : 150,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: chaosMode
          ? ["#ff6b6b", "#4ecdc4", "#feca57", "#ff9ff3", "#45b7d1"]
          : ["#ff6b6b", "#4ecdc4", "#45b7d1"],
      },
      links: {
        color: chaosMode ? "#ff6b6b" : "#4ecdc4",
        distance: chaosMode ? 200 : 150,
        enable: true,
        opacity: chaosMode ? 0.6 : 0.3,
        width: chaosMode ? 2 : 1,
      },
      collisions: {
        enable: false, // Deaktiviert für bessere Performance
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: chaosMode,
        speed: chaosMode ? 4 : 2, // Reduziert für flüssigere Animation
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000, // Erhöht für weniger dichte Partikel
        },
        value: chaosMode ? 50 : 30, // Deutlich reduziert für bessere Performance
      },
      opacity: {
        value: chaosMode ? 0.8 : 0.5,
        random: true,
        animation: {
          enable: chaosMode,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: chaosMode ? ["circle", "triangle", "polygon"] : "circle",
        polygon: {
          sides: 6,
        },
      },
      size: {
        value: chaosMode ? { min: 2, max: 6 } : { min: 1, max: 3 },
        animation: {
          enable: chaosMode,
          speed: 2,
          minimumValue: 0.1,
        },
      },
    },
    detectRetina: true,
    // Performance-Optimierungen
    smooth: true,
    reduceDuplicates: true,
  }), [chaosMode])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        // Performance-Optimierungen
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    />
  )
}

export default ParticleBackground
