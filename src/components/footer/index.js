import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import './../../styles/styles.css';
import './styles.css'

export default class Footer extends Component{
    render(){
        return(
            <div>
                <div className="footer-container">
                    <span className="footer-sign-off">Say Hi! 
                        <span className="footer-email">manhartjohn@gmail.com</span>
                    </span>
                </div>
            </div>
        )
    }
}

