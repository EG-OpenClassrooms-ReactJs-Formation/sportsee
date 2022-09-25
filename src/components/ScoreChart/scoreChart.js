import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import styled from 'styled-components';

const RadialBarChartWrapper = styled.div`
  
  overflow: visible;
  
  
`
const data = [
    { name: 'L1', value: 25 }
  ];

const circleSize = 300;
const initialOffset = -20;
export default class ScoreChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';
  
  render() {
    return (
      
        <RadialBarChart
        width={circleSize}
        height={circleSize}
        cx={circleSize / 2}
        cy={circleSize / 2}
        innerRadius={circleSize/3}
        outerRadius={circleSize/3 + 10}
        barSize={10}
        data={[{ name: 'L1', value: this.props.data*100 }]}
        startAngle={90}
        endAngle={450}
        
        >

        <PolarAngleAxis
        type="number"
        domain={[0, 100]}
        angleAxisId={0}
        tick={false}
        fill="white"
        />

        <RadialBar
        clockWise
        dataKey="value"
        cornerRadius={circleSize / 2}
        fill="#ff0000"
        
        />
        <text
        x={circleSize / 2}
        y={circleSize / 2 + initialOffset}
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-label"
        fontSize="28"
        fontWeight="bold"
        >
        {this.props.data * 100}%
        </text>
        <text
        x={circleSize / 2}
        y={circleSize / 2 + initialOffset + 25}
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-label"
        fontSize="24"
        >
        de votre
        </text>
        <text
        x={circleSize / 2}
        y={circleSize / 2 + initialOffset + 50}
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-label"
        fontSize="24"
        >
        objectif
        </text>
        
      </RadialBarChart>
    
    );
  }
}