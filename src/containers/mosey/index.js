import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Import Global Styles
import './../../styles/styles.css';
import './../../main.scss';

//Import Components
import BackIcon from '../../components/backIcon'

export default class Mosey extends Component{
    render(){
        return(
            <div className="details-hero-container">
              <BackIcon />
              <h1>Mosey</h1>
            </div>
        )
    }
}
