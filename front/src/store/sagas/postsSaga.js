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

export function fetchPosts(payload) {
  return Api.get(`news?page=${payload}&perPage=7`);
}

export function fetchUserPosts(payload) {
  return Api.get(`news/user/${payload.id}/?page=${payload.page}&perPage=5`);
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

function* workerRequestPosts(action) {
  try {
    const response = yield call(fetchPosts, action.payload);
    const payload = response.data.data;
    yield put(fetchedPostsSuccess({ data: payload, page: action.payload }));
  } catch (error) {
    yield put(fetchedPostsFail(error.response.data.statusCode));
  }
}

function* workerRequestUserPosts(action) {
  try {
    const response = yield call(fetchUserPosts, action.payload);
    const payload = response.data.data;
    yield put(currentPostsSuccess({ data: payload, page: action.payload.page }));
  } catch (error) {
    yield put(currentPostsFail(error.response.data.statusCode));
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

