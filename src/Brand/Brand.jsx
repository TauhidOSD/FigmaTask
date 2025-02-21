import { useState } from "react";
import img from "../assets/rafiki4.png";
import { GoChevronDown } from "react-icons/go";

const Brand = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const questions = [
    {
      id: "logo",
      question: "Hoe lang duurt het om een app te ontwikkelen?",
      answer:
        "Branding bouwt een sterke band en vertrouwen op met je doelgroep. We helpen bestaande ondernemers met een authentieke merkbeleving en nieuwe ondernemers met een herkenbare identiteit. Zo versterken we je merk voor duurzame groei.",
    },
    {
      id: "apps",
      question: "Wat voor soort apps ontwikkelen jullie?",
      answer:
        "Wij ontwikkelen een breed scala aan apps, van op maat gemaakte mobiele applicaties tot webgebaseerde platforms. We richten ons op het creëren van gebruiksvriendelijke apps voor verschillende sectoren zoals gezondheid, e-commerce en onderwijs.",
    },
    {
      id: "support",
      question: "Bieden jullie ondersteuning na de lancering?",
      answer:
        "Ja, wij bieden volledige ondersteuning na de lancering. Dit omvat het monitoren van de prestaties van de app, het oplossen van eventuele technische problemen, en het aanbieden van updates en onderhoud om ervoor te zorgen dat de app altijd optimaal blijft functioneren.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-6 lg:px-36 py-8">
      {/* Left Section with Image */}
      <div className="w-full lg:w-1/2">
        <img src={img} alt="Branding" className="w-full rounded-lg shadow-md" />
      </div>

      {/* Right Section with Questions */}
      <div className="w-full lg:w-1/2 space-y-6">
        {questions.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => toggleSection(item.id)}
              className={`w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-[#FFFFFF] text-[#263238] py-2 px-4 text-left rounded-md flex justify-between items-center ${
                activeSection === item.id ? "text-blue-500" : "text-black"
              }`}
            >
              {item.question}
              <GoChevronDown
                className={`transform transition-transform ${
                  activeSection === item.id ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeSection === item.id && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
