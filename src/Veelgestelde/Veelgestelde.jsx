import { useState } from "react";
import icon from "../assets/Vector (2).png";
import { RiArrowDropDownLine } from "react-icons/ri";

const Veelgestelde = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "Hoe werkt maatwerk voor digitale oplossingen?",
      answer:
        "Onze maatwerkdiensten beginnen met een gesprek waarin we uw doelen en behoeften bespreken. Vervolgens creëren we een strategie en ontwerp dat volledig is afgestemd op uw wensen. Ons team ontwikkelt, implementeert en optimaliseert de oplossing om te zorgen dat deze naadloos aansluit bij uw bedrijfsdoelstellingen.",
    },
    {
      question: "Welke diensten kunnen worden aangepast aan mijn specifieke behoeften?",
      answer: (
        <>
          <h2>Bijna al onze diensten zijn aanpasbaar, waaronder:</h2>
          <ul>
            <li>• Websites en webapps</li>
            <li>• Mobiele applicaties</li>
            <li>• Marketingstrategieën</li>
            <li>• Branding en visueel ontwerp</li>
            <li>• Hosting en onderhoud</li>
          </ul>
        </>
      ),
    },
    {
      question: "Hoe zorgen jullie voor de kwaliteit van jullie diensten?",
      answer:
        "Wij volgen een gestructureerde aanpak waarin elk project verschillende kwaliteitscontroles doorloopt. Van het ontwerp tot de implementatie, elk aspect wordt zorgvuldig getest en afgestemd om aan de hoogste normen te voldoen.",
    },
    {
      question: "Hoe kan ik mijn project volgen?",
      answer:
        "Tijdens het project houden we u op de hoogte via regelmatige updates. U krijgt toegang tot een dedicated projectmanager die uw vragen beantwoordt en u informeert over de voortgang.",
    },
    {
      question: "Hoe kan ik met jullie contact opnemen?",
      answer: (
        <>
          <h2>Heeft u een specifieke vraag of wilt u een vrijblijvend gesprek? U kunt ons bereiken via:</h2>
          <ul>
            <li>• E-mail: info@younitech.nl</li>
            <li>• Telefoon: +31 (0)20 123 4567</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col md:px-36 md:flex-row gap-6 p-6 md:py-16">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <button className="bg-[#B479d9] rounded-full text-[#FFFFFF] font-bold py-2 px-4 mb-4">
          Support
        </button>
        <h1 className="text-2xl font-bold mb-2">Veelgestelde Vragen</h1>
        <p className="mb-4">
          Heeft u een vraag over onze diensten of processen? Hieronder vindt u
          antwoorden op veelgestelde vragen. Staat uw vraag er niet bij? Neem
          gerust contact met ons op.
        </p>
        <div className="flex items-center gap-4 mb-4">
          <img src={icon} alt="Icon" className="w-6 h-6" />
          <h2 className="text-lg font-semibold">Heeft u vragen?</h2>
        </div>
        <h2 className="text-blue-600 font-semibold">info@younitech.nl</h2>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2">
        {questions.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleContent(index)}
              className={`flex justify-between items-center w-full text-left px-6 py-2 rounded-md shadow-md  
              ${
                activeIndex === index
                  ? "text-blue-600 bg-gray-100"
                  : "text-black "
              }`}
            >
              {item.question}
              <RiArrowDropDownLine
                className={`w-6 h-6 text-black transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeIndex === index && (
              <div className=" p-4 rounded  mt-2">
                <p className="text-sm">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Veelgestelde;
