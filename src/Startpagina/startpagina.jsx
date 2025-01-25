import img from "../assets/rafiki3.png";
import icon from "../assets/Heading 6 (1).png";

const Startpagina = () => {
  return (
    <div className=" py-8 flex flex-col md:flex-row gap-8 p-6 md:px-36">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-start gap-4">
        <img src={img} alt="Illustration" className="w-full h- rounded-lg" />
        <h2 className="text-2xl font-bold text-gray-800">
          Kies een plan en begin meteen
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Het afdrukken van organisatiemotto's. Hoewel het internet de controle
          over veel aspecten van afdrukken kan overnemen, zijn sommige dingen
          nog steeds gewenst op papier.
        </p>
      </div>

      {/* Right Section (Cards) */}
      <div className="md:w-1/2 grid gap-6">
        {/* First Card */}
        <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <img src={icon} alt="Icon" className="w-8 h-8" />
              <h2 className="text-lg font-semibold text-gray-800">Starter</h2>
            </div>
            <h2 className="text-lg font-bold text-gray-800">$37 <span className="text-[#7E7E7E] text-sm">/ month</span></h2>
          </div>
          <p className="text-gray-600 ">
            Duis vestibulum, massa sit amet bibendum ultrices, mauris lacus
            varius nunc, dapibus condimentum.
          </p>
        </div>

        {/* Second Card */}
        <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <img src={icon} alt="Icon" className="w-8 h-8" />
              <h2 className="text-lg font-semibold text-gray-800">Professional</h2>
            </div>
            <h2 className="text-lg font-bold text-gray-800">$67<span className="text-[#7E7E7E] text-sm">/ month</span></h2>
          </div>
          <p className="text-gray-600">
            Duis vestibulum, massa sit amet bibendum ultrices, mauris lacus
            varius nunc, dapibus condimentum.
          </p>
        </div>

        {/* Third Card */}
        <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <img src={icon} alt="Icon" className="w-8 h-8" />
              <h2 className="text-lg font-semibold text-gray-800">Enterprise</h2>
            </div>
            <h2 className="text-lg font-bold text-gray-800">$97<span className="text-[#7E7E7E] text-sm">/ month</span></h2>
          </div>
          <p className="text-gray-600">
            Duis vestibulum, massa sit amet bibendum ultrices, mauris lacus
            varius nunc, dapibus condimentum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Startpagina;
