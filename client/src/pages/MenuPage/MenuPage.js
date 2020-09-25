import React from 'react';
import { Route } from 'react-router-dom';

import GroupOverview from '../../components/GroupOverview/GroupOverview';
import CategoryPage from '../CategoryPage/CategoryPage';

import './MenuPage.scss';

const MenuPage = ({ match }) => {
  return (
    <div className="menu-page">
      <Route exact path={`${match.path}`} component={GroupOverview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};

export default MenuPage;
