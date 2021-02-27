import { VictoryPie } from "victory";

function PieChart() {
  const sampleData = [
    { x: 1, y: 2, label: "one" },
    { x: 2, y: 3, label: "two" },
    { x: 3, y: 5, label: "three" }
  ]
  return (
    <VictoryPie
      height={250}
      data={sampleData}
    />
  );
}

export default PieChart;
