import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Import Local Styles
import './styles.scss'

export default class About extends Component{
    render(){
        return(
            <div className="about-wrapper">
              <span className="label-emoji">✌</span>
              <span className="label-01">Yo, I'm John.</span>
              <span className="label-02">A Designer, Developer currently living in Kansas City</span>
              <span className="label-04">Currently at Garmin</span>
            </div>
        )
    }
}
