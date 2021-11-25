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
  return Api.get('news?page=1&perPage=5');
}

export function fetchUserPosts(payload) {
  return Api.get(`news/user/${payload}/?page=1&perPage=1`);
}

export function sendAvatar(payload) {
  const bodyFormData = new FormData();
  bodyFormData.append('file', payload.image);

  return Api({
    method: 'post',
    url: 'file/uploadFile',
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}

export function sendPost(payload) {
  return Api.post('news', payload);
}

function* workerRequestPosts() {
  try {
    const response = yield call(fetchPosts);
    const payload = response.data.data.content;
    yield put(fetchedPostsSuccess(payload));
  } catch (error) {
    yield put(fetchedPostsFail(error));
  }
}

function* workerRequestUserPosts(action) {
  try {
    const response = yield call(fetchUserPosts, action.payload);
    const payload = response.data.data.content;
    yield put(currentPostsSuccess(payload));
  } catch (error) {
    yield put(currentPostsFail(error));
  }
}

function* workerRequestSendPost(action) {
  try {
    const responseImage = yield call(sendAvatar, action.payload);
    const image = responseImage.data.data;
    action.payload.image = image;
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
