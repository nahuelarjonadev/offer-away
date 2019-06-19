import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className='navbar'>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/purchase'>Purchase</Link></li>
      <li><Link to='/business'>Business</Link></li>
    </ul>
  );
}

export default NavBar;