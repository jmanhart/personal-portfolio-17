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

            <div className="wrapper">

              <div className="title-block">
                <span className="label-01">John Manhart</span>
                <span className="label-02">Is a Product Designer & Developer living in Kansas City. <span className="roll-over">Need to know more?</span></span>
                <span className="label-03">Currently desiging for <span className="roll-over-two">Garmin</span></span>
              </div>

              <div className="social-block">
                <span className="label-05">Github</span>
                <span className="label-05">Dribbble</span>
                <span className="label-05">Medium</span>
              </div>

            </div>


        )
    }
}
