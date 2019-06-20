import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
const stripeBtn = () => {
  const publishableKey = "pk_test_ZU3mlTy0q00DATc9EyF9A8jX";

  const onToken = token => {
    const body = {
      amount: 999,
      token: token
    };

    fetch('/purchase/stripe', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(body), // body data type must match "Content-Type" header
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };

  return (
    <StripeCheckout
      label="Buy Item" //Component button text
      name="Fire Frost LLC" //Modal Header
      description="Buy your sneakers today!"
      panelLabel="Buy Item" //Submit button in modal
      amount={999} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      image="/static/productImages/1.jpg" //Pop-in header image
      billingAddress={false}
    />
  );
};
export default stripeBtn;