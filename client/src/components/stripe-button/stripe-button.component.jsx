import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import myKey from "../../config";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishhableKey = myKey.stripeKey;

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => alert("Payment succesful!!!"))
      .catch((error) => {
        console.log(`Some payment error`);
        alert(
          "There was an issue with your payment. Please you use the provided credit cart."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pey Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pey Now"
      token={onToken}
      stripeKey={publishhableKey}
    />
  );
};

export default StripeCheckoutButton;
