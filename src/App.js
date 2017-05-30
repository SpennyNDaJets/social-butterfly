import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link } from 'react-router-dom';
import Home from './Home';
import Results from './Results';
import './App.css';
//import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/results">Results</Link>
            <Route exact path='/' component={Home}/>
            <Route path='/results' component={Results}/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
