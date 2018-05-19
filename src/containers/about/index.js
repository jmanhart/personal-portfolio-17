import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Local Styles
import './styles.scss'

//Import Components
import Footer from './../../components/footer/'

const greeting = [
    "Hello,",
    "Hi,",
    "Howdy,",
    "Hiya,",
    "Yo,",
    "Aloha,",
    "Sup,",
    "Hullo,",
    "Hola,",
    "Ciao,",
    "👋🏻,",
    "Hej,",
    "Bonjour,",
    "Oh hey,",
]


export default class About extends Component{


  dude(){
    return(
      console.log("fart")
    )
  }
    getRandomGreeting(){
      let rando = Math.floor((Math.random() * greeting.length));
      return (
        <span className="label-01" onClick={this.dude()}>{greeting[rando]} I'm <Link to="/more" className="roll-over">John!</Link>

      </span>
      );
    }

    renderProductDesignerLink(){
      return(
        <Link to="/product-designer">
          <span className="roll-over internal-link-color">
            Product Designer
          </span>
        </Link>
      )
    }

    renderDeveloperLink(){
      return(
        <Link to="/developer">
          <span className="roll-over internal-link-color">
            Developer
          </span>
        </Link>
      )
    }

    renderKansasCityLink(){
      return(
        <Link to="/kansas-city">
          <span className="roll-over internal-link-color">
            Kansas City
          </span>
        </Link>
      )
    }

    renderGarminLink(){
      return(
        <Link to="/garmin">
          <span className="roll-over internal-link-color">
            Garmin
          </span>
        </Link>
      )
    }

    renderMoreLink(){
      return(
        <Link to="/work">
          <span className="roll-over internal-link-color">
            Recent Work
          </span>
        </Link>
      )
    }

    render(){
        return(
            <div className="wrapper">
              <div className="title-block">
                <img className="image" src="./src/public/images/me-blk.png" />
                {this.getRandomGreeting()}
                <span className="label-02">
                  A Designer & Developer living in Kansas City and working for Garmin.
                </span>

                <span className="label-03">
                  {this.renderMoreLink()}
                </span>

                {/*<span className="label-03 body-color-light">
                  <Link to="/more">
                    <span className="roll-over-two internal-link-color">Portfolio available upon request. </span>
                  </Link>
                </span>*/}
              </div>


              <Footer />


            </div>

        )
    }
}

{/*
  "مرحبا,",
  "안녕,",
  "你好,",
  */}
