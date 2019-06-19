import React from 'react';

function Checkout({location: {state: cart}}) {
  return (
    <div>
      {JSON.stringify(cart)}
    </div>
  );
}

export default Checkout;