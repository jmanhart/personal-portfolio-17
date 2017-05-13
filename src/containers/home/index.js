import React, { PropTypes, Component } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import './styles.css';

//Import Components
import CardGrid from '../../components/cardGrid'


export default class Home extends Component{
    render(){
        return(
            <div>

                {/*Block One*/}
                <div className="block-container" style={{backgroundColor:'rgba(0,0,0,0)'}}>
                    <div className="hero-container">
                        <div className="hero-content">
                            <span className="hero-label">John Manhart</span>
                            <span className="sub-hero-label">UX Designer and Developer living in KC</span>
                            <a href="/blog">
                                <button>
                                    About Me
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Block Two*/}
                <div className="block-container" style={{backgroundColor:'rgba(0,0,0,0)'}}>
                    <div className="block-content">
                        <div className="leftcolumn">
                            <h3>2017 – Present</h3>
                            <h2>Garmin</h2>
                            <h3>UX Designer</h3>
                            <Link to="/garmin">
                                <button>
                                    Garmin
                                </button>
                            </Link>
                        </div>
                        <div className="rightcolumn" />
                    </div>
                </div>

                {/*Block Three*/}
                <div className="block-container" style={{backgroundColor:'rgba(0,0,0,0)'}}>
                    <div className="block-content">
                        <div className="leftcolumn">
                            <h3>2015 – Present</h3>
                            <h2>Mosey</h2>
                            <h3>Mobile Developer</h3>
                            <Link to="/mosey">
                                <button>
                                    Mosey
                                </button>
                            </Link>
                        </div>
                        <div className="rightcolumn" />
                    </div>
                </div>

                {/*Block Four*/}
                <div className="block-container" style={{backgroundColor:'rgba(0,0,0,0)'}}>
                    <div className="block-content">
                        <div className="leftcolumn">
                            <h3>2013 – 2017</h3>
                            <h2>Marlin</h2>
                            <h3>UX Developer</h3>
                            <Link to="/marlin">
                                <button>
                                    Marlin
                                </button>
                            </Link>
                        </div>
                        <div className="rightcolumn" />
                    </div>
                </div>

                {/*Block Five
                <div className="block-container" style={{backgroundColor:'rgba(0,0,0,0)'}}>
                    <div className="block-content">
                        <div className="leftcolumn">

                            <h2>Blog</h2>
                            <h3>Concept for a desktop text editing application for iOS.</h3>
                            <Link to="/blog">
                                <button>
                                    `Lets Get Strange (;༎ຶД༎ຶ)`
                                </button>
                            </Link>
                        </div>
                        <div className="rightcolumn" />
                    </div>
                </div>*/}

                <CardGrid />

            </div>
        )
    }
}
