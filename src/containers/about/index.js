import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
import './styles.scss'

const greeting = [
    "Hello,",
    "Hi,",
    "Howdy,",
    "Hiya,",
    "Yo,",
    "Aloha,",
    "Sup,",
    "Hullo,",
    "Hola,",
    "Ciao,",
    "👋🏻",
    "Hej,",
    "Bonjour,",
]


export default class About extends Component{

    getRandomGreeting(){
      let rando = Math.floor((Math.random() * greeting.length));
      return (
        <span className="label-01">{greeting[rando]} I'm John</span>
      )
    }

    render(){
        return(

            <div className="wrapper">

              <div className="title-block">
                {this.getRandomGreeting()}
                <span className="label-02">A Product Designer & Developer living in <Link to="/kansas-city"><span className="roll-over internal-link-color">Kansas City</span></Link> and working for&nbsp;
                  <Link to="/garmin">
                    <span className="roll-over">Garmin</span>
                  </Link>. Need to know <Link to="/more"><span className="roll-over">more</span></Link>?
                </span>

                <span className="label-03 body-color-light">
                  <Link to="/more">
                    <span className="roll-over-two internal-link-color">Portfolio available upon request. </span>
                  </Link>
                </span>
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

{/*
  "مرحبا,",
  "안녕,",
  "你好,",
  */}
