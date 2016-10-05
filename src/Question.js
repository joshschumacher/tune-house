import React, { Component } from 'react';
import { Link } from 'react-router';

class Question extends Component {
  render() {
    return (
      <div>
        <h1>Question</h1>

        <p>Ask a question and then redirect the user to <Link to="/results">Results</Link></p>
      </div>
    );
  }
}

export default Question;
