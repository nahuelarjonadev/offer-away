import React from 'react';
import CartBtn from './CartBtn';
import NavBar from './Navbar';
import { connect } from "react-redux";

const mapStateToProps = store => ({
  totalItemsInCart: store.products.totalItemsInCart,
})

function Header(props) {
  return (
    <header>
      <div className='header-left'>
        
        <h1>SNiX</h1>
      </div>
      <div className='header-right'>
        <NavBar />
        <CartBtn totalItemsInCart={props.totalItemsInCart} />
      </div>
    </header>
  );
}

export default connect(mapStateToProps)(Header);