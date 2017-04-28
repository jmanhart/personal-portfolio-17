import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import Interactive from 'react-interactive';
import { Link } from 'react-router';

//Import Components
import Footer from './components/footer'
import MenuNav from './components/menuNav'
import MenuIcon from './components/menuIcon'
import MobileNav from './components/mobileNav'

//Import Styles
import './main.scss'

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

export default class App extends Component{
    constructor(){
        super()
        this.state ={
            nav: false
        }
        this.toggleNav = this.toggleNav.bind(this)
        this.closeNav = this.closeNav.bind(this)
    }

    toggleNav(){
        console.log('Working thug')
        this.setState({
            nav: !this.state.toggleNav
        })
    }

    closeNav(){
        console.log('Yo, its closed')
        this.setState({
            nav: false
        })
    }
    render(){
        return(
            <div className="wrapper" className={(this.state.nav) ? "nav--open" : null}>
                {/*
                <div className="left" style={{backgroundColor: 'rgba(222, 226, 227, 0.90)'}}></div>
				<div className="right" style={{backgroundColor: 'rgba(222, 226, 227, 0.90)'}}></div>
				<div className="top" style={{backgroundColor: 'rgba(222, 226, 227, 0.90)'}}></div>
                <MenuIcon toggleNav={this.toggleNav} closeNav={this.closeNav} />
                <MenuNav closeNav={this.closeNav}/>
                <Footer/>
                */}
                    <div id="content">
                        {this.props.children}
                    </div>
                    <MobileNav />
            
            </div>
        )
    }
}
App.propTypes = propTypes;
