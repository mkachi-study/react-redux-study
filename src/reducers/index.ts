import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import todoList from './TodoList'
import todoListSaga from './TodoList/saga'

const reducers = combineReducers({ todoList })

export function* rootSaga() {
  yield all([todoListSaga()])
}

export default reducers
