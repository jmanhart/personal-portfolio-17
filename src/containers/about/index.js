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
                <span className="label-02">A Product Designer, Developer, Writer, living & working in Kansas City.</span>
                <span className="label-04">Currently desiging for Garmin</span>
              </div>

              <div className="social-block">
                <span className="label-04">Github</span>
                <span className="label-04">Dribbble</span>
                <span className="label-04">Medium</span>
                <span className="label-04">About</span>

              </div>

            </div>


        )
    }
}
