import React, { useEffect, useState } from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { BarChartDouble } from '../../components/BarChart/barChart'
import {USER_MAIN_DATA} from '../../data/data'
import MeanSession from '../../components/MeanSession/meanSession'
import {UserMainData} from '../../models/models'
import ScoreChart from '../../components/ScoreChart/scoreChart'
import IndicatorCard from '../../components/IndicatorCard/indicatorCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwimmer, faBiking, } from '@fortawesome/free-solid-svg-icons'
import PerformanceChart from '../../components/PerformanceChart/performanceChart'
import { ApiService } from '../../utils/api'

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
  margin-left: 5%;
  
`

const DashBoardTitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`
const DashBoardTitleName = styled.strong`
  color: ${colors.primary};
  
`
const DashBoardDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

const DashBoardGraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
`

const DashBoardBarChart = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.quadrary};
  padding: 20px;
  border-radius: 10px;
`

const TitleBarChart = styled.h2`
  font-size: 24px;
  font-weight: 500;
  padding-left: 20px;
`

const DashBoardMultipleChart = styled.div`
  display: flex;
  gap: 30px;
  
`
const MeanSessionContainer = styled.div`
  background-color: #ff0000;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`
const MeanSessionTitle = styled.h2`
  color: rgba(255, 255, 255, 0.4);
  padding-left: 25px;
  font-weight: 400;
  font-size: 22px;
  flex-wrap: wrap;
  max-width: 170px;
`
const ScoreChartContainer = styled.div`
  background-color: ${colors.quadrary};
  position: relative;
  
`
const PerformanceChartContainer = styled.div`
  background-color: #282d30;
  border-radius: 10px;
  
`
const ScoreChartBackground = styled.div`
  background-color: #fff;
  position: absolute;
  padding: 95px;
  top: 55px;
  left: 55px;
  border-radius: 110px;
`

const DashBoardIndicatorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 258px;
  justify-content: space-between;
`
const apiService = new ApiService()
export default function DashBoard() {
    const userId = 12
    // Declaration of the state variables

    const [userMainData, setUserMainData] = useState(new UserMainData())
    const [userMainDataError, setUserMainDataError] = useState(false)
    // test done with the user ID 12
    
    
    useEffect(() => {
      apiService.getUserMainData(userId, setUserMainData, setUserMainDataError)

    }, [])

    if (userMainDataError === true){
      return null
    }
    console.log(userMainData.keyData)
    return (
    <DashBoardWrapper>
        <SideBar/>

        <DashBoardContainer>
            <DashBoardTitlesContainer>
                <h1>Bonjour <DashBoardTitleName>{userMainData.firstName}</DashBoardTitleName></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </DashBoardTitlesContainer>

            <DashBoardDataContainer>
                <DashBoardGraphsContainer>
                  <DashBoardBarChart>
                    <TitleBarChart>
                      Activité quotidienne
                    </TitleBarChart>
                    <BarChartDouble/>
                  </DashBoardBarChart>
                  <DashBoardMultipleChart>
                    <MeanSessionContainer>
                      <MeanSessionTitle>
                        Durée moyenne des sessions
                      </MeanSessionTitle>
                      <MeanSession />
                    </MeanSessionContainer>

                    <PerformanceChartContainer>
                      <PerformanceChart/>
                    </PerformanceChartContainer>

                    <ScoreChartContainer>
                      <ScoreChartBackground />
                      <ScoreChart/>
                    </ScoreChartContainer>
                  </DashBoardMultipleChart>
                </DashBoardGraphsContainer>


                {/* {
                  
                  <DashBoardIndicatorsContainer>
                  {
                    // Object.keys(userMainData.keyData).map((key, index) =>(
                    //   <IndicatorCard
                    //     key={key}
                    //     fieldName={key}
                    //     data={userMainData}
                    //   />
                    // ))
                    userMainData.keyData.map((key, index) =>(
                      <IndicatorCard
                        key={key}
                        fieldName={key}
                        data={userMainData}
                      />
                    ))
                  }
                  
                </DashBoardIndicatorsContainer>
                } */}

            </DashBoardDataContainer>
        </DashBoardContainer>
    </DashBoardWrapper>
  )
}
