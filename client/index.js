/* eslint-disable import/imports-first */
/* global document */

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Faq from './components/Faq';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Exercises from './components/Exercises';
import Devices from './components/Devices';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="faq" component={Faq} />
      <Route path="register" component={Register} />
      <Route path="login" component={Login} />
      <Route path="profile" component={Profile} />
      <Route path="exercises" component={Exercises} />
      <Route path="devices" component={Devices} />
    </Route>
  </Router>
  , document.getElementById('root'));
