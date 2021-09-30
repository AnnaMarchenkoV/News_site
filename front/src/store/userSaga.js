import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

export function* watcherUserSaga() {
  yield takeLatest("REQUESTED_TOKEN", workerSaga);
}

function userLogin(payload) {
    console.log('       112121=========>>>>>>> ', payload)
  return axios({
    method: "post",
    url: "http://localhost:3000/users/sign_in",
    data: {user: payload.data}
  });
}


function* workerSaga({ payload }) {
  try {
    const response = yield call(userLogin, payload);
    const token = {};
    console.log('--->>>>>', response.headers);
    yield put({ type: "API_CALL_SUCCESS", token });
  
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}