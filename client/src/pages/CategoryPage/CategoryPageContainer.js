import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectMenuGroupsLoaded } from '../../redux/menu/menuSelector';

import CategoryPage from './CategoryPage';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectMenuGroupsLoaded(state),
});

const CategoryPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CategoryPage);

export default CategoryPageContainer;
