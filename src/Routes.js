import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { 
  Home,
  Results,
  Login
}from './Components/';


class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/results/:zip/:radius/:category' component={Results} />
      </div>
    );
  }
}

export default Routes;