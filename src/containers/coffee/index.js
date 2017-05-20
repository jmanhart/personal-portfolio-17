import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Import Global Styles
import './../../styles/styles.css';
import './../../main.scss';

//Import Components
import BackIcon from '../../components/backIcon'
import HeroBlock from '../../components/heroBlock'
import CardGrid from '../../components/cardGrid'


export default class Coffee extends Component{
    render(){
        return(
          <div>
            <BackIcon/>
            <CardGrid />
          </div>
        )
    }
}
