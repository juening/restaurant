import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategoriesForOverview } from '../../redux/menu/menuSelector';

import GroupPreview from '../GroupPreview/GroupPreview';

import './GroupOverview.scss';

const GroupOverview = ({ menuGroups }) => {
  return (
    <div className="groups-overview">
      {menuGroups.map(({ id, title, items }) => (
        <GroupPreview key={id} title={title} items={items} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menuGroups: selectCategoriesForOverview,
});

export default connect(mapStateToProps)(GroupOverview);
