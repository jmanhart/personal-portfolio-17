import React, {Component} from 'react'
import {render} from 'react-dom'
import dynamics from 'dynamics.js'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

import MenuIcon from '../menuIcon'
import './style.css'

import '../../main.scss'

export default class MenuNav extends Component{
  render(){
    return(
			<div className="nav">
        <div className="nav-container">
          <div className="left" style={{backgroundColor: 'rgba(255, 255, 255, 1)'}}></div>
          <div className="right" style={{backgroundColor: 'rgba(255, 255, 255, 1)'}}></div>
          <div className="top" style={{backgroundColor: 'rgba(255, 255, 255, 1)'}}></div>
          <MenuIcon toggleNav={this.props.closeNav} />
          <nav>
            <ul>
              <li><Link to="/about">about</Link></li>
              <li><Link to="/work">work</Link></li>
              <li><Link to="/sketches">sketches</Link></li>
              <li><Link to="/writing">writing</Link></li>
            </ul>
          </nav>
        </div>
			</div>
		)
	}

}
