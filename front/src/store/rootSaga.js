import { all } from 'redux-saga/effects';
import {
  watcherUserSaga, watcherUserReg, watcherUserAuth, watcherUserLogOut,
} from './sagas/userSaga';
import { watcherPostsSaga } from './sagas/postsSaga';

export default function* rootSaga() {
  yield all([
    watcherUserSaga(),
    watcherPostsSaga(),
    watcherUserReg(),
    watcherUserAuth(),
    watcherUserLogOut(),
  ]);
}
