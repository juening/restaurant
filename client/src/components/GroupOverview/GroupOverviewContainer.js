import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectMenuGroupsLoaded } from '../../redux/menu/menuSelector';

import WithSpinner from '../WithSpinner/WithSpinner';
import GroupOverview from './GroupOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectMenuGroupsLoaded(state),
});

const GroupOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(GroupOverview);

export default GroupOverviewContainer;
