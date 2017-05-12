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
    {
      "title": "The Shape of Design",
      "author":"Frank Chimero",
      "image":"../../src/public/images/books/shape-of-design.jpg",
      "link":"https://www.amazon.com/Shape-Design-Frank-Chimero/dp/0985472200/ref=sr_1_1?ie=UTF8&qid=1494555724&sr=8-1&keywords=frank+chimero",
    },
    {
      "title": "Hot Water Music",
      "author":"Charles Bukowski",
      "image":"../../src/public/images/books/hot-water-music.jpg",
      "link":"https://www.amazon.com/Hot-Water-Music-Charles-Bukowski/dp/0876855966/ref=sr_1_4?ie=UTF8&qid=1494555824&sr=8-4&keywords=Hot+water+music",
    },
    {
      "title": "God is not Great",
      "author":"Christopher Hitchens",
      "image":"../../src/public/images/books/god-is-not.jpg",
      "link":"https://www.amazon.com/God-Not-Great-Religion-Everything/dp/0446697966/ref=sr_1_1?ie=UTF8&qid=1494555980&sr=8-1&keywords=god+is+not+great",
    },
    {
      "title": "Nine Stories",
      "author":"J.D. Salinger",
      "image":"../../src/public/images/books/nine-stories.jpg",
      "link":"https://www.amazon.com/Nine-Stories-J-D-Salinger/dp/B000J6Y93E/ref=sr_1_7?ie=UTF8&qid=1494556116&sr=8-7&keywords=nine+stories+by+j.d.+salinger",
    },
]

export default class SubPageOne extends Component{
    render(){
        return(
          <div className="sub-page-wrapper">
            <div className="sub-page-container">
              <div className="item-grid-wrapper">
                {data.map((item) => {
                  return (
                      <div className="item-wrapper" id="books">
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
