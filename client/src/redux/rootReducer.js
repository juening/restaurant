import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import bagReducer from './bag/bagReducer';
import directoryReducer from './directory/directoryReducer';
import menuReducer from './menu/menuReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['bag'],
};

const rootReducer = combineReducers({
  user: userReducer,
  bag: bagReducer,
  directory: directoryReducer,
  menu: menuReducer,
});

export default persistReducer(persistConfig, rootReducer);
