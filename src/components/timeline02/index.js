import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Global Styles
import '../../main.scss'

//Import Local Styles
import './styles.scss'

//Import Timeline Data
import {timelineData} from './TimelineData.js'

export default class Timeline02 extends Component{

    render(){
      return(
        <div className="block">
          <span className="label-03 body-color">
          <ul className="timeline">
            {timelineData.map((item) => {
              return (
                <li>
                  <div className="timeline-entry">
                    <span className="timeline-date">{item.dates}</span>
                    <span className="timeline-label">{item.title}</span>
                    <span className="timeline-sub-title">{item.subTitle}</span>
                    <span>{item.description}</span>
                  </div>
                </li>
              )
            })}
          </ul>
          </span>
        </div>
      )
    }
}
