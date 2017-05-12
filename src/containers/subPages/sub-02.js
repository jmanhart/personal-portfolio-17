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
      "title": "Interstellar",
      "author":"2014",
      "image":"../../src/public/images/movies/interstellar.jpg",
      "link":"https://www.amazon.com/Ishmael-Novel-Daniel-Quinn/dp/0553375407/ref=sr_1_1?ie=UTF8&qid=1494550245&sr=8-1&keywords=ishmael",
    },
    {
      "title": "Cool Hand Luke",
      "author":"1965",
      "image":"../../src/public/images/movies/cool-hand-luke.jpg",
      "link":"https://www.amazon.com/Invisible-Man-Ralph-Ellison/dp/0679732764/ref=sr_1_1?ie=UTF8&qid=1494550152&sr=8-1&keywords=invisible+man",
    },
    {
      "title": "In Bruge",
      "author":"2008",
      "image":"../../src/public/images/movies/in-bruges.jpg",
      "link":"https://www.amazon.com/Invisible-Man-Ralph-Ellison/dp/0679732764/ref=sr_1_1?ie=UTF8&qid=1494550152&sr=8-1&keywords=invisible+man",
    },
    {
      "title": "Good Fellas",
      "author":"1993",
      "image":"../../src/public/images/movies/good-fellas.jpg",
      "link":"https://www.amazon.com/Invisible-Man-Ralph-Ellison/dp/0679732764/ref=sr_1_1?ie=UTF8&qid=1494550152&sr=8-1&keywords=invisible+man",
    },
    {
      "title": "Inside Llewyn Davis",
      "author":"2013",
      "image":"../../src/public/images/movies/inside-llewyn-davis.jpg",
      "link":"https://www.amazon.com/Invisible-Man-Ralph-Ellison/dp/0679732764/ref=sr_1_1?ie=UTF8&qid=1494550152&sr=8-1&keywords=invisible+man",
    }

]

export default class SubPageTwo extends Component{
    render(){
        return(
          <div className="sub-page-wrapper">
            <div className="sub-page-container">
              <div className="item-grid-wrapper">
                {data.map((item) => {
                  return (
                      <div className="item-wrapper" id="movies">
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
