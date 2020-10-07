import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectMenuGroupsLoaded,
  selectMenuGroupsFetching,
} from '../../redux/menu/menuSelector';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import GroupOverview from '../../components/GroupOverview/GroupOverview';
import CategoryPage from '../CategoryPage/CategoryPage';
import { fetchMenuAsync } from '../../redux/menu/menuActions';

import './MenuPage.scss';

const GroupOverviewWithSpinner = WithSpinner(GroupOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class MenuPage extends Component {
  componentDidMount() {
    const { fetchMenu } = this.props;
    fetchMenu();
  }

  render() {
    const { match, isLoaded } = this.props;

    return (
      <div className="menu-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <GroupOverviewWithSpinner isLoading={!isLoaded} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CategoryPageWithSpinner isLoading={!isLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoaded: selectMenuGroupsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMenu: () => dispatch(fetchMenuAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);
