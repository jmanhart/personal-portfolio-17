import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import Styles
// import './styles.scss'
// import '../../main.scss'

//Import Components
import BackIcon from '../../components/backIcon'


export default class ProductDesigner extends Component{

    renderHeroDefinition(){
      return(
        <div>
          <div className="block flex-colum">
            <span className="label-01">Prod·uct De·sign·er</span>
            <span className="label-02">
              /prädəkt/ /dəˈzīnər/
            </span>
          </div>

          <div className="block definition">
            <span className="label-03 body-color definition-number">
              1.
            </span>
            <span className="label-03 body-color">
              A person that oversees product vision from a high level (how does this feature make sense for where we want to be in 6 months) to a low execution level (how does styling this button this way impact how the user flows through this flow).
            </span>
          </div>
          <div className="block definition">
            <span className="label-03 body-color definition-number">
              2.
            </span>
            <span className="label-03 body-color">
              A problem solver.
            </span>
          </div>

        </div>
      )
    }

    renderExpandedDefintion(){
      return(
        <div className="block">
            <span className="label-03 body-color">
              <hr/>
                I consider myself very lucky in the knowing in some shape or form what I wanted to do. From my

                {/*

                  Tools/Work style
                  - Post its and Dry erase <br/>
                  - Sketch <br/>
                  - Invision for lo-fi prototyping <br/>
                  - Framer for Hi-fi prototyping (Mobile) <br/>
                  - HTML/CSS/JS for Hi-fi prototyping (Web) <br/>
                  - Git for file/code managment <br/>
                  - Release<br/>
                  - Beer<br/>
                  It’s about the entire process of creating a product or experience. This begins with by reseraching a  problem, defining the problem and than thinking about all the possible solutions. That will eventually lead to the best design.

                <br/>

                It’s about the entire process from problem ideation and birth up to development and 1 year post release. Working with project owners, visual designers, QA, business analysts, and researchers. Handling FQC's from the field and making sure that button is just the right shade of green.

                A product designer should be able is express the idea in the lowest of fedilities with post-post it and dry erase up to the highest of fi with smart, clean prototypes that hit all platforms and every X you can imagine.

                I wish I got paid by the post it and dry earse marker because that is where I like to start. Rifting, drafting, erasing and at the core sketching.

                [Image of dry earse and post it note]

                When the time is right and digital needs to be introduce.*/}






            </span>

        </div>
      )
    }

    render(){
        return(
          <div>
            <div className="wrapper">
              <BackIcon />
              {this.renderHeroDefinition()}
              {this.renderExpandedDefintion()}
            </div>
          </div>

        )
    }
}
