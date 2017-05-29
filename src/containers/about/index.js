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
          <div>
            <div className="about-wrapper">
              <div className="about-block">
                <span className="label-01">👋 I'm John.</span>
                <span className="label-02">A Designer, Developer currently living in Kansas City</span>
                <span className="label-04">Currently at Garmin</span>
              </div>
              <div>
                <span className="label-05">More Shit About Me Below</span>
              </div>
            </div>

            <div className="about-wrapper">
              <div className="about-block">
                <span className="label-01"><s>ARKANSAS</s></span>
                <span className="label-01"><s>MEXICO</s></span>
                <span className="label-01"><s>MICHIGAN</s></span>
                <span className="label-01"><s>MISSOURI</s></span>
                <span className="label-01">KANSAS CITY</span>
              </div>
            </div>

          </div>

        )
    }
}
