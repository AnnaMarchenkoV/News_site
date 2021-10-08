import { takeEvery, put, call } from 'redux-saga/effects';

import {
  fetchedPostsFail, REQUEST_POSTS, fetchedPosts,
} from '../actions/postActions';
import Api from '../../api';

export function fetchPosts() {
  return Api.get('posts/get-all');
}

function* workerSaga() {
  try {
    const response = yield call(fetchPosts);
    const payload = response.data;
    yield put(fetchedPosts(payload));
  } catch (error) {
    yield put(fetchedPostsFail(error));
  }
}

export function* watcherPostsSaga() {
  yield takeEvery(REQUEST_POSTS, workerSaga);
}
