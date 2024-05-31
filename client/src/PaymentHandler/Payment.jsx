import React from "react";
import StripeProvider from "./StripeProvider";
import CheckoutForm from "./CheckoutForm";
import "./Checkout.css";
const Payment = () => {
  return (
    <>
      <StripeProvider>
        <CheckoutForm />
      </StripeProvider>
    </>
  );
};

export default Payment;
