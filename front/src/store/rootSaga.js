import { all } from 'redux-saga/effects';
import { watcherUserSaga } from './sagas/userSaga';
import { sagaWatcher } from './sagas/postsSaga';

export default function* rootSaga() {
  yield all([
    watcherUserSaga(),
    sagaWatcher(),
  ]);
}
