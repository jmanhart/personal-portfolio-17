import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Import Global Styles
import './../../styles/styles.css';
import './../../main.scss';

//Local Styles
import './styles.scss';

//Import Components
import BackIcon from '../../components/backIcon'
import HeroBlock from '../../components/heroBlock'


export default class Test extends Component{
    render(){
        return(
          <div id="page">

            <header className="side-navigation-container">
                <div className="site-links">

                  <div className="branding">
                    John Manhart
                  </div>

                  <div className="internal-links">
                    <ul>
                      <Link to="/test/mosey">
                        <li>About</li>
                      </Link>
                      <Link to="/test/home">
                        <li>Work</li>
                      </Link>
                      <Link to="/test/marlin">
                        <li>Blog</li>
                      </Link>
                      <Link to="/test/mosey">
                        <li>Likes</li>
                      </Link>
                      <Link to="/test/mosey">
                        <li>Coffee</li>
                      </Link>
                    </ul>
                  </div>

                  <div className="external-links">
                    social media links
                  </div>


                  </div>
            </header>

            <div className="main-content">
              {this.props.children}
            </div>

          </div>

        )
    }
}
