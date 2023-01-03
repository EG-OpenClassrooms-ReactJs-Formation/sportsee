import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwimmer, faBiking, faFireAlt, faDrumstickBite, faHamburger} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const IndicatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 124px;
  border-radius: 10px;
  background-color: ${colors.quadrary};
  min-width: 260px;
  padding-bottom: 15px;
  align-items: center;
`
const IconContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  background-color: ${props => props.color};
  height: 64px;
  width: 64px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  font-size: 24px;
  align-self: center;
  line-height: 64px;
  text-align: center;

`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`
const IndicatorValue = styled.p`
  margin: 0;
  font-weight: bold;
`
const IndicatorTitle = styled.p`
  margin: 0;
  
`
export default function IndicatorCard({fieldName, data}) {
  
  let icon = null
  let unit = null
  let colorIcon = null
  let colorBack = null
  let fieldTitle = null
  
  switch (fieldName)
  {
    case "calorieCount":
      icon = faFireAlt;
      unit = "kCal";
      colorIcon = colors.iconFirst;
      colorBack = colors.iconBackFirst;
      fieldTitle = "Calories";
      break
    case "proteinCount":
      icon = faDrumstickBite;
      unit = "g";
      colorIcon = colors.iconSecond;
      colorBack = colors.iconBackSecond;
      fieldTitle = "Proteines";
      break
    case "carbohydrateCount":
      icon = faHamburger;
      unit = "g";
      colorIcon = colors.iconThird;
      colorBack = colors.iconBackThird;
      fieldTitle = "Glucides";
      break
    case "lipidCount":
      icon = faSwimmer;
      unit = "g";
      colorIcon = colors.iconFourth;
      colorBack = colors.iconBackFourth;
      fieldTitle = "Lipides";
      break
    default: 
      icon = faHamburger;
      unit = "g";
      colorIcon = colors.iconFirst;
      colorBack = colors.iconBackFirst;
      fieldTitle = "Calories";
  }
  return (
    <IndicatorWrapper>
        <IconContainer color={`${colorBack}`}>
          <FontAwesomeIcon
              icon={icon}
              color={colorIcon}
            />
          </IconContainer>
        <TextContainer>
          <IndicatorValue>
            {`${data.keyData[fieldName]}${unit}`}
          </IndicatorValue>

          <IndicatorTitle>
            {fieldTitle}
          </IndicatorTitle>
          
        </TextContainer>
    </IndicatorWrapper>
  )
}

IndicatorCard.propTypes = {
  fieldName: PropTypes.string,
  data: PropTypes.object
}