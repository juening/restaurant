import React from 'react';

import CustomButtom from '../CustomButton/CustomButton';

import './BagDropdown.scss';

const BagDropdown = () => {
  return (
    <div className="bag-dropdown">
      <div className="bag-items" />
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  );
};

export default BagDropdown;
