import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase';

import { ReactComponent as Logo } from '../../assets/MP.svg';
import ShoppingBag from '../ShoppingBag/ShoppingBag';
import BagDropdown from '../BagDropdown/BagDropdown';

import './Header.scss';

const Header = ({ currentUser, hidden }) => {
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
        <ShoppingBag />
      </div>
      {hidden && <BagDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.bag.hidden,
});

export default connect(mapStateToProps)(Header);
