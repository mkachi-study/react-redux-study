import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router, Switch } from 'react-router-dom'
import router from './router'

import { Provider } from 'react-redux'
import store from './store'

import * as serviceWorker from './serviceWorker'

import './index.css'

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Switch>{router()}</Switch>
        </Router>
      </Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// scripts/config.js -> usePWA: true
// serviceWorker.register()
serviceWorker.unregister()
