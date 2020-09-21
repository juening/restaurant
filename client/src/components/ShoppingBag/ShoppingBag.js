import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectBagItemsCount } from '../../redux/bag/bagSelector';
import { toggleBagHidden } from '../../redux/bag/bagActions';

import { ReactComponent as BagIcon } from '../../assets/ShoppingBag.svg';

import './ShoppingBag.scss';

const ShoppingBag = ({ toggleBagHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleBagHidden}>
    <BagIcon className="bag-icon" />
    <div className="item-count">{itemCount}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectBagItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleBagHidden: () => dispatch(toggleBagHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);
