import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceFroStripe = price * 100;
  const publishableKey = 'pk_test_3AvVRSNqTKY0xmDMR6DEurJV';

  const onToken = (token) => {
    console.log(token);
    alert('Payment processed.');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Master Piece"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceFroStripe}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

export default StripeButton;
