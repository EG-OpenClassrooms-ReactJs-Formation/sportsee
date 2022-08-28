import React from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

import {USER_MAIN_DATA} from '../../data/data'

const DashBoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const DashBoardTitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`
const DashBoardDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  
`
const DashBoardGraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`

const DashBoardIndicatorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`

export default function DashBoard() {

    // test done with the user ID 12
    const UserID = 12
    const userData = USER_MAIN_DATA.filter(x => x.id === UserID)[0]
    console.log(userData)
    return (
    <DashBoardWrapper>
        <SideBar/>

        <DashBoardContainer>
            <DashBoardTitlesContainer>
                <h1>Bonjour {userData.userInfos.firstName}</h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
            </DashBoardTitlesContainer>

            <DashBoardDataContainer>
                <DashBoardGraphsContainer>

                </DashBoardGraphsContainer>

                <DashBoardIndicatorsContainer>
                
                </DashBoardIndicatorsContainer>

            </DashBoardDataContainer>
        </DashBoardContainer>
    </DashBoardWrapper>
  )
}
