import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
import './styles.scss'

//Import Data
// import {quotes} from './quoteData.js'
// import {favorites} from './favoriteData.js'

//Import Components
import BackIcon from '../../components/backIcon'
import Timeline02 from '../../components/timeline02'

const URLPath = "http://0.0.0.0:8080/src/public/framer03.framer/index.html"


"http://manhart.io/src/public/framer03.framer/index.html"

export default class Playground extends Component{
  renderTitleInfo(){
    return(
      <div>
        <div className="title-block">
          <span className="label-01">📈 Stock Application</span>
          <span className="label-02">
            Test project awesome</span>
        </div>
      </div>
    )
  }

  renderProjectDetails(){
    return(
      <div className="blockII">

          <span className="label-03 body-color">
            <hr/>
            Lorem ipsum dolor amet enamel pin 90's williamsburg asymmetrical actually vape. Succulents meggings everyday carry echo park literally tilde cred shabby chic bicycle rights health goth art party lo-fi vegan crucifix locavore. Mustache cornhole typewriter plaid normcore banh mi whatever church-key tumblr affogato readymade everyday carry unicorn raclette flannel. Street art master cleanse tilde shabby chic, crucifix fingerstache migas.
          </span>
          
          <span className="label-03 body-color">
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </span>
            
          <span className="label-03 body-color">
            Cliche leggings whatever tumeric, ramps slow-carb pop-up mixtape. Wayfarers lumbersexual butcher actually, jean shorts offal tumblr single-origin coffee af letterpress. Squid vegan deep v crucifix four dollar toast. Readymade la croix tote bag asymmetrical fam biodiesel art party salvia yr enamel pin jean shorts. Subway tile lumbersexual kickstarter pop-up. Photo booth franzen yr synth dreamcatcher, kickstarter pitchfork kinfolk iceland occupy austin air plant you probably haven't heard of them.

            Lorem ipsum dolor amet enamel pin 90's williamsburg asymmetrical actually vape. Succulents meggings everyday carry echo park literally tilde cred shabby chic bicycle rights health goth art party lo-fi vegan crucifix locavore. Mustache cornhole typewriter plaid normcore banh mi whatever church-key tumblr affogato readymade everyday carry unicorn raclette flannel. Street art master cleanse tilde shabby chic, crucifix fingerstache migas.

            Cliche leggings whatever tumeric, ramps slow-carb pop-up mixtape. Wayfarers lumbersexual butcher actually, jean shorts offal tumblr single-origin coffee af letterpress. Squid vegan deep v crucifix four dollar toast. Readymade la croix tote bag asymmetrical fam biodiesel art party salvia yr enamel pin jean shorts. Subway tile lumbersexual kickstarter pop-up. Photo booth franzen yr synth dreamcatcher, kickstarter pitchfork kinfolk iceland occupy austin air plant you probably haven't heard of them.

            Lorem ipsum dolor amet enamel pin 90's williamsburg asymmetrical actually vape. Succulents meggings everyday carry echo park literally tilde cred shabby chic bicycle rights health goth art party lo-fi vegan crucifix locavore. Mustache cornhole typewriter plaid normcore banh mi whatever church-key tumblr affogato readymade everyday carry unicorn raclette flannel. Street art master cleanse tilde shabby chic, crucifix fingerstache migas.

            Cliche leggings whatever tumeric, ramps slow-carb pop-up mixtape. Wayfarers lumbersexual butcher actually, jean shorts offal tumblr single-origin coffee af letterpress. Squid vegan deep v crucifix four dollar toast. Readymade la croix tote bag asymmetrical fam biodiesel art party salvia yr enamel pin jean shorts. Subway tile lumbersexual kickstarter pop-up. Photo booth franzen yr synth dreamcatcher, kickstarter pitchfork kinfolk iceland occupy austin air plant you probably haven't heard of them.

          </span>
      </div>
    )
  }
  

  
  render(){
      return(
        <div>
          <div className="wrapperNew">
            <BackIcon />
            <div className="scroll-static">
              <div className="video-container">
                <iframe className="dude" src={URLPath} >
                  <p>Your browser does not support iframes.</p>
                </iframe>
                {/*<span className="label-03 white">RELOAD PROTOTYPE</span>*/}
              </div>
            </div>
            <div className="scroll-overflow-container">
              {this.renderTitleInfo()}
              
              {this.renderProjectDetails()}
            </div>
          </div>
        </div>
      )
  }
}
