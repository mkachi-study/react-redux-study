import { put, takeLatest } from 'redux-saga/effects'
import { FETCH_TODO, fetchSuccess, fetchFailed } from './index'

function* fetchTodoSaga() {
  try {
    const response = yield fetch('https://gist.githubusercontent.com/MKachi/4e7435d583dc678ffd77cf7bcc727c4a/raw/b206170d32ea43492db4fbe2eee493b7de811420/todo.json')
    const json = yield response.json()
    yield put(fetchSuccess(json))
    yield
  } catch (error) {
    yield put(fetchFailed())
  }
}

export default function* () {
  yield takeLatest(FETCH_TODO, fetchTodoSaga)
}
