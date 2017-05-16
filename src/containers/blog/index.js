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


const myApi = axios.create({
  baseURL: 'http://api.tumblr.com/v2/blog/jmanhart.tumblr.com/posts?api_key=0G1UDWvxbMr3njFv3dGvTxlYj56dNVHc4pzBOX4QJOu2BXVlJi',
  timeout: 10000,
  withCredentials: true,
  transformRequest: [(data) => JSON.stringify(data.data)],
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});



export default class Blog extends Component{
    constructor(props){
      super(props)
      this.state = {
        posts:[]
      }
    }

    // componentDidMount(){
    //   axios.get(`http://api.tumblr.com/v2/blog/jmanhart.tumblr.com/posts?api_key=0G1UDWvxbMr3njFv3dGvTxlYj56dNVHc4pzBOX4QJOu2BXVlJi`)
    //     .then(res => {
    //       const posts = res.data.data.children.map(obj => obj.data);
    //       this.setState({ posts });
    //     })
    // }

    render(){
        return(
          <div>
            <BackIcon/>
            <HeroBlock label="Blog" />
            <div className="details-body-container">
              <div className="details-body-content">
                <h1>Test</h1>
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
