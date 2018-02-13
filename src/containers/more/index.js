import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
import './styles.scss'

//Import Components
import Filter from '../../components/filter/index.js'
import BackIcon from '../../components/backIcon'

const data = [
    {
      "rank": "1.",
      "title": "Cool Hand Luke",
    },
    {
      "rank": "2.",
      "title": "Intersteller",
    },
    {
      "rank": "3.",
      "title": "In Bruges",
    },
]

export default class More extends Component{
    render(){
        return(
          <div>
            <div className="wrapper">
              <BackIcon />
              <div className="title-block">
                <span className="label-01">I love the internet and...</span>
                <span className="label-02">
                  Li & Floyd, Run the Jewels, bikes, reading, espresso, my audio technica m50x, Continental Philosophy and much more...</span>
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

let styles = {
  container: {
    height: 2000,
    backgroundColor: 'rgba(0,0,0,0.15)',

  }
}
