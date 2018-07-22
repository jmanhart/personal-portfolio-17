import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Styles
import './styles.scss'

// Import Record Data
import {dataRecords} from './dataRecords.js'

//Import Components
import BackIcon from '../../components/backIcon'
import WorkCard from '../../components/workCard'
import CardList from '../../components/cards/card-list.js'
import CardHero from '../../components/cards/card-hero.js'
import CardRecord from '../../components/cards/card-record.js'




export default class Records extends Component{
    renderIntroduction(){
      return(
        <div>
          <div className="block flex-colum spacer-below">
            <span className="label-01">My Records</span>
            <span className="label-03 body-color">
              List of records I own. This is mostly for my own knowledge so I do not pick up an dupes!
            </span>
          </div>
        </div>
      )
    }
  
    renderRecords(){
      return(
        <div className="blockIII">
          <div className="section-header">
            <span className="label-04 body-color">
              Code Sketchbooks
            </span>
            <span className="label-04 section-count">
              {dataRecords.length}
            </span>
          </div>
          {dataRecords.map((item) => {
            return (
              <CardRecord
                cardLink={item.cardLink}
                cardTitle={item.album}
                cardSubText={item.artist}
                cardImage={item.albumArt}
              
                />
            )
          })}
        </div>
      )
    }
    render(){
        return(
            <div className="wrapper">
              <BackIcon/>
              {this.renderIntroduction()}
              {this.renderRecords()}
            </div>
        )
    }
}
