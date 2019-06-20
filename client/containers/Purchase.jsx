import React from 'react';
import { connect } from "react-redux";
import StripeBtn from '../components/StripeBtn';

import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  products: store.products.products,
  cart: store.cart.cart,
  sendPurchaseStatus: store.cart.sendPurchaseStatus,
})

const mapDispatchToProps = dispatch => ({
  sendPurchase: (cart) => dispatch(actions.sendPurchase(cart)),
})

function PurchaseModal({cart, products, sendPurchaseStatus, sendPurchase}) {
  let purchaseTotalPrice = 0;
  const productsArr = Object.entries(cart).map(([SKU, quantity]) => {
    const product = Object.values(products).filter(p => p.SKU == SKU)[0];
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
            {productsArr}
            <li className="purchaseHeader"><span>Total:</span><span></span><span> $ {purchaseTotalPrice}</span></li>
          </ul>
        </div>
        <StripeBtn onCheckoutSuccess={() => sendPurchase(cart)} priceInCents={purchaseTotalPrice * 100} />
        <br />
        <p style={{fontSize: '5em', fontWeight: 900, color: '#29293d', textAlign: 'center'}} >{sendPurchaseStatus}</p>
      </div>
    </div>
  );
}

const styles = { display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px'};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseModal);