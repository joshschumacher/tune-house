import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';
import FirebaseWrapper from './FirebaseWrapper';


class Question extends Component {

  handleClick(e) {
    firebase.database().ref(`questions/${e.target.name}/results`).push().set(e.target.value);
  }

  render() {
    console.error('this.props', this.props);
    return (
      <div>
        <h1>Question</h1>
        {this.props.firebase.questions && this.props.firebase.questions.map((question, index) => (
          <li key={question.id}>
            {question.question}
            <br />
            {question.answers.map((answer, index) => (
              <li key={index}>
                <label>
                  <span>{answer.label}</span>
                  <input
                    onClick={this.handleClick}
                    type="radio"
                    name={question.id}
                    value={answer.value}
                   />
                </label>
              </li>
            ))}
          </li>
        ))}
      </div>
    );
  }
}

export default FirebaseWrapper(Question);
