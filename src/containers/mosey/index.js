import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Import Global Styles
import './../../styles/styles.css';
import './../../main.scss';

//Import Components
import BackIcon from '../../components/backIcon'
import HeroBlock from '../../components/heroBlock'

export default class Mosey extends Component{
    render(){
        return(
          <div>
            <HeroBlock label="Mosey" />
            <div className="details-body-container">
              <div className="details-body-content">
                <h1>Headling and other cool stuff you know oh yeah</h1>
                <p>
                  Chillwave you probably haven't heard of them hella tofu jianbing bushwick. Activated charcoal pok pok bushwick, wolf pork belly gochujang lyft locavore roof party ugh tousled banh mi tofu glossier. Post-ironic banh mi lyft, master cleanse neutra brunch VHS. Bitters meggings pok pok XOXO venmo. Tumeric yuccie hammock artisan tote bag, chambray mlkshk blog retro dreamcatcher raclette raw denim sriracha listicle. Pickled offal heirloom, seitan blue bottle fixie single-origin coffee trust fund whatever pork belly neutra prism. Four dollar toast hella distillery, vexillologist meggings microdosing poutine iPhone brunch marfa butcher XOXO 90's.
                </p>
                <p>
                  Chillwave you probably haven't heard of them hella tofu jianbing bushwick. Activated charcoal pok pok bushwick, wolf pork belly gochujang lyft locavore roof party ugh tousled banh mi tofu glossier. Post-ironic banh mi lyft, master cleanse neutra brunch VHS. Bitters meggings pok pok XOXO venmo. Tumeric yuccie hammock artisan tote bag, chambray mlkshk blog retro dreamcatcher raclette raw denim sriracha listicle. Pickled offal heirloom, seitan blue bottle fixie single-origin coffee trust fund whatever pork belly neutra prism. Four dollar toast hella distillery, vexillologist meggings microdosing poutine iPhone brunch marfa butcher XOXO 90's.
                </p>
                <p>
                  Chillwave you probably haven't heard of them hella tofu jianbing bushwick. Activated charcoal pok pok bushwick, wolf pork belly gochujang lyft locavore roof party ugh tousled banh mi tofu glossier. Post-ironic banh mi lyft, master cleanse neutra brunch VHS. Bitters meggings pok pok XOXO venmo. Tumeric yuccie hammock artisan tote bag, chambray mlkshk blog retro dreamcatcher raclette raw denim sriracha listicle. Pickled offal heirloom, seitan blue bottle fixie single-origin coffee trust fund whatever pork belly neutra prism. Four dollar toast hella distillery, vexillologist meggings microdosing poutine iPhone brunch marfa butcher XOXO 90's.
                </p>
                <p>
                  Chillwave you probably haven't heard of them hella tofu jianbing bushwick. Activated charcoal pok pok bushwick, wolf pork belly gochujang lyft locavore roof party ugh tousled banh mi tofu glossier. Post-ironic banh mi lyft, master cleanse neutra brunch VHS. Bitters meggings pok pok XOXO venmo. Tumeric yuccie hammock artisan tote bag, chambray mlkshk blog retro dreamcatcher raclette raw denim sriracha listicle. Pickled offal heirloom, seitan blue bottle fixie single-origin coffee trust fund whatever pork belly neutra prism. Four dollar toast hella distillery, vexillologist meggings microdosing poutine iPhone brunch marfa butcher XOXO 90's.
                </p>
              </div>
            </div>
          </div>
        )
    }
}
