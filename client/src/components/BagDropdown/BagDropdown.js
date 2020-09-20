import React from 'react';
import { connect } from 'react-redux';

import CustomButtom from '../CustomButton/CustomButton';
import BagItem from '../BagItem/BagItem';

import './BagDropdown.scss';

const BagDropdown = ({ bagItems }) => {
  return (
    <div className="bag-dropdown">
      <div className="bag-items">
        {bagItems.map((bagItem) => (
          <BagItem key={bagItem.id} item={bagItem} />
        ))}
      </div>
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bagItems: state.bag.bagItems,
});

export default connect(mapStateToProps)(BagDropdown);
