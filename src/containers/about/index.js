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
                <span className="label-01">Hello, I'm Me</span>
                <span className="label-02">Is a Product Designer & Developer living in Kansas City.
                  <Link to="/more">
                    <span className="roll-over">&nbsp;Need to know more?</span>
                  </Link>
                </span>

                <span className="label-03 body-color-light">
                  Currently living in&nbsp;<Link to="/kansas-city"><span className="roll-over-two gray internal-link-color">Kansas City</span></Link> and working for&nbsp;<span className="roll-over-two internal-link-color"><Link to="/garmin">Garmin</Link></span>
                </span>
              </div>



              <div className="social-block">
                <a href="https://github.com/jmanhart"><span className="label-05">Github</span></a>
                <a href="https://dribbble.com/manhart"><span className="label-05">Dribbble</span></a>
                <a href="https://medium.com/@JohnManhart"><span className="label-05">Medium</span></a>
                <a href="nothing"><span className="label-05">Work</span></a>
              </div>

            </div>


        )
    }
}
