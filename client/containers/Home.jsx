import React from 'react';
import MainDisplay from '../components/MainDisplay'
import PurchaseModal from './PurchaseModal';
import { connect } from "react-redux";

const mapStateToProps = store => ({
  onCheckoutPage: store.products.onCheckoutPage,
})

function Home({ onCheckoutPage }) {
  return (
    <div>
      <MainDisplay />
      {onCheckoutPage && <PurchaseModal />}
    </div>
  );
}

export default connect(mapStateToProps)(Home);