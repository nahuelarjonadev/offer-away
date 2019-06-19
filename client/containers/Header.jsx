import React from 'react';
import CartBtn from '../components/CartBtn';
import NavBar from '../components/Navbar';
import { connect } from "react-redux";
import Login from './Login';

import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  totalItemsInCart: store.products.totalItemsInCart,
})

const mapDispatchToProps = dispatch => ({
  proceedToCheckout: () => dispatch(actions.proceedToCheckout()),
})

function Header(props) {
  return (
    <header>
      <div className='header-left'>
        <h1>SNiX</h1>
      </div>
      <div className='header-right'>
      <div>
        <Login />
      </div>
        <NavBar />
        <CartBtn proceedToCheckout={props.proceedToCheckout} totalItemsInCart={props.totalItemsInCart} />
      </div>
    </header>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);