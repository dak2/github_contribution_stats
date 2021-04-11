import React from 'react';
import { VictoryPie } from 'victory';
import { Repos } from '../../utils/propsType';

type Props = {
  repos: Repos[];
};

const PieChart: React.FC<Props> = (props: Props) => {

  const sampleData = [
    { x: 1, y: 2, label: 'one' },
    { x: 2, y: 3, label: 'two' },
    { x: 3, y: 5, label: 'three' },
  ];
  return <VictoryPie height={250} data={sampleData} />;
};

export default PieChart;
