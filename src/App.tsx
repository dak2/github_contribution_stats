import React from 'react';
import ContributtionCard from './components/organisms/ContributtionCard';
import './App.css';
import { getContributions } from './functions/GetGithubContribution';

const App: React.FC = () => {
  return (
    <div className="App">
      <button onClick={() => getContributions('dak2')}>test</button>
      <ContributtionCard />
    </div>
  );
};

export default App;
