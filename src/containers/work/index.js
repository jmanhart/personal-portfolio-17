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
import CardList from '../../components/cards/card-list.js'
import CardHero from '../../components/cards/card-hero.js'

import Footer from '../../components/footer'


const data = [
    {
      "cardTitle": "Mosey",
      "cardSubText": "Mobile application developement and UI Developement",
      "cardImage":"./src/public/images/logos/mosey.png",
      "cardStack": [
        "React-Native, ",
        "UX Design, ",
      ],
      "cardLocation": "View on Project",
      "cardLink":"/mosey-case-study"
    },
    {
      "cardTitle": "Cobb Connection",
      "cardSubText": "Mobile application for internal use.",
      "cardImage":"./src/public/images/logos/cobb.png",
      "cardStack": [
        "React-Native",
        "UX Design",
      ],
      "cardLocation": "View on Project",
      "cardLink":"/cobb-case-study"
    },
]
const dataMeetups = [
    {
      "cardTitle": "Framer Kansas City",
      "cardSubText": "Organizer of the Framer Kansas City sponsored user group.",
      "cardImage":"./src/public/images/logos/framer-KC-group.png",
      "cardLocation": "View on Group on Facebook",
      "cardLink": "https://www.facebook.com/groups/FramerKansasCity/",
    },
    {
      "cardTitle": "Kansas City Sketch Meetup",
      "cardSubText": "Organizer of the official Sketch Meetup for Kansas City.",
      "cardImage":"./src/public/images/logos/sketch-kc.png",
      "cardLocation": "View on Meetup",
      "cardLink": "https://www.meetup.com/Sketch-Design-Kansas-City/",
    },
]
const dataCodeSketchbooks = [
  {
    "cardTitle": "Framer Sketchbook",
    "cardSubText": "Running Sketchbook for Framer interactions, basic concepts, tips, and tricks.",
    "cardImage":"./src/public/images/logos/framer.png",
    "cardLocation": "View Project on Github",
    "cardLink":"https://github.com/jmanhart/framer-sketchbook"
  },
  {
    "cardTitle": "Python Sketchbook",
    "cardSubText": "Collection of basics and my progress of learning Python.",
    "cardImage":"./src/public/images/logos/python.png",
    "cardLocation": "View Project on Github",
    "cardLink":"https://github.com/jmanhart/python-sketchbook"
  },
  {
    "cardTitle": "Swift Sketchbook",
    "cardSubText": "Sketchs and tests using Swift to build UI.",
    "cardImage":"./src/public/images/logos/swift.png",
    "cardLocation": "View Project on Github",
    "cardLink":"https://github.com/jmanhart/swift-sketchbook"
  },
  {
    "cardTitle": "React-SketchApp",
    "cardSubText": "Sketch pad for making componets using react-sketchapp.",
    "cardImage":"./src/public/images/logos/react-sketchapp.png",
    "cardLocation": "View Project on Github",
    "cardLink":"https://github.com/jmanhart/react-sketchapp"
  },
  {
    "cardTitle": "Sketch Plugin",
    "cardSubText": "Sketchbook for building plugins and scripts for sketch.",
    "cardImage":"./src/public/images/logos/sketch.png",
    "cardLocation": "View Project on Github",
    "cardLink":"https://github.com/jmanhart/react-sketchapp"
  }
]
export default class Work extends Component{
    renderIntroduction(){
      return(
        <div>
          <div className="block flex-colum spacer-below">
            <span className="label-01">Work</span>
            <span className="label-03 body-color">
              Collection of code Sketchbooks and User Groups within Kansas City. Also anything else that makes the cut!
            </span>
          </div>
        </div>
      )
    }
    renderCasesStudies(){
      return(
        <div className="blockIII">
          <div className="section-header">
            <span className="label-04 body-color">
              Case Studies
            </span>
            <span className="label-04 section-count">
              {dataMeetups.length}
            </span>
          </div>
          {data.map((item) => {
            return (
              <CardHero
                cardLink={item.cardLink}
                cardTitle={item.cardTitle}
                cardSubText={item.cardSubText}
                cardStack={item.cardStack}
                cardImage={item.cardImage}
                cardLocation={item.cardLocation}
                />
            )
          })}
        </div>
      )
    }
    renderCodeSketchbooks(){
      return(
        <div className="blockIII">
          <div className="section-header">
            <span className="label-04 body-color">
              Code Sketchbooks
            </span>
            <span className="label-04 section-count">
              {dataCodeSketchbooks.length}
            </span>
          </div>
          {dataCodeSketchbooks.map((item) => {
            return (
              <CardList
                cardLink={item.cardLink}
                cardTitle={item.cardTitle}
                cardSubText={item.cardSubText}
                cardImage={item.cardImage}
                cardLocation={item.cardLocation}
                />
            )
          })}
        </div>
      )
    }

    renderMeetups(){
      return(
        <div className="blockIII">
          <div className="section-header">
            <span className="label-04 body-color">
              User Groups
            </span>

            <div className="section-pill">
              <span className="label-04 section-count">
                {dataMeetups.length}
              </span>
            </div>

          </div>
          {dataMeetups.map((item) => {
            return (
              <CardList
                cardLink={item.cardLink}
                cardTitle={item.cardTitle}
                cardSubText={item.cardSubText}
                cardImage={item.cardImage}
                cardLocation={item.cardLocation}
                />
            )
          })}
        </div>
      )
    }

    render(){
        return(
            <div className="wrapper">
              <BackIcon/>
              {this.renderIntroduction()}
              {this.renderCasesStudies()}
              {this.renderCodeSketchbooks()}
              {this.renderMeetups()}

            </div>
        )
    }
}

{/*
  {
    "cardLink": "https://www.meetup.com/Sketch-Design-Kansas-City/",
    "cardTitle": "K.C. Sketch Meetup",
    "cardSubText": "Orginazier of the official Sketch Meetup for Kansas City.",
    "cardImage":"./src/public/images/logos/sketch-kc.png",
    "cardLocation": "View on Meetup",
    "link":"/coffee/kansas-city"
  },

  {
    "cardTitle": "Framer Sketchbook",
    "cardSubText": "Collection of Framer basics, sketchs, and designs.",
    "cardImage":"./src/public/images/logos/framer.png",
    "cardLocation": "View on Github",
    "cardLink":"https://github.com/jmanhart/framer-sketchbook"
  },
  {
    "cardTitle": "React-SketchApp",
    "cardSubText": "Sketchs and tests using Swift to build UI nativly for iOS.",
    "cardImage":"./src/public/images/logos/react-sketchapp.png",
    "cardLocation": "View on Github",
    "cardLink":"https://github.com/jmanhart/react-sketchapp"
  },
  {
    "cardTitle": "Swift Sketchbook",
    "cardSubText": "Sketchs and tests using Swift to build UI nativly for iOS.",
    "cardImage":"./src/public/images/logos/swift.png",
    "cardLocation": "View on Github",
    "cardLink":"https://github.com/jmanhart/swift-sketchbook"
  },
*/}
