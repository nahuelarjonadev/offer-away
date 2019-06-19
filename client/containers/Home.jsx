import React from 'react';
import Header from './Header';
import MainDisplay from '../components/MainDisplay'
import Footer from '../components/Footer'
import PurchaseModal from './PurchaseModal';
import { connect } from "react-redux";

const mapStateToProps = store => ({
  onCheckoutPage: store.products.onCheckoutPage,
})

function Home({ onCheckoutPage }) {
  return (
    <div>
      <Header />
      <MainDisplay />
      <Footer />
      {onCheckoutPage && <PurchaseModal />}
    </div>
  );
}

export default connect(mapStateToProps)(Home);