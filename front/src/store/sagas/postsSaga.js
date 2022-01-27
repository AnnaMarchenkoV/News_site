/* eslint-disable no-param-reassign */
import { takeEvery, put, call } from 'redux-saga/effects';

import {
  fetchedPostsFail,
  currentPostsSuccess,
  currentPostsFail,
  sendPostSuccess,
  sendPostFail,
  deletePostFail,
  deletePostSuccess,
  updatePostFail,
  updatePostSuccess,
  FETCH_POSTS_REQUESTED,
  fetchedPostsSuccess,
  USER_POSTS_REQUESTED,
  SEND_POST_REQUESTED,
  DELETE_POST_REQUESTED,
  UPDATE_POST_REQUESTED,
} from '../actions/postActions';

import Api from '../../api';

function fetchPosts(payload) {
  return Api.get(`news?page=${payload}&perPage=7`);
}

function fetchUserPosts(payload) {
  return Api.get(`news/user/${payload.id}/?page=${payload.page}&perPage=5`);
}

function deleteUserPost(payload) {
  return Api.delete(`news/${payload}`);
}

function sendImage(payload) {
  const bodyFormData = new FormData();
  bodyFormData.append('file', payload.post?.image || payload.image);

  return Api({
    method: 'POST',
    url: 'file/uploadFile',
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}

function sendPost(payload) {
  return Api.post('news', payload);
}

function updatePost(payload) {
  return Api.put(`news/${payload.postId}`, payload.post);
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
    const responseImage = yield call(sendImage, action.payload);
    const image = responseImage.data.data;
    action.payload.image = image;
    yield call(sendPost, action.payload);
    yield put(sendPostSuccess(action.payload));
  } catch (error) {
    yield put(sendPostFail(error.response.data.statusCode));
  }
}

function* workerRequestDeletePost(action) {
  try {
    yield call(deleteUserPost, action.payload);
    yield put(deletePostSuccess());
  } catch (error) {
    yield put(deletePostFail(error.response.data.statusCode));
  }
}

function* workerRequestUpdatePost(action) {
  try {
    if (action.payload.post.image.name) {
      const responseImage = yield call(sendImage, action.payload);
      const image = responseImage.data.data;
      action.payload.post.image = image;
    }
    yield call(updatePost, action.payload);
    yield put(updatePostSuccess());
  } catch (error) {
    yield put(updatePostFail(error.response.data.statusCode));
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

export function* watcherRequestDeletePost() {
  yield takeEvery(DELETE_POST_REQUESTED, workerRequestDeletePost);
}

export function* watcherRequestUpdatePost() {
  yield takeEvery(UPDATE_POST_REQUESTED, workerRequestUpdatePost);
}
