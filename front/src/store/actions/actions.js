import { createAction } from 'redux-actions';

export const FETCH_POSTS = 'POST/FETCH_POSTS';
export const FETCH_POST_FAILURE = 'POST/FETCH_POST_FAILURE';
export const REQUEST_POSTS = 'POST/REQUEST_POSTS';

export const REQUESTED_TOKEN = 'USER/REQUESTED_TOKEN';
export const REQUEST_TOKEN_FAILURE = 'USER/REQUEST_TOKEN_FAILURE';
export const RECEIVED_TOKEN = 'USER/RECEIVED_TOKEN';

export const fetchPosts = createAction(REQUEST_POSTS);
export const requestedToken = createAction(REQUESTED_TOKEN);
