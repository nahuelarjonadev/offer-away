import React from 'react';
import CartBtn from './CartBtn';
import NavBar from './Navbar';

function Header() {
  return (
    <header>
      <div className='header-right'>
        <NavBar />
        <CartBtn />
      </div>
    </header>
  );
}

export default Header;