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

const Section = () => (
  <View style={{ marginBottom: 96, flexDirection: 'row' }}>
    <View style={{ width: 200 }}>
      <Label bold>{title}</Label>
    </View>
    <View>
      {children}
    </View>
  </View>
);

export default Section;


export default class CardSecondary extends Component{
    render(){
        return(
          <div className="card-wrapper">
            <a href={this.props.cardLink || "String Missing"}>
              <div className="card-information">
                <div className="information-img">
                  <img src={this.props.cardImage || "String Missing"} />
                </div>
                <div className="information-copy">
                  <span className="card-01">{this.props.cardTitle || "String Missing"}</span>
                  <span className="card-02">{this.props.cardSubText || "String Missing"}</span>
                  <span className="card-03">{this.props.cardLocation || "String Missing"}</span>
                </div>
              </div>
              </a>
          </div>
        )
    }
}
