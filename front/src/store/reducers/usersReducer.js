import { API_CALL_SUCCESS, API_CALL_FAILURE, API_CALL_REQUEST } from '../actions/actions';

const initialState = {
  fetching: false,
  token: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: action.fetching };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, token: action.token };
    case API_CALL_FAILURE:
      return {
        ...state, fetching: false, token: null, error: action.error,
      };
    default:
      return state;
  }
}
