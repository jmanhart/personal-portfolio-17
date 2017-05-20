import React, {Component} from 'react'
import {render} from 'react-dom'
import dynamics from 'dynamics.js'
import ReactDOM from 'react-dom'
import { Link } from 'react-router';

//Import Global Animations | dynamics


//Import Global Styles
import './../../styles/styles.css';
import './../../main.scss';

//Import Local Styles
import './styles.scss'


export default class CardGrid extends Component{
  render(){
    return(
      <div className="card-grid-container">
        <div className="card-grid">
          <Link className="card" to="/favorites/books">
            <div className="card-content">
              <span className="card-title">Favorites</span>
            </div>
          </Link>
          <Link className="card" to="/favorites/books">
            <div className="card-content">
              <span className="card-title">Lets Get Strange (;༎ຶД༎ຶ)</span>
            </div>
          </Link>
          <Link className="card" to="/coffee">
            <div className="card-content">
              <span className="card-title">Coffee Shops</span>
            </div>
          </Link>
        </div>
      </div>
		)
	}
}
