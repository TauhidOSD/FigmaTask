import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const Vragen = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const [color, setColor] = useState("text-black");
  const [color1, setColor1] = useState("text-black");
  const [color2, setColor2] = useState("text-black");

  const onChangeColor = (setColorFunc) => {
    setColorFunc((prevColor) =>
      prevColor === "text-black" ? "text-blue-500" : "text-black"
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        <div>
          <button className="bg-[rgba(180,121,217,0.15)] text-[rgba(180,121,217,1)] py-2 px-4 rounded-full font-bold text-[18px] ">
            Ondersteuning
          </button>
        </div>
        <h2 className="text-xl font-semibold">Veelgestelde Vragen</h2>
        <h3 className="text-lg text-gray-700">
          Heeft u vragen over onze brandingdiensten?
        </h3>
        <p className="text-gray-600">
          Wij staan klaar om uw vragen te beantwoorden en u te begeleiden in het
          brandingproces.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 space-y-4">


        
        
              {/* Right Section with Buttons */}
              <div className="w-full  space-y-6">
          {/* Button 1 */}
          <div>
            <button
              onClick={() => {
                toggleSection("logo");
                onChangeColor(setColor);
              }}
              className={`w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-[#FFFFFF] text-[#263238] py-2 px-4 text-left rounded-md flex justify-between items-center ${color}`}
            >
              Hoe lang duurt het om een app te ontwikkelen?
              <GoChevronDown
                className={`transform transition-transform ${
                  activeSection === "logo" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeSection === "logo" && (
              <p className="mt-2 text-gray-600">
                Branding bouwt een sterke band en vertrouwen op met je
                doelgroep. We helpen bestaande ondernemers met een authentieke
                merkbeleving en nieuwe ondernemers met een herkenbare
                identiteit. Zo versterken we je merk voor duurzame groei.
              </p>
            )}
          </div>

          {/* Button 2 */}
          <div>
            <button
              onClick={() => {
                toggleSection("printMedian");
                onChangeColor(setColor1);
              }}
              className={`w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-[#FFFFFF] text-[#263238] py-2 px-4 text-left rounded-md flex justify-between items-center ${color1}`}
            >
              Wat voor soort apps ontwikkelen jullie?
              <GoChevronDown
                className={`transform transition-transform ${
                  activeSection === "printMedia" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeSection === "printMedian" && (
              <p className="mt-2 text-gray-600">
                Wij ontwikkelen een breed scala aan apps, van op maat gemaakte
                mobiele applicaties tot webgebaseerde platforms. We richten ons
                op het creëren van gebruiksvriendelijke apps voor verschillende
                sectoren zoals gezondheid, e-commerce, en onderwijs
              </p>
            )}
          </div>

          {/* Button 3 */}
          <div>
            <button
              onClick={() => {
                toggleSection("printMedia");
                onChangeColor(setColor2);
              }}
              className={`w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-[#FFFFFF] text-[#263238] py-2 px-4 text-left rounded-md flex justify-between items-center ${color2}`}
            >
              Bieden jullie ondersteuning na de lancering?
              <GoChevronDown
                className={`transform transition-transform ${
                  activeSection === "printMedia" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeSection === "printMedia" && (
              <p className="mt-2 text-gray-600">
                Ja, wij bieden volledige ondersteuning na de lancering. Dit
                omvat het monitoren van de prestaties van de app, het oplossen
                van eventuele technische problemen, en het aanbieden van updates
                en onderhoud om ervoor te zorgen dat de app altijd optimaal
                blijft functioneren.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vragen;
