import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_3AvVRSNqTKY0xmDMR6DEurJV';

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
          amount: priceForStripe,
          token: token,
      },
  })
    .then(response => {
      alert('Payment successful.')
    })
    .catch(err => {
      console.log('Payment error: ', err.message);
      alert("Payment failed.")
    })
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Master Piece"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
      token={onToken}

    />
  );
};

export default StripeButton;
