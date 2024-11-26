import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'




export default function GamePlay() {



  const [score,setScore] = useState(0)
  const [selectedNumber,setSelectedNumber] = useState()
  const [currentDice,setCurrentDice] = useState(1)


  //function to reset the score
  function resetScore() {
    setScore(0)
  }

  //functions to generate random number and roll a dice

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));

    return Math.floor(Math.random() * (max - min) + min)

  }

  const roleDice = () => {
    if(!selectedNumber) return alert('Select a Number First') ;

    const randomNumber = generateRandomNumber(1, 7)

    setCurrentDice(prevValue => randomNumber)


    if(selectedNumber === randomNumber) {
      setScore(prev => prev + randomNumber)
    }
    else {
      setScore(prev => prev - randomNumber)

    }

    setSelectedNumber(undefined)
    giveAlert()

  } 

  function giveAlert() {
    if(score < -100) {
      alert('You are very bad at it ):')

    }
    else if(score > 100) {
      alert('Going good!')
    }
  }



  function checkWin() {
    if(selectedNumber === currentDice) {
      alert('Hello World')
    }
  }
  return (
        <MainContainer>
           <div className='topsection'>
           <TotalScore score={score}/>
           <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
           </div>
           <RoleDice currentDice={currentDice} roleDice={roleDice}/>
           <div className="btns">
           <Button onClick={() => resetScore()}>Reset</Button>
           </div>
        </MainContainer>
  )
}



const MainContainer = styled.main`
  .topsection {
    display: flex;
    padding-top: 70px;
    justify-content: space-around;
    align-items: center;
  }
  .btns {
    text-align: center;
    margin: 40px;
  }
`

const Button = styled.button`
    color: white;
    padding: 10px;
    width: 100px;
    border-radius: 5px;
    font-family: "Poppins";
    font-weight: 600;
    border: none;
    background-color: black;    
    cursor: pointer;

   

`;