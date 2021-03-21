import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InputForm from './components/molecules/InputForm';
import ContributtionCard from './components/organisms/ContributtionCard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/card">
            <ContributtionCard />
          </Route>
          <Route path="/">
            <InputForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
