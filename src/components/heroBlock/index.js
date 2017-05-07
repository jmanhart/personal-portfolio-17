import React, {Component} from 'react'
import {render} from 'react-dom'
import dynamics from 'dynamics.js'
import ReactDOM from 'react-dom'
import { Link } from 'react-router';

//Import Global Styles
import './../../styles/styles.css';
import './../../main.scss';

//Import Local Styles
import './styles.scss'

export default class HeroBlock extends Component{
  render(){
    return(
      <div className="details-hero-container">
        <h1>{this.props.label}</h1>
      </div>
		)
	}

}
