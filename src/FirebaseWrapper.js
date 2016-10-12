import React, { Component } from 'react';
import firebase from 'firebase';

export default function FirebaseWrapper(ChildComponent) {
  return class Wrapped extends Component {
    constructor(...args) {
      super(...args);
      this.state = {
        questions: null,
      }
    }
    componentWillMount() {
      const ref = firebase.database().ref('questions');
      ref.on('value', (res) => {
        this.setState({
          questions: Object.keys(res.val()).map(key => {
            return {
              id: key,
              ...res.val()[key],
            }
          })
        })
      });
    }
    render() {
      return <ChildComponent firebase={this.state} some="prop" />
    }
  }
}
