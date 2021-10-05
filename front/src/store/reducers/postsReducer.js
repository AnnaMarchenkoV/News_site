import { FETCH_POSTS } from '../actions/actions';

const initialState = {
  fetchedPosts: [],
  fetching: false,
  error: null,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, fetchedPosts: action.payload };
    default: return state;
  }
}
