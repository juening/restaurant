import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectBagItems } from '../../redux/bag/bagSelector';
import CustomButtom from '../CustomButton/CustomButton';
import BagItem from '../BagItem/BagItem';

import './BagDropdown.scss';

const BagDropdown = ({ bagItems }) => {
  return (
    <div className="bag-dropdown">
      <div className="bag-items">
        {bagItems.length ? (
          bagItems.map((bagItem) => <BagItem key={bagItem.id} item={bagItem} />)
        ) : (
          <span className="empty-message">Your bag is empty.</span>
        )}
      </div>
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  bagItems: selectBagItems,
});

export default connect(mapStateToProps)(BagDropdown);
