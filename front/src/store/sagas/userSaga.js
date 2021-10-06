import { takeLatest, call, put } from 'redux-saga/effects';
import Api from '../../api';

import { RECEIVED_TOKEN, REQUEST_TOKEN_FAILURE, REQUESTED_TOKEN } from '../actions/actions';

export function userLogin(payload) {
  return Api.post('users/sign_in', { user: payload.data });
}

function* workerSaga({ payload }) {
  try {
    const response = yield call(userLogin, payload);
    const token = response.headers.authorization;
    yield put({ type: RECEIVED_TOKEN, payload: { token } });
  } catch (error) {
    yield put({ type: REQUEST_TOKEN_FAILURE, error });
  }
}

export function* watcherUserSaga() {
  yield takeLatest(REQUESTED_TOKEN, workerSaga);
}
