import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_POSTS, FETCH_POST_FAILURE, REQUEST_POSTS } from '../actions/postActions';
import Api from '../../api';

export function fetchPosts() {
  return Api.get('posts/get-all');
}

function* workerSaga() {
  try {
    const response = yield call(fetchPosts);
    const payload = response.data;
    yield put({ type: FETCH_POSTS, payload });
  } catch (error) {
    yield put({ type: FETCH_POST_FAILURE, error });
  }
}

export function* watcherPostsSaga() {
  yield takeEvery(REQUEST_POSTS, workerSaga);
}
