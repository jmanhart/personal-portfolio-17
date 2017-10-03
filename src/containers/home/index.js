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

const ACTIVE = {
  color: 'rgba(0,0,0,0.8)',
  textDecoration:'underline',
}

export default class Home extends Component{
    render(){
        return(
          <div id="page">

            {/*<header className="side-navigation-container">
                <div className="site-links">

                  <div className="branding">
                    <span className="label-03">✌</span>
                    <span className="label-03">John</span>
                    <span className="label-03">Manhart</span>
                    <span className="label-04">User Experince</span>
                  </div>

                  <div className="internal-links">
                    <ul>
                      <Link activeStyle={ACTIVE} to="/about">
                        <li><span className="internal-nav-label">About</span></li>
                      </Link>
                      <Link activeStyle={ACTIVE} to="/work">
                        <li><span className="internal-nav-label">Work</span></li>
                      </Link>
                      <Link activeStyle={ACTIVE} to="/marlin">
                        <li><span className="internal-nav-label">Blog</span></li>
                      </Link>
                      <Link activeStyle={ACTIVE} to="/favorites">
                        <li><span className="internal-nav-label">Likes</span></li>
                      </Link>
                      <Link activeStyle={ACTIVE} to="/coffee">
                        <li><span className="internal-nav-label">Coffee</span></li>
                      </Link>
                    </ul>
                  </div>

                  <div className="external-links">
                    <i className="fa fa-dribbble fa-1x"/>
                    <i className="fa fa-github fa-1x"/>
                    <i className="fa fa-instagram fa-1x"/>
                  </div>

                  </div>
            </header>

            <div className="details-wrapper">
              <div className="about-block">
                <span className="label-01 strike">Arkansas</span>
                <span className="label-01 strike">Mexico</span>
                <span className="label-01 strike">Michigan</span>
                <span className="label-01 strike">Missouri</span>
                <span className="label-01">Kansas City</span>
              </div>
            </div>

            */}

            <div className="main-content">
              {this.props.children}
            </div>

          </div>

        )
    }
}
