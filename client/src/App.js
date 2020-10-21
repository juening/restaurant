import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/userSelector';
import { selectCategoriesForOverview } from './redux/menu/menuSelector';

import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import MenuPage from './pages/MenuPage/MenuPage';
import AuthPage from './pages/AuthPage/AuthPage';
import Header from './components/Header/Header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import { checkUserSession } from './redux/user/userActions';

const App =( { checkUserSession,currentUser  }) => {
 useEffect(() => {
   checkUserSession()
 }, [checkUserSession])

    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/menu" component={MenuPage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
          />
        </Switch>
      </div>
    );
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  categories: selectCategoriesForOverview,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
