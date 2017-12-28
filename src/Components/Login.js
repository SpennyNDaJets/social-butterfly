import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Route, Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false
    }
  }

  responseGoogle = (response) => {
    localStorage.setItem('userData', response.accessToken);
    localStorage.setItem('userEmail', response.profileObj.email);
    if (response.accessToken) {
      this.setState({
        login: true
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Social Butterfly</h1>
        <div>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        </div>
        {this.state.login &&
          <Route>
            <Redirect to="/home" push />
          </Route>}
      </div>
    );
  }
}

export default Login;