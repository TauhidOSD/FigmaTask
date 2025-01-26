import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const Vragen = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        <div>
          <button className="bg-[#B47D9D] text-white py-2 px-4 rounded-full hover:bg-blue-600">
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
        {/* FAQ Item 1 */}
        <div className="border rounded-lg p-4 bg-[#468AFF]">
          <button
            onClick={() => toggleContent(1)}
            className="flex items-center justify-between w-full text-left text-[#FFFFFF] font-medium "
          >
            <span>Hoe lang duurt een brandingproject?</span>
            <GoChevronDown
              className={`transform transition-transform ${
                activeIndex === 1 ? "rotate-180" : ""
              }`}
            />
          </button>
          {activeIndex === 1 && (
            <div className="mt-2 text-black">
              <h2>
                Afhankelijk van de omvang kan een project gemiddeld tussen de
                2-6 weken duren.
              </h2>
            </div>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div className="border rounded-lg p-4 bg-[#468AFF]">
          <button
            onClick={() => toggleContent(2)}
            className="flex items-center justify-between w-full text-left text-[#FFFFFF] font-medium "
          >
            <span>Kunnen jullie bestaande merken herontwerpen?</span>
            <GoChevronDown
              className={`transform transition-transform ${
                activeIndex === 2 ? "rotate-180" : ""
              }`}
            />
          </button>
          {activeIndex === 2 && (
            <div className="mt-2 text-black">
              <h2>
                Ja, wij bieden rebrandingdiensten aan om uw merk nieuw leven in
                te blazen.
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vragen;
