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

// export function userRegistrationAvatar(payload) {
//   const bodyFormData = new FormData();
//   bodyFormData.append('file', payload.avatar);

//   return Api({
//     method: 'post',
//     url: 'file/uploadFile',
//     data: bodyFormData,
//     headers: { 'Content-Type': 'multipart/form-data' },
//   });
// }

export function userRegistration(payload) {
  return Api.post('auth/register', payload);
}

export function getCurrentUserInfo(payload) {
  return Api.get(`user/${payload}`);
}

export function updateUserAvatar(payload) {
  const bodyFormData = new FormData();
  bodyFormData.append('file', payload.avatar);

  return Api({
    method: 'post',
    url: 'file/uploadFile',
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}

export function updateUserInfo(payload) {
  return Api.put('user', payload);
}

function* workerUserLogin(action) {
  try {
    const response = yield call(userLogin, action.payload);
    const userData = response.data.data;
    addTokenToLS(userData);
    yield put(loginSuccess(userData));
  } catch (error) {
    yield put(loginFail(error));
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
    yield put(loginFail(error));
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
    yield put(getUserFail(error));
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
    console.log('====================================');
    console.log(response);
    console.log('====================================');
    const userData = response.data.data;
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
