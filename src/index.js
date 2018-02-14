import React, { Component } from 'react'
import { render } from 'react-dom';
import { applyRouterMiddleware, Router, Route, IndexRoute, browserHistory, Switch } from 'react-router';


import App from './App';

//Import Components
import ScrollToTop from './components/ScrollToTop';

//Import Containers

import Home from './containers/home';
import About from './containers/about';
import More from './containers/more';
import Work from './containers/work';
import Developer from './containers/developer';
import ProductDesigner from './containers/product-designer';
import KansasCity from './containers/kansas-city';
import Favorites from './containers/favorites';
import Garmin from './containers/garmin';
import Marlin from './containers/marlin';
import Mosey from './containers/mosey';
import Blog from './containers/blog';
import Coffee from './containers/coffee';
import Books from './containers/subPages/Books.js'
import Podcasts from './containers/subPages/Podcasts.js'
import Movies from './containers/subPages/Movies.js'
import Music from './containers/subPages/Music.js'







const routes = (

  <Route path="/" mapMenuTitle="Home" component={Home}>
    <IndexRoute component={About} />
    <Route path="/about" mapMenuTitle="About" component={About} />
    <Route path="/more" mapMenuTitle="More" component={More} />
    <Route path="/work" mapMenuTitle="Work" component={Work} />
    <Route path="/garmin" mapMenuTitle="Garmin" component={Garmin} />
    <Route path="/work/mosey" mapMenuTitle="Mosey" component={Mosey} />
    <Route path="/work/marlin" mapMenuTitle="Marlin" component={Marlin} />
    <Route path="/coffee" mapMenuTitle="Coffee" component={Coffee} />
    <Route path="/kansas-city" mapMenuTitle="Favorites" component={KansasCity} />
    <Route path="/product-designer" mapMenuTitle="Favorites" component={ProductDesigner} />
    <Route path="/developer" mapMenuTitle="Favorites" component={Developer} />
    <Route path="/favorites" mapMenuTitle="Favorites" component={Favorites} >
      <IndexRoute component={Books}/>
      <Route path="/favorites/books" mapMenuTitle="Books" component={Books} />
      <Route path="/favorites/movies" mapMenuTitle="Movies" component={Movies} />
      <Route path="/favorites/music" mapMenuTitle="Music" component={Music} />
      <Route path="/favorites/podcasts" mapMenuTitle="Podcasts" component={Podcasts} />
    </Route>
  </Route>


);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
