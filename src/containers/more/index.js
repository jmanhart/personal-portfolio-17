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

    renderHeroDefinition(){
      return(
        <div>
          <div className="block flex-colum">
            <span className="label-01">I love the internet and...</span>
            <span className="label-02">
              Li & Floyd, Run the Jewels, bikes, reading, espresso, my audio technica m50x, Continental Philosophy and much more...</span>
          </div>
        </div>
      )
    }

    renderExpandedDefintion(){
      return(
        <div className="block">
          <hr></hr>
            <span className="body-01">
              Lorem ipsum dolor amet enamel pin 90's williamsburg asymmetrical actually vape. Succulents meggings everyday carry echo park literally tilde cred shabby chic bicycle rights health goth art party lo-fi vegan crucifix locavore. Mustache cornhole typewriter plaid normcore banh mi whatever church-key tumblr affogato readymade everyday carry unicorn raclette flannel. Street art master cleanse tilde shabby chic, crucifix fingerstache migas.

              Cliche leggings whatever tumeric, ramps slow-carb pop-up mixtape. Wayfarers lumbersexual butcher actually, jean shorts offal tumblr single-origin coffee af letterpress. Squid vegan deep v crucifix four dollar toast. Readymade la croix tote bag asymmetrical fam biodiesel art party salvia yr enamel pin jean shorts. Subway tile lumbersexual kickstarter pop-up. Photo booth franzen yr synth dreamcatcher, kickstarter pitchfork kinfolk iceland occupy austin air plant you probably haven't heard of them.
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


let styles = {
  container: {
    height: 2000,
    backgroundColor: 'rgba(0,0,0,0.15)',

  }
}
