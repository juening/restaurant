import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectBagTotal, selectBagItems } from '../../redux/bag/bagSelector';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import './CheckoutPage.scss';

const CheckoutPage = ({ bagItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {bagItems.map((item) => (
        <CheckoutItem key={item.id} bagItem={item} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  bagItems: selectBagItems,
  total: selectBagTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
