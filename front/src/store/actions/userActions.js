import { createAction } from 'redux-actions';

export const REQUESTED_TOKEN = 'USER/REQUESTED_TOKEN';
export const RECEIVED_TOKEN = 'USER/RECEIVED_TOKEN';
export const REQUEST_TOKEN_FAILURE = 'USER/REQUEST_TOKEN_FAILURE';

export const requestedToken = createAction(REQUESTED_TOKEN);
export const receivedToken = createAction(RECEIVED_TOKEN);
export const requestedTokenFail = createAction(REQUEST_TOKEN_FAILURE);
