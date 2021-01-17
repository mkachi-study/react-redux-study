import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

const reducers = combineReducers({})

export function* rootSaga() {
  yield all([])
}

export default reducers
