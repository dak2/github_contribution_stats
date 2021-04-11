import React from 'react';
import { useLocation } from 'react-router-dom';
import { Events, User, Repos } from '../../utils/propsType';
import CardBase from '../molecules/CardBase';
import InputForm from '../molecules/InputForm';

type LocationState = {
  user: User;
  events: Events[];
  repos: Repos[];
};

const ContributtionCard: React.FC = () => {
  const location = useLocation<LocationState>();
  if (location.state != undefined) {
    const { user, events, repos } = location.state;
    return (
      <div>
        <CardBase user={user} events={events} repos={repos} />
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
