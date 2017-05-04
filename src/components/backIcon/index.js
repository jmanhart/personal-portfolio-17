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
      <Link activeClassName="is-active" to="/">
        <div className="back-icon">
            <span className="back-label">Back</span>
        </div>
      </Link>
		)
	}

}
