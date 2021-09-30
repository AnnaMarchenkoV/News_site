const requestToken = () => {
  return { type: 'REQUESTED_TOKEN' }
};

const requestTokenSuccess = (data) => {
  return { type: 'REQUESTED_TOKEN_SUCCEEDED', url:  }
};

const requestTokenError = () => {
  return { type: 'REQUESTED_TOKEN_FAILED' }
};

const fetchToken = () => {
  return { type: 'FETCHED_TOKEN' }
};













// export const ADD_POST = 'ADD_POST'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_CURRENT_USER: 'SHOW_CURRENT_USER'
// }

// export function addPost(text) {
//   return { type: ADD_Post, text }
// }

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }
