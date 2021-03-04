import React from 'react';
import ContributtionCard from './components/organisms/ContributtionCard';
import './App.css';
import {
  getGithubUser,
  getGithubCommits,
} from './functions/fetchGithubData';

const App: React.FC = () => {
  return (
    <div className="App">
      <button onClick={() => getGithubUser('dak2')}>getUser</button>
      <button onClick={() => getGithubCommits('dak2')}>getCommits</button>
      <ContributtionCard />
    </div>
  );
};

export default App;
