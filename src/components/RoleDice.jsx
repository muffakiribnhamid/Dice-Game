import React, { useState } from 'react'
import styled from 'styled-components'

function RoleDice({
    currentDice,setCurrentDice
}) {
    const generateRandomNumber = (min,max) => {
         console.log(Math.floor(Math.random() * (max - min) + min));
          
         return Math.floor(Math.random() * (max - min) + min)

    }

    const roleDice = () => {
        const randomNumber = generateRandomNumber(1,7)

        setCurrentDice(prevValue => randomNumber)
    } 
  return (
   <DiceContainer>
    <div className='dice'
    onClick={() => roleDice()}>
        <img src={`/src/assets/images/dice_${currentDice}.png`} alt="Dice 1 " />
    </div>
    <p>Click on Dice to roll</p>
   </DiceContainer>
  )
}

export default RoleDice


const DiceContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 48px;
.dice {
    cursor: pointer;
}
`