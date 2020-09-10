import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import MenuPage from './pages/MenuPage/MenuPage';
import AuthPage from './pages/AuthPage/AuthPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/menu" component={MenuPage} />
        <Route exact path="/signin" component={AuthPage} />
      </Switch>
    </div>
  );
}

export default App;
