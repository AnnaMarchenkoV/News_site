import { createAction } from 'redux-actions';

export const USER_REQUESTED = 'USER/REQUESTED';
export const USER_RECEIVED = 'USER/RECEIVED';
export const USER_REJECTED = 'USER/REJECTED';

export const USER_REGISTRATION = 'USER/REGISTRATION';

export const USER_AUTHENTICATE_REQUESTED = 'USER/AUTHENTICATE_REQUESTED';
export const USER_AUTHENTICATE_RECEIVED = 'USER/AUTHENTICATE_RECEIVED';
export const USER_AUTHENTICATE_REJECTED = 'USER/AUTHENTICATE_REJECTED';

export const USER_LOGOUT_REQUESTED = 'USER/LOGOUT_REQUESTED';
export const USER_LOGOUT_RECEIVED = 'USER/LOGOUT_RECEIVED';
export const USER_LOGOUT_REJECTED = 'USER/LOGOUT_REJECTED';

export const userLogin = createAction(USER_REQUESTED);
export const loginSuccess = createAction(USER_RECEIVED);
export const loginFail = createAction(USER_REJECTED);

export const userRegistrationRequest = createAction(USER_REGISTRATION);

export const userAuthenticate = createAction(USER_AUTHENTICATE_REQUESTED);

export const userLogOut = createAction(USER_LOGOUT_REQUESTED);
export const logOutSuccess = createAction(USER_LOGOUT_RECEIVED);
