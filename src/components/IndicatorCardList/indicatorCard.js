import React from 'react'
import IndicatorCard from '../IndicatorCard/indicatorCard'

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
