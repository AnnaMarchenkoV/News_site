import { takeLatest, call, put } from 'redux-saga/effects';
import Api from '../../api';

import {
  receivedToken, requestedTokenFail, REQUESTED_TOKEN, USER_REGISTRATION_REQUEST,
} from '../actions/userActions';
import { addToLS } from '../helpers';

export function userLogin(payload) {
  return Api.post('users/sign_in', { user: payload.data });
}

function* workerSaga({ payload }) {
  try {
    const response = yield call(userLogin, payload);
    const token = response.headers.authorization;
    yield put(receivedToken({ token }));
    yield addToLS(token);
    yield window.location.reload();
  } catch (error) {
    yield put(requestedTokenFail(error));
  }
}

export function* watcherUserSaga() {
  yield takeLatest(REQUESTED_TOKEN, workerSaga);
}

export function userRegistration(payload) {
  return Api.post('users', { user: payload.data });
}

function* workerRegistration({ payload }) {
  try {
    const response = yield call(userRegistration, payload);
    console.log(payload);
    const token = response.headers.authorization;
    yield put(receivedToken({ token }));
    yield addToLS(token);
    yield window.location.reload();
  } catch (error) {
    yield put(requestedTokenFail(error));
    console.log(error);
  }
}

export function* watcherUserReg() {
  yield takeLatest(USER_REGISTRATION_REQUEST, workerRegistration);
}
