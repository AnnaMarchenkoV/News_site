import { createAction } from 'redux-actions';

export const FETCH_POSTS = 'POST/FETCH_POSTS';
export const REQUEST_POSTS = 'POST/REQUEST_POSTS';

export const API_CALL_REQUEST = 'USER/API_CALL_REQUEST';
export const API_CALL_FAILURE = 'USER/API_CALL_FAILURE';
export const API_CALL_SUCCESS = 'USER/API_CALL_SUCCESS';
export const REQUESTED_TOKEN = 'USER/REQUESTED_TOKEN';

export const fetchPosts = createAction(REQUEST_POSTS);
export const requestedToken = createAction(REQUESTED_TOKEN);
