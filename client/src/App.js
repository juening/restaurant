import React, { Component } from 'react';
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

// import {
//   auth,
//   createUserProfileDocument,
//   addCollectionAndDocuments,
// } from './firebase/firebase';
// import { setCurrentUser } from './redux/user/userActions';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // const { setCurrentUser, categories } = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot((snapshot) => {
    //       setCurrentUser({ id: snapshot.id, ...snapshot.data() });
    //     });
    //   } else {
    //     setCurrentUser(userAuth);
    //   }
    // });
    // addCollectionAndDocuments(
    //   'categories',
    //   categories.map(({ items, title }) => ({ items, title }))
    // );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
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
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  categories: selectCategoriesForOverview,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
