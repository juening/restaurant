import { EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START } from './userActionTypes';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from '../../firebase/firebase';

import { signInSuccess, signInFailure } from './userActions';

export function* getUserSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
