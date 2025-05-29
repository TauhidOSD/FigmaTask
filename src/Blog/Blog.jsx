
import img1 from "../assets/Link → blog-6.jpg.png";
import img2 from "../assets/Link → blog-6.jpg (1).png";

import img4 from "../assets/Article (5).png";

import img7 from "../assets/cardImg.png";
import img8 from "../assets/cardImg1.png";
import img9 from "../assets/card9.png";
import das from "../assets/das.png"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Blog = () => {

  // useEffect(() => {
  //       window.scrollTo(0, 0); 
  //     }, []);
      
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#F5F5F5] w-full flex flex-col items-center py-16 mb-10">
        <h1 className="text-xl font-bold text-gray-800">Portfolio</h1>
        <h1 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
          Home
          <img className="w-5 h-[2px]" src={das} alt="separator" />
          Portfolio
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
  {/* Card 1 */}
  <div onClick={() => navigate("/shiftguide")} className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <img src={img1} alt="Blog 1" className="w-full h-56 object-cover" />
    <div className="flex flex-col justify-between flex-1 p-3">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="bg-white text-[#468AFF] text-sm px-4 py-1 rounded-full">Website Design</button>
          <button className="bg-white text-[#468AFF] text-sm px-4 py-1 rounded-full">Appdevelopment</button>
        </div>
        <label className="block text-xl font-bold font-plus-jakarta text-[#263238] sm:mt-4 md:mt-12 lg:mt-4 xl:mt-12 mb-2 cursor-pointer">
          Van Idee naar Realiteit: Klantgerichte App-ontwikkeling
        </label>
        <p className="text-[#7E7E7E] font-plus-jakarta text-sm mb-4 line-clamp-3">
          Een succesvolle app begint met een slim concept, maar de echte uitdaging ligt in de uitvoering. Wij ontwikkelen op maat gemaakte applicaties...
        </p>
      </div>
      <div className="mt-auto">
        <button className="hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md">
          Lees meer
        </button>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div onClick={() => navigate("/finguide")} className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <img src={img2} alt="Blog 2" className="w-full h-56 object-cover" />
    <div className="flex flex-col justify-between flex-1 p-3">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full">Branding</button>
          <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full">Website Design</button>
          <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full">App Dev</button>
          <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full">Marketing</button>
        </div>
        <label className="block text-xl font-bold font-plus-jakarta text-[#263238] sm:mt-4 md:mt-4 mb-2 cursor-pointer">
          Branding in de Digitale Wereld: Bouwen aan een Sterk Merk
        </label>
        <p className="text-[#7E7E7E] font-plus-jakarta text-sm mb-4 line-clamp-3">
          In een tijdperk vol digitale prikkels is een krachtige merkidentiteit geen luxe, maar een noodzaak...
        </p>
      </div>
      <div className="mt-auto">
        <button className="hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md">
          Lees meer
        </button>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div onClick={() => navigate("/fluentlee")} className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <img src={img7} alt="Blog 3" className="w-full h-56 object-cover" />
    <div className="flex flex-col justify-between flex-1 p-3">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full">Branding</button>
          <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full">Website Design</button>
          <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full">App Dev</button>
          <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full">Marketing</button>
        </div>
        <label className="block text-xl font-bold font-plus-jakarta text-[#263238] sm:mt-4 md:mt-4   mb-2 cursor-pointer">
          De Toekomst van Mobiele Apps: Trends die je Niet Mag Missen
        </label>
        <p className="text-[#7E7E7E] font-plus-jakarta text-sm mb-4 line-clamp-3">
          Technologie verandert razendsnel. Welke ontwikkelingen zijn cruciaal om als bedrijf relevant te blijven?
        </p>
      </div>
      <div className="mt-auto">
        <button className="hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md">
          Lees meer
        </button>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div onClick={() => navigate("/marketingstrategie")} className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <img src={img4} alt="Blog 4" className="w-full h-56 object-cover" />
    <div className="flex flex-col justify-between flex-1 p-3">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="bg-white text-[#468AFF] text-sm px-4 py-1 rounded-full">Marketing</button>
        </div>
        <label className="block text-xl font-bold font-plus-jakarta text-[#263238] sm:mt-12 md:mt-12 mb-2 cursor-pointer">
          Meer dan Alleen een App: Hoe je jouw Product naar de Markt Brengt
        </label>
        <p className="text-[#7E7E7E] font-plus-jakarta text-sm mb-4 line-clamp-3">
          Een app bouwen is één ding, maar een succesvolle lancering vergt een doordachte marketingstrategie...
        </p>
      </div>
      <div className="mt-auto">
        <button className="hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md">
          Lees meer
        </button>
      </div>
    </div>
  </div>

  {/* Card 5 */}
  <div onClick={() => navigate("/henna-artist")} className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <img src={img9} alt="Blog 5" className="w-full h-56 object-cover" />
    <div className="flex flex-col justify-between flex-1 p-3">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="bg-white text-[#468AFF] text-sm px-4 py-1 rounded-full">Webshop design</button>
          <button className="bg-white text-[#468AFF] text-sm px-4 py-1 rounded-full">Marketing</button>
        </div>
        <label className="block text-xl font-bold font-plus-jakarta text-[#263238] sm:mt-14 md:mt-14 mb-2 cursor-pointer">
          SEO: De Sleutel tot Online Succes
        </label>
        <p className="text-[#7E7E7E] font-plus-jakarta text-sm mb-4 line-clamp-3">
          Zichtbaarheid in zoekmachines bepaalt of jouw bedrijf gevonden wordt of verdwijnt in de massa...
        </p>
      </div>
      <div className="mt-auto">
        <button className="hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md">
          Lees meer
        </button>
      </div>
    </div>
  </div>

  {/* Card 6 */}
  <div onClick={() => navigate("/Van-Offline-naar-Online")} className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <img src={img8} alt="Blog 6" className="w-full h-56 object-cover" />
    <div className="flex flex-col justify-between flex-1 p-3">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="bg-white text-[#468AFF] text-sm px-4 py-1 rounded-full">Marketing</button>
          <button className="bg-white text-[#468AFF] text-sm px-4 py-1 rounded-full">Website building</button>
          <button className="bg-white text-[#468AFF] text-sm px-4 py-1 rounded-full">Branding</button>
        </div>
        <label className="block text-xl font-bold font-plus-jakarta text-[#263238] sm:mt-4 md:mt-4  xl:mt-4 mb-2 cursor-pointer">
          Van Visie naar Realiteit: De Kunst van een Sterk Merk
        </label>
        <p className="text-[#7E7E7E] font-plus-jakarta text-sm mb-4 line-clamp-3">
          Een merk is meer dan een logo; het is een visie die tot leven komt met de juiste strategie en experts...
        </p>
      </div>
      <div className="mt-auto">
        <button className="hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md">
          Lees meer
        </button>
      </div>
    </div>
  </div>
</div>



    </>
  );
};

export default Blog;
