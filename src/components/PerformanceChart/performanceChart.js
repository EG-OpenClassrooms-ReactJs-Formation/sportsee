import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import colors from '../../utils/style/colors';
import { USER_PERFORMANCE } from '../../data/data';
import {UserPerformance} from '../../models/models';
const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];
var dataFormated = new UserPerformance(
    USER_PERFORMANCE[0].userId,
    USER_PERFORMANCE[0].data
);
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
            data={dataFormated.data}>
          <PolarGrid stroke="white" radialLines={false}/>
          <PolarAngleAxis dataKey="type" stroke="white" tickLine={false}/>
          
          <Radar name="Performance" dataKey="value" fill={`${colors.primary}`} fillOpacity={0.8} />
        </RadarChart>
      
    );
  }
}