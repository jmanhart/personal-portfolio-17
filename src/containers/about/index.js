import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Import Global Styles
import './../../styles/styles.css';
import './../../main.scss';

//Import Components
import SecondaryNav from '../../components/secondaryNav'
import BackIcon from '../../components/backIcon'

export default class About extends Component{
    render(){
        return(
            <div>
                <SecondaryNav 
                    itemOneLabel="Label One"
                    itemTwoLabel="Label Two"
                    itemThreeLabel="Label Three"
                />
                <BackIcon />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

