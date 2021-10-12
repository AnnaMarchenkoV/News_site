import { takeLatest, call, put } from 'redux-saga/effects';
import Api from '../../api';

import {
  receivedToken, requestedTokenFail, REQUESTED_TOKEN, USER_REGISTRATION_REQUEST, USER_AUTHENTICATE,
} from '../actions/userActions';
import { addToLS } from '../helpers';

export function userLogin(payload) {
  return Api.post('users/sign_in', { user: payload.data });
}

export function userRegistration(payload) {
  return Api.post('users', { user: payload.data });
}

export function userTokenCheck() {
  return Api.get('member-data');
}

function* workerSaga({ payload }) {
  try {
    const response = yield call(userLogin, payload);
    const token = response.headers.authorization;
    yield put(receivedToken({ token }));
    yield addToLS(token);
  } catch (error) {
    yield put(requestedTokenFail(error));
  }
}

function* workerRegistration({ payload }) {
  try {
    const response = yield call(userRegistration, payload);
    const token = response.headers.authorization;
    yield put(receivedToken({ token }));
    yield addToLS(token);
  } catch (error) {
    yield put(requestedTokenFail(error));
  }
}

function* workerAuthenticate() {
  try {
    yield call(userTokenCheck);
  } catch (error) {
    yield put(requestedTokenFail(error));
  }
}

export function* watcherUserReg() {
  yield takeLatest(USER_REGISTRATION_REQUEST, workerRegistration);
}

export function* watcherUserSaga() {
  yield takeLatest(REQUESTED_TOKEN, workerSaga);
}

export function* watcherUserAuth() {
  yield takeLatest(USER_AUTHENTICATE, workerAuthenticate);
}
