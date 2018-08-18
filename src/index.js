import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Switch } from 'react-router';

// Imported Containers
import App from './App';

// Active Pages
import About from './containers/about';
import More from './containers/more';
import Work from './containers/work';

// TODO Promtion Pages
import Developer from './containers/developer';
import ProductDesigner from './containers/product-designer';
import KansasCity from './containers/kansas-city';
import Colophon from './containers/colophon';
import Records from './containers/records'
import Coffee from './containers/coffee';
import Contact from './containers/contact'

// History Containers
import Garmin from './containers/history-garmin';
import Mosey from './containers/history-mosey';
import Marlin from './containers/history-marlin';
import MissouriState from './containers/history-missouri-state';

// InProg Case Studies
import CobbCaseStudy from './containers/cobb-case-study'
import MoseyCaseStudy from './containers/mosey-case-study'

// Test Enviroments
import Playground from './containers/playground'
import RubberDuck from './containers/rubber-duck'

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    {/* Establishing the Index route*/}
    <IndexRoute component={About} />

    {/* Active PAGES */}
    <Route path="/about" mapMenuTitle="About" component={About} />
    <Route path="/more" mapMenuTitle="More" component={More} />
    <Route path="/work" mapMenuTitle="Work" component={Work} />

    {/* TODO PAGES*/}
    <Route path="/kansas-city" mapMenuTitle="Favorites" component={KansasCity} />
    <Route path="/product-designer" mapMenuTitle="Favorites" component={ProductDesigner} />
    <Route path="/developer" mapMenuTitle="Favorites" component={Developer} />
    <Route path="/colophon" mapMenuTitle="Colophon" component={Colophon} />
    <Route path="/coffee" mapMenuTitle="Coffee" component={Coffee} />
    <Route path="/contact" mapMenuTitle="Contact" component={Contact} />
    <Route path="/records" mapMenuTitle="Rubber Duck" component={Records} />

    {/* TODO History Pages */}
    <Route path="/history/garmin" mapMenuTitle="Garmin" component={Garmin} />
    <Route path="/history/mosey" mapMenuTitle="Garmin" component={Mosey} />
    <Route path="/history/marlin" mapMenuTitle="Garmin" component={Marlin} />
    <Route path="/history/missouri-state" mapMenuTitle="Garmin" component={MissouriState} />

    {/* InProg Case Studies */}
    <Route path="/cobb-case-study" mapMenuTitle="Cobb Case Study" component={CobbCaseStudy} />
    <Route path="/mosey-case-study" mapMenuTitle="Cobb Case Study" component={MoseyCaseStudy} />

    {/* Test PAGES */}
    <Route path="/playground" mapMenuTitle="Playground" component={Playground} />
    <Route path="/rubber-duck" mapMenuTitle="Rubber Duck" component={RubberDuck} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
