import React from 'react';
import { connect } from "react-redux";

import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  products: store.products.products,
  cart: store.products.cart,
})

const mapDispatchToProps = dispatch => ({
  exitCheckout: () => dispatch(actions.exitCheckout()),
})

function PruchaseModal(props) {
  let purchaseTotalPrice = 0;
  const products = Object.entries(props.cart).map(([SKU, quantity]) => {
    const product = Object.values(props.products).filter(p => p.SKU == SKU)[0];
    const productTotalPrice = parseInt(product.price) * parseInt(quantity);
    purchaseTotalPrice += productTotalPrice;
    return (
      <li className="productSummary">
        <span> {quantity}</span>
        <span> {product.product_name} </span>
        <span> ${productTotalPrice} </span>
      </li>
    )
  });
  return (
    <div className="overlay">
      <div className="modal">
        <div id="checkoutModal">
          <button onClick={props.exitCheckout}>Exit</button>
          <div id="checkoutSummary">
            <ul>
              <li className="purchaseHeader"><span>Quantity</span><span>Description</span><span>Price</span></li>
              {products}
              <li className="purchaseHeader"><span>Total:</span><span></span><span> $ {purchaseTotalPrice}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PruchaseModal);