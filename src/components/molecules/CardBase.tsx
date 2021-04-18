import React from 'react';
import style from '../../styles/CardBase.module.css';
import { Events, User, Repos } from '../../utils/propsType';
import BarChart from '../atoms/BarChart';
import PieChart from '../atoms/PieChart';
import UserIcon from '../atoms/UserIcon';

type Props = {
  user: User;
  events: Events[];
  repos: Repos[];
};

const CardBase: React.FC<Props> = (props: Props) => {
  const { user, events, repos } = props;
  const pushEvents = events.filter((event) => {
    return event.type == 'PushEvent';
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
        <p>使用言語</p>
        <PieChart repos={repos} />
      </div>
      <div className={style.bar_chart}>
        <p>コミット数</p>
        <BarChart events={pushEvents} />
      </div>
    </div>
  );
};

export default CardBase;
