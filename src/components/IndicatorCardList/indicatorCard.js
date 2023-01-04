import React from 'react'
import IndicatorCard from '../IndicatorCard/indicatorCard'
import PropTypes from 'prop-types'

/**
* List of IndicatorCards filled with user info 
* @param { Object } userMainData // Follow the model userMainData
*/
export default function IndicatorCardList(userMainData) {

  return (
      <div>
    {
        userMainData.keyData ?
        Object.keys(userMainData.keyData).map((key, index) =>(
            <IndicatorCard
              key={key}
              fieldName={key}
              data={userMainData}
            />
          )): null
    }
    </div>
  )
}

IndicatorCardList.propTypes = {
  userMainData: PropTypes.object
}