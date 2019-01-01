import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
// import Video from 'react-html5video';

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


export default class MoseyCaseStudy extends Component{
  renderHeroDefinition(){
    return(
      <div>
        <img className="hero-image" src="./src/public/images/mosey-case-study/mosey-intro.png" />
        <div className="title-block">
          <span className="label-01">Decide. Eat. Mosey.</span>
          <span className="label-02">
            Ever have trouble picking a place to eat with your friends?
          </span>
        </div>

        <div className="title-block">
          <span className="label-03 body-color">
           Mosey makes going out easy. Invite your friends to pick among all of the restaurants or bars in your area. Mosey shows you which places your friends actually want to go and aggregates them all in one place.
          </span>
        </div>

      </div>
    )
  }

  renderExpandedDefintion(){
    return(
      <div>
        <hr />

        {/* Team Break Out - Improving the UI Language Selection*/}
        <div className="blockII">
            <span className="label-04 body-color">
              The Mosey Team
            </span>
            <span className="label-03 body-color">
              <span className="label-03 body-color">
                <ul className="sand">
                  <li className="sand-list">
                    <span className="sand-label">John, UX Engineer and User Experience</span> – The existing app was dependent on very rigid containers for content. It had to many specific categories that yeiled few if any results.
                  </li>
                  <li className="sand-list">
                    <span className="sand-label">Annan, Project Manager</span> – The most glaring broken feature was requiring the user to select their language on every App open. This created a very un-nessecary bottle neck for every User every time.
                    </li>
                  <li className="sand-list">
                    <span className="sand-label">Drew, Software Engineer</span> – The App's structure was very rigid and dependent on numerous naviagtion loops, such as back arrows, and entire resets when navigating to a new section of the App.
                  </li>
                  <li className="sand-list">
                    <span className="sand-label">Tyler Product Designer</span> – Adding the ability for rapid filtering and serving content was essential with the new direction of the App.
                  </li>
                </ul>
              </span>
            </span>
        </div>

        <hr />

        {/* Tools Used Section - Improving the UI Language Selection*/}
        <div className="blockII">
            <span className="label-04 body-color">
              Built With
            </span>
            <div className="blockII">
              <img className="content-image" src="./src/public/images/mosey-case-study/mosey-built-with.png" />
            </div>
            <div className="title-block">
              <span className="label-03 body-color">
               Ever have trouble picking a place to eat with your friends? Mosey makes going out easy. Invite your friends to pick among all of the restaurants or bars in your area. Mosey shows you which places your friends actually want to go and aggregates them all in one place.
              </span>
            </div>
        </div>

        <hr />

        {/* Onboarding Section - Block */}
        <div className="blockII">
          <span className="label-04 body-color">
            On Boarding.
          </span>

          <div className="blockII">
            <img className="content-image" src="./src/public/images/mosey-case-study/mosey-onboarding.png" />
          </div>

          <div className="title-block">
            <span className="label-03 body-color">
             Ever have trouble picking a place to eat with your friends? Mosey makes going out easy. Invite your friends to pick among all of the restaurants or bars in your area. Mosey shows you which places your friends actually want to go and aggregates them all in one place.
            </span>
          </div>
        </div>

        <hr />




        {/* Matching Section - Block */}
        <div className="blockII">
          <span className="label-04 body-color">
            Match.
          </span>

          <div className="blockII">
            <img className="content-image" src="./src/public/images/mosey-case-study/mosey-create-group-I.png" />
          </div>
          <div className="title-block">
            <span className="label-03 body-color">
             Ever have trouble picking a place to eat with your friends? Mosey makes going out easy. Invite your friends to pick among all of the restaurants or bars in your area. Mosey shows you which places your friends actually want to go and aggregates them all in one place.
            </span>
          </div>
          <div className="blockII">
            <img className="content-image" src="./src/public/images/mosey-case-study/mosey-create-group-II.png" />
          </div>
          <div className="title-block">
            <span className="label-03 body-color">
             Ever have trouble picking a place to eat with your friends? Mosey makes going out easy. Invite your friends to pick among all of the restaurants or bars in your area. Mosey shows you which places your friends actually want to go and aggregates them all in one place.
            </span>
          </div>
        </div>

        <hr />



        {/* Group Section - Block */}
        <div className="blockII">
          <span className="label-04 body-color">
            Groups.
          </span>

          <div className="blockII">
            <img className="content-image" src="./src/public/images/cobb-case-study/wires-lang.jpg" />
          </div>

          <div className="title-block">
            <span className="label-03 body-color">
             Ever have trouble picking a place to eat with your friends? Mosey makes going out easy. Invite your friends to pick among all of the restaurants or bars in your area. Mosey shows you which places your friends actually want to go and aggregates them all in one place.
            </span>
          </div>

        </div>

        <hr />


        {/* Component Break Out Section - Block */}
        <div className="blockII">
          <span className="label-04 body-color">
            Components.
          </span>

          <div className="title-block">
            <span className="label-03 body-color">
             Ever have trouble picking a place to eat with your friends? Mosey makes going out easy. Invite your friends to pick among all of the restaurants or bars in your area. Mosey shows you which places your friends actually want to go and aggregates them all in one place.
            </span>
          </div>
        </div>

        <div className="blockII">
          <img className="content-image" src="./src/public/images/cobb-case-study/wires-lang.jpg" />
        </div>


      </div>
    )
  }

  render(){
      return(
        <div>
          <div className="wrapper">
            <BackIcon linkBack="/work"/>
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
