import { createStore } from 'redux'
import { applyMiddleware } from 'redux'

import createSaga from 'redux-saga'

import reducers, { rootSaga } from './reducers'

const sagaMiddleware = createSaga()
const store = createStore(null, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export type StoreState = ReturnType<typeof reducers>
export default store
