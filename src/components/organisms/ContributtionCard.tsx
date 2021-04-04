import React from 'react';
import { useLocation } from 'react-router-dom';
import { Events, User } from '../../utils/propsType';
import CardBase from '../molecules/CardBase';
import InputForm from '../molecules/InputForm';

type LocationState = {
  user: User;
  events: Events[];
};

const ContributtionCard: React.FC = () => {
  const location = useLocation<LocationState>();
  if (location.state != undefined) {
    const { user, events } = location.state;
    return (
      <div>
        <CardBase user={user} events={events} />
      </div>
    );
  } else {
    return (
      <div>
        <InputForm />
      </div>
    );
  }
};

export default ContributtionCard;
