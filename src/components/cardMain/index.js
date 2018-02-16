import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Styles
import './styles.scss'
import '../../main.scss'

//Import Components
import Chevron from './../chevron'




export default class CardMain extends Component{
    render(){
        return(
          <div>
              <a href={this.props.cardLink || "String Missing"}>
              <div className="card-wrapper">

                  <div className="card-information">
                    <div className="information-img">
                      <img src={this.props.cardImage || "String Missing"} />
                    </div>
                    <div className="information-copy">
                      <span className="card-01">{this.props.cardTitle || "String Missing"}</span>
                      <span className="card-02">{this.props.cardSubText || "String Missing"}</span>
                      <span className="card-03">{this.props.cardLocation || "String Missing"}</span>
                    </div>
                    <div className="information-chevron">
                      <Chevron />
                    </div>
                  </div>
              </div>
              </a>
          </div>

        )
    }
}
