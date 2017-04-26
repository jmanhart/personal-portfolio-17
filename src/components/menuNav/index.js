import React, {Component} from 'react'
import {render} from 'react-dom'
import dynamics from 'dynamics.js'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

import MenuIcon from '../menuIcon'
import './style.scss'



export default class MenuNav extends Component{
  render(){
    return(
			<div className="menu-nav-container">
        <div className="menu-nav-content">
          <div className="left" style={{backgroundColor: 'rgba(255, 255, 255, 1)'}}></div>
          <div className="right" style={{backgroundColor: 'rgba(255, 255, 255, 1)'}}></div>
          <div className="top" style={{backgroundColor: 'rgba(255, 255, 255, 1)'}}></div>
          <div className="bottom" style={{backgroundColor: 'rgba(255, 255, 255, 1)'}}></div>
          <MenuIcon toggleNav={this.props.closeNav} />

          <div className="mobile-nav" onClick={this.props.closeNav}>
            <nav>
              <ul>
                <li><span className="mobile-nav-label"><Link to="/about">about</Link></span></li>
                <li><span className="mobile-nav-label"><Link to="/blog">blog</Link></span></li>
              </ul>
            </nav>
          </div>

        </div>
			</div>
		)
	}

}
