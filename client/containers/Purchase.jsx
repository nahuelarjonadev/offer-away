import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StripeBtn from '../components/StripeBtn';

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
      <li className="productSummary" key={SKU} style={{ padding: 20, borderBottom: "solid 1px #E8E8E8" }}>
        <span> {quantity}</span>
        <span> {product.product_name} </span>
        <span> ${productTotalPrice} </span>
      </li>
    )
  });
  return (
    <div>
      <div style={styles}>
        <div id="checkoutSummary">
          <ul>
            <li className="purchaseHeader"><span>Quantity</span><span>Description</span><span>Price</span></li>
            {products}
            <li className="purchaseHeader"><span>Total:</span><span></span><span> $ {purchaseTotalPrice}</span></li>
          </ul>
        </div>
        <StripeBtn priceInCents={purchaseTotalPrice * 100} />
        <p style={{fontSize: '5em', fontWeight: 900, color: '#29293d'}} >{props.sendPurchaseStatus}</p>
      </div>
    </div>
  );
}

const styles = { display: 'flex', flexDirection: 'column', justifyContent: 'center'};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseModal);