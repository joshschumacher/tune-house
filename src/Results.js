import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';
import FirebaseWrapper from './FirebaseWrapper';

const STYLE = {
  list: {
    textAlign: 'left',
    fontSize: 22,
  },
  listParentItem : {
    marginBottom: 30,
  },
}

class Results extends Component {

  render() {

    return (
      <div>
        <h1>Results</h1>
        <ul style={STYLE.list}>
          {this.props.firebase.questions && this.props.firebase.questions.map((question) => (
            <li key={question.id}>
              {question.question}
              {question.results && Object.keys(question.results).map(key => (
                <div>{question.results[key]}</div>
              ))}
            </li>
          ))}
        </ul>

        <Link to="/">Back to Login</Link>
      </div>
    );
  }
}

export default FirebaseWrapper(Results);
