import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Router, Route, IndexRoute, Redirect, Switch, browserHistory } from 'react-router'
import App from './App.jsx';
import Animals from './Animals.jsx';

ReactDOM.render(
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/animals/:animal" component={Animals}/>
      <Route path="/animals" component={Animals}/>
      <Redirect to="/"/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));



