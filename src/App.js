import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.counter}
          <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Increment Counter</button>
          <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>Decrement Counter</button>
          <button onClick={() => this.setState({ counter: 0 })}>Reset Counter</button>
        </p>
      </div>
    );
  }
}

export default App;
