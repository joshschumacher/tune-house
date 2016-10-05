import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      redirectToReferrer: false,
      status: '',
    };

    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    if (!this.state.username) {
      this.setState({ status: "Please enter your username to continue" });
    } else {
      this.setState({ status: `Welcome ${this.state.username} (redirecting in 2 secs)` });
      setTimeout(() => {
        this.setState({ redirectToReferrer: true });
      }, 2000)
    }
  }

  render() {
    const { from } = this.props.location.state || '/';
    const { redirectToReferrer, status } = this.state;

    return (
      <div>
         {redirectToReferrer && <Redirect to={from || "/question"}/>}

         <h1>Login</h1>

        {status && (
          <div style={{
            width: '50%',
            background: '#eee',
            fontWeight: 'bold',
            padding: 12,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>{status}</div>
        )}

        <form onSubmit={this.login}>
          <input type="text" onChange={e => {
            this.setState({
              username: e.target.value,
              status: '',
            });
          }} placeholder="Your Name" value={this.state.username} />

          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
