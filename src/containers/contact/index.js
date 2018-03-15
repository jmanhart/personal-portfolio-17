import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
import './styles.scss'

//Import Components
import BackIcon from '../../components/backIcon'


export default class Contact extends Component{

    renderHeroDefinition(){
      return(
        <div>
          <div className="block flex-colum">
            <span className="label-01">Contact</span>
            <span className="label-02">
              Why not say hello or piss off either way here you go!
            </span>
          </div>
        </div>
      )
    }

    renderContactForm(){
      return(
        <div className="block">

              <form method="POST">
                <label className="label-03 body-color" htmlFor="name">Name</label>
                <input type="text" name="name" />

                <label className="label-03 body-color" htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label className="label-03 body-color" htmlFor="message">Message</label>
                <textarea name="message" rows="3"></textarea>

                <input type="submit" />
              </form>


        </div>
      )
    }

    render(){
        return(
          <div>
            <div className="wrapper">
              <BackIcon />
              {this.renderHeroDefinition()}
              {this.renderContactForm()}
            </div>
          </div>



        )
    }
}
