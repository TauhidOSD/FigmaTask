import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); // Initialize navigate hook

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error("Stripe is not loaded properly!");
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      toast.error("Card details are missing!");
      return;
    }

    // Simulate a payment process (replace this with your backend integration for real payments)
    const paymentResult = { paymentIntent: { status: "succeeded" } }; // Simulated result

    if (paymentResult?.paymentIntent?.status === "succeeded") {
      toast.success("Payment successful!");
    } else {
      toast.error("Payment failed. Please try again!");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 md:my-8 p-8 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Complete Your Payment
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Enter your card details below to complete the payment securely.
      </p>
      <form onSubmit={handlePayment} className="space-y-6">
        <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe}
          className="w-full py-3 px-5 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition disabled:opacity-50"
        >
          Pay Now
        </button>
      </form>
      <button
        onClick={() => navigate(-1)} // Go back to the previous route
        className="mt-6 w-full py-3 px-5 bg-gray-200 text-gray-700 font-medium rounded-lg shadow-md hover:bg-gray-300 transition"
      >
        Back
      </button>
      <p className="text-xs text-gray-400 text-center mt-4">
        Powered by Stripe. Your information is securely encrypted.
      </p>
    </div>
  );
};

export default Payment;
