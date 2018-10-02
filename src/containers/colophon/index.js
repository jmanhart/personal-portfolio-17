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


export default class Colophon extends React.Component{
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
            {/*Typography Row */}
            <div className="flex-row">
              {/* Left Side Column*/}
              <div className="first-column" >
                <span className="label-04">Typography</span>
              </div>
              {/* Right Side Column*/}
              <div className="column" >
                  <div className="basic-row">
                    <code className="spacer-bottom-small">.label-01</code>
                    <span className="label-01">Super Awesome Title!</span>
                  </div>
                  <div className="basic-row">
                    <code className="spacer-bottom-small">.label-02</code>
                    <span className="label-02">Hero sub title for added support to hero. This is great awesome yay!</span>
                  </div>
                  <div className="basic-row">
                    <code className="spacer-bottom-small">.label-03</code>
                    <span className="label-03">Hero body copy for further lead in drop – Lorem ipsum dolor amet poke vinyl put a bird on it disrupt flexitarian helvetica polaroid craft beer, before they sold out ramps woke. XOXO helvetica prism, coloring book bicycle rights gentrify narwhal.</span>
                  </div>
                  <div className="basic-row">
                    <code className="spacer-bottom-small">.roll-over</code>
                      <span
                        className="roll-over"
                        style={{width:135}}
                        >
                          Internal Link
                      </span>
                  </div>
                  <div className="basic-row">
                    <code className="spacer-bottom-small">.label-footer</code>
                    <span
                      className="label-footer"
                      style={{margin:0}}
                      >
                      Outside Link
                    </span>
                  </div>
              </div>
            </div>
          </div>
      )
    }




    renderColors(){
      return(
        <div style={{display:'flex'}}>

            <div className="first-column" >
              <span className="label-04">Colors</span>
            </div>

            <div className="column"
              style={{flexDirection:'row'}}>

                <div className="color-swatch" style={{backgroundColor:'#000'}}>
                  <code className="label">#000</code>
                </div>

                <div className="color-swatch" style={{backgroundColor:'#222'}}>
                  <code className="label">#222</code>
                </div>

                <div className="color-swatch" style={{backgroundColor:'#444'}}>
                  <code className="label">#444</code>
                </div>

                <div className="color-swatch" style={{backgroundColor:'#888'}}>
                  <code className="label">#888</code>
                </div>

                <div className="color-swatch" style={{backgroundColor:'#e5e5e5', border:'1px solid #e5e5e5'}}>
                  <code className="label" style={{color:'#444'}}>#e5e5e5</code>
                </div>

                <div className="color-swatch" style={{backgroundColor:'#fff', border:'1px solid #e5e5e5'}}>
                  <code className="label" style={{color:'#444'}}>#fff</code>
                </div>
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
              {this.renderColors()}
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

  <div className="flex-column basic-row">
    <span className="label-04">
      Article Sub Header
    </span>
    <code>.label-04</code>
  </div>


  <span className="label-05 spacer-bottom-medium">Usage:</span>
  <span className="label-03">
    Hero body copy for further lead in drop – Lorem ipsum dolor amet poke vinyl put a bird on it disrupt flexitarian helvetica polaroid craft beer, before they sold out ramps woke. XOXO helvetica prism, coloring book bicycle rights gentrify narwhal.
  </span>


  <div className="flex-column basic-row">
    <code className="spacer-bottom-small">.label-01</code>
    <span className="label-01">Super Awesome Title!</span>
  </div>


  <div className="flex-column basic-row">
    <code className="spacer-bottom-small">.label-02</code>
    <span className="label-02">Hero sub title for added support to hero. This is great awesome yay!</span>
  </div>



  <div className="flex-column basic-row">
    <code className="spacer-bottom-small">.label-03</code>
    <span className="label-03">
      Hero body copy for further lead in drop – Lorem ipsum dolor amet poke vinyl put a bird on it disrupt flexitarian helvetica polaroid craft beer, before they sold out ramps woke. XOXO helvetica prism, coloring book bicycle rights gentrify narwhal.
    </span>
  </div>


  <div className="flex-column basic-row">
    <code className="spacer-bottom-small">.roll-over</code>
    <div>
      <span className="roll-over">
        Internal Link
      </span>
    </div>
  </div>

  <div className="flex-column basic-row">
    <code className="spacer-bottom-small">.label-footer</code>
    <div>
      <span className="label-footer">
        Outside Link
      </span>
    </div>
  </div>



  <div>

    <div className="flex-column basic-row">
      <code className="spacer-bottom-small">Colors</code>

      <div className="flex-row basic-row">

        <div className="color-swatch" style={{backgroundColor:'#000'}}>
          <code className="label">#000</code>
        </div>

        <div className="color-swatch" style={{backgroundColor:'#222'}}>
          <code className="label">#222</code>
        </div>

        <div className="color-swatch" style={{backgroundColor:'#444'}}>
          <code className="label">#444</code>
        </div>

        <div className="color-swatch" style={{backgroundColor:'#888'}}>
          <code className="label">#888</code>
        </div>

        <div className="color-swatch" style={{backgroundColor:'#e5e5e5', border:'1px solid #e5e5e5'}}>
          <code className="label" style={{color:'#444'}}>#e5e5e5</code>
        </div>

        <div className="color-swatch" style={{backgroundColor:'#fff', border:'1px solid #e5e5e5'}}>
          <code className="label" style={{color:'#444'}}>#fff</code>
        </div>



      </div>

    </div>


  </div>
*/}
