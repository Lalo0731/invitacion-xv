import { useState } from 'react'
import LoaderScreen from './components/LoaderScreen';
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [enter, setEnter] = useState(false);

  if(!enter) return <LoaderScreen onEnter={() => setEnter(true)} />;
  return <div>Invitación aquí</div>;
}

export default App
