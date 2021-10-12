import {
  REQUEST_TOKEN_FAILURE, RECEIVED_TOKEN, REQUESTED_TOKEN,
  USER_REGISTRATION_REQUEST, USER_AUTHENTICATE,
} from '../actions/userActions';
import { takeFromLS } from '../helpers';

const initialState = {
  fetching: false,
  token: takeFromLS || null,
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
        ...state, fetching: true, error: null,
      };

    default:
      return state;
  }
}
