import {
  USER_REJECTED, USER_RECEIVED, USER_REQUESTED,
  USER_REGISTRATION, USER_AUTHENTICATE_REQUESTED,
  USER_LOGOUT_REQUESTED, USER_LOGOUT_REJECTED, USER_LOGOUT_RECEIVED,
} from '../actions/userActions';

const initialState = {
  fetching: false,
  error: null,
  userData: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REQUESTED:
      return { ...state, fetching: true, error: null };
    case USER_RECEIVED:
      return {
        ...state, fetching: false, userData: action.payload, error: null,
      };
    case USER_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    case USER_REGISTRATION:
      return { ...state, fetching: true, error: null };

    case USER_AUTHENTICATE_REQUESTED:
      return {
        ...state, fetching: false, error: null,
      };

    case USER_LOGOUT_REQUESTED:
      return {
        ...state, fetching: true, error: null,
      };

    case USER_LOGOUT_REJECTED:
      return {
        ...state, fetching: false, error: action.error,
      };

    case USER_LOGOUT_RECEIVED:
      return {
        ...state,
        fetching: false,
        userData: null,
        error: null,
      };

    default:
      return state;
  }
}
