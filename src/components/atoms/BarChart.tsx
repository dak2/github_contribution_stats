import { VictoryBar } from "victory";

function BarChart() {
  const sampleData = [
    { x: 1 },
    { x: 2 },
    { x: 2 },
    { x: 4 },
    { x: 4 },
    { x: 5 }
  ]
  return (
    <div>
      <VictoryBar 
        data={sampleData}
      />
    </div>
  );
}

export default BarChart;