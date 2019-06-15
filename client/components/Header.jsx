import React from 'react';
import CartBtn from './CartBtn';
import NavBar from './Navbar';

function Header() {
  return (
    <header>
      <NavBar />
      <CartBtn />
    </header>
  );
}

export default Header;