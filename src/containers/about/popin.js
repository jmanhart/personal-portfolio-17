import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Import Local Styles
import './styles.scss'



export default class ExampleComponent extends Component {
  constructor(props) {
    super(props);
      this.state = {
        focused: false
      };
  }

  componentDidMount() {
    this.input.addEventListener('focus', this.focus);
    this.input.addEventListener('blur', this.focus);
  }
  focus() {
    this.setState((state) => ({ focused: !state.focused }))
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <input
            ref={input => this.input = input}
            className={['input', this.state.focused && 'input-focused'].join(' ')}
            />
        </div>
      </div>
    );
  }
}
