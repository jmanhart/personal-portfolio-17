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
import './lib/vars.scss';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

let barColor = 'rgba(222, 226, 227, 1)'

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

    getColor() {
      console.log("hi")
        let color;
        switch(window.location.pathname) {
            case '/': color = "blue";
            case '/blog': color= "green";
        }
    }

    render(color){
        return(
            <div className="wrapper" className={(this.state.nav) ? "nav--open" : null}>
                {this.getColor()}
                <div className="left" style={{backgroundColor: barColor}}></div>
                <div className="right" style={{backgroundColor: barColor}}></div>
                <div className="top" style={{backgroundColor: barColor}}></div>
                <MenuIcon toggleNav={this.toggleNav} closeNav={this.closeNav} />
                <MenuNav closeNav={this.closeNav}/>
                    <div id="content">
                        {this.props.children}
                    </div>
                {/* <MobileNav />*/}
                <Footer />

            </div>
        )
    }
}
App.propTypes = propTypes;
