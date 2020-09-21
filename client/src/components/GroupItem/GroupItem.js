import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import { addItem } from '../../redux/bag/bagActions';

import './GroupItem.scss';

const GroupItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="group-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="group-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to Bag{' '}
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(GroupItem);
