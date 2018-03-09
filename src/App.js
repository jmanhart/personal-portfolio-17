import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import Interactive from 'react-interactive';
import { Link } from 'react-router';

//Import Styles
import './main.scss'
import './lib/vars.scss';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};


export default class App extends Component{
    render(){
        return(
          <div className="wrapper">
            <div id="content">
                {this.props.children}
            </div>
          </div>
        )
    }
}
App.propTypes = propTypes;
