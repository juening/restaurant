import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/MP.svg';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/menu" className="option">
          Menu
        </Link>
        <Link to="contact" className="option">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
