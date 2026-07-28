import { useState, useRef } from 'react'
import LoaderScreen from './components/LoaderScreen';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import ParentsSection from './components/ParentsSection';
import Petals from './components/Petals';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef(null);

  const handleEnter = () => {
    // 🔊 reproducir inmediatamente (esto es clave)
    audioRef.current?.play().catch(() => {});

    // esperamos a que termine animación del loader
    // setTimeout(() => {
      setEntered(true);
   // }, 850); // iguala tu animación (0.8–0.9s)
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/song-xv.mp3" type="audio/mpeg" />
      </audio>

      {!entered ? (
        <LoaderScreen onEnter={handleEnter} />
      ) : (
        <>
        <BackgroundEffects/>
        
        <div style={{position: "relative", zIndex: 5}}>
          <Hero />
          <div style={{ position: "relative", zIndex: 5, overflow: "hidden"  }}>
            <Petals />
            <Countdown />
            <ParentsSection />
          </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;