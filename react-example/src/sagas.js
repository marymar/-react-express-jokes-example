import { takeEvery, call, put } from 'redux-saga/effects'
import JokeService from './api/jokes.service'
import {JOKE_ACTIONS} from './actions/joke.action'

function* fetchJokes(action) {
  try {
    const jokes = yield call(JokeService.fetchJokes);
    yield put({ type: "JOKE_FETCH_SUCCEEDED", jokes });
  } catch (e) {
    yield put({ type: "JOKE_FAILED", message: e.message });
  }
}

function* fetchRandomJoke(action) {
  try {
    const joke = yield call(JokeService.fetchRandomJoke);
    yield put({ type: JOKE_ACTIONS.JOKE_FETCH_RANDOM_SUCCEEDED, joke });
  } catch (e) {
    yield put({ type: "JOKE_FAILED", message: e.message });
  }
}

function* watchSagas() {
  yield takeEvery(JOKE_ACTIONS.FETCH_RANDOM, fetchRandomJoke);
  yield takeEvery(JOKE_ACTIONS.SEARCH, fetchJokes);
}

export default watchSagas;
