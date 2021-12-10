import { all } from 'redux-saga/effects';
import {
  watcherUserSaga,
  watcherUserReg,
  watcherUserAuth,
  watcherUserLogOut,
  watcherGetUser,
  watcherUpdateUser,
  watcherDeleteUser,
} from './sagas/userSaga';
import {
  watcherRequestPosts,
  watcherRequestUserPosts,
  watcherRequestSendPost,
  watcherRequestDeletePost,
  watcherRequestUpdatePost,
} from './sagas/postsSaga';

export default function* rootSaga() {
  yield all([
    watcherUserSaga(),
    watcherRequestPosts(),
    watcherRequestUserPosts(),
    watcherRequestSendPost(),
    watcherUserReg(),
    watcherUserAuth(),
    watcherUserLogOut(),
    watcherGetUser(),
    watcherUpdateUser(),
    watcherRequestDeletePost(),
    watcherRequestUpdatePost(),
    watcherDeleteUser(),
  ]);
}
