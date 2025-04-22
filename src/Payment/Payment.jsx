import pay from "../assets/pay.png";
import pay1 from "../assets/credit-card.png";
import pay2 from "../assets/credit-card (1).png";
import pay3 from "../assets/credit-card (2).png";
import pay4 from "../assets/credit-card (3).png";
import pay5 from "../assets/credit-card (4).png";
import pay6 from "../assets/credit-card (5).png";
import card from "../assets/card1.png";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Naam: "",
    Bedrijfsnaam: "",
    BTWnummer: "",
    KvKnummer: "",
    Adres: "",
    Postcode: "",
    Stad: "",
    Factuuradres: ""
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
        <h2 > <span className="font-normal font-plus-jakarta text-[16px] text-[rgba(38,50,56,1)]}">of</span> <br /> <br /> <span className="font-semibold font-plus-jakarta text-[32px] text-[rgba(29,32,38,1)]">Verzendadres</span></h2>

        
        <form onSubmit={handleSubmit}>
          <div className="md:w-[668px] flex flex-col gap-4">

          <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px]  mb-1">
              Naam
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Voor- en achternaam"
                className="border border-gray-300 rounded-lg p-2 w-5/6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px]  mb-1">
              Bedrijfsnaam
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Bedrijfsnaam"
                className="border border-gray-300 rounded-lg p-2 w-5/6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px]  mb-1">
              BTW-nummer
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="NL123456789B01"
                className="border border-gray-300 rounded-lg p-2 w-5/6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px]  mb-1">
              KvK-nummer
              </label>
              <input
                type="number"
                name="name"
                onChange={handleChange}
                placeholder="123345678"
                className="border border-gray-300 rounded-lg p-2 w-5/6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px]  mb-1">
              Adres
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Adres"
                className="border border-gray-300 rounded-lg p-2 w-5/6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px]  mb-1">
              Land
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Nederland"
                className="border border-gray-300 rounded-lg p-2 w-5/6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px]  mb-1">
              Stad
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Amsterdam"
                className="border border-gray-300 rounded-lg p-2 w-5/6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px]  mb-1">
              postcode
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="1234AB"
                className="border border-gray-300 rounded-lg p-2 w-5/6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px]  mb-1">
              Factuuradres
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="adres"
                className="border border-gray-300 rounded-lg p-2 w-5/6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>


            {/* {["Naam", "Bedrijfsnaam", "BTW-nummer", "KvK-nummer","Adres", "Land", "Stad", "postcode","Factuuradres"].map((name) => (
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
            ))} */}
            {/* <div className="flex gap-8">
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
            </div> */}
          </div>
          {/* <div className="flex flex-col sm:flex-row md:ml-48 mt-8 gap-4">
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
          </div> */}
        </form>
      </div>



      <div className="">

      <div className="border p-4 bg-sky-50 ">
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

           <div className="flex flex-col sm:flex-row ml-5  mt-5 gap-4">
            <button type="button" className="px-4 py-2 flex justify-center items-center gap-2 bg-gray-200 text-gray-800 font-semibold rounded-lg">
              <FaArrowLeft /> Terug
            </button>
            <button
              type="submit"
              className={`px-4 py-2 font-semibold rounded-lg flex items-center gap-2 ${isFormValid ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
              disabled={!isFormValid}
            >
              Betalen 
            </button>
          </div>

      </div>

     
    </div>
  );
};

export default Payment;
