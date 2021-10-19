import { all } from 'redux-saga/effects';
import {
  watcherUserSaga,
  watcherUserReg,
  watcherUserAuth,
  watcherUserLogOut,
  watcherGetUser,
  watcherUpdateUser,
} from './sagas/userSaga';
import {
  watcherRequestPosts,
  watcherRequestUserPosts,
  watcherRequestSendPost,
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
  ]);
}
