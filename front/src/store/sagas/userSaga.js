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
  return Api.post('auth/login', payload);
}

export function userRegistration(payload) {
  return Api.post('auth/register', payload);
}
// удалить проверку на бэке
export function userTokenCheck() {
  return Api.get('user/info');
}

// export function destroyUserSession() {
//   return Api.delete('user');
// }

export function getCurrentUserInfo(payload) {
  return Api.get(`user/${payload}`);
}

// export function updateUserInfo(payload) {
//   return Api.put('user', payload.user);
// }

export function updateUserInfo(payload) {
  const bodyFormData = new FormData();
  bodyFormData.append('login', payload.user.login);
  bodyFormData.append('avatar', payload.user.avatar);

  return Api({
    method: 'patch',
    url: `users/${payload.user_id}`,
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}

function* workerUserLogin(action) {
  try {
    const response = yield call(userLogin, action.payload);
    console.log(response.data.data);
    const userData = response.data.data;
    addTokenToLS(JSON.stringify(userData));
    yield put(loginSuccess(userData));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* workerRegistration(action) {
  try {
    const response = yield call(userRegistration, action.payload);
    const userData = JSON.stringify(response.data.data);
    addTokenToLS(JSON.stringify(userData));
    yield put(loginSuccess(userData));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* workerAuthenticate() {
  try {
    const response = yield call(userTokenCheck);
    const userData = JSON.stringify(response.data.data);
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
    yield removeTokenFromLS('currentUser');
  }
}

function* workerGetUser(action) {
  try {
    const response = yield call(getCurrentUserInfo, action.payload);
    const currentUser = response.data.data;
    yield put(getUserSuccess(currentUser));
  } catch (error) {
    yield put(getUserFail(error));
  }
}

function* workerUpdateUser(action) {
  try {
    const response = yield call(updateUserInfo, action.payload);
    const userData = JSON.stringify(response.data.data);
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
