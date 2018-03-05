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

//Import Components
import BackIcon from '../../components/backIcon'


export default class Resume extends Component{

    renderHeroDefinition(){
      return(
        <div>
          <div className="block flex-colum">
            <span className="label-01">Resume</span>
            <span className="label-02">
              Ok you asked for it!</span>
          </div>

          <div className="block definition">
            <span className="label-03 body-color definition-number">
              1.
            </span>
            <span className="label-03 body-color">
              A person that oversees product vision from a high level (how does this feature make sense for where we want to be in 6 months) to a low execution level (how does styling this button this way impact how the user flows through this flow).
            </span>
          </div>
        </div>
      )
    }

    renderExpandedDefintion(){
      return(
        <div className="block">
          <span className="label-03 body-color">
          <ul className="timeline">

            <li>
              <div className="timeline-entry">
                <span className="timeline-label">Garmin UX Designer</span>
                <span className="timeline-date">2017-present</span>
                <span>Lorem ipsum dolor amet squid fam 8-bit, wayfarers dreamcatcher artisan marfa poke seitan gastropub vice butcher ugh meditation. Glossier cloud bread scenester brunch, church-key prism forage raw denim affogato retro. Hammock put a bird on it vegan tattooed.</span>
              </div>
            </li>

            <li>
              <div className="timeline-entry">
                <span className="timeline-label">UX Designer</span>
                <span className="timeline-position">Garmin</span>
                <span className="timeline-date">2017-present</span>
              </div>
            </li>

            <li>
              <div className="timeline-entry">
                <span className="timeline-label">UX Designer</span>
                <span className="timeline-position">Garmin</span>
                <span className="timeline-date">2017-present</span>
              </div>
            </li>

            <li>
              <div className="timeline-entry">
                <span className="timeline-label">UX Designer</span>
                <span className="timeline-position">Garmin</span>
                <span className="timeline-date">2017-present</span>
              </div>
            </li>

            <li>
              <div className="timeline-entry">
                <span className="timeline-label">UX Designer</span>
                <span className="timeline-position">Garmin</span>
                <span className="timeline-date">2017-present</span>
              </div>
            </li>

            <li>
              <div className="timeline-entry">
                <span className="timeline-label">UX Designer</span>
                <span className="timeline-position">Garmin</span>
                <span className="timeline-date">2017-present</span>
              </div>
            </li>


          </ul>
          </span>
        </div>
      )
    }

    render(){
        return(
          <div>
            <div className="wrapper">
              <BackIcon />
              {this.renderHeroDefinition()}
              {this.renderExpandedDefintion()}
            </div>
          </div>



        )
    }
}

{/*
  <ul>
    <li>Garmin UX Designer
      <p>2017 – Present</p>
      <ul>
        <li>second item first subitem</li>
        <li>second item second subitem
        </li>
        <li>second item third subitem</li>
      </ul>
    </li>
    <li>Marlin</li>
    <li>Missouri State</li>
  </ul>
*/}
