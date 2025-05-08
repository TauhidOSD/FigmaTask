import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import pay2 from "../assets/credit-card (1).png";
import pay3 from "../assets/credit-card (2).png";
import pay4 from "../assets/credit-card (3).png";
import pay5 from "../assets/credit-card (4).png";
import pay6 from "../assets/credit-card (5).png";
import pay1 from "../assets/credit-card.png";
import pay from "../assets/pay.png";
//import card from "../assets/card1.png";

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [card, setCard] = useState(location.state || null);

  

  // const [isLoading, setIsLoading] = useState(false);
  // const [paymentStatus, setPaymentStatus] = useState(null);

  // const clearUrlParameters = () => {
  //   window.history.replaceState({}, document.title, window.location.pathname);
  // };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   const query = new URLSearchParams(window.location.search);
  //   const success = query.get("success");
  //   const canceled = query.get("canceled");
  //   const sessionId = query.get("session_id");

  //   if (success && sessionId) {
  //     setPaymentStatus("success");
  //     verifyPayment(sessionId);
  //     clearUrlParameters();
  //   } else if (canceled) {
  //     toast.error("Payment was canceled.");
  //     setPaymentStatus("canceled");
  //     clearUrlParameters();
  //   }
  // }, []);

  // Fallback fetch if state is missing (e.g., page refresh)
  useEffect(() => {
    if (!card) {
      fetch("/FakeData/data.json")
        .then((res) => res.json())
        .then((data) => {
          const found = data.find((item) => item.id === parseInt(id));
          setCard(found);
        })
        .catch((err) => console.error("Failed to load card details:", err));
    }
  }, [card, id]);

  if (!card) return <div className="p-8 text-center">Loading...</div>;

  const { title, description, image, list, order_summary, inputMessage } = card;

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("paymentform");

    const name = form.name.value;
    const bedrijfsnaam = form.bedrijfsnaam.value;
    const btwNummer = form.btwNummer.value;
    const kvkNummer = form.kvkNummer.value;
    const adres = form.adres.value;
    const land = form.land.value;
    const stad = form.stad.value;
    const postcode = form.postcode.value;
    const factuuradres = form.factuuradres.value;

    const formData = {
      name,
      bedrijfsnaam,
      btwNummer,
      kvkNummer,
      adres,
      land,
      stad,
      postcode,
      factuuradres,
    };
    console.log(formData);

     fetch(
            "https://stripe-pk.cloudvenus.net/api/create-checkout-session",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                productData: {
                  name: title,
                  description: `Purchase of ${title}`,
                  price: Math.round(price * 100),
                },
                currency: "eur",
                userData: {
                  userId: 1,
                  name: formData.Volledige,
                  postcode: formData.Postcode,
                  city: formData.Stad,
                },
              }),
            }
          );
  };



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


  //   setIsLoading(true);
  //   try {
  //     const productName =
  //       document.getElementById("productName")?.textContent ||
  //       "FamiPress WordPress Theme";
  //     const productPriceText =
  //       document.getElementById("productPrice")?.textContent || "$75.00 USD";
  //     // const price = parseFloat(productPriceText.match(/\$([0-9]+(\.[0-9]+)?)/)?.[1]);
  //     const price = parseFloat(
  //       productPriceText.match(/€([0-9]+(\.[0-9]+)?)/)?.[1]
  //     );
  //     if (!price) throw new Error("Invalid price format");
  //     console.log(price);

  //     const response = await fetch(
  //       "https://stripe-pk.cloudvenus.net/api/create-checkout-session",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           productData: {
  //             name: productName,
  //             description: `Purchase of ${productName}`,
  //             price: Math.round(price * 100),
  //           },
  //           currency: "eur",
  //           userData: {
  //             userId: 1,
  //             name: formData.Volledige,
  //             postcode: formData.Postcode,
  //             city: formData.Stad,
  //           },
  //         }),
  //       }
  //     );

  //     if (!response.ok)
  //       throw new Error(`Checkout failed: ${await response.text()}`);
  //     const session = await response.json();
  //     if (!session.url) throw new Error("Invalid session response");

  //     window.location.href = session.url;
  //   } catch (error) {
  //     toast.error(error.message || "Failed to initiate checkout");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // if (paymentStatus === "success") {
  //   return (
  //     <div className="py-10 px-6 sm:px-10 md:px-16 lg:px-36">
  //       <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
  //         <div className="text-center">
  //           <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="h-8 w-8 text-green-600"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M5 13l4 4L19 7"
  //               />
  //             </svg>
  //           </div>
  //           <h2 className="text-2xl font-bold text-gray-800 mb-2">
  //             Payment Successful!
  //           </h2>
  //           <p className="text-gray-600 mb-6">
  //             Thank you for your purchase. We've sent a confirmation email with
  //             your order details.
  //           </p>
  //           <button
  //             onClick={() => (window.location.href = "/")}
  //             className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
  //           >
  //             Return to Home
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="py-10 px-6 sm:px-10 md:px-16 lg:px-36 flex flex-col-reverse sm:flex-row gap-4">
      <div className="md:w-[744px]">
        <div className="md:flex grid grid-cols-3 md:gap-6 gap-4">
          {[pay, pay1, pay2, pay3, pay4, pay5, pay6].map((src, index) => (
            <img
              key={index}
              className="h-[48px] w-[86px]"
              src={src}
              alt={`Payment method ${index + 1}`}
            />
          ))}
        </div>
        <h2 className="text-[#1D2026] font-semibold text-xl my-6">
          Verzendadres
          <br /> <br />
          <span className="">of </span>
        </h2>

        <form id="paymentform">
          <div className="md:w-[668px] flex flex-col gap-4">
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Naam
              </label>
              <input
                type="text"
                name="name"
                placeholder="Voor- en achternaam"
                className="border border-gray-300 rounded-lg p-2 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Bedrijfsnaam
              </label>
              <input
                type="text"
                required
                name="bedrijfsnaam"
                placeholder="Bedrijfsnaam"
                className="border border-gray-300 rounded-lg p-2 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                BTW-nummer
              </label>
              <input
                type="text"
                required
                name="btwNummer"
                placeholder="NL123456789B01"
                className="border border-gray-300 rounded-lg p-2 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                KvK-nummer
              </label>
              <input
                type="text"
                required
                name="kvkNummer"
                placeholder="123345678"
                className="border border-gray-300 rounded-lg p-2 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Adres
              </label>
              <input
                type="text"
                required
                name="adres"
                placeholder="Adres"
                className="border border-gray-300 rounded-lg p-2 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Land
              </label>
              <input
                type="text"
                required
                name="land"
                placeholder="Nederland"
                className="border border-gray-300 rounded-lg p-2 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Stad
              </label>
              <input
                type="text"
                required
                name="stad"
                placeholder="Amsterdam"
                className="border border-gray-300 rounded-lg p-2 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                postcode
              </label>
              <input
                type="text"
                required
                name="postcode"
                placeholder="1234AB"
                className="border border-gray-300 rounded-lg p-2 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Factuuradres
              </label>
              <input
                type="text"
                required
                name="factuuradres"
                placeholder="Adres"
                className="border border-gray-300 rounded-lg p-2 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* <div className="flex flex-col sm:flex-row md:ml-48 mt-8 gap-4">
            <button
              type="button"
              className="px-6 py-2 flex justify-center items-center gap-2 bg-gray-200 text-gray-800 font-semibold rounded-lg"
              onClick={() => window.history.back()}
            >
              <FaArrowLeft /> Rug
            </button>
            <button
              type="submit"
              className={`px-10 py-2 font-semibold rounded-lg flex items-center gap-2 ${
                isFormValid
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={isLoading || !isFormValid}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                <>
                  Volgende <FaArrowRight />
                </>
              )}
            </button>
          </div> */}

        </form>
      </div>

      

      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-72 object-cover rounded-md"
        />

        <h2 className="text-2xl font-bold mt-4">{card.title}</h2>

        <div className="mt-6 bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-lg mb-2">Order Summary</h3>

          <div className=" flex justify-end ">
          <div className="">
          <p className="text-xl font-bold">{order_summary.monthly_price}</p>
          <p>For {order_summary.duration}, tax included</p>
          </div>
          </div>
          <hr /> <hr />

          <div className="mt-2">
            <div className=" flex justify-between items-center mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={order_summary.one_time_payment}
                readOnly
                className="mr-2"
              />
              One time payment
            </label>
            <div className="">
            <p className="mt-2">{order_summary.tax.monthly_amount}</p>
            </div>
            </div>
          </div>

          <hr /> <hr />

         <div className="flex justify-between items-center mb-4">
          <p>Tax</p>
          <p>{order_summary.tax.rate}</p>
         </div>
         <hr /> <hr />

           <div className="flex justify-between items-center mb-4">
           <p>Total </p>
           <p className="text-xl font-bold mt-4">{order_summary.total}</p>
           </div>
        </div>
        <hr /> <hr />
    

        <div className="flex gap-8 items-center mt-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            ← Terug
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500"
          >
            Betalen
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Payment;
