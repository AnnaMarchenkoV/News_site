import { createAction } from 'redux-actions';

export const FETCH_POSTS = 'POST/FETCH_POSTS';
export const FETCH_POST_FAILURE = 'POST/FETCH_POST_FAILURE';
export const REQUEST_POSTS = 'POST/REQUEST_POSTS';

export const fetchPosts = createAction(REQUEST_POSTS);
