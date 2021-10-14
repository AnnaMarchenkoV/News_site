import {
  USER_REJECTED,
  USER_RECEIVED,
  USER_REQUESTED,
  USER_REGISTRATION,
  USER_AUTHENTICATE_REQUESTED,
  USER_LOGOUT_REQUESTED,
  USER_LOGOUT_REJECTED,
  USER_LOGOUT_RECEIVED,
  USER_AUTHENTICATE_RECEIVED,
} from '../actions/userActions';

const initialState = {
  isFetching: false,
  error: null,
  userData: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REQUESTED:
    case USER_REGISTRATION:
      return { ...state, isFetching: true, error: null };
    case USER_RECEIVED:
    case USER_AUTHENTICATE_RECEIVED:
      return {
        ...state, isFetching: false, userData: action.payload, error: null,
      };
    case USER_REJECTED:
    case USER_LOGOUT_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    case USER_AUTHENTICATE_REQUESTED:
      return {
        ...state, isFetching: false, error: null,
      };

    case USER_LOGOUT_REQUESTED:
      return {
        ...state, isFetching: true, error: null,
      };

    case USER_LOGOUT_RECEIVED:
      return {
        ...state,
        isFetching: false,
        userData: null,
        error: null,
      };

    default:
      return state;
  }
}