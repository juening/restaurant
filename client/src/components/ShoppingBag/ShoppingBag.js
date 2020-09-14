import React from 'react';

import { ReactComponent as BagIcon } from '../../assets/ShoppingBag.svg';

import './ShoppingBag.scss';

const ShoppingBag = () => (
  <div className="cart-icon">
    <BagIcon className="bag-icon" />
    <div className="item-count">0</div>
  </div>
);

export default ShoppingBag;
