import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectBagItems } from '../../redux/bag/bagSelector';
import CustomButtom from '../CustomButton/CustomButton';
import BagItem from '../BagItem/BagItem';

import './BagDropdown.scss';

const BagDropdown = ({ bagItems, history }) => {
  return (
    <div className="bag-dropdown">
      <div className="bag-items">
        {bagItems.length ? (
          bagItems.map((bagItem) => <BagItem key={bagItem.id} item={bagItem} />)
        ) : (
          <span className="empty-message">Your bag is empty.</span>
        )}
      </div>
      <CustomButtom onClick={() => history.push('/checkout')}>
        GO TO CHECKOUT
      </CustomButtom>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  bagItems: selectBagItems,
});

export default withRouter(connect(mapStateToProps)(BagDropdown));
