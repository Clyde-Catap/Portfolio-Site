import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {backGround, appendClass} from './TailwindClassNames/TailwindClassNames';

function App() {
  const [count, setCount] = useState(0)

  document.documentElement.className = backGround;

  return (
    <>
    <div>
      <h1 className="text-3xlunderline text-white">Working</h1>
    </div>

    </>
  )
}

export default App
