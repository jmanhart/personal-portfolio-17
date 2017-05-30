import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Import Global Styles
import './../../styles/styles.css';
import './../../main.scss';

//Import Local Styles
import './styles.scss';


const ACTIVE = {
  color: 'rgba(0,0,0,0.8)',
  textDecoration:'underline',
}

const navStyles = {
  paddingRight: '3em',
  fontSize: '0.75em',
}

export default class Favorites extends Component{

    siteNavigation(){
      return(
        <div className="secondary-nav">
            <nav>
                <ul>
                    <li>
                        <Link activeStyle={ACTIVE} to="/test/favorites/books">
                            <span className="internal-nav-label" style={navStyles}>
                                Books
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link activeStyle={ACTIVE} to="/test/favorites/movies">
                            <span className="internal-nav-label" style={navStyles}>
                                Movies
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link activeStyle={ACTIVE} to="/test/favorites/music">
                            <span className="internal-nav-label" style={navStyles}>
                                Music
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link activeStyle={ACTIVE} to="/test/favorites/podcasts">
                            <span className="internal-nav-label" style={navStyles}>
                              Podcasts
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
      )
    }

    render(){
        return(
            <div className="favorites-wrapper">
              {this.siteNavigation()}
              <div>
                  {this.props.children}
              </div>
            </div>
        )
    }
}
