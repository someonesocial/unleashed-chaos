import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import styled from 'styled-components'

const ScrollContainer = styled.section`
  min-height: 200vh;
  background: linear-gradient(180deg, #000, #1a1a2e, #16213e, #0f3460);
  position: relative;
  overflow: hidden;
`

const FloatingText = styled(motion.div)`
  position: fixed;
  font-size: clamp(2rem, 8vw, 8rem);
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px #fff;
  z-index: 5;
  pointer-events: none;
  white-space: nowrap;
`

const ScrollIndicator = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #feca57, #ff9ff3);
  z-index: 1000;
  transform-origin: left;
`

const ContentSection = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  position: relative;
`

const MorphingShape = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  position: absolute;
  filter: blur(1px);
`

const ParallaxElement = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  background: ${props => props.color};
  border-radius: ${props => props.rounded ? '50%' : '20px'};
  opacity: 0.7;
`

const TextReveal = styled(motion.h2)`
  font-size: clamp(2rem, 6vw, 4rem);
  color: white;
  text-align: center;
  margin: 2rem 0;
  overflow: hidden;
`

const FinalMessage = styled(motion.div)`
  text-align: center;
  color: white;
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  margin: 2rem;
  backdrop-filter: blur(10px);
`

const ScrollMagic = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const textRef1 = useRef(null)
  const textRef2 = useRef(null)
  const textRef3 = useRef(null)
  
  const isInView1 = useInView(textRef1, { once: false })
  const isInView2 = useInView(textRef2, { once: false })
  const isInView3 = useInView(textRef3, { once: false })

  // Transform values based on scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -800])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 0.5])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1])

  const parallaxElements = [
    { id: 1, color: 'rgba(255, 107, 107, 0.6)', x: '10%', y: '20%', rounded: true },
    { id: 2, color: 'rgba(78, 205, 196, 0.6)', x: '80%', y: '30%', rounded: false },
    { id: 3, color: 'rgba(254, 202, 87, 0.6)', x: '20%', y: '70%', rounded: true },
    { id: 4, color: 'rgba(255, 159, 243, 0.6)', x: '70%', y: '80%', rounded: false },
    { id: 5, color: 'rgba(69, 183, 209, 0.6)', x: '50%', y: '50%', rounded: true },
  ]

  return (
    <ScrollContainer ref={containerRef}>
      <ScrollIndicator style={{ scaleX: scrollYProgress }} />

      {/* Floating background text */}
      <FloatingText
        style={{
          top: '20%',
          left: '10%',
          y: y1,
          rotate: rotate
        }}
      >
        CHAOS
      </FloatingText>
      
      <FloatingText
        style={{
          top: '60%',
          right: '10%',
          y: y2,
          rotate: rotate
        }}
      >
        UNLEASHED
      </FloatingText>

      {/* Parallax elements */}
      {parallaxElements.map((element, index) => (
        <ParallaxElement
          key={element.id}
          color={element.color}
          rounded={element.rounded}
          style={{
            left: element.x,
            top: element.y,
            y: useTransform(scrollYProgress, [0, 1], [0, -200 - index * 100])
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <ContentSection>
        <MorphingShape
          style={{
            scale: scale,
            rotate: rotate,
            opacity: opacity
          }}
          animate={{
            borderRadius: ["50%", "20%", "50%", "0%", "50%"]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <TextReveal
          ref={textRef1}
          initial={{ y: 100, opacity: 0 }}
          animate={isInView1 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Die Grenzen der Realität verschwimmen
        </TextReveal>
      </ContentSection>

      <ContentSection style={{ marginTop: '20vh' }}>
        <TextReveal
          ref={textRef2}
          initial={{ x: -100, opacity: 0 }}
          animate={isInView2 ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Willkommen in einer neuen Dimension
        </TextReveal>
      </ContentSection>

      <ContentSection style={{ marginTop: '20vh' }}>
        <TextReveal
          ref={textRef3}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView3 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Wo alles möglich ist
        </TextReveal>
      </ContentSection>

      <FinalMessage
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h2
          style={{ fontSize: '3rem', marginBottom: '2rem' }}
          animate={{
            background: [
              'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
              'linear-gradient(45deg, #4ecdc4, #feca57)',
              'linear-gradient(45deg, #feca57, #ff9ff3)',
              'linear-gradient(45deg, #ff9ff3, #ff6b6b)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Das Chaos hat Sie erfasst
        </motion.h2>
        
        <motion.p
          style={{ fontSize: '1.3rem', lineHeight: 1.6, marginBottom: '2rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Sie haben eine Reise durch die unendlichen Möglichkeiten der digitalen Kunst erlebt.
          <br />
          Jeder Klick, jede Bewegung, jeder Moment war einzigartig.
          <br />
          Das ist die Kraft des entfesselten Chaos.
        </motion.p>

        <motion.button
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Erneut ins Chaos stürzen
        </motion.button>
      </FinalMessage>
    </ScrollContainer>
  )
}

export default ScrollMagic
