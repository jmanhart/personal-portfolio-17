import React, { Component } from 'react';
import PropTypes from 'prop-types';


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
          <div id="page">
            <div className="main-content">
              {this.props.children}
            </div>
          </div>
        )
    }
}
App.propTypes = propTypes;

