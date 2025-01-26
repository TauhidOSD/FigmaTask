import { useState } from "react";
import img from "../assets/rafiki4.png";
import { GoChevronDown } from "react-icons/go";

const Brand = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-6 lg:px-36 py-8">
      {/* Left Section with Image */}
      <div className="w-full lg:w-1/2">
        <img src={img} alt="Branding" className="w-full rounded-lg shadow-md" />
      </div>

      {/* Right Section with Buttons */}
      <div className="w-full lg:w-1/2 space-y-6">
        {/* Button 1 */}
        <div>
          <button
            onClick={() => toggleSection("logo")}
            className="w-full bg-[#468AFF] text-white py-2 px-4 text-left rounded-md flex justify-between items-center"
          >
            Logo-ontwerp
            <GoChevronDown
              className={`transform transition-transform ${
                activeSection === "logo" ? "rotate-180" : ""
              }`}
            />
          </button>
          {activeSection === "logo" && (
            <p className="mt-2 text-gray-600">
              Een uniek logo dat de essentie van uw merk vastlegt.
            </p>
          )}
        </div>

        {/* Button 2 */}
        <div>
          <button
            onClick={() => toggleSection("visualGuidelines")}
            className="w-full bg-[#468AFF] text-white py-2 px-4 text-left rounded-md flex justify-between items-center"
          >
            Visuele Richtlijnen
            <GoChevronDown
              className={`transform transition-transform ${
                activeSection === "visualGuidelines" ? "rotate-180" : ""
              }`}
            />
          </button>
          {activeSection === "visualGuidelines" && (
            <p className="mt-2 text-gray-600">
              Uniformiteit in kleuren, lettertypes en stijl voor consistente
              branding.
            </p>
          )}
        </div>

        {/* Button 3 */}
        <div>
          <button
            onClick={() => toggleSection("printMedia")}
            className="w-full bg-[#468AFF] text-white py-2 px-4 text-left rounded-md flex justify-between items-center"
          >
            Print- en Digitale Media
            <GoChevronDown
              className={`transform transition-transform ${
                activeSection === "printMedia" ? "rotate-180" : ""
              }`}
            />
          </button>
          {activeSection === "printMedia" && (
            <p className="mt-2 text-gray-600">
              Materialen die zowel online als offline indruk maken.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Brand;
