import { VictoryHistogram } from "victory";

function HistogramChart() {
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
      <VictoryHistogram 
        data={sampleData}
      />
    </div>
  );
}

export default HistogramChart;