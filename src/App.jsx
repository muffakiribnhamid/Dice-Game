import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'


  

function App() {
  const [isGameStarted,setIsGameStarted] = useState(false)
  const toggleGamePlay = () => {
    setIsGameStarted(prev => !prev)
  }
  return (
    <>
     {
        isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>
      }

      <p className='made'>Made with ❤️ by <u><a href="https://github.com/muffakiribnhamid" target='_blank'>Muffakir Hamid</a></u></p>
    
    </>
    )
}

export default App
