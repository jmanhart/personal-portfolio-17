import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import axios from 'axios';

//Import Global Styles
import './../../styles/styles.css';
import './../../main.scss';

//Import Components
import BackIcon from '../../components/backIcon'
import HeroBlock from '../../components/heroBlock'

export default class Blog extends Component{
    constructor(props){
      super(props)
      this.state = {
        posts:[]
      }
    }

    componentDidMount(){
      axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
        .then(res => {
          const posts = res.data.data.children.map(obj => obj.data);
          this.setState({ posts });
        })
    }

    render(){
        return(
          <div>
            <BackIcon/>
            <HeroBlock label="Duder" />
            <div className="details-body-container">
              <div className="details-body-content">
                <h1>{`/r/${this.props.subreddit}`}</h1>
                  <ul>
                    {this.state.posts.map(post =>
                      <li key={post.id}>{post.title}</li>
                    )}
                  </ul>
              </div>
            </div>
          </div>

        )
    }
}
