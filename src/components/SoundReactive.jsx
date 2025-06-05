import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const SoundContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #000, #2d1b69, #000);
  position: relative;
  overflow: hidden;
`

const VisualizerContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 300px;
  gap: 5px;
  margin: 2rem 0;
`

const VisualizerBar = styled(motion.div)`
  width: 8px;
  background: linear-gradient(to top, #ff6b6b, #4ecdc4, #feca57);
  border-radius: 4px 4px 0 0;
  box-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
`

const ControlButton = styled(motion.button)`
  padding: 15px 30px;
  margin: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);

  &:hover {
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
  }
`

const Title = styled(motion.h2)`
  font-size: 3rem;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #feca57);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SoundReactive = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioData, setAudioData] = useState(new Array(50).fill(0))
  const [audioContext, setAudioContext] = useState(null)
  const [analyser, setAnalyser] = useState(null)
  const [dataArray, setDataArray] = useState(null)
  const [source, setSource] = useState(null)
  const animationRef = useRef()

  const generateRandomBeat = () => {
    // Simulate audio data for demonstration
    const newData = new Array(50).fill(0).map(() => Math.random() * 100)
    setAudioData(newData)
  }

  const startVisualization = () => {
    if (isPlaying) {
      setIsPlaying(false)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      return
    }

    setIsPlaying(true)
    
    // Simulate audio visualization without actual audio for demo
    const animate = () => {
      generateRandomBeat()
      if (isPlaying) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }
    animate()
  }

  const handleFileUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
      const fileReader = new FileReader()
      
      fileReader.onload = async (e) => {
        try {
          const arrayBuffer = e.target.result
          const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer)
          
          const sourceNode = audioCtx.createBufferSource()
          const analyserNode = audioCtx.createAnalyser()
          
          analyserNode.fftSize = 256
          const bufferLength = analyserNode.frequencyBinCount
          const dataArray = new Uint8Array(bufferLength)
          
          sourceNode.buffer = audioBuffer
          sourceNode.connect(analyserNode)
          analyserNode.connect(audioCtx.destination)
          
          setAudioContext(audioCtx)
          setAnalyser(analyserNode)
          setDataArray(dataArray)
          setSource(sourceNode)
          
          sourceNode.start()
          setIsPlaying(true)
          
          const visualize = () => {
            if (!analyserNode) return
            
            analyserNode.getByteFrequencyData(dataArray)
            const normalizedData = Array.from(dataArray).slice(0, 50).map(value => (value / 255) * 100)
            setAudioData(normalizedData)
            
            if (isPlaying) {
              animationRef.current = requestAnimationFrame(visualize)
            }
          }
          visualize()
          
        } catch (error) {
          console.error('Error decoding audio:', error)
          generateRandomBeat()
        }
      }
      
      fileReader.readAsArrayBuffer(file)
    } catch (error) {
      console.error('Error setting up audio:', error)
      generateRandomBeat()
    }
  }

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (audioContext) {
        audioContext.close()
      }
    }
  }, [audioContext])

  return (
    <SoundContainer>
      <Title
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        SOUND WAVES
      </Title>

      <VisualizerContainer>
        {audioData.map((value, index) => (
          <VisualizerBar
            key={index}
            animate={{
              height: Math.max(10, value * 2),
              backgroundColor: `hsl(${(value * 3 + index * 7) % 360}, 70%, 60%)`
            }}
            transition={{
              duration: 0.1,
              ease: "easeOut"
            }}
          />
        ))}
      </VisualizerContainer>

      <div>
        <ControlButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={startVisualization}
        >
          {isPlaying ? 'STOP BEAT' : 'START BEAT'}
        </ControlButton>

        <input
          type="file"
          accept="audio/*"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
          id="audio-upload"
        />
        <ControlButton
          as="label"
          htmlFor="audio-upload"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          UPLOAD MUSIK
        </ControlButton>
      </div>

      <motion.p
        style={{
          color: 'white',
          textAlign: 'center',
          marginTop: '2rem',
          fontSize: '1.2rem',
          opacity: 0.8
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        transition={{ delay: 0.5 }}
      >
        Erleben Sie, wie Musik zu visueller Kunst wird.
        <br />
        Laden Sie Ihre Lieblingsmusik hoch oder starten Sie den Beat-Generator.
      </motion.p>
    </SoundContainer>
  )
}

export default SoundReactive
