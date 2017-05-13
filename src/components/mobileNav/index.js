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
                <Link to="/favorites/books"><li>Books</li></Link>
                <Link to="/favorites/movies"><li>Movies</li></Link>
                <Link to="/favorites/music"><li>Music</li></Link>
            </ul>
        </div>
		)
	}

}
