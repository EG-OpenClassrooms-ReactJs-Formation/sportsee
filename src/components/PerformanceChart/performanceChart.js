import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import colors from '../../utils/style/colors';
import { USER_PERFORMANCE } from '../../data/data';
import {UserPerformance} from '../../models/models';
/*
var dataFormated = new UserPerformance(
    USER_PERFORMANCE[0].userId,
    USER_PERFORMANCE[0].data
);*/
export default class PerformanceChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';
  /*
  constructor(){
    super();
    
  }*/
  
  render() {
    
    return (
      
        <RadarChart
            width={400}
            height={300}
            cx="50%" 
            cy="50%" 
            outerRadius="80%" 
            data={this.props.data.data}>
          <PolarGrid stroke="white" radialLines={false}/>
          <PolarAngleAxis dataKey="type" stroke="white" tickLine={false}/>
          
          <Radar name="Performance" dataKey="value" fill={`${colors.primary}`} fillOpacity={0.8} />
        </RadarChart>
      
    );
  }
}