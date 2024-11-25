import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'


export default function GamePlay() {
  return (
        <MainContainer>
           <div className='topsection'>
           <TotalScore/>
           <NumberSelector/>
           </div>
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