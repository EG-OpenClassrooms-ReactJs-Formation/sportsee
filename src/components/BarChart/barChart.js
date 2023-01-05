import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import colors from '../../utils/style/colors';
import PropTypes from 'prop-types';

/** @class BarChartDouble
* @classdesc BarChart with the Weight and KCal of the user
* @param { Object } data // Follow the model UserActivity
*/
export class BarChartDouble extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width={"99%"} height={300}>
        <BarChart
          
          height={300}
          data={this.props.data.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          
        >
          <CartesianGrid
            strokeDasharray="2 2"
            
            vertical={false}
          />
          <XAxis 
            tickLine={false} 
            axisLine={false}
          />
          {/* <YAxis orientation="right" dataKey="kilogram" domain={['auto', 'auto']}/> */}
          <YAxis
            yAxisId="right"
            orientation="right" 
            tickLine={false} 
            axisLine={false}
            dataKey="kilogram"
            domain={[65, 85]}
          />
          <YAxis
            yAxisId="left"
            orientation="left" 
            tickLine={false} 
            axisLine={false}
            dataKey="calories"
            hide={true}
          />
          
          <Tooltip 
            content={CustomTooltip} 
            wrapperStyle={{ 
              backgroundColor: "#e60000", 
              color: colors.ternary,
              justifyContent: 'center',
              alignContent: "center",
              outline: 'none',
              marginLeft: '20px'
            }}
          />
          {/* <Legend layout="horizontal" verticalAlign="start" align="right" /> */}
          {/* <Legend style={{position: 'absolute',width: "1158px",height: 'auto',right: "80px", top: "-40px"}}/> */}
          <Legend
              verticalAlign="top"
              layout="horizontal"
              align="right"
              wrapperStyle={{
                  paddingBottom: "50px"
              }}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram" 
            name="Poids (kg)"
            fill="black"
            barSize={8}
            radius={[8,8, 0, 0]}
            legendType={'circle'}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            name= "Calories brûlées (kCal)"
            fill="#e60000" 
            barSize={8}
            radius={[8,8, 0, 0]}
            legendType={'circle'}
          />
          
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

const CustomTooltip = ({ active, payload, label }) => {
	if (active) {
		return (
			<div className="custom-tooltip" style={{textAlign: 'center'}}>
				<p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}Kcal`}</p>
			</div>
		);
	}

	return null;
};

BarChartDouble.propTypes = {
  data: PropTypes.object,
}