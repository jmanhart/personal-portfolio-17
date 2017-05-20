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
    {
      "city": "Austin",
      "state":"Texas",
    },
    {
      "city": "Kansas City",
      "state":"MO",
    },
    {
      "city": "Springfield",
      "state":"MO",
    },
    {
      "city": "St. Louis",
      "state":"MO",
    },
    {
      "city": "Tulsa",
      "state":"Oklahoma",
    },
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
                      <a className="card" key={item.city} href={item.link}>
                        <div className="card-content">
                          <span className="card-city" key={item.city} >{item.city}</span>
                          <span className="card-state" key={item.state} >{item.state}</span>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
          </div>
        )
    }
}
