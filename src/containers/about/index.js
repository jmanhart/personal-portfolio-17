import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
import './styles.scss'



export default class About extends Component{
    render(){
        return(

            <div className="wrapper">

              <div className="title-block">
                <span className="label-01">John Manhart</span>
                <span className="label-02">Is a Product Designer & Developer living in Kansas City. <span className="roll-over">Need to know more?</span></span>
                <span className="label-03">Currently designing for <span className="roll-over-two"><a href="https://www.garmin.com/en-US">Garmin</a></span></span>
              </div>



              <div className="social-block">
                <a href="https://github.com/jmanhart"><span className="label-05">Github</span></a>
                <a href="https://dribbble.com/manhart"><span className="label-05">Dribbble</span></a>
                <a href="https://medium.com/@JohnManhart"><span className="label-05">Medium</span></a>
              </div>

            </div>


        )
    }
}
