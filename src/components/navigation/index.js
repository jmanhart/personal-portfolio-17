import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import './styles.css';

import '../../main.scss';

import MenuIcon from '../menuIcon'
import MenuNav from '../menuNav'

const ACTIVE = { background: 'rgba(0,0,0,0.2)'}

export default class Messenger extends Component{
    render(){
        return(
            <div className="navigation-container">
                <MenuIcon toggleNav={this.props.toggleNav}/>
            </div>
        )
    }
}

