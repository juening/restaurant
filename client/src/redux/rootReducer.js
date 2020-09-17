import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import bagReducer from './bag/bagReducer';

const rootReducer = combineReducers({
  user: userReducer,
  bag: bagReducer,
});

export default rootReducer;
