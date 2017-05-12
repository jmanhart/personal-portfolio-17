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

//Import Data
import './data/books.js'

const data = [
    {
      "title": "Catcher in the Rye",
      "author": "JD.Salinger",
      "image": "../../src/public/images/books/catcher-in-the-rye.jpg",
      "link":"https://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769487/ref=sr_1_1?ie=UTF8&qid=1494548313&sr=8-1&keywords=catcher+in+the+rye",
    },
    {
      "title": "Ishmael",
      "author":"Daniel Quinn",
      "image":"../../src/public/images/books/ishmael.jpg",
      "link":"https://www.amazon.com/Ishmael-Novel-Daniel-Quinn/dp/0553375407/ref=sr_1_1?ie=UTF8&qid=1494550245&sr=8-1&keywords=ishmael",
    },
    {
      "title": "Invisible Man",
      "author":"Ralph Ellison",
      "image":"../../src/public/images/books/invisible-man.jpg",
      "link":"https://www.amazon.com/Invisible-Man-Ralph-Ellison/dp/0679732764/ref=sr_1_1?ie=UTF8&qid=1494550152&sr=8-1&keywords=invisible+man",
    },
    {
      "title": "Mortality",
      "author":"Christopher Hitches",
      "image":"../../src/public/images/books/mortality.jpg",
      "link":"https://www.amazon.com/Invisible-Man-Ralph-Ellison/dp/0679732764/ref=sr_1_1?ie=UTF8&qid=1494550152&sr=8-1&keywords=invisible+man",
    },
    {
      "title": "Under The Volcano",
      "author":"Malcom Lowery",
      "image":"../../src/public/images/books/under-the-volcano.jpg",
      "link":"https://www.amazon.com/Invisible-Man-Ralph-Ellison/dp/0679732764/ref=sr_1_1?ie=UTF8&qid=1494550152&sr=8-1&keywords=invisible+man",
    },
    {
      "title": "Blood Merdian",
      "author":"Cormac McCarthy",
      "image":"../../src/public/images/books/blood-meridian.jpg",
      "link":"https://www.amazon.com/Invisible-Man-Ralph-Ellison/dp/0679732764/ref=sr_1_1?ie=UTF8&qid=1494550152&sr=8-1&keywords=invisible+man",
    },

]

export default class SubPageOne extends Component{
    render(){
        return(
          <div className="sub-page-wrapper">
            <div className="sub-page-container">
              <div>
                <p>Some of My favorite books</p>
              </div>
              <div className="item-grid-wrapper">
                {data.map((item) => {
                  return (
                      <div className="item-wrapper">
                        <a key={item.title} href={item.link}>
                        <div className="item-thumbnail">
                          <img key={item.title} src={item.image}/>
                        </div>
                        <h2 className="item-title" key={item.title}>{item.title}</h2>
                        <h3 className="item-author" key={item.author}>{item.author}</h3>
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
