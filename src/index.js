import React, { Component } from 'react'
import { render } from 'react-dom';
import { applyRouterMiddleware, Router, Route, IndexRoute, browserHistory, Switch } from 'react-router';
import { useScroll } from 'react-router-scroll';

import App from './App';

//Import Components
import ScrollToTop from './components/ScrollToTop';

//Import Containers

import Home from './containers/home';
import About from './containers/about';
import Work from './containers/work';
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


//Import Coffee supPages
import KansasCity from './containers/coffee/subPages/kansasCity.js'




const routes = (

  <Route path="/" mapMenuTitle="Home" component={Home}>
    <IndexRoute component={About} />
    <Route path="/about" mapMenuTitle="About" component={About} />
    <Route path="/work" mapMenuTitle="Work" component={Work} />
    <Route path="/work/garmin" mapMenuTitle="Garmin" component={Garmin} />
    <Route path="/work/mosey" mapMenuTitle="Mosey" component={Mosey} />
    <Route path="/work/marlin" mapMenuTitle="Marlin" component={Marlin} />
    <Route path="/coffee" mapMenuTitle="Coffee" component={Coffee} />
    <Route path="/favorites" mapMenuTitle="Favorites" component={Favorites} render={applyRouterMiddleware(useScroll())}>
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
    render={applyRouterMiddleware(useScroll())}
  />,
  document.getElementById('root'),
);



{/*  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/garmin" mapMenuTitle="Garmin" component={Garmin} />
    <Route path="/marlin" mapMenuTitle="Marlin" component={Marlin} />
    <Route path="/mosey" mapMenuTitle="Mosey" component={Mosey} />
    <Route path="/blog" mapMenuTitle="Blog" component={Blog} />
    <Route path="/coffee" mapMenuTitle="Coffee" component={Coffee}/>
    <Route path="/test" mapMenuTitle="Test" component={Test} render={applyRouterMiddleware(useScroll())}>
      <IndexRoute component={Home}/>
      <Route path="/test/home" mapMenuTitle="Home" component={Home} />
      <Route path="/test/about" mapMenuTitle="About" component={About} />
      <Route path="/test/garmin" mapMenuTitle="Garmin" component={Garmin} />
      <Route path="/test/mosey" mapMenuTitle="Mosey" component={Mosey} />
      <Route path="/test/marlin" mapMenuTitle="Marlin" component={Marlin} />
      <Route path="/test/coffee" mapMenuTitle="Coffee" component={Coffee}/>
      <Route path="/test/favorites" mapMenuTitle="Favorites" component={Favorites} render={applyRouterMiddleware(useScroll())}>
        <IndexRoute component={Book}/>
        <Route path="/test/favorites/books" mapMenuTitle="Books" component={Books} />
        <Route path="/test/favorites/movies" mapMenuTitle="Movies" component={Movies} />
        <Route path="/test/favorites/music" mapMenuTitle="Music" component={Music} />
        <Route path="/test/favorites/podcasts" mapMenuTitle="Podcasts" component={Podcasts} />
      </Route>
    </Route>


    <Route path="/coffee/kansas-city" mapMenuTitle="Kansas City" component={KansasCity}/>


  </Route>*/}
