import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Import Global Styles
import './styles.scss';
import './../../main.scss';

export default class SecondaryNav extends Component{
    render(){
        return(
            <div>
                <div className="secondary-nav">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/about/itemOne">
                                    <span className="secondary-nav-label">
                                        {this.props.itemOneLabel}
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about/itemTwo">
                                    <span className="secondary-nav-label">
                                        {this.props.itemTwoLabel}
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about/itemThree">
                                    <span className="secondary-nav-label">
                                        {this.props.itemThreeLabel}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

