import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


//Import Styles
import './styles.scss'
import '../../main.scss'


//Import Components
// import IconChevron from './../iconChevron'


export default class CardRecord extends Component{
    render(){
        return(
          <div className="card-wrapper">
            <a href={this.props.cardLink}>
              <div className="card-information">
                <div className="information-copy">
                  <span className="card-01">{this.props.cardTitle || "String Missing"}</span>
                  <span className="card-02">{this.props.cardSubText || "String Missing"}</span>
                  <span className="card-03">{this.props.cardLocation || null}</span>
                </div>

              </div>
            </a>
          </div>
        )
      }
}
