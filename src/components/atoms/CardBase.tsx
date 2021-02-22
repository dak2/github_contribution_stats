import BarChart from './BarChart';
import PieChart from './PieChart';
import UserIcon from './UserIcon';
import '../../styles/CardBase.css'

function CardBase() {
  return (
    <div className="l-wrapper_06">
      <div className="user_icon">
        <UserIcon />
      </div>
      <div className="piechart">
        <PieChart />
      </div>
      <div className="histogramchart">
        <BarChart />
      </div>
    </div>
  );
}

export default CardBase;