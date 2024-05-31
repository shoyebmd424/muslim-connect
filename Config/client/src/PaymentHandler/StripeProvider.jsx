import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PBNGfSCZnl4fNe7OhyqOs5WH04BKl5VIpwEMOch1wYJNv3zwDtrgWKaXhE8HSfoSmjatibrbu7JFau7pFDWr36V00pzjNjava"
);

const StripeProvider = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
