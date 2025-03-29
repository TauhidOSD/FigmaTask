import pay from "../assets/pay.png";
import pay1 from "../assets/credit-card.png";
import pay2 from "../assets/credit-card (1).png";
import pay3 from "../assets/credit-card (2).png";
import pay4 from "../assets/credit-card (3).png";
import pay5 from "../assets/credit-card (4).png";
import pay6 from "../assets/credit-card (5).png";
import card from "../assets/card1.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputField = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const user = {
      District: formData.get("District"),
      Volledige: formData.get("Volledige"),
      Adres: formData.get("Adres"),
      Appartement: formData.get("Appartement"),
      Postcode: formData.get("Postcode"),
      Stad: formData.get("Stad"),
    };

    console.log(user);

    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      if(data.insertedId){
        toast.success('User Info Successfully added!')
        
       
      }
      
    })

  };

  return (
    <div className="py-10 px-6 sm:px-10 md:px-16 lg:px-36 flex flex-col-reverse sm:flex-row gap-4">
      {/* left */}
      <div className="md:w-[744px]">
        <div className="md:flex grid grid-cols-3 md:gap-6 gap-4">
          {[pay, pay1, pay2, pay3, pay4, pay5, pay6].map((src, index) => (
            <img key={index} className="h-[48px] w-[86px]" src={src} alt="" />
          ))}
        </div>
        <div className="md:my-6 my-2">
          <h2>of</h2>
          <hr />
        </div>
        <h2 className="text-[#1D2026] font-plus-jakarta font-semibold text-xl my-6">Verzendadres</h2>
        <form onSubmit={handleInputField}>
          <div className="md:w-[668px] flex flex-col gap-4">
            {[
              { name: "District", placeholder: "Selecteer land" },
              { name: "Volledige", placeholder: "Voer de volledige naam in" },
              { name: "Adres", placeholder: "Namen" },
              { name: "Appartement", placeholder: "Optioneel" },
            ].map(({ name, placeholder }) => (
              <div key={name}>
                <label className="block text-gray-700 font-medium mb-1">{name}</label>
                <input
                  type="text"
                  name={name}
                  placeholder={placeholder}
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
            <div className="flex gap-8">
              {["Postcode", "Stad"].map((name) => (
                <div key={name} className="w-[320px]">
                  <label className="block text-gray-700 font-medium mb-1">{name}</label>
                  <input
                    type="text"
                    name={name}
                    placeholder="E-mail"
                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:ml-48 mt-8 gap-4">
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-2 bg-[#F5F5F5] text-[#263238] font-semibold rounded-lg focus:outline-none hover:bg-gray-200"
            >
              <FaArrowLeft /> Rug
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-10 py-2 bg-[#468AFF] text-white font-semibold rounded-lg focus:outline-none hover:bg-blue-500"
            >
              Volgende <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
      {/* right */}
      <div className="border">
        <div className="bg-sky-50 p-4">
          <img src={card} alt="" />
          <h2 className="text-[#263238] font-plus-jakarta font-semibold text-xl">
            FamiPress - Genealogy & Family Tree WordPress theme
          </h2>
          <ul className="list-disc pl-5">
            {["One Click Demo Installation", "Responsive Design", "SEO Optimized", "Fast Performance", "Cross Browser Compatibility", "Easy Customization", "24/7 Support"].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <hr className="py-6" />
        <h2 className="mb-5 text-[#263238] font-plus-jakarta text-xl px-4">Order Summery</h2>
        <div className="flex flex-col gap-4 px-4">
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
            <h2 className="text-[#263238] font-plus-jakarta text-xl">$75.00 USD</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;




