import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
  render () {
    const tabs = this.props.tabs;
    return (
      <ul className='nav'>
        {tabs.map( tab => {
          return (
            <li>
              <NavLink exact activeClassName='active' to={tab.link}>
                {tab.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    ); 
  }
}

export default Nav;