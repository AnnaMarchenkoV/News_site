const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

const initialState = {
  fetching: false,
  token: null,
  error: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
      break;
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, token: action.token };
      break;
    case API_CALL_FAILURE:
      return { ...state, fetching: false, token: null, error: action.error };
      break;
    default:
      return state;
  }
}




















// import { combineReducers } from 'redux'
// import {
//   ADD_POST,
//   SET_VISIBILITY_FILTER,
//   VisibilityFilters
// } from './actions'
// const { SHOW_ALL } = VisibilityFilters

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }

// function posts(state = [], action) {
//   switch (action.type) {
//     case ADD_POST:
//       return [
//         ...state,
//         {
//           text: action.text,
//         }
//       ]
//     default:
//       return state
//   }
// }

// const postApp = combineReducers({
//   visibilityFilter,
//   posts
// })

// export default postApp