import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => ({
  products: store.products.products,
  cart: store.products.cart,
})

function PruchaseModal(props) {
  return (
    <div className="overlay">
      <div className="modal">
        test
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(PruchaseModal);