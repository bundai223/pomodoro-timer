import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js';
//import Tasklist from './Tasklist.js';

class App extends Component {
  render() {
    return (
      <div>
        <ActionLink />
      </div>
    )
  }
}

export default App;

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked!');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
