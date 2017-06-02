import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName='active' to='/home'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/results'>
          Results
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav;