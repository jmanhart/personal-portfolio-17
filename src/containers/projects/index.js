import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Styles
import './styles.scss'
// import '../../main.scss'

//Import Components
import BackIcon from '../../components/backIcon'
import WorkCard from '../../components/workCard'
import Footer from '../../components/footer'


const data = [
    {
      "cardLink": "https://github.com/jmanhart/framer-sketchbook",
      "cardTitle": "Framer Sketchbook",
      "cardSubText": "Collection of Framer basics, sketchs, and designs.",
      "cardImage":"./src/public/images/logos/framer.png",
      "cardLocation": "View on Github",
      "link":"/coffee/kansas-city"
    },
    {
      "cardLink": "https://www.meetup.com/Sketch-Design-Kansas-City/",
      "cardTitle": "K.C. Sketch Meetup",
      "cardSubText": "Orginazier of the official Sketch Meetup for Kansas City.",
      "cardImage":"./src/public/images/logos/sketch-kc.png",
      "cardLocation": "View on Meetup",
      "link":"/coffee/kansas-city"
    },
    {
      "cardLink": "https://github.com/jmanhart/react-sketchapp",
      "cardTitle": "React-SketchApp",
      "cardSubText": "Sketchs and tests using Swift to build UI nativly for iOS.",
      "cardImage":"./src/public/images/logos/react-sketchapp.png",
      "cardLocation": "View on Github",
      "link":"/coffee/kansas-city"
    },
    {
      "cardLink": "https://github.com/jmanhart/swift-sketchbook",
      "cardTitle": "Swift Sketchbook",
      "cardSubText": "Sketchs and tests using Swift to build UI nativly for iOS.",
      "cardImage":"./src/public/images/logos/swift.png",
      "cardLocation": "View on Github",
      "link":"/coffee/kansas-city"
    },

]

export default class Projects extends Component{


    render(){
        return(
          <div className="video-container">
            <iframe src="http://0.0.0.0:8080/src/public/framer03.framer/index.html"    width="560" height="315" allowfullscreen frameborder="0" >
            <p>Your browser does not support iframes.</p>
          </iframe>

          </div>
        )
    }
}

{/*
  <BackIcon/>
  <div className="flex-grid">
    {data.map((item) => {
      return(
          <div className="project-wrapper col">
            <img src={item.cardImage || "Image Missing"} />
            <span className="card-01">{item.cardTitle}</span>

          </div>
      )
    })}
  </div>
*/}
