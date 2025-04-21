import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

// Load stripe with publishable key
const stripePromise = loadStripe('pk_live_51R7Q9zAXyPA9J1T86b19dgeuudAN31AmHllP3v6zKQkBIXCV2s5iBcJLld7IBOAOAYW1PiNhwKc1mt5S9lyKpTpK008GTjp0rZ');

const PaymentFormContent = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [cardholderName, setCardholderName] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);
        setError(null);

        try {
            // Create payment method using the card elements
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardNumberElement),
                billing_details: {
                    name: cardholderName,
                },
            });

            if (error) {
                setError(error.message);
                toast.error(error.message || 'Payment failed');
                setIsProcessing(false);
                return;
            }

            // For demo purposes, we'll just show success
            toast.success('Payment successful!');
            console.log('Payment method created:', paymentMethod);

            // In a real app, you'd send this to your server
            // and process the payment there

            setTimeout(() => {
                setIsProcessing(false);
            }, 1000);

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
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                                Card Number
                            </label>
                            <div className="relative">
                                <div className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-100">
                                    <CardNumberElement options={elementOptions} />
                                </div>
                                <div className="absolute right-3 top-2 flex space-x-1">
                                    <div className="w-8 h-5 bg-gray-200 rounded opacity-70"></div>
                                    <div className="w-8 h-5 bg-gray-200 rounded opacity-70"></div>
                                    <div className="w-8 h-5 bg-gray-200 rounded opacity-70"></div>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </label>
                                <div className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-100">
                                    <CardCvcElement options={elementOptions} />
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