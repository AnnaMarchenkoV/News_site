import { takeLatest, call, put } from 'redux-saga/effects';
import Api from '../../api';

import { receivedToken, requestedTokenFail, REQUESTED_TOKEN } from '../actions/userActions';

export function userLogin(payload) {
  return Api.post('users/sign_in', { user: payload.data });
}

function* workerSaga({ payload }) {
  try {
    const response = yield call(userLogin, payload);
    const token = response.headers.authorization;
    yield put(receivedToken({ token }));
  } catch (error) {
    yield put(requestedTokenFail(error));
  }
}

export function* watcherUserSaga() {
  yield takeLatest(REQUESTED_TOKEN, workerSaga);
}
