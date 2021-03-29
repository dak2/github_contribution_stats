import React from 'react';
import { useLocation } from 'react-router-dom';
import CardBase from '../molecules/CardBase';

type LocationState = {
  user: any;
  commits: any;
};

const ContributtionCard: React.FC = () => {
  const location = useLocation<LocationState>();
  const { user, commits } = location.state;
  console.log('location', location);

  return (
    <div>
      <CardBase user={user} commits={commits} />
    </div>
  );
};

export default ContributtionCard;
