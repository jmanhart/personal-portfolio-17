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
import HeroBlock from '../../components/heroBlock'


export default class Garmin extends Component{
    render(){
        return(
          <div>
            <div className="wrapper">
              <BackIcon />
              <div className="title-block">
                <span className="label-01">Garmin Connect</span>
                <span className="label-02">
                  UX Designer, 2017 – Present</span>
              </div>

              <div className="title-block">
                <span className="label-03 body-color">
                  Li & Floyd, Run the Jewels, bikes, learning, my Rasberry Pi, reading, espresso, Breaking Bad, boxing, my audio technica m50x, Continental Philosophy, Silicon Valley, The Rolling Stones, Killer Mike, Bernie Sanders, Christopher Hitchens and much more...
                </span>
              </div>
            </div>
          </div>

        )
    }
}
