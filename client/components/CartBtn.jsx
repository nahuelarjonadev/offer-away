import React from 'react';

function CartBtn(props) {
  return (
    <button id='cart-btn' onClick={props.proceedToCheckout}>
      <p>{props.totalItemsInCart}</p>
      <img src="/static/cart-logo3.png" width="50px" alt="Cart Img"></img>
    </button>
  );
}

export default CartBtn;