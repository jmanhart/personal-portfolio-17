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
import SubPageOne from './containers/subPages/sub-01.js'
import SubPageTwo from './containers/subPages/sub-02.js'
import SubPageThree from './containers/subPages/sub-03.js'

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" mapMenuTitle="About" component={About}>
      <IndexRoute component={SubPageOne}/>
      <Route path="/about/itemOne" mapMenuTitle="SubPage 01" component={SubPageOne} />
      <Route path="/about/itemTwo" mapMenuTitle="SubPage 02" component={SubPageTwo} />
      <Route path="/about/itemThree" mapMenuTitle="SubPage 03" component={SubPageThree} />
    </Route>
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
