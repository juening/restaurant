import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectBagItems } from '../../redux/bag/bagSelector';
import BagDropdown from './BagDropdown';

const mapStateToProps = createStructuredSelector({
  bagItems: selectBagItems,
});

const BagDropdownContainer = compose(
  connect(mapStateToProps),
  withRouter
)(BagDropdown);

export default BagDropdownContainer;
