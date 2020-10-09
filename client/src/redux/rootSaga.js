import { all, call } from 'redux-saga/effects';
import { fetchMenuStart } from './menu/menuSagas';
import { userSagas } from './user/userSagas';

export default function* rootSaga() {
  yield all([call(fetchMenuStart), call(userSagas)]);
}
