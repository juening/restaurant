import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionToMap } from '../../firebase/firebase';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import GroupOverview from '../../components/GroupOverview/GroupOverview';
import CategoryPage from '../CategoryPage/CategoryPage';
import { updateMenu } from '../../redux/menu/menuActions';

import './MenuPage.scss';

const GroupOverviewWithSpinner = WithSpinner(GroupOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class MenuPage extends Component {
  state = { loading: true };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateMenu } = this.props;
    const categoryRef = firestore.collection('categories');
    this.unsubscribeFromSnapshot = categoryRef.onSnapshot(async (snapshot) => {
      const categoriesMap = convertCollectionToMap(snapshot);
      console.log(categoriesMap);
      updateMenu(categoriesMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="menu-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <GroupOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CategoryPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateMenu: (categories) => dispatch(updateMenu(categories)),
});

export default connect(null, mapDispatchToProps)(MenuPage);
