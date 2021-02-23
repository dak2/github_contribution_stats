import BarChart from './BarChart';
import PieChart from './PieChart';
import UserIcon from './UserIcon';
import style from '../../styles/CardBase.module.css'

function CardBase() {
  return (
    <div className={style.l_wrapper_06}>
      <div className={style.user_icon}>
        <UserIcon />
      </div>
      <div className={style.pie_chart}>
        <PieChart />
      </div>
      <div className={style.bar_chart}>
        <BarChart />
      </div>
    </div>
  );
}

export default CardBase;