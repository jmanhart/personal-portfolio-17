import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
import './styles.scss'

//Import Data
import {quotes} from './quoteData.js'
import {favorites} from './favoriteData.js'

//Import Components
import Filter from '../../components/filter/index.js'
import BackIcon from '../../components/backIcon'
import Timeline from '../../components/timeline'


export default class More extends Component{

    getRandomQuote(){
      let rando = Math.floor((Math.random() * quotes.length));
      return (
        <div>
          <div className="block flex-colum">
            <span className="label-01">{quotes[rando].quote}</span>
            <span className="label-02">
               – {quotes[rando].by}</span>
          </div>
        </div>
      );
    }


    renderMyThoughts(){
      return (
        <div>
          <div className="block flex-colum">
            <span className="label-01">Li and Floyd are my absolute favorites...</span>
          </div>
        </div>
      );
    }

    renderExpandedDefintion(){
      return(
        <div className="block">
            <span className="body-01">
              After that it goes
              {favorites.map((item) => {
                return (

                    <span key={item.fav}>{item.fav}, </span>

                )
              })} and so much more...
            </span>
        </div>
      )
    }

    renderDev(){
      return(
        <div>
          <img src="http://ghchart.rshah.org/jmanhart" alt="2016rshah's Github chart" />
        <div className="block">
            <span className="body-01">
              I really love tow write code. I love to solve puzzles and problems and at very basic level that is how I see programming. Problem solving. The problem changes and is never 100% defined and the goal always seems different.
            </span>
        </div>
      </div>
      )
    }

    render(){
        return(
          <div>
            <div className="wrapper">
              <BackIcon />
              {this.renderMyThoughts()}
              {this.renderExpandedDefintion()}
              {this.renderDev()}
            </div>
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
