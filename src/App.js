import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Results from './Results';
import Nav from './Nav';
import Login from './Login';
import './App.css';
//import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Route exact path='/' component={Login} />
            <Route path='/home' component={Home} />
            <Route path='/results/:zip/:radius/:category' component={Results} />
          </div>

        </Router>
      </div>
    );
  }
}

export default App;
