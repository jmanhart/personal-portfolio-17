import React, { PropTypes, Component } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import './styles.scss';

//Import Components
import CardGrid from '../../components/cardGrid'


export default class Work extends Component{
    render(){
        return(
            <div>
                {/*Garmin*/}
                <div className="block-container" style={{backgroundColor:'rgba(0,0,0,0)'}}>
                    <div className="block-full">
                        <div className="place">
                          <span className="block-date">2017 – PRESENT</span>
                          <span className="block-title">Garmin</span>
                          <span className="block-position">UX Designer</span>
                            <a href="/work/garmin">
                                <button>
                                    About Me
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Mosey*/}
                <div className="block-container" style={{backgroundColor:'rgba(0,0,0,0)'}}>
                    <div className="block-full">
                        <div className="place">
                          <span className="block-date">2015 – PRESENT</span>
                          <span className="block-title">Mosey</span>
                          <span className="block-position">Mobile Developer</span>
                            <a href="/mosey">
                                <button>
                                    About Me
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Block One Full*/}
                <div className="block-container" style={{backgroundColor:'rgba(0,0,0,0)'}}>
                    <div className="block-full">
                        <div className="place">
                          <span className="block-date">2013 – 2017</span>
                          <span className="block-title">Marlin</span>
                          <span className="block-position">UX Developer & Designer</span>
                          <span className="block-sub-text">Starbucks  |  Unilever  |  Bush's Beans | French's </span>
                            <a href="/marlin">
                                <button>
                                    About Me
                                </button>
                            </a>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}
