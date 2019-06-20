import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  products: store.products.products,
  cart: store.cart.cart,
  sendPurchaseStatus: store.cart.sendPurchaseStatus,
})

const mapDispatchToProps = dispatch => ({
  exitCheckout: () => dispatch(actions.exitCheckout()),
})

function PurchaseModal(props) {
  let purchaseTotalPrice = 0;
  const products = Object.entries(props.cart).map(([SKU, quantity]) => {
    const product = Object.values(props.products).filter(p => p.SKU == SKU)[0];
    const productTotalPrice = parseInt(product.price) * parseInt(quantity);
    purchaseTotalPrice += productTotalPrice;
    return (
      <li className="productSummary" key={SKU} style={{ padding: 20, borderBottom: "solid 1px #E8E8E8" }}>
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
          <Link to="/purchase" className='btn btn-blue' id='purchaseBtn' onClick={() => props.exitCheckout()}>Purchase</Link>
          <p style={{fontSize: '5em', fontWeight: 900, color: '#29293d'}} >{props.sendPurchaseStatus}</p>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseModal);