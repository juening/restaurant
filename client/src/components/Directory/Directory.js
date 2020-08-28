import React, { Component } from 'react';

import MenuItem from '../MenuItem/MenuItem';

import './Directory.scss';

class Directory extends Component {
  state = {
    sections: [
      {
        title: 'APPETIZERS',
        imageUrl: 'https://i.ibb.co/qMX96jL/Shrimppearsummerrolls1.jpg',
        id: 1,
        linkUrl: 'menu/appetizers',
      },
      {
        title: 'SOUPS AND SALADS',
        imageUrl: 'https://i.ibb.co/0hRYrCW/Shrimpnoodlesoup.jpg',
        id: 2,
        linkUrl: 'menu/soupsandsalads',
      },
      {
        title: 'DRINKS',
        imageUrl: 'https://i.ibb.co/YPXwC4m/Drinks.jpg',
        id: 3,
        linkUrl: 'menu/drinks',
      },
      {
        title: 'ENTREES',
        imageUrl: 'https://i.ibb.co/n6SS55W/Entree.jpg',
        id: 4,
        linkUrl: 'menu/entrees',
        size: 'large',
      },
      {
        title: 'CHEF RECOMMENDATIONS',
        imageUrl: 'https://i.ibb.co/Cb0LshR/Chef.jpg',
        id: 5,
        linkUrl: 'menu/chefrecommendations',
        size: 'large',
      },
    ],
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
