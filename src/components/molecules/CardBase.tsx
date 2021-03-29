import React from 'react';
import style from '../../styles/CardBase.module.css';
import BarChart from '../atoms/BarChart';
import PieChart from '../atoms/PieChart';
import UserIcon from '../atoms/UserIcon';

type Commits = {
  id: string;
  type: string;
  actor: Record<string, unknown>;
  repo: Record<string, unknown>;
  payload: Record<string, unknown>;
};

type User = {
  avatar_url: string;
  login: string;
  url: string;
};

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
