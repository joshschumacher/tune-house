import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.counterDefault,
    };
  }

  render() {
    return (
      <div>
        <p>Hey {this.props.name}! The counter is currently {this.state.counter}</p>
        <p>
          <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Increment Counter</button>
          <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>Decrement Counter</button>
          <button onClick={() => this.setState({ counter: this.props.counterDefault })}>Reset Counter</button>
        </p>
      </div>
    );
  }
}

export default Counter;
