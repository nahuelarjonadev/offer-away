import React from 'react';
import CartBtn from './CartBtn';
import NavBar from './Navbar';

function Header() {
  return (
    <header>
      <div className='header-left'>
        <img src="/static/logo" alt="Logo"/>
        <h1>Snx</h1>
      </div>
      <div className='header-right'>
        <NavBar />
        <CartBtn />
      </div>
    </header>
  );
}

export default Header;