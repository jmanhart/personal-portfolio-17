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
                <Link to="/about"><li>About</li></Link>
                <Link to="/blog"><li>Contact</li></Link>
                <Link to="/mosey"><li>Work</li></Link>
            </ul>
        </div>
		)
	}

}
