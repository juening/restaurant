import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import MenuPage from './pages/MenuPage/MenuPage';
import AuthPage from './pages/AuthPage/AuthPage';
import Header from './components/Header/Header';

import { auth, createUserProfileDocument } from './firebase/firebase';

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: { id: snapshot.id, ...snapshot.data() },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
      console.log(this.state);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/signin" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
