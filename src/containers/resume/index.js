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


//Import Data
import {timelineData} from './TimelineData.js'


export default class Resume extends Component{

    renderWorkTimeline(){
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
    render(){
        return(
          <div>
            <div className="wrapper">
              <BackIcon />
              {this.renderWorkTimeline()}
            </div>
          </div>
        )
    }
}


{/*

  renderHeroDefinition(){
    return(
      <div>
        <div className="block flex-colum">
          <span className="label-01">Timeline</span>
          <span className="label-02">
            Ok you asked for it!</span>
        </div>

        <div className="block definition">

        </div>
      </div>
    )
  }


      renderFunTimeline(){
        return(
          <div className="block">
            <span className="label-03 body-color">
            <ul className="timeline">
              <li>
                <div className="timeline-entry">
                  <span className="timeline-label">One Year at Garmin!</span>
                  <span className="timeline-date">Feburary 27, 2018</span>
                  <span>Lorem ipsum dolor amet squid fam 8-bit, wayfarers dreamcatcher artisan marfa poke seitan gastropub vice butcher ugh meditation. Glossier cloud bread scenester brunch, church-key prism forage raw denim affogato retro. Hammock put a bird on it vegan tattooed.</span>
                </div>
              </li>

              <li>
                <div className="timeline-entry">
                  <span className="timeline-label">🏈 First Chiefs Game </span>
                  <span className="timeline-date">November 26, 2017</span>
                  <span>They Lost :(</span>
                </div>
              </li>

              <li>
                <div className="timeline-entry">
                  <span className="timeline-label">⛰️ Colorado </span>
                  <span className="timeline-date">July 11 – July 17, 2017</span>
                  <span>Insane alttitude was a bitch.</span>
                </div>
              </li>

              <li>
                <div className="timeline-entry">
                  <span className="timeline-label">Went Vegan </span>
                  <span className="timeline-date">July 1, 2017</span>
                  <span>They Lost :(</span>
                </div>
              </li>

              <li>
                <div className="timeline-entry">
                  <span className="timeline-label">First Day at Garmin!</span>
                  <span className="timeline-date">Feburary 27, 2017</span>
                  <span>Lorem ipsum dolor amet squid fam 8-bit, wayfarers dreamcatcher artisan marfa poke seitan gastropub vice butcher ugh meditation. Glossier cloud bread scenester brunch, church-key prism forage raw denim affogato retro. Hammock put a bird on it vegan tattooed.</span>
                </div>
              </li>
              <li>
                <div className="timeline-entry">
                  <span className="timeline-label">🚚 Moved to Kansas City!</span>
                  <span className="timeline-date">Feburary 24, 2017</span>
                </div>
              </li>

              <li>
                <div className="timeline-entry">
                  <span className="timeline-label">SEATTLE</span>
                  <span className="timeline-date">October 12 – 17 2016</span>
                  <span>Lorem ipsum dolor amet squid fam 8-bit, wayfarers dreamcatcher artisan marfa poke seitan gastropub vice butcher ugh meditation. Glossier cloud bread scenester brunch, church-key prism forage raw denim affogato retro. Hammock put a bird on it vegan tattooed.</span>
                </div>
              </li>

              <li>
                <div className="timeline-entry">
                  <span className="timeline-label">🎉 Got Married</span>
                  <span className="timeline-date">September 29, 2016</span>
                </div>
              </li>

              <li>
                <div className="timeline-entry">
                  <span className="timeline-label">Marlin, UX / UI Developer</span>
                  <span className="timeline-date">2013-2017</span>
                  <span>Lorem ipsum dolor amet squid fam 8-bit, wayfarers dreamcatcher artisan marfa poke seitan gastropub vice butcher ugh meditation. Glossier cloud bread scenester brunch, church-key prism forage raw denim affogato retro. Hammock put a bird on it vegan tattooed.</span>
                </div>
              </li>

              <li>
                <div className="timeline-entry">
                  <span className="timeline-label">🎓 Graduated, Missouri State</span>
                  <span className="timeline-date">Class of 2013</span>
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


            </ul>
            </span>
          </div>
        )
      }
  */}
