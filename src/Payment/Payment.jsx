import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import pay from "../assets/pay.png";
import pay1 from "../assets/credit-card.png";
import pay2 from "../assets/credit-card (1).png";
import pay3 from "../assets/credit-card (2).png";
import pay4 from "../assets/credit-card (3).png";
import pay5 from "../assets/credit-card (4).png";
import pay6 from "../assets/credit-card (5).png";
import card from "../assets/card1.png";

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {
  const [formData, setFormData] = useState({
    District: "",
    Volledige: "",
    Adres: "",
    Appartement: "",
    Postcode: "",
    Stad: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const clearUrlParameters = () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const query = new URLSearchParams(window.location.search);
    const success = query.get("success");
    const canceled = query.get("canceled");
    const sessionId = query.get("session_id");

    if (success && sessionId) {
      setPaymentStatus("success");
      verifyPayment(sessionId);
      clearUrlParameters();
    } else if (canceled) {
      toast.error("Payment was canceled.");
      setPaymentStatus("canceled");
      clearUrlParameters();
    }
  }, []);

  const verifyPayment = async (sessionId) => {
    try {
      const response = await fetch(`https://stripe-pk.cloudvenus.net/api/check-payment-status/${sessionId}`);
      if (!response.ok) throw new Error("Payment verification failed");
      const data = await response.json();
      if (data.status !== "paid") throw new Error("Payment not confirmed");
    } catch (error) {
      // Silent fail
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = Object.values(formData).every((value) => value.trim());

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      toast.error("Please fill in all fields!");
      return;
    }

    // fetch('http://localhost:5000/users', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.insertedId) {
    //       console.log(data);

    //       toast.success('User Info Successfully added!');
    //       navigate("/stripePayment");
    //     }
    //   });

    setIsLoading(true);
    try {
      const productName = document.getElementById("productName")?.textContent || "FamiPress WordPress Theme";
      const productPriceText = document.getElementById("productPrice")?.textContent || "$75.00 USD";
      const price = parseFloat(productPriceText.match(/\$([0-9]+(\.[0-9]+)?)/)?.[1]);
      if (!price) throw new Error("Invalid price format");

      const response = await fetch("https://stripe-pk.cloudvenus.net/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productData: {
            name: productName,
            description: `Purchase of ${productName}`,
            price: Math.round(price * 100),
          },
          currency: "usd",
          userData: {
            userId: 1,
            name: formData.Volledige,
            postcode: formData.Postcode,
            city: formData.Stad,
          },
        }),
      });

      if (!response.ok) throw new Error(`Checkout failed: ${await response.text()}`);
      const session = await response.json();
      if (!session.url) throw new Error("Invalid session response");

      window.location.href = session.url;
    } catch (error) {
      toast.error(error.message || "Failed to initiate checkout");
    } finally {
      setIsLoading(false);
    }
  };

  if (paymentStatus === "success") {
    return (
      <div className="py-10 px-6 sm:px-10 md:px-16 lg:px-36">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">Thank you for your purchase. We've sent a confirmation email with your order details.</p>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 px-6 sm:px-10 md:px-16 lg:px-36 flex flex-col-reverse sm:flex-row gap-4">
      <div className="md:w-[744px]">
        <div className="md:flex grid grid-cols-3 md:gap-6 gap-4">
          {[pay, pay1, pay2, pay3, pay4, pay5, pay6].map((src, index) => (
            <img key={index} className="h-[48px] w-[86px]" src={src} alt={`Payment method ${index + 1}`} />
          ))}
        </div>
        <h2 className="text-[#1D2026] font-semibold text-xl my-6">Verzendadres</h2>
        <form onSubmit={handleSubmit}>
          <div className="md:w-[668px] flex flex-col gap-4">
            {["District", "Volledige", "Adres", "Appartement", "Postcode", "Stad"].map((name) => (
              <div key={name}>
                <label className="block text-gray-700 font-medium mb-1">{name}</label>
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={`Enter ${name}`}
                  className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row md:ml-48 mt-8 gap-4">
            <button
              type="button"
              className="px-6 py-2 flex justify-center items-center gap-2 bg-gray-200 text-gray-800 font-semibold rounded-lg"
              onClick={() => window.history.back()}
            >
              <FaArrowLeft /> Rug
            </button>
            <button
              type="submit"
              className={`px-10 py-2 font-semibold rounded-lg flex items-center gap-2 ${isFormValid ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              disabled={isLoading || !isFormValid}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                <>
                  Volgende <FaArrowRight />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="border p-4 bg-sky-50">
        <img src={card} alt="FamiPress Theme" />
        <h2 className="text-[#263238] font-semibold text-xl" id="productName">
          FamiPress - Genealogy & Family Tree WordPress theme
        </h2>
        <ul className="list-disc pl-5">
          {["One Click Demo Installation", "Responsive Design", "SEO Optimized", "Fast Performance", "Cross Browser Compatibility", "Easy Customization", "24/7 Support"].map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
        <hr className="my-6" />
        <h2 className="mb-5 text-[#263238] text-xl">Order Summary</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h2>Subtotal</h2>
            <h2>$61.97 USD</h2>
          </div>
          <div className="flex justify-between">
            <h2>Coupon Discount</h2>
            <h2>8%</h2>
          </div>
          <hr />
          <div className="flex justify-between">
            <h2>Total:</h2>
            <h2 className="text-[#263238] text-xl" id="productPrice">
              $75.00 USD
            </h2>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Payment;