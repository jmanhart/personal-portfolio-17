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
            <span className="label-01">"{quotes[rando].quote}"</span>
            <span className="label-02">
               – {quotes[rando].by}</span>
          </div>
        </div>
      );
    }

    renderExpandedDefintion(){
      return(
        <div className="block">
          <hr></hr>
            <span className="body-01">
              Lorem ipsum dolor amet enamel pin 90's williamsburg asymmetrical actually vape. Succulents meggings everyday carry echo park literally tilde cred shabby chic bicycle rights health goth art party lo-fi vegan crucifix locavore. Mustache cornhole typewriter plaid normcore banh mi whatever church-key tumblr affogato readymade everyday carry unicorn raclette flannel. Street art master cleanse tilde shabby chic, crucifix fingerstache migas.

              Cliche leggings whatever tumeric, ramps slow-carb pop-up mixtape. Wayfarers lumbersexual butcher actually, jean shorts offal tumblr single-origin coffee af letterpress. Squid vegan deep v crucifix four dollar toast. Readymade la croix tote bag asymmetrical fam biodiesel art party salvia yr enamel pin jean shorts. Subway tile lumbersexual kickstarter pop-up. Photo booth franzen yr synth dreamcatcher, kickstarter pitchfork kinfolk iceland occupy austin air plant you probably haven't heard of them.
            </span>

        </div>
      )
    }

    render(){
        return(
          <div>
            <div className="wrapper">
              <BackIcon />
              {this.getRandomQuote()}
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
