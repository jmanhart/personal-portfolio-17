import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
import './styles.scss'

//Import Components
import Filter from '../../components/filter/index.js'
import BackIcon from '../../components/backIcon'


const quotes = [
  {
    quote:"The secret of getting ahead is getting started",
    by:"Mark Twain",
  },
  {
    quote:"The essence of the independent mind lies not in what it thinks, but in how it thinks.",
    by:"Christopher Hitchens",
  },
  {
    quote:"The future is not really the future. It's just a present that looks good.",
    by:"Steven Heller",
  },
  {
    quote:"Design is thinking made visual.",
    by:"Saul Bass",
  },
  {
    quote:"Words have meaning, type has spirit.",
    by:"Paula Scher",
  },
  {
    quote: "Keep on rockin' in the free world.",
    by: "Neil Young",
  },
  {
    quote: "The big print giveth and the small print taketh away.",
    by: "Tom Waits",
  },
  {
    quote:"Never sit around and wait for the phone to ring.",
    by: "Louise Fili",
  },
  {
    quote: "Work gets work",
    by: "Michael Stelzer"
  },
]


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
            <span className="label-01">Li and Floyd are my absolute favorites, but after that it goes...</span>
            <span className="label-02">
              espresso, learning, movies, reading, biking, boxing, bass, drawing <a href="https://www.instagram.com/syrus.syrus.syrus/">( ༎ຶД༎ຶ)</a>,
            </span>
          </div>
        </div>
      );
    }

    renderExpandedDefintion(){
      return(
        <div className="block">
          <hr></hr>
            <span className="body-01">
              beign vegan (when I'am around Li), beign vegetarian (all the other times), my audio-technica ath-m50x headphones, react and react-native, IPA's, whiskey, meeting new people, watching very very bad movies, watching very very good movies, watching movies with subtitles, pre-Garth country music, brownies, The Rolling Stones, Neil Young, Christopher Hitches, Framer, Sketch, Swift, my Switch, The Coffee Ethic, Atom, Robert Frank, Aaron Draplin, James Victore, Jon Gold, Koen Bok, The Apple Pencil, The Texas Longhorns and sparkling water.
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
