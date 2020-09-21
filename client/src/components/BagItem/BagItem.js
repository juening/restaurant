import React from 'react';

import './BagItem.scss';

const BagItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="bag-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default BagItem;
