import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Routes from '../Routes.js';
import { Nav } from './';
import '../Assets/css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav
              tabs={[{label: "Login", link: "/"}, {label: "Home", link: "/home"}, {label: "Results", link: "/results"}]}
            />
            <Routes/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
