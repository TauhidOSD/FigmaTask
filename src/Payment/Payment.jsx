import pay from "../assets/pay.png";
import pay1 from "../assets/credit-card.png";
import pay2 from "../assets/credit-card (1).png";
import pay3 from "../assets/credit-card (2).png";
import pay4 from "../assets/credit-card (3).png";
import pay5 from "../assets/credit-card (4).png";
import pay6 from "../assets/credit-card (5).png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Payment = () => {
  return (
    <div className="py-10 px-6 sm:px-10 md:px-16 lg:px-36">
      {/* left */}
      <div className="w-[744px]">
        <div className="flex  gap-6 ">
          {/* payment img */}
          <div>
            <img className="h-[48px] w-[86px]" src={pay} alt="" />
          </div>
          <div>
            <img className="h-[48px] w-[86px]" src={pay1} alt="" />
          </div>
          <div>
            <img className="h-[48px] w-[86px]" src={pay2} alt="" />
          </div>
          <div>
            <img className="h-[48px] w-[86px]" src={pay3} alt="" />
          </div>
          <div>
            <img className="h-[48px] w-[86px]" src={pay4} alt="" />
          </div>
          <div>
            <img className="h-[48px] w-[86px]" src={pay5} alt="" />
          </div>
          <div>
            <img className="h-[48px] w-[86px]" src={pay6} alt="" />
          </div>
        </div>
        <div>
          <h2>of</h2>
          <h2>
            <hr />
          </h2>
        </div>
        <h2 className="text-[#1D2026] font-plus-jakarta font-semibold text-xl my-6">
          Verzendadres
        </h2>
        <div className="w-[668px] flex flex-col gap-4 ">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              District
            </label>
            <input
              type="text"
              placeholder="Selecteer land"
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Volledige naam
            </label>
            <input
              type="text"
              placeholder="Voer de volledige naam in"
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Adres
            </label>
            <input
              type="text"
              placeholder="Namen"
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Appartement
            </label>
            <input
              type="text"
              placeholder="Optioneel"
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-8">
            <div className="w-[320px]">
              <label className="block text-gray-700 font-medium mb-1">
                Postcode
              </label>
              <input
                type="email"
                placeholder="E -mail"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-[320px]">
              <label className="block text-gray-700 font-medium mb-1">
                Stad
              </label>
              <input
                type="email"
                placeholder="E -mail"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        {/* Submit, Next, and Back Buttons */}
        <div className="flex flex-col sm:flex-row md:ml-48 mt-8 gap-4">
          <button
            type="button"
            // onClick={() => navigate(-1)} // Back button: go to the previous page
            className="flex items-center gap-2 px-6 py-2 bg-[#F5F5F5] text-[#263238] font-semibold rounded-lg focus:outline-none hover:bg-gray-200"
          >
            <FaArrowLeft /> {/* Left arrow icon */}
            Rug
          </button>

          <button
            type="button"
            // onClick={() => navigate("/payment")} // Next button: navigate to the payment route
            className="flex items-center gap-2 px-10 py-2 bg-[#468AFF] text-white font-semibold rounded-lg focus:outline-none hover:bg-blue-500"
          >
            Volgende
            <FaArrowRight /> {/* Right arrow icon */}
          </button>
        </div>
      </div>
      {/* right */}
      <div></div>
    </div>
  );
};

export default Payment;

// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Payment = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();

//   const validateCardDetails = (cardDetails) => {
//     const validCardNumber = "4242 4242 4242 4242";
//     const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
//     const cvcRegex = /^\d{3}$/; // 3 digits
//     const zipRegex = /^\d{5,}$/; // At least 5 digits

//     const isCardNumberValid = cardDetails.number === validCardNumber;
//     const isExpiryValid = expiryRegex.test(cardDetails.expiry) && !isExpired(cardDetails.expiry);
//     const isCvcValid = cvcRegex.test(cardDetails.cvc);
//     const isZipValid = zipRegex.test(cardDetails.zip);

//     return isCardNumberValid && isExpiryValid && isCvcValid && isZipValid;
//   };

//   const isExpired = (expiry) => {
//     const [month, year] = expiry.split("/").map(Number);
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear() % 100; // Last 2 digits of year
//     const currentMonth = currentDate.getMonth() + 1; // Month is 0-based

//     return year < currentYear || (year === currentYear && month < currentMonth);
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       toast.error("Stripe is not loaded properly!");
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (!card) {
//       toast.error("Card details are missing!");
//       return;
//     }

//     // Simulated user input (Replace this with real user input collection)
//     const userCardInput = {
//       number: "4242 4242 4242 4242",
//       expiry: "12/34",
//       cvc: "123",
//       zip: "12345",
//     };

//     const isValid = validateCardDetails(userCardInput);

//     if (isValid) {
//       toast.success("Payment successful! 🎉");
//     } else {
//       toast.error("Please provide valid card details!");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 md:my-8 p-8 bg-white shadow-lg rounded-2xl">
//       <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//         Complete Your Payment
//       </h1>
//       <p className="text-center text-gray-500 mb-8">
//         Enter your card details below to complete the payment securely.
//       </p>
//       <form onSubmit={handlePayment} className="space-y-6">
//         <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
//           <CardElement
//             options={{
//               style: {
//                 base: {
//                   fontSize: "16px",
//                   color: "#424770",
//                   "::placeholder": {
//                     color: "#aab7c4",
//                   },
//                 },
//                 invalid: {
//                   color: "#9e2146",
//                 },
//               },
//             }}
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={!stripe}
//           className="w-full py-3 px-5 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition disabled:opacity-50"
//         >
//           Pay Now
//         </button>
//       </form>
//       <button
//         onClick={() => navigate(-1)}
//         className="mt-6 w-full py-3 px-5 bg-gray-200 text-gray-700 font-medium rounded-lg shadow-md hover:bg-gray-300 transition"
//       >
//         Back
//       </button>
//       <p className="text-xs text-gray-400 text-center mt-4">
//         Powered by Stripe. Your information is securely encrypted.
//       </p>
//     </div>
//   );
// };

// export default Payment;
