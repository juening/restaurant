import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase';

import { ReactComponent as Logo } from '../../assets/MP.svg';

import './Header.scss';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/menu" className="option">
          MENU
        </Link>
        <Link to="contact" className="option">
          CONTACT US
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
