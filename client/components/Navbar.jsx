import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className='navbar'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Purchase'>Purchase</Link></li>
    </ul>
  );
}

export default NavBar;