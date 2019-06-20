import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar({ routes }) {
  const NavLinks = routes.map((e, i) => <li key={i}><NavLink activeClassName='activeClassName' to={e.link}>{e.text}</NavLink></li>
  )

  return (
    <ul className='navbar'>
      {NavLinks}
    </ul>
  );
}

export default NavBar;