import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
import './styles.scss'

//Import Data
// import {quotes} from './quoteData.js'
// import {favorites} from './favoriteData.js'

//Import Components
import BackIcon from '../../components/backIcon'
import Timeline02 from '../../components/timeline02'


export default class Playground extends Component{
    render(){
        return(
          <div>
            <div className="wrapperNew">
              <BackIcon />
              <Timeline02 />
            </div>
          </div>



        )
    }
}


let styles = {
  container: {
    height: 2000,
    backgroundColor: 'rgba(0,0,0,0.15)',

  }
}
