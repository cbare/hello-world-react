import Raven from 'raven-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Router, Route, IndexRoute, Redirect, Switch, browserHistory } from 'react-router'
import App from './App.jsx';
import Animals from './Animals.jsx';
import Jazz from './Jazz.jsx'
import { getStore } from './store'

Raven.config('https://66e6762b408347e6bf0280932efcc2cc@sentry.io/180793').install();

ReactDOM.render(
  <Provider store={ getStore() }>
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/animals/:animal" component={Animals}/>
        <Route path="/animals" component={Animals}/>
        <Route path="/jazz/:nick?" component={Jazz}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));



