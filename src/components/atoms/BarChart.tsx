import React from 'react';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';

const BarChart: React.FC = () => {
  const sampleData = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 6 },
    { x: 6, y: 7 },
    { x: 7, y: 5 },
  ];
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={{ x: 15 }}
      height={250}
    >
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5, 6, 7]}
        tickFormat={['月', '火', '水', '木', '金', '土', '日']}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(tick) => `$${Math.round(tick)}M`}
      />
      <VictoryBar
        style={{
          data: {
            fill: '#c43a31',
            width: 15,
          },
        }}
        data={sampleData}
      />
    </VictoryChart>
  );
};

export default BarChart;
