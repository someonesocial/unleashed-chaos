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
        value: chaosMode ? "#ff6b6b" : "transparent",
      },
    },
    fpsLimit: 120,
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
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: chaosMode
          ? ["#ff6b6b", "#4ecdc4", "#feca57", "#ff9ff3"]
          : ["#ffffff"],
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: chaosMode ? 5 : 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.7,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
        polygon: {
          sides: 6,
        },
      },
      size: {
        value: chaosMode ? { min: 3, max: 10 } : { min: 1, max: 5 },
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 0.1,
        },
      },
    },
    detectRetina: true,
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
        zIndex: -1
      }}
    />
  )
}

export default ParticleBackground
