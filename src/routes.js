import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Lists from './components/lists';

export default (
  <Route path="/" component={App}>
    <IndexRoute component ={Lists} />
  </Route>
);
