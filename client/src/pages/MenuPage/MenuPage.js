import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionToMap } from '../../firebase/firebase';

import GroupOverview from '../../components/GroupOverview/GroupOverview';
import CategoryPage from '../CategoryPage/CategoryPage';
import { updateMenu } from '../../redux/menu/menuActions';

import './MenuPage.scss';

class MenuPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateMenu } = this.props;
    const categoryRef = firestore.collection('categories');
    this.unsubscribeFromSnapshot = categoryRef.onSnapshot(async (snapshot) => {
      const categoriesMap = convertCollectionToMap(snapshot);
      console.log(categoriesMap);
      updateMenu(categoriesMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="menu-page">
        <Route exact path={`${match.path}`} component={GroupOverview} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateMenu: (categories) => dispatch(updateMenu(categories)),
});

export default connect(null, mapDispatchToProps)(MenuPage);
