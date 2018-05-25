import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <FormattedDate date={this.state.date}/>
      </div>
    );
  }
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

export default Clock;
