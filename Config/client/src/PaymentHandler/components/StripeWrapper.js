import React from "react";

// import config from "../utils/config.json";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PBNGfSCZnl4fNe7OhyqOs5WH04BKl5VIpwEMOch1wYJNv3zwDtrgWKaXhE8HSfoSmjatibrbu7JFau7pFDWr36V00pzjNjava"
);

export default function Stripe(props) {
  const options = {
    clientSecret: props.client_secret,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      {props.children}
    </Elements>
  );
}
