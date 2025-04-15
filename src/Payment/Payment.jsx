import pay from "../assets/pay.png";
import pay1 from "../assets/credit-card.png";
import pay2 from "../assets/credit-card (1).png";
import pay3 from "../assets/credit-card (2).png";
import pay4 from "../assets/credit-card (3).png";
import pay5 from "../assets/credit-card (4).png";
import pay6 from "../assets/credit-card (5).png";
import card from "../assets/card1.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    District: "",
    Volledige: "",
    Adres: "",
    Appartement: "",
    Postcode: "",
    Stad: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!isFormValid) {
      toast.error("Please fill in all fields!");
      return;
    }

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        console.log(data);
        
        toast.success('User Info Successfully added!');
        navigate("/stripePayment");
      }
    });
  };

  return (
    <div className="py-10 px-6 sm:px-10 md:px-16 lg:px-36 flex flex-col-reverse sm:flex-row gap-4">
      <div className="md:w-[744px]">
        <div className="md:flex grid grid-cols-3 md:gap-6 gap-4">
          {[pay, pay1, pay2, pay3, pay4, pay5, pay6].map((src, index) => (
            <img key={index} className="h-[48px] w-[86px]" src={src} alt="" />
          ))}
        </div>
        <h2 className="text-[#1D2026] font-semibold text-xl my-6">Verzendadres</h2>
        <form onSubmit={handleSubmit}>
          <div className="md:w-[668px] flex flex-col gap-4">
            {["District", "Volledige", "Adres", "Appartement"].map((name) => (
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
            <div className="flex gap-8">
              {["Postcode", "Stad"].map((name) => (
                <div key={name} className="w-[320px]">
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
          </div>
          <div className="flex flex-col sm:flex-row md:ml-48 mt-8 gap-4">
            <button type="button" className="px-6 py-2 flex justify-center items-center gap-2 bg-gray-200 text-gray-800 font-semibold rounded-lg">
              <FaArrowLeft /> Rug
            </button>
            <button
              type="submit"
              className={`px-10 py-2 font-semibold rounded-lg flex items-center gap-2 ${isFormValid ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
              disabled={!isFormValid}
            >
              Volgende <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
      <div className="border p-4 bg-sky-50">
        <img src={card} alt="" />
        <h2 className="text-[#263238] font-semibold text-xl">FamiPress - Genealogy & Family Tree WordPress theme</h2>
        <ul className="list-disc pl-5">
          {["One Click Demo Installation", "Responsive Design", "SEO Optimized", "Fast Performance", "Cross Browser Compatibility", "Easy Customization", "24/7 Support"].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <hr className="py-6" />
        <h2 className="mb-5 text-[#263238] text-xl">Order Summary</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between"><h2>Subtotal</h2><h2>$61.97 USD</h2></div>
          <div className="flex justify-between"><h2>Coupon Discount</h2><h2>8%</h2></div>
          <hr />
          <div className="flex justify-between"><h2>Total:</h2><h2 className="text-[#263238] text-xl">$75.00 USD</h2></div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
