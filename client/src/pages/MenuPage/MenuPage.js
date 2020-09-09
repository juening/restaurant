import React, { Component } from 'react';

import './MenuPage.scss';
import ONLINE_MENU_ITEMS from './onlineMunuData';

import GroupPreview from '../../components/GroupPreview/GroupPreview';

class MenuPage extends Component {
  state = {
    menuGroups: ONLINE_MENU_ITEMS,
  };

  render() {
    const { menuGroups } = this.state;
    return (
      <div className="menu-page">
        {menuGroups.map(({ id, title, items }) => (
          <GroupPreview key={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}

export default MenuPage;
