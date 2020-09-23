import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import GroupPreview from '../../components/GroupPreview/GroupPreview';
import { selectMenuSections } from '../../redux/menu/menuSelector';

import './MenuPage.scss';

const MenuPage = ({ menuGroups }) => {
  console.log(menuGroups);
  return (
    <div className="menu-page">
      {menuGroups.map(({ id, title, items }) => (
        <GroupPreview key={id} title={title} items={items} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menuGroups: selectMenuSections,
});

export default connect(mapStateToProps)(MenuPage);
