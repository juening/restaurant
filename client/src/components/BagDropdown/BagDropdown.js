import React from 'react';

import CustomButtom from '../CustomButton/CustomButton';
import BagItem from '../BagItem/BagItem';
import { toggleBagHidden } from '../../redux/bag/bagActions';

import './BagDropdown.scss';

const BagDropdown = ({ bagItems, history, dispatch }) => {
  return (
    <div className="bag-dropdown">
      <div className="bag-items">
        {bagItems.length ? (
          bagItems.map((bagItem) => <BagItem key={bagItem.id} item={bagItem} />)
        ) : (
          <span className="empty-message">Your bag is empty.</span>
        )}
      </div>
      <CustomButtom
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleBagHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButtom>
    </div>
  );
};

export default BagDropdown;
