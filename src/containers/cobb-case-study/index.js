import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Video from 'react-html5video';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
import './styles.scss'

//Import Data
// import {quotes} from './quoteData.js'
// import {favorites} from './favoriteData.js'

//Import Components
import Filter from '../../components/filter/index.js'
import BackIcon from '../../components/backIcon'
import Timeline from '../../components/timeline'


export default class CobbCaseStudy extends Component{
  renderHeroDefinition(){
    return(
      <div>
        <img className="hero-image" src="./src/public/images/cobb-case-study/hero-angled.png" />
        <div className="title-block">
          <span className="label-01">Cobb Connection, Marlin</span>
          <span className="label-02">
            Cobb-Vantress is the global leader in poultry research and development.
          </span>
        </div>

        <div className="title-block">
          <span className="label-03 body-color">
           They rely heavily on their native phone application to inform their customers. Cobb tasked the team at Marlin to re-build their app which included a new Development Stack and UX/UI ideation.
          </span>
        </div>

      </div>
    )
  }

  renderExpandedDefintion(){
    return(
      <div>


        {/* Research - Improving the UI Language Selection*/}
        <div className="blockII">
            <span className="label-04 body-color">
              Research & Audit of Exsisting App
            </span>
            <span className="label-03 body-color">
              Our first task was a total experience audit of the exsisting App. We started by mapping out all the flows, analyzing analytics, and collecting the existing graphics and styles. With this information we came to some conclusions regarding UX and adoption.
            </span>
            <span className="label-03 body-color">
              <ul>
                <li>UI Language Selection – The most glaring broken feature was requiring the user to select their language on every App open. This created a very un-nessecary bottle neck for every User every time.</li>
                <li>App structure – The App's structure was very rigid and dependent on numerous naviagtion loops, such as back arrows, and entire resets when navigating to a new section of the App.</li>
                <li>Content Structure – The existing app was dependent on very rigid containers for content. It had to many specific categories that yeiled few if any results.</li>
                <li>Content Filtering – Adding the ability for rapid filtering and serving content was essential with the new direction of the App.</li>
                <li>Tools – Creating a style and set of actions for tools and improving the usability.</li>
              </ul>
            </span>
        </div>
        {/* IMAGE*/}
        <div className="blockII">
          <img className="content-image" src="./src/public/images/cobb-case-study/wires-old-app.jpg" />
        </div>


        {/* UX Phase Block - Improving the UI Language Selection*/}
        <div className="blockII">
            <span className="label-04 body-color">
              UX Phase
            </span>
            <span className="label-04 body-color">
              Improving the UI Language Selection
            </span>
            <span className="label-03 body-color">
              First, step in solving the problem was defaulting the Users language to their native phone language. Second we created the ability for the User to change their UI language by adding a method in the navigation bar to do so on any page.
            </span>
        </div>
        {/* IMAGE*/}
        <div className="blockII">
          <img className="content-image" src="./src/public/images/cobb-case-study/wires-lang.jpg" />
        </div>
        {/* IMAGE*/}
        <div className="blockII">
          <Video autoPlay loop muted
               height="500px"
               width="500px">
              <source src="./src/public/images/cobb-case-study/videos/vid-proto-lang.mov" type="video/mp4" />
          </Video>
        </div>



        {/* UX Phase Block - Refining content structure*/}
        <div className="blockII">
            <span className="label-04 body-color">
              Refining Content Structure
            </span>
            <span className="label-03 body-color">
              After dissecting the content of the application and abiding by the Apple and Google HIG, we arrived at adopting a bottom tab navigation structure. This gives the user the ability to serve desired content with great ease and on their own terms.
            </span>
        </div>
        {/* IMAGE*/}
        <div className="blockII">
          <img className="content-image" src="./src/public/images/cobb-case-study/sketch-random.jpg" />
        </div>
        {/* IMAGE*/}
        <div className="blockII">
          <img className="content-image" src="./src/public/images/cobb-case-study/wires-all.jpg" />
        </div>



        {/* UX Phase Block - New Navigatin system*/}
        <div className="blockII">
            <span className="label-04 body-color">
              Developing the new Naviagtion System
            </span>
            <span className="label-03 body-color">
              Exploring different layouts and functionality on the new bottom navigation. Options ranging from two, three, and four tab styles were explored.
            </span>
        </div>
        {/* IMAGE*/}
        <div className="blockII">
          <img className="content-image" src="./src/public/images/cobb-case-study/wires-tab.jpg" />
        </div>
        {/* VIDEO*/}
        <div className="blockII">
          <Video autoPlay loop muted
               height="500px">
              <source src="./src/public/images/cobb-case-study/videos/vid-proto-tabs.mov" type="video/mp4" />
          </Video>
        </div>


        {/* UX Phase Block - New Navigatin system*/}
        <div className="blockII">
            <span className="label-04 body-color">
              Developing Content Filtering
            </span>
            <span className="label-03 body-color">
              Adding the ability to filter cobb's ever growing library of guides helped in establishing the new structure of the app. Allowing for filtering helped ease the previous app's immense complexity concerning hard stops and repetitive loops.
            </span>
        </div>
        {/* IMAGE*/}
        <div className="blockII">
          <img className="content-image" src="./src/public/images/cobb-case-study/sketch-filtering.jpg" />
        </div>
        {/* IMAGE*/}
        <div className="blockII">
          <img className="content-image" src="./src/public/images/cobb-case-study/wires-guide-lang.jpg" />
        </div>
        {/* VIDEO*/}
        <div className="blockII">
          <Video autoPlay loop muted
               height="500px">
              <source src="./src/public/images/cobb-case-study/videos/vid-proto-guide.mov" type="video/mp4" />
          </Video>
        </div>


        {/* UX Phase Block - User Tools for production*/}
        <div className="blockII">
            <span className="label-04 body-color">
              User Tools for Production
            </span>
            <span className="label-03 body-color">
              Another request from the client was to create and establish a set of tools to aid their clients. Consistency was our main goal here as a team, and having a pleasant experience for the user.
            </span>
        </div>
        {/* IMAGE*/}
        <div className="blockII">
          <img className="content-image" src="./src/public/images/cobb-case-study/sketch-one.jpg" />
        </div>
        {/* VIDEO*/}
        <div className="blockII">
          <img className="content-image" src="./src/public/images/cobb-case-study/wires-tools.jpg" />
        </div>

        {/* UI Phase Block - User Tools for production*/}
        <div className="blockII">
            <span className="label-04 body-color">
              UI Phase
            </span>
            <span className="label-03 body-color">
              The final 2.0 version of the updated app before entering development and QA.
            </span>
        </div>
        {/* IMAGE*/}
        <div className="blockII">
            <img className="content-image" src="./src/public/images/cobb-case-study/design-filtering.png" />
        </div>
        {/* IMAGE*/}
        <div className="blockII">
            <img className="content-image" src="./src/public/images/cobb-case-study/design-products-trio.jpg" />
        </div>
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


let styles = {
  container: {
    height: 2000,
    backgroundColor: 'rgba(0,0,0,0.15)',

  }
}
