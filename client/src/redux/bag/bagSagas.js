import {call, put, all, takeLatest} from 'redux-saga/effects'
import { SIGN_OUT_SUCCESS } from '../user/userActionTypes'
import { clearBag } from './bagActions'

export function* clearBagOnSignOut() {
    yield put(clearBag())
}

export function* onSignOutSuccess() {
    yield takeLatest(SIGN_OUT_SUCCESS, clearBagOnSignOut)
}

export function* bagSagas() {
    yield all([call(onSignOutSuccess)])
}