import {
  REQUEST_TOKEN_FAILURE, RECEIVED_TOKEN, REQUESTED_TOKEN,
  USER_REGISTRATION_REQUEST, USER_AUTHENTICATE,
  USER_LOG_OUT, USER_LOG_OUT_FAIL, USER_LOG_OUT_SUCCESS,
} from '../actions/userActions';
import { tokenFromLS } from '../helpers';

const initialState = {
  fetching: false,
  token: tokenFromLS || null,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REQUESTED_TOKEN:
      return { ...state, fetching: true, error: null };
    case RECEIVED_TOKEN:
      return {
        ...state, fetching: false, token: action.payload.token, error: null,
      };
    case REQUEST_TOKEN_FAILURE:
      return {
        ...state,
        fetching: false,
        token: null,
        error: action.error,
      };
    case USER_REGISTRATION_REQUEST:
      return { ...state, fetching: true, error: null };

    case USER_AUTHENTICATE:
      return {
        ...state, fetching: false, error: null,
      };

    case USER_LOG_OUT:
      return {
        ...state, fetching: true, error: null,
      };

    case USER_LOG_OUT_FAIL:
      return {
        ...state, fetching: false, error: action.error,
      };

    case USER_LOG_OUT_SUCCESS:
      return {
        ...state, fetching: false, error: null, token: null,
      };

    default:
      return state;
  }
}
