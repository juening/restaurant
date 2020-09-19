import React from 'react';

import GroupItem from '../GroupItem/GroupItem';

import './GroupPreview.scss';

const GroupPreview = ({ title, items }) => {
  return (
    <div className="menu-preview">
      <h1 className="title">{title.toUpperCase()}</h1>

      <div className="preview">
        {items
          .filter((group, idx) => idx < 4)
          .map((item) => (
            <GroupItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default GroupPreview;
