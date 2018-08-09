import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import createStore, { history } from './store'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore()

registerServiceWorker()
const rootElem = document.getElementById('root')
const AppJsx = <Provider store={store}>
  <ConnectedRouter history={history}>
    <div>
      <App />
    </div>
  </ConnectedRouter>
</Provider>

ReactDOM.render(
  AppJsx,
  rootElem
)

// if (module.hot) {
//   module.hot.accept('./App', () => {
//     ReactDOM.render(AppJsx, rootElem)
//   })
// }