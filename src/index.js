import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import ReactDOM from 'react-dom';
import store, { history } from './store'
import App from './containers/app'

import 'sanitize.css/sanitize.css'
import './index.css'

//mdb react
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

//Import firebase and initialize firebase app
import './firebase'

const target = document.querySelector('#root')

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
    </Provider>,
    target,
  );
};

render()
