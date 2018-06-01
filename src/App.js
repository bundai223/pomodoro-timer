import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js';
import Tasklist from './Tasklist.js';

class App extends Component {
  render() {
    return (
      <div>
      <Tasklist />
      <Clock />
      </div>
    )
  }
}

export default App;
