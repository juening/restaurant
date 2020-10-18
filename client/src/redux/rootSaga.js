import { all, call } from 'redux-saga/effects';
import { menuSagas } from './menu/menuSagas';
import { userSagas } from './user/userSagas';
import {bagSagas } from './bag/bagSagas'

export default function* rootSaga() {
  yield all([call(menuSagas), call(userSagas), call(bagSagas)]);
}
