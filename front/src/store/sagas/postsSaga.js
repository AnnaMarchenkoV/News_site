import { takeEvery, put, call } from 'redux-saga/effects';

import {
  fetchedPostsFail,
  currentPostsSuccess,
  currentPostsFail,
  sendPostSuccess,
  sendPostFail,
  FETCH_POSTS_REQUESTED,
  fetchedPostsSuccess,
  USER_POSTS_REQUESTED,
  SEND_POST_REQUESTED,
} from '../actions/postActions';

import Api from '../../api';

export function fetchPosts() {
  return Api.get('posts/all');
}

export function fetchUserPosts(payload) {
  return Api.get(`posts?user_id=${payload}`);
}

export function sendPost(payload) {
  const postFormData = new FormData();
  postFormData.append('title', payload.post.title);
  postFormData.append('body', payload.post.body);
  postFormData.append('picture', payload.post.picture);
  postFormData.append('tags', payload.post.tags);

  return Api({
    method: 'post',
    url: 'posts',
    data: postFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}

function* workerRequestPosts() {
  try {
    const response = yield call(fetchPosts);
    const payload = response.data;
    yield put(fetchedPostsSuccess(payload));
  } catch (error) {
    yield put(fetchedPostsFail(error));
  }
}

function* workerRequestUserPosts(action) {
  try {
    const response = yield call(fetchUserPosts, action.payload);
    const payload = response.data;
    yield put(currentPostsSuccess(payload));
  } catch (error) {
    yield put(currentPostsFail(error));
  }
}

function* workerRequestSendPost(action) {
  try {
    yield call(sendPost, action.payload);
    yield put(sendPostSuccess());
  } catch (error) {
    yield put(sendPostFail(error));
  }
}

export function* watcherRequestPosts() {
  yield takeEvery(FETCH_POSTS_REQUESTED, workerRequestPosts);
}

export function* watcherRequestUserPosts() {
  yield takeEvery(USER_POSTS_REQUESTED, workerRequestUserPosts);
}

export function* watcherRequestSendPost() {
  yield takeEvery(SEND_POST_REQUESTED, workerRequestSendPost);
}
