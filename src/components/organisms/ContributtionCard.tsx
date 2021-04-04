import React from 'react';
import { useLocation } from 'react-router-dom';
import { Events, User } from '../../utils/propsType';
import CardBase from '../molecules/CardBase';

type LocationState = {
  user: User;
  events: Events[];
};

const ContributtionCard: React.FC = () => {
  const location = useLocation<LocationState>();
  const { user, events } = location.state;

  return (
    <div>
      <CardBase user={user} events={events} />
    </div>
  );
};

export default ContributtionCard;
