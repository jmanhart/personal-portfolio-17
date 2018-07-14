import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Video from 'react-html5video';
import {
  duder,
 } from './helpers.js'
 
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


export default class RubberDuck extends Component{
  constructor() {
    super();
    this.state = {isToggles: false};
    
  }
  
  animateUp() {
    let el = ReactDOM.findDOMNode(this.refs.square)
    duder(el)
  }
  
  loger() {
    console.log("hello")
  }
  
  render(){
      return(
        <div>
          <div className="wrapper">
            <BackIcon />
            
            <div className="square" ref="square" onClick={this.animateUp.bind(this)}/>
          </div>
        </div>
      )
  }
}


