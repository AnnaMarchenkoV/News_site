import { FETCH_POSTS, FETCH_POST_FAILURE, REQUEST_POSTS } from '../actions/actions';

const initialState = {
  fetchedPosts: [],
  fetching: false,
  error: null,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, fetching: true };
    case FETCH_POSTS:
      return { ...state, fetchedPosts: action.payload };
    case FETCH_POST_FAILURE:
      return {
        ...state, fetchedPosts: action.payload, error: action.error,
      };
    default: return state;
  }
}
