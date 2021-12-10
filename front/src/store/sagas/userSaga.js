/* eslint-disable no-param-reassign */
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
  deleteUserFail,
  deleteUserSuccess,
  USER_REQUESTED,
  USER_REGISTRATION,
  USER_AUTHENTICATE_REQUESTED,
  USER_LOGOUT_REQUESTED,
  USER_GET_REQUESTED,
  USER_UPDATE_REQUESTED,
  USER_DELETE_REQUESTED,
} from '../actions/userActions';

import { addTokenToLS, removeTokenFromLS, getTokenFromLS } from '../helpers/localStorageHelpers';

function userLogin(payload) {
  return Api.post('auth/login', payload);
}

function userRegistration(payload) {
  return Api.post('auth/register', payload);
}

function getCurrentUserInfo(payload) {
  return Api.get(`user/${payload}`);
}

function deleteUserProfile() {
  return Api.delete('user');
}

function updateUserAvatar(payload) {
  const bodyFormData = new FormData();
  bodyFormData.append('file', payload.avatar);

  return Api({
    method: 'post',
    url: 'file/uploadFile',
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}

function updateUserInfo(payload) {
  return Api.put('user', payload);
}

function* workerUserLogin(action) {
  try {
    const response = yield call(userLogin, action.payload);
    const userData = response.data.data;
    addTokenToLS(userData);
    yield put(loginSuccess(userData));
  } catch (error) {
    yield put(loginFail(error.response.data.statusCode));
  }
}

function* workerRegistration(action) {
  try {
    const responseAvatar = yield call(updateUserAvatar, action.payload);
    const avatar = responseAvatar.data.data;
    action.payload.avatar = avatar;
    const response = yield call(userRegistration, action.payload);
    const userData = response.data.data;
    addTokenToLS(userData);
    yield put(loginSuccess(userData));
  } catch (error) {
    yield put(loginFail(error.response.data.statusCode));
  }
}

function* workerAuthenticate() {
  try {
    const userData = yield getTokenFromLS();
    yield put(userAuthenticateSuccess(userData));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* workerUserLogOut() {
  try {
    yield put(logOutSuccess());
  } catch (error) {
    yield put(logOutFail(error));
  } finally {
    yield removeTokenFromLS('userData');
  }
}

function* workerGetUser(action) {
  try {
    const response = yield call(getCurrentUserInfo, action.payload);
    const userData = response.data.data;
    yield put(getUserSuccess(userData));
  } catch (error) {
    yield put(getUserFail(error.response.data.statusCode));
  }
}

function* workerUpdateUser(action) {
  try {
    if (action.payload.avatar.name) {
      const responseAvatar = yield call(updateUserAvatar, action.payload);
      const avatar = responseAvatar.data.data;
      action.payload.avatar = avatar;
    }
    const response = yield call(updateUserInfo, action.payload);
    const userData = response.data.data;
    yield put(updateUserSuccess(userData));
  } catch (error) {
    yield put(updateUserFail(error.response.data.statusCode));
  }
}

function* workerDeleteUser() {
  try {
    yield call(deleteUserProfile);
    yield put(deleteUserSuccess());
  } catch (error) {
    yield put(deleteUserFail(error.response.data.statusCode));
  } finally {
    yield removeTokenFromLS('userData');
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

export function* watcherDeleteUser() {
  yield takeLatest(USER_DELETE_REQUESTED, workerDeleteUser);
}
