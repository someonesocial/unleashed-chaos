import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'

const GalleryContainer = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: ${props => props.chaosMode 
    ? 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 25%, #feca57 50%, #ff9ff3 75%, #45b7d1 100%)'
    : 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'};
  background-size: ${props => props.chaosMode ? '400% 400%' : '100% 100%'};
  animation: ${props => props.chaosMode ? 'chaosGradient 8s ease infinite' : 'none'};
  position: relative;
  overflow: hidden;

  @keyframes chaosGradient {
    0% { background-position: 0% 50%; }
    25% { background-position: 100% 50%; }
    50% { background-position: 50% 100%; }
    75% { background-position: 0% 0%; }
    100% { background-position: 0% 50%; }
  }
`

const Title = styled(motion.h2)`
  font-size: 4rem;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.chaosMode ? '3rem' : '2rem'};
  max-width: 1200px;
  margin: 0 auto;
  transform: ${props => props.chaosMode ? 'perspective(1000px) rotateX(5deg)' : 'none'};
`

const GalleryItem = styled(motion.div)`
  position: relative;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  background: ${props => props.background};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`

const ItemContent = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 2rem;
  text-align: center;
`

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`

const ItemDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
`

const Modal = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`

const ModalContent = styled(motion.div)`
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 20px;
  padding: 3rem;
  max-width: 600px;
  color: white;
  text-align: center;
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`

const InteractiveElement = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  margin: 2rem auto;
  cursor: pointer;
`

const ChaosGallery = ({ chaosMode }) => {
  const [selectedItem, setSelectedItem] = useState(null)

  const galleryItems = [
    {
      id: 1,
      title: "Fraktale Träume",
      description: "Verlieren Sie sich in unendlichen mathematischen Mustern, die Ihre Wahrnehmung herausfordern.",
      background: "linear-gradient(45deg, #ff6b6b, #ee5a6f, #ff8a80)",
      interactive: true
    },
    {
      id: 2,
      title: "Digitale Synapsen",
      description: "Erleben Sie das Feuern von Neuronen in einer digitalen Interpretation des Bewusstseins.",
      background: "linear-gradient(45deg, #4ecdc4, #44a08d, #26d0ce)",
      interactive: false
    },
    {
      id: 3,
      title: "Zeitverzerrung",
      description: "Spüren Sie, wie die Zeit ihre linearen Eigenschaften verliert und zu einem Kunstwerk wird.",
      background: "linear-gradient(45deg, #45b7d1, #96c93d, #74b9ff)",
      interactive: true
    },
    {
      id: 4,
      title: "Emotion.exe",
      description: "Was passiert, wenn Maschinen lernen zu fühlen? Eine digitale Interpretation menschlicher Emotionen.",
      background: "linear-gradient(45deg, #feca57, #ff9ff3, #fd79a8)",
      interactive: false
    },
    {
      id: 5,
      title: "Chaos Theorie",
      description: "Der Schmetterlingseffekt visualisiert - kleine Änderungen führen zu gewaltigen Transformationen.",
      background: "linear-gradient(45deg, #fd79a8, #fdcb6e, #e17055)",
      interactive: true
    },
    {
      id: 6,
      title: "Quantenrealität",
      description: "Tauchen Sie ein in die bizarre Welt der Quantenmechanik, wo nichts ist, wie es scheint.",
      background: "linear-gradient(45deg, #6c5ce7, #a29bfe, #fd79a8)",
      interactive: false
    }
  ]

  const handleItemClick = (item) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <GalleryContainer chaosMode={chaosMode}>
      <Title
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={chaosMode ? {
          rotateY: [0, 15, -15, 0],
          color: ['#fff', '#ff6b6b', '#4ecdc4', '#feca57', '#ff9ff3', '#fff']
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
        tabIndex={0}
        aria-label="Kunstgalerie Titel"
      >
        Digitale Kunstgalerie
      </Title>

      <GalleryGrid chaosMode={chaosMode}>
        {galleryItems.map((item, index) => (
          <GalleryItem
            key={item.id}
            background={item.background}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: chaosMode ? 1.15 : 1.05,
              boxShadow: chaosMode 
                ? "0 40px 80px rgba(255, 107, 107, 0.6)"
                : "0 30px 60px rgba(0, 0, 0, 0.5)",
              rotateY: chaosMode ? 10 : 0
            }}
            animate={chaosMode ? {
              rotateZ: [0, 2, -2, 0],
              filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
            } : {}}
            transition={chaosMode ? {
              duration: 3 + index * 0.5,
              repeat: Infinity
            } : { delay: index * 0.1, duration: 0.6 }}
            onClick={() => handleItemClick(item)}
          >
            <ItemContent
              whileHover={{ 
                background: chaosMode 
                  ? "rgba(255, 107, 107, 0.3)" 
                  : "rgba(0, 0, 0, 0.7)" 
              }}
            >
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
              {item.interactive && (
                <motion.div
                  style={{
                    marginTop: '1rem',
                    fontSize: '0.9rem',
                    opacity: 0.8
                  }}
                  animate={{ 
                    color: chaosMode 
                      ? ['#fff', '#ff6b6b', '#4ecdc4', '#feca57', '#ff9ff3']
                      : ['#fff', '#ff6b6b', '#4ecdc4', '#feca57'],
                    scale: chaosMode ? [1, 1.1, 1] : 1
                  }}
                  transition={{ 
                    duration: chaosMode ? 1.5 : 2,
                    repeat: Infinity 
                  }}
                >
                  ✨ {chaosMode ? 'ULTRA-Interaktiv' : 'Interaktiv'}
                </motion.div>
              )}
            </ItemContent>
          </GalleryItem>
        ))}
      </GalleryGrid>

      <AnimatePresence>
        {selectedItem && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, rotate: 10 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={closeModal}>×</CloseButton>
              <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>
                {selectedItem.title}
              </h2>
              <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {selectedItem.description}
              </p>
              
              {selectedItem.interactive && (
                <InteractiveElement
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                    borderRadius: ["50%", "0%", "50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.5,
                    background: "linear-gradient(45deg, #feca57, #ff9ff3, #45b7d1)"
                  }}
                />
              )}
              
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                {selectedItem.interactive 
                  ? "Klicken Sie auf das Element oben für Interaktion!" 
                  : "Lassen Sie dieses Kunstwerk auf sich wirken."
                }
              </p>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </GalleryContainer>
  )
}

export default ChaosGallery
