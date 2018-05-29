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
            <span className="label-01">My wife Li and my cat Floyd are my absolute favorites, but after that it goes...</span>
            <span className="label-02">
              espresso, learning, movies, reading, biking, boxing, bass, drawing <a href="https://www.instagram.com/syrus.syrus.syrus/">( ༎ຶД༎ຶ)</a>
            </span>
          </div>
        </div>
      );
    }

    renderExpandedDefintion(){
      return(
        <div className="block">
            <span className="body-01">
              {favorites.map((item) => {
                return (

                    <span key={item.fav}>{item.fav}, </span>
                
                )
              })} and so much more...
            </span>
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
