import React from 'react';
import { connect } from 'react-redux';

import { toggleBagHidden } from '../../redux/bag/bagActions';

import { ReactComponent as BagIcon } from '../../assets/ShoppingBag.svg';

import './ShoppingBag.scss';

const ShoppingBag = ({ toggleBagHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleBagHidden}>
    <BagIcon className="bag-icon" />
    <div className="item-count">{itemCount}</div>
  </div>
);

const mapStateToProps = (state) => ({
  itemCount: state.bag.bagItems.reduce((acc, item) => acc + item.quantity, 0),
});

const mapDispatchToProps = (dispatch) => ({
  toggleBagHidden: () => dispatch(toggleBagHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);
