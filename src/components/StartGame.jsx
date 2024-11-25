import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
    color: white;
    padding: 10px;
    background-color: black;    
`;


function StartGame({toggle}) {
  return (
    <div className="main">
        <div className="left">
            <img className='img' src="src\assets\dices 1.png" alt="" />
        </div>
        <div className="right">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </div>
  )
}

export default StartGame