import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
// import './styles.scss'

//Import Components
import BackIcon from '../../components/backIcon'




export default class Developer extends Component{
    render(){
        return(

          <div>
            <div className="wrapper">
              <BackIcon />
              <div className="title-block">
                <span className="label-01">De·vel·op·er</span>
                <span className="label-02">
                  /dəˈveləpər/</span>
              </div>

              <div className="title-block">
                <span className="label-03 body-color">
                  Li & Floyd, Run the Jewels, bikes, learning, my Rasberry Pi, reading, espresso, Breaking Bad, boxing, my audio technica m50x, Continental Philosophy, Silicon Valley, The Rolling Stones, Killer Mike, Bernie Sanders, Christopher Hitchens and much more...
                </span>
              </div>
              <div className="title-block">
                <span className="label-03 body-color">
                  Li & Floyd, Run the Jewels, bikes, learning, my Rasberry Pi, reading, espresso, Breaking Bad, boxing, my audio technica m50x, Continental Philosophy, Silicon Valley, The Rolling Stones, Killer Mike, Bernie Sanders, Christopher Hitchens and much more...
                </span>
              </div>
              <div className="title-block">
                <span className="label-03 body-color">
                  Li & Floyd, Run the Jewels, bikes, learning, my Rasberry Pi, reading, espresso, Breaking Bad, boxing, my audio technica m50x, Continental Philosophy, Silicon Valley, The Rolling Stones, Killer Mike, Bernie Sanders, Christopher Hitchens and much more...
                </span>
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
