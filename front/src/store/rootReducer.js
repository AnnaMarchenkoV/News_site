import { combineReducers } from 'redux';
import postsReducer from './reducers/postsReducer';
import userData from './reducers/usersReducer';

export default combineReducers({
  userData,
  posts: postsReducer,
});
