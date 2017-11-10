import { takeEvery, call, put } from 'redux-saga/effects'
import FooService from './api/foo.service'

function* fetchFoos(action) {
  try {
    const foos = yield call(FooService.fetchFoos);
    yield put({ type: "FOO_FETCH_SUCCEEDED", foos });
  } catch (e) {
    yield put({ type: "FOO_FAILED", message: e.message });
  }
}

function* watchSagas() {
  yield takeEvery("FOO_FETCH_ALL", fetchFoos);
}

export default watchSagas;
