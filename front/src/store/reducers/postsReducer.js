import { FETCH_POSTS, FETCH_POST_FAILURE, REQUEST_POSTS } from '../actions/postActions';

const initialState = {
  items: [],
  isFetching: false,
  error: null,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, isFetching: true };
    case FETCH_POSTS:
      return { ...state, items: action.payload, isFetching: false };
    case FETCH_POST_FAILURE:
      return {
        ...state, items: action.payload, error: action.error, isFetching: false,
      };
    default: return state;
  }
}
