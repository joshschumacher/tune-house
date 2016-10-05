import React, { Component } from 'react';
import { Link } from 'react-router';

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
    const sampleResults = [
      {
        question: "Hello?",
        answers: [
          {
            text: "Hi!",
            result: 22,
          },
          {
            text: "How are you today?",
            result: 78,
          },
        ],
      },
      {
        question: "Chicken or Egg?",
        answers: [
          {
            text: "Chicken",
            result: 49,
          },
          {
            text: "Egg",
            result: 51,
          },
        ],
      }
    ]

    return (
      <div>
        <h1>Results</h1>
        <ul style={STYLE.list}>
          {sampleResults.map((result, index) => {
            return (
              <li key={index} style={STYLE.listParentItem}>
                {result.question}
                <ul>
                  {result.answers.map((answer, i) => <li key={i}>{answer.text} ({answer.result}%)</li>)}
                </ul>
              </li>
            );
          })}
        </ul>

        <Link to="/">Back to Login</Link>
      </div>
    );
  }
}

export default Results;
