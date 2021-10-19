import { takeLatest, call, put } from 'redux-saga/effects';
import Api from '../../api';

import {
  loginSuccess,
  loginFail,
  logOutFail,
  logOutSuccess,
  userAuthenticateSuccess,
  getUserSuccess,
  getUserFail,
  updateUserFail,
  updateUserSuccess,
  USER_REQUESTED,
  USER_REGISTRATION,
  USER_AUTHENTICATE_REQUESTED,
  USER_LOGOUT_REQUESTED,
  USER_GET_REQUESTED,
  USER_UPDATE_REQUESTED,
} from '../actions/userActions';

import { addTokenToLS, removeTokenFromLS } from '../helpers/localStorageHelpers';

export function userLogin(payload) {
  return Api.post('users/sign_in', payload);
}

export function userRegistration(payload) {
  return Api.post('users', payload);
}

export function userTokenCheck() {
  return Api.get('member-data');
}

export function destroyUserSession() {
  return Api.delete('users/sign_out');
}

export function getCurrentUserInfo(payload) {
  return Api.get(`get_user/${payload}`);
}

export function updateUserInfo(payload) {
  return Api.patch(`update_user/${payload.user_id}`, payload.user);
}

function* workerUserLogin(action) {
  try {
    const response = yield call(userLogin, action.payload);
    const token = response.headers.authorization;
    const userData = response.data;
    addTokenToLS(token);
    yield put(loginSuccess(userData));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* workerRegistration(action) {
  try {
    const response = yield call(userRegistration, action.payload);
    const token = response.headers.authorization;
    const userData = response.data;
    addTokenToLS(token);
    yield put(loginSuccess(userData));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* workerAuthenticate() {
  try {
    const response = yield call(userTokenCheck);
    const userData = response.data;
    yield put(userAuthenticateSuccess(userData));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* workerUserLogOut() {
  try {
    yield call(destroyUserSession);
    yield put(logOutSuccess());
  } catch (error) {
    yield put(logOutFail(error));
  } finally {
    yield removeTokenFromLS('token');
  }
}

function* workerGetUser(action) {
  try {
    const response = yield call(getCurrentUserInfo, action.payload);
    const currentUser = response.data;
    yield put(getUserSuccess(currentUser));
  } catch (error) {
    yield put(getUserFail(error));
  }
}

function* workerUpdateUser(action) {
  try {
    const response = yield call(updateUserInfo, action.payload);
    const userData = response.data;
    yield put(updateUserSuccess(userData));
  } catch (error) {
    yield put(updateUserFail(error));
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

export function* watcherGetUser() {
  yield takeLatest(USER_GET_REQUESTED, workerGetUser);
}

export function* watcherUpdateUser() {
  yield takeLatest(USER_UPDATE_REQUESTED, workerUpdateUser);
}
