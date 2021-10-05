import { takeLatest, call, put } from 'redux-saga/effects';
import Api from '../../api';

import { API_CALL_SUCCESS, API_CALL_FAILURE, REQUESTED_TOKEN } from '../actions/actions';

export function userLogin(payload) {
  return Api.post('users/sign_in', { user: payload.data });
}

function* workerSaga({ payload }) {
  try {
    const response = yield call(userLogin, payload);
    const token = response.headers.authorization;
    yield put({ type: API_CALL_SUCCESS, token });
  } catch (error) {
    yield put({ type: API_CALL_FAILURE, error });
  }
}

export function* watcherUserSaga() {
  yield takeLatest(REQUESTED_TOKEN, workerSaga);
}
