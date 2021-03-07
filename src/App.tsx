import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InputForm from './components/molecules/InputForm';
import ContributtionCard from './components/organisms/ContributtionCard';
import { fetchLocalStorage } from './functions/fetchLocalStorage';
import './App.css';

const fetchLocalStorageItem = fetchLocalStorage();

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/card">
            {fetchLocalStorageItem ? <ContributtionCard /> : <InputForm />}
          </Route>
          <Route path="/">
            {fetchLocalStorageItem ? <ContributtionCard /> : <InputForm />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
