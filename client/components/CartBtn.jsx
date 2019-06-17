import React from 'react';

function CartBtn(props) {
  return (
    <button id='cart-btn'>
      <p>{props.totalItemsInCart}</p>
      <img src="/static/icon/cart" alt="Cart Img"></img>
    </button>
  );
}

export default CartBtn;