import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'
import StartGame from './components/StartGame'



  

function App() {
  const [isGameStarted,setIsGameStarted] = useState(false)
  const toggleGamePlay = () => {
    setIsGameStarted(prev => !prev)
  }
  return (
    <>

    <StartGame/>
    </>
    )
}

export default App
