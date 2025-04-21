import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

// Load stripe with publishable key from environment variable
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);

const PaymentFormContent = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [cardholderName, setCardholderName] = useState('');
    const [error, setError] = useState(null);
    const [isCvcEntered, setIsCvcEntered] = useState(false);

    const handleCvcChange = (event) => {
        if (event.complete) {
            setTimeout(() => {
                setIsCvcEntered(true);
            }, 1000);
        } else {
            setIsCvcEntered(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setIsProcessing(true);
        setError(null);

        try {
            const res = await fetch('http://localhost:5550/api/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: 20 }),
            });
            const data = await res.json();

            const clientSecret = data.clientSecret;

            if (!clientSecret) {
                setError('Payment failed: client secret is missing');
                setIsProcessing(false);
                return;
            }

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: { name: cardholderName },
                },
            });

            if (result.error) {
                setError(result.error.message);
                toast.error(result.error.message);
                setIsProcessing(false);
            } else {
                toast.success('Payment successful');
                setIsProcessing(false);
            }

        } catch (err) {
            setError(err.message || 'An unexpected error occurred');
            toast.error(err.message || 'Payment processing failed');
            setIsProcessing(false);
        }
    };

    const elementOptions = {
        style: {
            base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#9e2146',
            },
        },
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <form onSubmit={handleSubmit} className="p-5">
                        <div className="bg-indigo-600 rounded-md p-4 mb-5 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-white">Younitech</h2>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2 flex items-center">
                                Card Number
                            </label>
                            <div className="relative">
                                <div className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-100">
                                    <CardNumberElement options={elementOptions} />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mb-4">
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Expiry Date
                                </label>
                                <div className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-100">
                                    <CardExpiryElement options={elementOptions} />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-medium mb-2 flex items-center">
                                    CVC
                                </label>
                                <div className="relative w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-100">
                                    <CardCvcElement options={elementOptions} onChange={handleCvcChange} />
                                    {isCvcEntered && (
                                        <div className="absolute inset-0 flex items-center pl-3 bg-gray-100 text-gray-600 pointer-events-none">
                                            ***
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Cardholder Name
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-100"
                                placeholder="John Doe"
                                value={cardholderName}
                                onChange={(e) => setCardholderName(e.target.value)}
                            />
                        </div>

                        {error && (
                            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className={`w-full ${isProcessing ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center`}
                            disabled={isProcessing || !stripe}
                        >
                            {isProcessing ? "Processing..." : (
                                <>
                                    Pay Now
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default function PaymentForm() {
    return (
        <Elements stripe={stripePromise}>
            <PaymentFormContent />
        </Elements>
    );
}
