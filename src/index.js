import React, { Component } from 'react'
import { render } from 'react-dom';
import { applyRouterMiddleware, Router, Route, IndexRoute, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';

import App from './App';

//Import Components
import ScrollToTop from './components/ScrollToTop';

//Import Containers
import Home from './containers/home';
import Favorites from './containers/favorites';
import Garmin from './containers/garmin';
import Marlin from './containers/marlin';
import Mosey from './containers/mosey';
import Blog from './containers/blog';
import Coffee from './containers/coffee';
import Test from './containers/test';
import SubPageOne from './containers/subPages/sub-01.js'
import SubPageTwo from './containers/subPages/sub-02.js'
import SubPageThree from './containers/subPages/sub-03.js'


//Import Coffee supPages
import KansasCity from './containers/coffee/subPages/kansasCity.js'




const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/favorites" mapMenuTitle="Favorites" component={Favorites} render={applyRouterMiddleware(useScroll())}>
      <IndexRoute component={SubPageOne}/>
      <Route path="/favorites/books" mapMenuTitle="Books" component={SubPageOne} />
      <Route path="/favorites/movies" mapMenuTitle="Movies" component={SubPageTwo} />
      <Route path="/favorites/music" mapMenuTitle="Music" component={SubPageThree} />
    </Route>
    <Route path="/garmin" mapMenuTitle="Garmin" component={Garmin} />
    <Route path="/marlin" mapMenuTitle="Marlin" component={Marlin} />
    <Route path="/mosey" mapMenuTitle="Mosey" component={Mosey} />
    <Route path="/blog" mapMenuTitle="Blog" component={Blog} />
    <Route path="/coffee" mapMenuTitle="Coffee" component={Coffee}/>
    <Route path="/test" mapMenuTitle="Test" component={Test} render={applyRouterMiddleware(useScroll())}>
      <IndexRoute component={Garmin}/>
      <Route path="/test/garmin" mapMenuTitle="Books" component={Garmin} />
      <Route path="/test/mosey" mapMenuTitle="Movies" component={Mosey} />
      <Route path="/test/marlin" mapMenuTitle="Movies" component={Marlin} />
    </Route>

    {/* Coffee Cites */}
    <Route path="/coffee/kansas-city" mapMenuTitle="Kansas City" component={KansasCity}/>


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
