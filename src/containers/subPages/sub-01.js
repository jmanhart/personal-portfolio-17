import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Import Global Styles
import './../../styles/styles.css';
import './../../main.scss';

//Import Specific Styles
import './styles.scss'

const data = [
    {"title": "Catcher in the Rye"},
    {"title": "Ham on Rye"},
    {"title": "God is not Great"},
    {"title": "Hitch 22"},
    {"title": "The Martian"},
    {"title": "Under the Volcano"},
    {"title": "Catcher in the Rye"},
    {"title": "Ham on Rye"},
    {"title": "God is not Great"},
    {"title": "Hitch 22"},
    {"title": "The Martian"},
    {"title": "Under the Volcano"},
    {"title": "Catcher in the Rye"},
    {"title": "Ham on Rye"},
    {"title": "God is not Great"},
    {"title": "Hitch 22"},
    {"title": "The Martian"},
    {"title": "Under the Volcano"},
]

export default class SubPageOne extends Component{
    render(){
        return(
          <div className="sub-page-wrapper">
            <div className="sub-page-container">
              <div className="item-grid-wrapper">
                {data.map((item) => {
                  return (
                    <div className="item-wrapper">
                      <div className="item-thumbnail"/>
                      <h2 className="item-label" key={item.title}>{item.title}</h2>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
    }
}
