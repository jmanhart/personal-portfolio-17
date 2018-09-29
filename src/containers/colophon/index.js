import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


//Import Local Styles
import '../../main.scss'
import './styles.scss'

//Import Components
import BackIcon from '../../components/backIcon'


export default class Colophon extends Component{
    renderHeroDefinition(){
      return(
        <div>
          <div className="block flex-row">
            <span className="label-01">Colophon</span>
            <span className="label-02">
              A person that oversees product vision from a high level (how does this feature make sense for where we want to be in 6 months).
            </span>
            <span>This is stuff</span><span className="label-01">This is Label One!</span>
            <span className="label-02">This is Label Two!</span>
            <span className="label-03">A person that oversees product vision from a high level (how does this feature make sense for where we want to be in 6 months). A person that oversees product vision from a high level (how does this feature make
            </span>
          </div>
        </div>
      )
    }

    renderTypeStyles(){
      return(
          <div>
            
            <div className="flex-column basic-row">
              <span className="label-01">Hero Title</span>
              <code>.label-01</code>
            </div>
            

            
            <div className="flex-column basic-row">
              <span className="label-02">Hero sub title for added support to hero.</span>
              <code>.label-02</code>
            </div>
            

            
            <div className="flex-column basic-row">
              <span className="label-03">
                Hero body copy for further lead in drop – Lorem ipsum dolor amet poke vinyl put a bird on it disrupt flexitarian helvetica polaroid craft beer, before they sold out ramps woke. XOXO helvetica prism, coloring book bicycle rights gentrify narwhal.
              </span>
              <code>.label-03</code>
            </div>
            

            
            <div className="flex-column basic-row">
              <span className="label-04">
                Article Sub Header 
              </span>
              <code>.label-04</code>
            </div>
            

            
            <div className="flex-column basic-row">
              <span className="label-05">
                Caption Text
              </span>
              <code>.label-05</code>
            </div>
            
            
            <div className="flex-column basic-row">
              <span className="label-06">
                Lorem ipsum dolor amet.
              </span>
              <code>.label-06</code>
            </div>
            
            <div className="flex-column basic-row">
              <span className="label-footer">
                Label Footer Text
              </span>
              <code>.label-footer</code>
            </div>
            
          </div>
    
      )
    }

    renderExpandedDefintion(){
      return(
        <div className="block">
          <div className="block-code">
            <code>
              {` UserGreeting(props) {
                 <h1>Welcome back!</h1>;
              }`}
            </code>
          </div>

        </div>
      )
    }

    render(){
        return(

            <div className="wrapper-scroll">
              <BackIcon />
              {this.renderTypeStyles()}
            </div>
    
        )
    }
}

{/*
  <div className="block definition">
    <span className="label-03 body-color">
      A person that oversees product vision from a high level (how does this feature make sense for where we want to be in 6 months) to a low execution level (how does styling this button this way impact how the user flows through this flow).
    </span>
  </div>  
*/}
