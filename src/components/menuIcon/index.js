import React, {Component} from 'react'
import {render} from 'react-dom'
import dynamics from 'dynamics.js'
import ReactDOM from 'react-dom'

import './styles.scss'

export default class MenuIcon extends Component{
  render(){
    return(
        <div className="menu-icon" onClick={this.props.toggleNav}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
		)
	}

}
