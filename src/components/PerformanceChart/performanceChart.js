import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import colors from '../../utils/style/colors';
import { USER_PERFORMANCE } from '../../data/data';
import {UserPerformance} from '../../models/models';

import PropTypes from 'prop-types'

/** @class PerformanceChart
* @classdesc RadarChart filled with the different performance indicator of the user
* @param { Object } data // Follow the model UserPerformance
*/

export default class PerformanceChart extends PureComponent {
  
  render() {
    console.log(this.props.data.data)
    return (
        <RadarChart
            width={300}
            height={300}
            cx="50%" 
            cy="50%"
            outerRadius="70%" 
            data={this.props.data.data}
        >
          <PolarGrid stroke="white" radialLines={false}/>
          <PolarAngleAxis dataKey="type" stroke="white" tickLine={false} tick={{fontSize: 12, transform: 'translate(0, 3)'}}/>
          <Radar name="Performance" dataKey="value" fill={`${colors.primary}`} fillOpacity={0.8} />
        </RadarChart>
    );
  }
}

PerformanceChart.propTypes = {
  data: PropTypes.object,
}