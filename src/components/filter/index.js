import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
import './styles.scss'


const data = [
    {
      "rank": "1.",
      "title": "Cool Hand Luke",
    },
    {
      "rank": "2.",
      "title": "Intersteller",
    },
    {
      "rank": "3.",
      "title": "In Bruges",
    },
]

export default class Filter extends Component{

    renderFilterTabs(){
      return(
        <div>
          <span className="label-08">Current Favs</span>
          <div className="title-block internal-filtering">
            <span className="label-06">Film</span>
            <span className="label-06">Music</span>
            <span className="label-06">Books</span>
            <span className="label-06">People</span>
          </div>
        </div>
      )
    }

    render(){
        return(
          <div className="filter-block">
              {this.renderFilterTabs()}
              {data.map((item) => {
                return (
                  <div className="fav-wrapper">
                    <span className="label-07">{item.rank}</span>
                    <span className="label-06" key={item.city}>{item.title}</span>
                  </div>
                )
              })}

          </div>

        )
    }
}

let styles = {
  container: {
    height: 2000,
    backgroundColor: 'rgba(0,0,0,0.15)',

  }
}
