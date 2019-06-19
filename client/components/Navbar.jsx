import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <ul className='navbar'>
      <li><NavLink activeClassName='activeLink' to='/home'>Home</NavLink></li>
      <li><NavLink activeClassName='activeLink' to='/purchase'>Purchase</NavLink></li>
      <li><NavLink activeClassName='activeLink' to='/business'>Business</NavLink></li>
    </ul>
  );
}

export default NavBar;