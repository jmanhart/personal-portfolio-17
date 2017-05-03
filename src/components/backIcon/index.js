import React, {Component} from 'react'
import {render} from 'react-dom'
import dynamics from 'dynamics.js'
import ReactDOM from 'react-dom'
import { Link } from 'react-router';

import './styles.scss'

export default class BackIcon extends Component{


  navigateBack(){
    this.goBack();
  }
  render(){
    return(
      <div className="back-icon">
        <Link activeClassName="is-active" to="/">
        <span className="back-label">Back</span>
        </Link>
      </div>
		)
	}

}


