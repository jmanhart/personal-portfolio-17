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
    {
      "title": "Run the Jewels 2",
      "author":"Run the Jewels",
      "image":"../../src/public/images/music/rtj2.jpg",
      "link":"",
    },
    {
      "title": "Salad Days",
      "author":"Mac Demarco",
      "image":"../../src/public/images/music/salad-days.jpg",
      "link":"",
    },
    {
      "title": "The Blue Album",
      "author":"Weezer",
      "image":"../../src/public/images/music/blue-album.jpg",
      "link":"",
    },
    {
      "title": "Cavalo",
      "author":"Rodrigo Amrante",
      "image":"../../src/public/images/music/cavalo.jpg",
      "link":"",
    },
    {
      "title": "Because the Internet",
      "author":"Childish Gambino",
      "image":"../../src/public/images/music/because-the-internet.jpg",
      "link":"",
    },
    {
      "title": "Dandelion Gun",
      "author":"Black Moth Super Rainbow",
      "image":"../../src/public/images/music/dandelion-gun.jpg",
      "link":"",
    },



]

export default class Music extends Component{
    render(){
        return(
          <div className="sub-page-wrapper">
            <div className="sub-page-container">
              <div className="item-grid-wrapper">
                {data.map((item) => {
                  return (
                      <div className="item-wrapper" id="music">
                        <a key={item.title} href={item.link}>
                        <div className="item-thumbnail">
                          <img key={item.title} src={item.image}/>
                        </div>
                        <div className="item-copy">
                          <span className="item-title" key={item.title}>{item.title}</span>
                          <span className="item-author" key={item.author}>{item.author}</span>
                        </div>
                        </a>
                      </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
    }
}
