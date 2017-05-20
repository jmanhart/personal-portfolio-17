import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Import Global Styles
import './../../styles/styles.css';
import './../../main.scss';

import './styles.scss'

//Import Components
import BackIcon from '../../components/backIcon'
import HeroBlock from '../../components/heroBlock'


const data = [
    { "city": "Fayettville", "state": "Arkansas", "link":"/coffee/kansas-city" },
    { "city": "San Francisco", "state": "California" },
    { "city": "Boston", "state": "Massachusetts" },
    { "city": "Kansas City", "state": "Missouri", "link":"/coffee/kansas-city"},
    { "city": "Springfield", "state": "Missouri" },
    { "city": "St. Louis", "state": "Missouri" },
    { "city": "NYC", "state": "New York" },
    { "city": "Oklahoma City", "state": "Oklahoma" },
    { "city": "Tulsa", "state": "Oklahoma" },
    { "city": "Austin", "state": "Texas" },
    { "city": "Seattle", "state": "Washington" },
]


export default class Coffee extends Component{
    render(){
        return(
          <div>
            <BackIcon/>
              <div className="card-grid-container">
                <div className="card-grid">
                  {data.map((item) => {
                    return (
                      <Link className="card" key={item.link} to={item.link}>
                        <div className="card-content">
                          <span className="card-city" key={item.city} >{item.city}</span>
                          <span className="card-state" key={item.state} >{item.state}</span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
          </div>
        )
    }
}
