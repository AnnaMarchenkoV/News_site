import { RECEIVED_TOKEN, REQUEST_TOKEN_FAILURE, REQUESTED_TOKEN } from '../actions/actions';

const initialState = {
  fetching: false,
  token: null,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REQUESTED_TOKEN:
      return { ...state, fetching: true };
    case RECEIVED_TOKEN:
      return { ...state, fetching: false, token: action.payload };
    case REQUEST_TOKEN_FAILURE:
      return {
        ...state, fetching: false, token: null, error: action.error,
      };
    default:
      return state;
  }
}
