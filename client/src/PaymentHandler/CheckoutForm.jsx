import React, { useState, useEffect } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:7000/api/card/payment/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ price: 1000, quantity: 1 }] }), // Example items
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          throw new Error("Failed to get client secret");
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardNumberElement, // Correct way to pass the card elements
          },
        }
      );

      if (error) {
        setError(error.message);
        setLoading(false);
      } else if (paymentIntent.status === "succeeded") {
        setError(null);
        setLoading(false);
        setPaymentSucceeded(true);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="checkout-form">
      <h1>Checkout</h1>
      {paymentSucceeded ? (
        <div>
          <h2>Payment Succeeded!</h2>
          <p>Your payment was successful. Thank you for your purchase!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <CardNumberElement className="card-element" id="card-number" />
          </div>
          <div className="form-group">
            <label htmlFor="card-expiry">Expiry Date</label>
            <CardExpiryElement className="card-element" id="card-expiry" />
          </div>
          <div className="form-group">
            <label htmlFor="card-cvc">CVC</label>
            <CardCvcElement className="card-element" id="card-cvc" />
          </div>
          <button type="submit" disabled={!stripe || loading}>
            {loading ? "Processing..." : "Pay"}
          </button>
          {error && <div className="error-message">{error}</div>}
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
