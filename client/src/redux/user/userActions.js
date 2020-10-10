import {
  SIGN_IN_FAILURE,
  GOOGLE_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
} from './userActionTypes';

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (err) => ({
  type: SIGN_IN_FAILURE,
  payload: err,
});

export const emailSignInStart = (userCredentials) => ({
  type: EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});
