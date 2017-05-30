import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Import Global Styles
import './styles.scss';
import './../../main.scss';

const ACTIVE = { background: 'rgba(0,0,0,0.8)'}

export default class SecondaryNav extends Component{
    render(){
        return(
            <div>
                <div className="secondary-nav">

                </div>
            </div>
        )
    }
}
