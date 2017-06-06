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
                <div className="block-container"  >
                    <div className="block-full" >
                        <div className="place">
                          <span className="label-04">2017 – PRESENT</span>
                          <span className="label-01">Garmin</span>
                          <span className="label-02">UX Designer</span>
                            <a href="/marlin">
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
                            <span className="label-04">2015 – PRESENT</span>
                            <span className="label-01">Mosey</span>
                            <span className="label-02">UX Developer</span>
                            <a href="/marlin">
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
                          <span className="label-04">2013 – 2017</span>
                          <span className="label-01">Marlin</span>
                          <span className="label-02">UX Developer</span>
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
