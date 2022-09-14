import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './meanSession.css'
import { UserAverageSession } from '../../models/models';
import { USER_AVERAGE_SESSIONS } from '../../data/data';

const dataFormated = new UserAverageSession(USER_AVERAGE_SESSIONS[0].userId, USER_AVERAGE_SESSIONS[0].sessions)
/*
const data = [
  {
    name: 'L',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'M',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'M',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'J',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'V',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'S',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'D',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
*/
export default class MeanSession extends PureComponent {

  render() {
    return (
      
        <LineChart
          width={500}
          height={300}
          data={dataFormated.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
        
        <XAxis 
          // dataKey="name"
          dataKey="day" 
          stroke="white"
          axisLine={false}
          tickLine={false}
          
        />
        
        <Tooltip 
          //wrapperStyle={{ outline: 'none', color: 'black' }}
          //labelStyle={{color: 'black'}}
          //contentStyle={{color: 'black'}}
          //
          //wrapperStyle={{ zIndex: 1000 }}
        
          wrapperStyle={{ backgroundColor: "white", outline: 'none' }}
          labelStyle={{ display: 'none' }}
          itemStyle={{ color: "black" }}
          content={<CustomTooltip />}
          formatter={function(value, name) {
            return `${value} min`;
          }}
          
          
        />
        
        
        <Line
          type="monotone"
          strokeWidth={2} 
          // dataKey="pv"
          dataKey="sessionLength"
          stroke="white" 
          dot={false} 
          activeDot={{ r: 8 }} 
        />
            
        </LineChart>
      
    );
  }
}
const CustomTooltip = ({ active, payload, label }) => {
	if (active) {
		return (
			<div className="custom-tooltip">
				<p className="label">{`${payload[0].value} min`}</p>
			</div>
		);
	}

	return null;
};