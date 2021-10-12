import { createAction } from 'redux-actions';

export const REQUESTED_TOKEN = 'USER/REQUESTED_TOKEN';
export const RECEIVED_TOKEN = 'USER/RECEIVED_TOKEN';
export const REQUEST_TOKEN_FAILURE = 'USER/REQUEST_TOKEN_FAILURE';

export const USER_REGISTRATION_REQUEST = 'USER/REGISTRATION_REQUEST';

export const USER_AUTHENTICATE = 'USER/AUTHENTICATE';

export const USER_LOG_OUT = 'USER/LOG_OUT';
export const USER_LOG_OUT_FAIL = 'USER/LOG_OUT_FAIL';
export const USER_LOG_OUT_SUCCESS = 'USER/LOG_OUT_SUCCESS';

export const requestedToken = createAction(REQUESTED_TOKEN);
export const receivedToken = createAction(RECEIVED_TOKEN);
export const requestedTokenFail = createAction(REQUEST_TOKEN_FAILURE);

export const userRegistrationRequest = createAction(USER_REGISTRATION_REQUEST);

export const userAuthenticate = createAction(USER_AUTHENTICATE);

export const userLogOut = createAction(USER_LOG_OUT);
export const logOutFail = createAction(USER_LOG_OUT_FAIL);
export const logOutSuccess = createAction(USER_LOG_OUT_SUCCESS);
