import { FETCH_MENU_START } from './menuActionTypes';
import { takeLatest, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionToMap } from '../../firebase/firebase';
import { fetchMenuSuccess, fetchMenuFailure } from './menuActions';

export function* fetchMenuAsync() {
  try {
    const categoriesRef = firestore.collection('categories');
    const categoriesSnapshot = yield categoriesRef.get();
    const categoriesMap = yield call(
      convertCollectionToMap,
      categoriesSnapshot
    );
    yield put(fetchMenuSuccess(categoriesMap));
  } catch (err) {
    yield put(fetchMenuFailure(err.message));
  }
}

export function* fetchMenuStart() {
  yield takeLatest(FETCH_MENU_START, fetchMenuAsync);
}
