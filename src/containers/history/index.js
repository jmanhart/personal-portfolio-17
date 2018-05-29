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
import Filter from '../../components/filter/index.js'
import BackIcon from '../../components/backIcon'
import Timeline from '../../components/timeline'


export default class History extends Component{
    renderMyThoughts(){
      return (
        <div>
          <div className="block flex-colum">
        
            <span className="label-02">
              Work history and timeline
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
              <Timeline />
            </div>
          </div>



        )
    }
}
