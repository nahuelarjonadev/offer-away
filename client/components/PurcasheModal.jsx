import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => ({
  products: store.products.products,
  cart: store.products.cart,
})

function PruchaseModal(props) {
  return (
    <div id="checkoutModal">
      test
    </div>
  );
}

export default connect(mapStateToProps)(PruchaseModal);