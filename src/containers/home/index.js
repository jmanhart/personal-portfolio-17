import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Import Global Styles
import './../../styles/styles.css';
import './../../main.scss';

//Local Styles
import './styles.scss';

//Import Components
import BackIcon from '../../components/backIcon'
import HeroBlock from '../../components/heroBlock'

const ACTIVE = {
  color: 'rgba(0,0,0,0.8)',
  textDecoration:'underline',
}

export default class Home extends Component{
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
