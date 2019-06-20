import React from 'react';
import StripeBtn from '../components/StripeBtn';

function Checkout({location: {state: cart}}) {
  return (
    <div>
      {JSON.stringify(cart)}
      <StripeBtn />
    </div>
  );
}

export default Checkout;