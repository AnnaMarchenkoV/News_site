import { createAction } from 'redux-actions';

export const REQUESTED_TOKEN = 'USER/REQUESTED_TOKEN';
export const RECEIVED_TOKEN = 'USER/RECEIVED_TOKEN';
export const REQUEST_TOKEN_FAILURE = 'USER/REQUEST_TOKEN_FAILURE';

export const USER_REGISTRATION_REQUEST = 'USER/REGISTRATION_REQUEST';

export const USER_AUTHENTICATE = 'USER/AUTHENTICATE';

export const requestedToken = createAction(REQUESTED_TOKEN);
export const receivedToken = createAction(RECEIVED_TOKEN);
export const requestedTokenFail = createAction(REQUEST_TOKEN_FAILURE);

export const userRegistrationRequest = createAction(USER_REGISTRATION_REQUEST);

export const userAuthenticate = createAction(USER_AUTHENTICATE);
