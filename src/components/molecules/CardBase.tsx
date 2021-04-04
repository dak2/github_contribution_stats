import React from 'react';
import style from '../../styles/CardBase.module.css';
import { Events, User } from '../../utils/propsType';
import BarChart from '../atoms/BarChart';
import PieChart from '../atoms/PieChart';
import UserIcon from '../atoms/UserIcon';

type Props = {
  user: User;
  events: Events[];
};

const CardBase: React.FC<Props> = (props: Props) => {
  const { user, events } = props;
  console.log('events', events);
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
        <PieChart />
      </div>
      <div className={style.bar_chart}>
        <BarChart events={pushEvents} />
      </div>
    </div>
  );
};

export default CardBase;
