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
  purchase: (cart) => dispatch(actions.sendPurchase(cart)),
})

function PurchaseModal(props) {
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
    <div>
      <div>
        <Link to="/"><button>Exit</button></Link>
        <div id="checkoutSummary">
          <ul>
            <li className="purchaseHeader"><span>Quantity</span><span>Description</span><span>Price</span></li>
            {products}
            <li className="purchaseHeader"><span>Total:</span><span></span><span> $ {purchaseTotalPrice}</span></li>
          </ul>
        </div>
        <a className='btn btn-blue' id='purchaseBtn' onClick={() => props.purchase(props.cart)}>Purchase</a>
        <p style={{fontSize: '5em', fontWeight: 900, color: '#29293d'}} >{props.sendPurchaseStatus}</p>
      </div>
      <Link to={{pathname:'/checkout', state: { cart: props.cart}}}>Proceed to checkout</Link>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseModal);