import React from 'react';

import './HomePage.scss';

const Home = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <div className="title">ENTREES</div>
            <span className="subtitle">ORDER NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">CHEF RECOMMENDATIONS</div>
            <span className="subtitle">ORDER NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">APPETIZERS</div>
            <span className="subtitle">ORDER NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">SOUPS AND SALADS</div>
            <span className="subtitle">ORDER NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">DRINKS</div>
            <span className="subtitle">ORDER NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
