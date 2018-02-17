import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
import '../../main.scss'
import './styles.scss'

//Import Components
import BackIcon from '../../components/backIcon'


export default class Colophon extends Component{

    renderHeroDefinition(){
      return(
        <div>
          <div className="block flex-colum">
            <span className="label-01">Colophon</span>
            <span className="label-02">
              /dəˈveləpər/</span>
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
          <div className="block-code">
            <code>

              {` UserGreeting(props) {
                 <h1>Welcome back!</h1>;
              }`}
            </code>
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