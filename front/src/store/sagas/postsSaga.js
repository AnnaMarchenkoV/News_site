import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_POSTS, REQUEST_POSTS } from '../actions/actions';
import Api from '../../api';

export function fetchPosts() {
  return Api.get('posts/get-all');
}

function* sagaWorker() {
  const response = yield call(fetchPosts);
  const payload = response.data;
  yield put({ type: FETCH_POSTS, payload });
}

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}
