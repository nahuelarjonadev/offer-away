import React from 'react';
import Header from './Header';
import MainDisplay from './MainDisplay'
import Footer from './Footer'
import PurchaseModal from './PurcasheModal';
import { connect } from "react-redux";

const mapStateToProps = store => ({
  onCheckoutPage: store.products.onCheckoutPage,
})

function App({ onCheckoutPage }) {
  return (
    <div>
      <Header />
      <MainDisplay />
      <Footer />
      {onCheckoutPage && <PurchaseModal />}
    </div>
  );
}

export default connect(mapStateToProps)(App);