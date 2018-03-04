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


export default class Resume extends Component{

    renderHeroDefinition(){
      return(
        <div>
          <div className="block flex-colum">
            <span className="label-01">Resume</span>
            <span className="label-02">
              Ok you asked for it!</span>
          </div>

          <div className="block definition">
            <span className="label-03 body-color definition-number">
              1.
            </span>
            <span className="label-03 body-color">
              A person that oversees product vision from a high level (how does this feature make sense for where we want to be in 6 months) to a low execution level (how does styling this button this way impact how the user flows through this flow).
            </span>
          </div>
          <div className="block definition">
            <span className="label-03 body-color definition-number">
              2.
            </span>
            <span className="label-03 body-color">
              A problem solver.
            </span>
          </div>
        </div>
      )
    }

    renderExpandedDefintion(){
      return(
        <div className="block">
            <span className="label-03 body-color">
              <hr/>
                Skills<br/>
                - HTML <br/>
                - CSS <br/>
                  -- Preprocessors <br/>
                  -- SCSS<br/>
                  -- Less<br/>
                - JavaScript  <br/>
                  -- ES6<br/>
                  -- React<br/>
                  -- React Native<br/>
                  -- Package Manager <br/>
                  -- npm<br/>
                  -- Yarn<br/>
                - Swift<br/>
                - Python<br/>
                - Git<br/>
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
