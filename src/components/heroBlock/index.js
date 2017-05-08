import React, {Component} from 'react'
import {render} from 'react-dom'
import dynamics from 'dynamics.js'
import ReactDOM from 'react-dom'
import { Link } from 'react-router';

//Import Global Animations | dynamics
import { heroOnload } from './../../lib/helpers'

//Import Global Styles
import './../../styles/styles.css';
import './../../main.scss';

//Import Local Styles
import './styles.scss'

export default class HeroBlock extends Component{
  constructor(){
    super()
  }

  componentDidMount(){
    this.animateContent()
  }

  animateContent(){
    let el = ReactDOM.findDOMNode(this.refs.mainCopy)
    heroOnload(el)
  }

  render(){
    return(
      <div className="details-hero-container">
        <span className="heroBlock-label" ref="mainCopy" >{this.props.label}</span>
      </div>
		)
	}
}
