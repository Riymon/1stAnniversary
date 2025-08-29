import { useState, useEffect, useRef } from 'react'
import './App.css'
import image from './assets/image.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image9 from './assets/image9.jpg';
import image10 from './assets/image10.jpg';
import image11 from './assets/image11.jpg';
import image12 from './assets/image12.jpg';

function App() {
  const [daysTogether, setDaysTogether] = useState(365)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [hearts, setHearts] = useState([]);
  const [butterflies, setButterflies] = useState([]);

  const messages = [
    "A year of laughter, love, and beautiful memories. Every moment with you is a treasure I hold dear to my heart. Here's to many more years together!",
    "In your arms, I've found my home. In your eyes, I've found my joy. Happy 1st anniversary to the one who makes my heart skip a beat every single day.",
    "365 days of growing together, supporting each other, and building a love that will last a lifetime. I cherish every moment we've shared and look forward to our future.",
  ]

  const photos = [
    { id: 1, src: image, alt: "August 4 2024", text: "Uwaw paka nako dri, btaw dri ko na mas first sight inlove sa imo ka chinita"},
    { id: 2, src: image2, alt: "September 8 2024", text: "Dri na nag sugod akong lumay awh, Dri naka ni tog an ibog sad ka nako, sangko ako kalipay dri" },
    { id: 3, src: image3, alt: "October 6 2024", text:"3rd Day man tingali ni laag2 nato gabie rag aning tima dka mo sugot mag Islam ko dri sad ni gana atong pangka ninja moves"},
    { id: 4, src: image4, alt: "October 26 2024", text: "First Karaoke Nato first sad sod natos comfort zone"},
    { id: 5, src: image5, alt: "November 3 2024", text: "After sa kaon og buwa, Nag comfort zone ta imo imong ge salig imong kaugalingon sa akoa"},
    { id: 6, src: image6, alt: "November 10 2024", text: "After Bunyag sakong paumangkon hatod ka pa uli para mag pa huway dayun tiktok sa imong trip"},
    { id: 7, src: image7, alt: "December 12 2024", text: "Before ka mo spend sa inyu car2 nakig spend kag time." },
    { id: 8, src: image8, alt: "January 19 2025", text: "First Bonding sa Sinulog pasmo sa Ribshack mangaon" },
    { id: 9, src: image9, alt: "Feb 1 2025", text: "Ambot unsa ning adlawa na guro kay sala ari"},
    { id: 10, src: image10, alt: "May 27 2025", text: "Rag gi mingaw raka nako aning adlawa or advance monthsarry nasad" },
    { id: 11, src: image11, alt: "Febuary 19 2025", text: "Wild kayka aning adlawa sa kahay sala nmu awh" },
    { id: 12, src: image12, alt: "August 4 2025", text: "Bunyag sa bag ong laaganan nya celebrate advance nya tukar pud ka ani adlawa" }
  ]

  useEffect(() => {
    const calculateDaysTogether = () => {
      const anniversaryDate = new Date(2024, 8, 8)
      const today = new Date()
      const diffTime = Math.abs(today - anniversaryDate)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      setDaysTogether(diffDays)
    }
    calculateDaysTogether()
  }, [])

useEffect(() => {
  // Hearts
  const heartCount = 10; // reduce number for performance
  const heartArray = Array.from({ length: heartCount }, (_, i) => ({
    left: Math.random() * 80 + '%',
    delay: Math.random() * 5 + 's',
    key: i,
  }));
  setHearts(heartArray);

  // Butterflies
  const butterflyCount = 5; // reduce number for performance
  const butterflyArray = Array.from({ length: butterflyCount }, (_, i) => ({
    left: Math.random() * 80 + '%',
    delay: Math.random() * 7 + 's',
    key: i,
  }));
  setButterflies(butterflyArray);
}, []);


  const openImageModal = (photo) => {
    setSelectedImage(photo)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const openMessageModal = (msg) => {
    setSelectedMessage(msg)
  }

  const closeMessageModal = () => {
    setSelectedMessage(null)
  }

  return (
    <div className="anniversary-app">
      <div className="container">
        <div className="hearts">
  {hearts.map(h => (
    <div
      className="heart"
      key={h.key}
      style={{ left: h.left, animationDelay: h.delay, position: 'absolute' }}
    >
      ❤️
    </div>
  ))}
</div>
<div className="butterflies">
  {butterflies.map(b => (
    <div
      className="butterfly"
      key={b.key}
      style={{ left: b.left, animationDelay: b.delay, position: 'absolute' }}
    >
      🦋
    </div>
  ))}
</div>
        <div className="header">
          <h1>Happy 1st Anniversary!</h1>
          <div className="date">September 8, 2024 - September 8, 2025</div>
        </div>
        
       <div className="photo-gallery">
      {photos.map(photo => (
        <div key={photo.id} className="photo">
          <img src={photo.src} alt={photo.alt} onClick={() => openImageModal(photo)} />
        </div>
      ))}
    </div>
    <div className="gallery-message-btn">
      <button className="nav-btn" onClick={() => openMessageModal(messages[0])}>
        Show Anniversary Message
      </button>
    </div>
        
        <div className="counter">
          <span id="days">{daysTogether}</span> days together
        </div>
        
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeImageModal}>
              <span>&times;</span>
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
            <p className="modal-caption">{selectedImage.alt}<br /><i>{selectedImage.text}</i></p>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {selectedMessage && (
        <div className="modal-overlay" onClick={closeMessageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeMessageModal}>
              <span>&times;</span>
            </button>
            <div className="modal-text">
              <p>{selectedMessage}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App