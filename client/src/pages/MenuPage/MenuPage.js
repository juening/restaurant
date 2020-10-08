import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import GroupOverviewContainer from '../../components/GroupOverview/GroupOverviewContainer';
import CategoryPageContainer from '../CategoryPage/CategoryPageContainer';

import { fetchMenuStart } from '../../redux/menu/menuActions';

import './MenuPage.scss';

class MenuPage extends Component {
  componentDidMount() {
    const { fetchMenuStart } = this.props;
    fetchMenuStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="menu-page">
        <Route
          exact
          path={`${match.path}`}
          component={GroupOverviewContainer}
        />
        <Route
          path={`${match.path}/:categoryId`}
          component={CategoryPageContainer}
        />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   isLoaded: selectMenuGroupsLoaded,
// });

const mapDispatchToProps = (dispatch) => ({
  fetchMenuStart: () => dispatch(fetchMenuStart()),
});

export default connect(null, mapDispatchToProps)(MenuPage);
