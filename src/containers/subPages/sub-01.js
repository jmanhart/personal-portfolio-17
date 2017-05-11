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


export default class SubPageOne extends Component{
    render(){
        return(
            <div className="sub-page-wrapper">
                <div className="sub-page-container">

                  <div className="item-grid-wrapper">

                    <div className="item-wrapper">
                      <div className="item-thumbnail"/>
                      <h2>Books</h2>
                    </div>

                    <div className="item-wrapper">
                      <div className="item-thumbnail"/>
                      <h2>Books</h2>
                    </div>

                    <div className="item-wrapper">
                      <div className="item-thumbnail"/>
                      <h2>Books</h2>
                    </div>

                    <div className="item-wrapper">
                      <div className="item-thumbnail"/>
                      <h2>Books</h2>
                    </div>

                    <div className="item-wrapper">
                      <div className="item-thumbnail"/>
                      <h2>Books</h2>
                    </div>

                    <div className="item-wrapper">
                      <div className="item-thumbnail"/>
                      <h2>Books</h2>
                    </div>

                  </div>

                </div>
            </div>
        )
    }
}
