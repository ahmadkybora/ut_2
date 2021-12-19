import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { counter: 0 };
  // }

  state = {
    counter: 0
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">the counter is currently {this.state.counter}</h1>
        <button 
        onClick={() => this.setState({ counter: this.state.counter + 1 })} 
        data-test="increment-button">increment counter</button>
      </div>
    );
  }
}

export default App;
