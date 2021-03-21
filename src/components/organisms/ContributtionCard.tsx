import React from 'react';
import { useLocation } from 'react-router-dom';
import CardBase from '../molecules/CardBase';

const ContributtionCard: React.FC = () => {
  const location = useLocation();
  console.log('location', location);
  return (
    <div>
      <CardBase />
    </div>
  );
};

export default ContributtionCard;
