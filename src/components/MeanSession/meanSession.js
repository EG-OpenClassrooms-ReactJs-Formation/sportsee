import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './meanSession.css'
import PropTypes from 'prop-types';

/**
* LineChart with the average time of user sessions
* @param { Object } data // Follow the model UserAverageSession
*/
export default class MeanSession extends PureComponent {

  render() {
    
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    return (
      <ResponsiveContainer width={300} height={280}>
        <LineChart
          width={300}
          height={300}
          data={this.props.data.sessions}
          margin={{
            top: 0,
            right: 0,
            left: 15,
            bottom: 0,
          }}
        >
        
        <XAxis
          
          dataKey="day"
          stroke="white"
          axisLine={false}
          tickLine={false}
          dx={-6}
        />

        <YAxis type="number" domain={[-10, 100]} hide={true} />
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
          type="natural"
          strokeWidth={2} 
          // dataKey="pv"
          dataKey="sessionLength"
          stroke="white" 
          dot={false} 
          activeDot={{ r: 8 }} 
          
        />
            
        </LineChart>
      </ResponsiveContainer>
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

MeanSession.propTypes = {
  data: PropTypes.object
}