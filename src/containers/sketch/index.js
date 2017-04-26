import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import './../../styles/styles.css';


export default class Sketch extends Component{
    render(){
        return(
            <div>
                <div className="block-container" style={{backgroundColor:'rgba(0,0,0,0)'}}>
                    <div className="block-content">
                        <div className="left">
                            <h2>Text Editor</h2>
                            <h3>Concept for a desktop text editing application for iOS.</h3>
                            <a href="https://jmanhart.github.io/sketch-files/sketch/text-editor-01.sketch">
                            {/*<a href="./../../sketch/text-editor-01.sketch">*/}
                                <button>
                                    Download the Sketch File
                                    <i className="fa fa-diamond fa-2x"></i>
                                </button>
                            </a>
                        </div>
                        <div className="right">
                            <img className="right-image" src="https://jmanhart.github.io/sketch-files/src/public/images/dribbble-dude.png" />
                            {/*<img className="right-image" src="../../src/public/images/dribbble-dude.png" />*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
