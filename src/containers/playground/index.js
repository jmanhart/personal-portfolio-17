import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
// import './styles.scss'

//Import Data
// import {quotes} from './quoteData.js'
// import {favorites} from './favoriteData.js'

//Import Components
import BackIcon from '../../components/backIcon'
import Timeline02 from '../../components/timeline02'


export default class Playground extends Component{

    renderMyThoughts(){
      return (
        <div>
          <div className="block flex-colum">
            <span className="label-01">Li and Floyd are my absolute favorites, but after that it goes...</span>
            <span className="label-02">
              espresso, learning, movies, reading, biking, boxing, bass, drawing <a href="https://www.instagram.com/syrus.syrus.syrus/">( ༎ຶД༎ຶ)</a>
            </span>
          </div>
        </div>
      );
    }


    render(){
        return(
          <div>
            <div className="wrapper">
              <BackIcon />
              {this.renderMyThoughts()}
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
