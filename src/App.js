import React, { Component } from 'react';

// Using React Router v4 (currently alpha) https://react-router.now.sh/
import { BrowserRouter, Match, Miss, Link } from 'react-router';

import Login from './Login.js';
import Question from './Question.js';
import Results from './Results.js';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDu9S_nK-LAJaNQ1PiTpMN19m5AOy8qJzw",
      authDomain: "tune-house.firebaseapp.com",
      databaseURL: "https://tune-house.firebaseio.com",
      storageBucket: "tune-house.appspot.com",
      messagingSenderId: "278304441754"
    };
    const app = firebase.initializeApp(config);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>

          <Match exactly pattern="/" component={Login} />
          <Match pattern="/login" component={Login} />
          <Match pattern="/question" component={Question} />
          <Match pattern="/results" component={Results} />

          <Miss render={() => (
            <h1>Routing Error. Go back to <Link to="/login">Login</Link></h1>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
