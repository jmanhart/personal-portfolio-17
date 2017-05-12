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
          <h1>Tesdcsst</h1>
        </div>
      </div>
		)
	}
}
