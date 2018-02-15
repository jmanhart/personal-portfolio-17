import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
import '../../main.scss'

//Import Components
import BackIcon from '../../components/backIcon'


export default class Developer extends Component{

    renderHeroDefinition(){
      return(
        <div>
          <div className="block flex-colum">
            <span className="label-01">De·vel·op·er</span>
            <span className="label-02">
              /dəˈveləpər/</span>
          </div>

          <div className="block definition">
            <span className="label-03 body-color definition-number">
              1.
            </span>
            <span className="label-03 body-color">
               A person who plans the form, look, or workings of something before its being made or built.
            </span>
          </div>

          <div className="block definition">
            <span className="label-03 body-color definition-number">
              2.
            </span>
            <span className="label-03 body-color">
              A person that goes to a lot of meetings and writes millions upon millions
            </span>
          </div>
        </div>
      )
    }

    renderExpandedDefintion(){
      return(
        <div className="block">
          <hr></hr>
            <span className="label-03 body-color">
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
