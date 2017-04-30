import React, {Component} from 'react'
import {render} from 'react-dom'
import dynamics from 'dynamics.js'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

import MenuIcon from '../menuIcon'
import './styles.scss'

export default class MobileNav extends Component{
  render(){
    return(
        <div className="mobile-nav" onClick={this.props.closeNav}>
            <ul>
                <li><Link to="/about">Item One</Link></li>
                <li><Link to="/blog">Item Two</Link></li>
                <li><Link to="/blog">Item Three</Link></li>
                <li><Link to="/blog">Item Four</Link></li>
            </ul>
        </div>
		)
	}

}
