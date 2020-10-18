import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {signOutStart, signOutSuccess} from '../../redux/user/userActions'

import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectBagHidden } from '../../redux/bag/bagSelector';

import { ReactComponent as Logo } from '../../assets/MP.svg';
import ShoppingBag from '../ShoppingBag/ShoppingBag';
import BagDropdownContainer from '../BagDropdown/BagDropdownContainer';

import './Header.scss';

const Header = ({ currentUser, hidden , signOutStart}) => {
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
          <div className="option" onClick={signOutStart}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <ShoppingBag />
      </div>
      {!hidden && <BagDropdownContainer />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectBagHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart:() => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
