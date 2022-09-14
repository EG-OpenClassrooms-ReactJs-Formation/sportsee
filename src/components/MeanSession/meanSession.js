import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './meanSession.css'
import { UserAverageSession } from '../../models/models';
import { USER_AVERAGE_SESSIONS } from '../../data/data';

//const dataFormated = new UserAverageSession(USER_AVERAGE_SESSIONS[0].userId, USER_AVERAGE_SESSIONS[0].sessions)

export default class MeanSession extends PureComponent {

  render() {
    return (
      
        <LineChart
          width={500}
          height={300}
          data={this.props.data.sessions}
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