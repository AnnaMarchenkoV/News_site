import { takeLatest, call, put } from 'redux-saga/effects';
import Api from '../../api';

import {
  loginSuccess, loginFail, logOutSuccess,
  USER_REQUESTED, USER_REGISTRATION,
  USER_AUTHENTICATE_REQUESTED, USER_LOGOUT_REQUESTED,
} from '../actions/userActions';
import { addTokenToLS, removeTokenFromLS } from '../helpers';

export function userLogin(action) {
  return Api.post('users/sign_in', action.payload);
}

export function userRegistration(action) {
  return Api.post('users', action.payload);
}

export function userTokenCheck() {
  return Api.get('member-data');
}

export function destroyUserSession() {
  return Api.delete('users/sign_out');
}

function* workerUserLogin(action) {
  try {
    const response = yield call(userLogin, action);
    const token = response.headers.authorization;
    const userData = response.data;
    yield addTokenToLS(token);
    yield put(loginSuccess(userData));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* workerRegistration(action) {
  try {
    const response = yield call(userRegistration, action);
    const token = response.headers.authorization;
    yield put(loginSuccess({ token }));
    yield addTokenToLS(token);
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* workerAuthenticate() {
  try {
    const response = yield call(userTokenCheck);
    const userData = response.data;
    yield put(loginSuccess(userData));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* workerUserLogOut() {
  try {
    yield call(destroyUserSession);
    yield put(logOutSuccess());
  } catch (error) {
    yield put(loginFail(error));
  } finally {
    yield removeTokenFromLS('token');
  }
}

export function* watcherUserReg() {
  yield takeLatest(USER_REGISTRATION, workerRegistration);
}

export function* watcherUserSaga() {
  yield takeLatest(USER_REQUESTED, workerUserLogin);
}

export function* watcherUserAuth() {
  yield takeLatest(USER_AUTHENTICATE_REQUESTED, workerAuthenticate);
}

export function* watcherUserLogOut() {
  yield takeLatest(USER_LOGOUT_REQUESTED, workerUserLogOut);
}
