import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';

import Home from './containers/home';
import About from './containers/about';
import Garmin from './containers/garmin';
import Marlin from './containers/marlin';
import Mosey from './containers/mosey';
import Blog from './containers/blog';

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" mapMenuTitle="About" component={About} />
    <Route path="/garmin" mapMenuTitle="Garmin" component={Garmin} />
    <Route path="/marlin" mapMenuTitle="Marlin" component={Marlin} />
    <Route path="/mosey" mapMenuTitle="Mosey" component={Mosey} />
    <Route path="/blog" mapMenuTitle="Blog" component={Blog} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
