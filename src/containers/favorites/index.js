import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Import Global Styles
import './../../styles/styles.css';
import './../../main.scss';

//Import Local Styles
import './styles.scss';

//Import Components
import SecondaryNav from '../../components/secondaryNav'
import BackIcon from '../../components/backIcon'

export default class Favorites extends Component{
    render(){
        return(
            <div className="about-wrapper">
              <BackIcon />
              <div className="about-header">
                <h1 className="about-label">Just a few  of my favorite things.</h1>
              </div>
              <SecondaryNav
                  itemOneLabel="Books"
                  itemTwoLabel="Movies"
                  itemThreeLabel="Music"
              />
              <div>
                  {this.props.children}
              </div>
            </div>
        )
    }
}
