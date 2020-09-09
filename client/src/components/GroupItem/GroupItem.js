import React from 'react';

import './GroupItem.scss';

const GroupItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="group-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="group-footer">
        {/* <span className="name">{name}</span> */}
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default GroupItem;
