import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import MenuPage from './pages/MenuPage/MenuPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/menu" component={MenuPage} />
      </Switch>
    </div>
  );
}

export default App;
