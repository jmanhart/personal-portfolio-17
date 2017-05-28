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
            <header className="content">
                <div className="branding">(; ༎ຶД༎ຶ)</div>
                <div className="site-links">
                    <ul>
                      <Link to="/test/garmin">
                        <li>Garmin</li>
                      </Link>

                      <Link to="/test/marlin">
                        <li>Marlin</li>
                      </Link>

                      <Link to="/test/mosey">
                        <li>Mosey</li>
                      </Link>

                    </ul>
                </div>
            </header>
            <div className="main-content">
              {this.props.children}
            </div>
          </div>

        )
    }
}
