import React, { Component } from 'react'
import { render } from 'react-dom';
import { applyRouterMiddleware, Router, Route, IndexRoute, browserHistory, Switch } from 'react-router';

import App from './App';


//Import Containers
import Home from './containers/home';
import About from './containers/about';
import More from './containers/more';
import Work from './containers/work';
import Developer from './containers/developer';
import ProductDesigner from './containers/product-designer';
import KansasCity from './containers/kansas-city';
import Colophon from './containers/colophon';
import Garmin from './containers/garmin';
import Blog from './containers/blog';
import Resume from './containers/resume';
import Coffee from './containers/coffee';
import Books from './containers/subPages/Books.js'
import Podcasts from './containers/subPages/Podcasts.js'
import Movies from './containers/subPages/Movies.js'
import Music from './containers/subPages/Music.js'
import Contact from './containers/contact'
import Projects from './containers/projects'


const routes = (
  <Route path="/" mapMenuTitle="Home" component={Home}>
    <IndexRoute component={About} />
    <Route path="/about" mapMenuTitle="About" component={About} />
    <Route path="/resume" mapMenuTitle="Resume" component={Resume} />
    <Route path="/colophon" mapMenuTitle="Colophon" component={Colophon} />
    <Route path="/more" mapMenuTitle="More" component={More} />
    <Route path="/work" mapMenuTitle="Work" component={Work} />
    <Route path="/garmin" mapMenuTitle="Garmin" component={Garmin} />
    <Route path="/coffee" mapMenuTitle="Coffee" component={Coffee} />
    <Route path="/kansas-city" mapMenuTitle="Favorites" component={KansasCity} />
    <Route path="/product-designer" mapMenuTitle="Favorites" component={ProductDesigner} />
    <Route path="/developer" mapMenuTitle="Favorites" component={Developer} />
    <Route path="/contact" mapMenuTitle="Contact" component={Contact} />
    <Route path="/projects" mapMenuTitle="Projects" component={Projects} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
