import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'




export default function GamePlay() {
  const [selectedNumber,setSelectedNumber] = useState()
  const [currentDice,setCurrentDice] = useState(1)

  function checkWin() {
    if(selectedNumber === currentDice) {
      alert('Hello World')
    }
  }
  return (
        <MainContainer>
           <div className='topsection'>
           <TotalScore/>
           <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
           </div>
           <RoleDice setCurrentDice={setCurrentDice} currentDice={currentDice}/>
        </MainContainer>
  )
}



const MainContainer = styled.main`
  .topsection {
    display: flex;
    padding-top: 70px;
    justify-content: space-around;
    align-items: end;
  }
`