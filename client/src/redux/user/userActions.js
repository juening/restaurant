import {
  SIGN_IN_FAILURE,
  GOOGLE_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,SIGN_UP_FAILURE
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

export const signOutStart = () => ({
  type:SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type:SIGN_OUT_SUCCESS
});

export const signOutFailure = () => ({
  type:SIGN_OUT_FAILURE
})

export const signUpStart =(userCredentials) =>({
  type:SIGN_UP_START,
  payload:userCredentials
}) 

export const signUpSuccess = ({user, additionalData}) => ({
  type:SIGN_UP_SUCCESS,
  payload:{user, additionalData}
});

export const signUpFailure = err => ({
  type:SIGN_UP_FAILURE,
  payload:err
})