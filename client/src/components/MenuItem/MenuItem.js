import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">ORDER NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
