import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import routes from './routes';

import reduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import { Router, browserHistory } from 'react-router';
//const createStoreWithMiddleware = applyMiddleware()(createStore);
const middleware = applyMiddleware(reduxPromise);
const createStoreWithMiddleware = process.env.NODE_ENV == 'production' ? middleware(createStore):composeWithDevTools(middleware)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
