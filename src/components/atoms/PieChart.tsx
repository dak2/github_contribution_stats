import React from 'react';
import { VictoryPie } from 'victory';
import { groupedLanguages } from '../../functions/groupedLanguages';
import { Repos } from '../../utils/propsType';

type Props = {
  repos: Repos[];
};

const PieChart: React.FC<Props> = (props: Props) => {
  const languages = groupedLanguages(props.repos);
  const sampleData = [
    { x: 1, y: 2, label: 'one' },
    { x: 2, y: 3, label: 'two' },
    { x: 3, y: 5, label: 'three' },
  ];
  const PieData = props.repos ? languages : sampleData;
  return <VictoryPie height={250} data={PieData} colorScale={'green'} />;
};

export default PieChart;
