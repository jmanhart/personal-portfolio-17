import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
import './styles.scss'

export default class Chevron extends Component{
    render(){
        return(
          <div>
            <div className="chevron"/>
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
