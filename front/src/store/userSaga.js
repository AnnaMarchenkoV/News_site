import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

export function* watcherUserSaga() {
  // eslint-disable-next-line no-use-before-define
  yield takeLatest('REQUESTED_TOKEN', workerSaga);
}

export function userLogin(payload) {
  return axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/users',
    data: { user: payload.data },
  });
}

let token;

function* workerSaga({ payload }) {
  try {
    const response = yield call(userLogin, payload);
    token = response.headers.authorization;
    yield put({ type: 'API_CALL_SUCCESS', token });
  } catch (error) {
    yield put({ type: 'API_CALL_FAILURE', error });
  }
}
