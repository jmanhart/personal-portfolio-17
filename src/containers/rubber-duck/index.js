import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
// import Video from 'react-html5video';
import {
  up,
  down,
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
    this.state = {
      buttonOn: true,
    };

    // This binding is necessary to make `this` work in the callback
    this.animateUp = this.animateUp.bind(this);

  }

  animateUp() {
    let el = ReactDOM.findDOMNode(this.refs.square)
    this.setState((prevState, props) => ({
      buttonOn: !prevState.buttonOn
    }));
    if(this.state.buttonOn == true) {
      console.log("fuck");
      up(el)
    }
    if(this.state.buttonOn == false) {
      console.log("shit");
      down(el)
    }
  }

  render(){
      return(
        <div>
          <div className="wrapper">
            <BackIcon />
            <div className="square" ref="square" onClick={this.animateUp}>
                {this.state.buttonOn ? 'fart' : 'poop'}
            </div>
          </div>
        </div>
      )
  }
}
