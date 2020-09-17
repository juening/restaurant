import React from 'react';
import { connect } from 'react-redux';

import { toggleBagHidden } from '../../redux/bag/bagActions';

import { ReactComponent as BagIcon } from '../../assets/ShoppingBag.svg';

import './ShoppingBag.scss';

const ShoppingBag = ({ toggleBagHidden }) => (
  <div className="cart-icon" onClick={toggleBagHidden}>
    <BagIcon className="bag-icon" />
    <div className="item-count">0</div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleBagHidden: () => dispatch(toggleBagHidden()),
});

export default connect(null, mapDispatchToProps)(ShoppingBag);
