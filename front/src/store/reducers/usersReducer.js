import { REQUEST_TOKEN_FAILURE, RECEIVED_TOKEN, REQUESTED_TOKEN } from '../actions/userActions';
import { takeFromLS } from '../helpers';

const initialState = {
  fetching: false,
  token: takeFromLS || null,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REQUESTED_TOKEN:
      return { ...state, fetching: true };
    case RECEIVED_TOKEN:
      return { ...state, fetching: false, token: action.payload.token };
    case REQUEST_TOKEN_FAILURE:
      return {
        ...state,
        fetching: false,
        token: null,
        error: action.error,
      };
    default:
      return state;
  }
}
