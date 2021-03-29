import React from 'react';
import style from '../../styles/CardBase.module.css';
import { Commits, User } from '../../utils/propsType'
import BarChart from '../atoms/BarChart';
import PieChart from '../atoms/PieChart';
import UserIcon from '../atoms/UserIcon';

type Props = {
  user: User;
  commits: Commits[];
};

const CardBase: React.FC<Props> = (props: Props) => {
  const { user, commits } = props;
  const pushEvents = commits.filter((commit) => {
    return commit.type == 'PushEvent';
  });
  return (
    <div className={style.l_wrapper_06}>
      <div className={style.user_icon}>
        <UserIcon
          avatarUrl={user.avatar_url}
          name={user.login}
          url={user.url}
        />
      </div>
      <div className={style.pie_chart}>
        <PieChart />
      </div>
      <div className={style.bar_chart}>
        <BarChart commits={pushEvents}/>
      </div>
    </div>
  );
};

export default CardBase;
