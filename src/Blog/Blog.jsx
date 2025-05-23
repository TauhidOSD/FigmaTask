
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

  useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
      
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#F5F5F5] w-full flex flex-col items-center py-16">
        <h1 className="text-xl font-bold text-gray-800">Portfolio</h1>
        <h1 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
          Home
          <img className="w-5 h-[2px]" src={das} alt="separator" />
          Portfolio
        </h1>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-36 ">
              {/* Card 1 */}
              <div
                onClick={() => navigate("/shiftguide")}
                className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/*  */}
               <div className=" md:min-h-[456px]">
               <img src={img1} alt="Blog 1" className="w-full h-56 object-cover" />
                <div className="p-3">
                  <div className="flex gap-2 mb-4">
                    <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                      Website Design
                    </button>
                    <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                      Appdevelopment
                    </button>
                  </div>
                  <h2 className="text-xl font-bold font-plus-jakarta text-[18px]  text-[#263238] mt-14  mb-2">
                    Van Idee naar Realiteit: Klantgerichte App-ontwikkeling
                  </h2>
                  <p className="text-[#7E7E7E] font-plus-jakarta text-[14px] mb-4 mt-2 line-clamp-3">
                    Een succesvolle app begint met een slim concept, maar de echte
                    uitdaging ligt in de uitvoering. Wij ontwikkelen op maat gemaakte
                    applicaties die perfect aansluiten bij de wensen van onze klanten
                    én hun doelgroep. Een goed ontworpen website is meer dan een
                    visitekaartje. Leer hoe u met design, snelheid en content uw
                    conversies....
                  </p>
                
                </div>
               </div>
                <button className="ml-3 mb-4 relative hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md ">
                    Lees meer 
                  </button>
                
              </div>
      
              {/* Card 2 */}
              <div
                onClick={() => navigate("/finguide")}
                className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/*  */}
                <div className="md:min-h-[456px]">
                <img src={img2} alt="Blog 2" className="w-full h-56 object-cover" />
                <div className="p-3 ">
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full transition duration-300">
                      Branding
                    </button>
                    <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full transition duration-300">
                      Website Design
                    </button>
                    <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full transition duration-300">
                      App Dev
                    </button>
                    <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full transition duration-300">
                      Marketing
                    </button>
                  </div>
      
                  <h2 className="text-xl font-bold font-plus-jakarta text-[18px]  text-[#263238] mt-5 mb-2">
                    Branding in de Digitale Wereld: Bouwen aan een Sterk Merk
                  </h2>
                  <p className="text-[#7E7E7E] font-plus-jakarta text-[14px] mb-4 mt-2 line-clamp-3">
                    In een tijdperk vol digitale prikkels is een krachtige
                    merkidentiteit geen luxe, maar een noodzaak. Ontdek hoe
                    strategische branding jouw merk herkenbaar en onvergetelijk maakt.
                  </p>
                  
                </div>
                </div>
                <button className=" ml-3 mb-4 relative hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md">
                    Lees meer
                  </button>
              </div>
      
              {/* Card 3 */}
              <div
                onClick={() => navigate("/fluentlee")}
                className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
               {/*  */}
               <div className="md:min-h-[456px]">
               <img src={img7} alt="Blog 3" className="w-full h-56 object-cover" />
                <div className="p-3">
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full transition duration-300">
                      Branding
                    </button>
                    <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full transition duration-300">
                      Website Design
                    </button>
                    <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full transition duration-300">
                      App Dev
                    </button>
                    <button className="bg-white text-blue-500 text-sm px-4 py-1 rounded-full transition duration-300">
                      Marketing
                    </button>
                  </div>
                  <h2 className="text-xl font-bold font-plus-jakarta text-[18px]  text-[#263238] mt-5 mb-2">
                    De Toekomst van Mobiele Apps: Trends die je Niet Mag Missen
                  </h2>
                  <p className="text-[#7E7E7E] font-plus-jakarta text-[14px] mb-4 line-clamp-3">
                    Technologie verandert razendsnel. Welke ontwikkelingen zijn
                    cruciaal om als bedrijf relevant te blijven? Wij delen inzichten
                    en strategieën om mee te groeien met de markt.
                  </p>
                  
                </div>
               </div>
                <button className="ml-3 mb-4 relative hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md ">
                    Lees meer
                  </button>
              </div>
              {/* Card 4 */}
              <div
                onClick={() => navigate("/marketingstrategie")}
                className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
               {/*  */}
               <div className="md:min-h-[456px]">
               <img src={img4} alt="Blog 3" className="w-full h-56 object-cover" />
                <div className="p-3">
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                      marketing
                    </button>
                  </div>
                  <h2 className="text-xl font-bold font-plus-jakarta text-[18px]  text-[#263238] mt-14 mb-2">
                    Meer dan Alleen een App: Hoe je jouw Product naar de Markt Brengt
                  </h2>
                  <p className="text-[#7E7E7E] font-plus-jakarta text-[14px] mb-4 line-clamp-3">
                    Een app bouwen is één ding, maar een succesvolle lancering vergt
                    een doordachte marketingstrategie. Wij combineren SEO, SMMA en
                    offline marketing om jouw app écht impact te laten maken.
                  </p>
                 
                </div>
               </div>
                <button className="ml-3 mb-4 relative hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md">
                    Lees meer
                  </button>
              </div>
              {/* Card 5 */}
              <div
                onClick={() => navigate("/henna-artist")}
                className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
               {/*  */}
               <div className="md:min-h-[456px]">
               <img src={img9} alt="Blog 3" className="w-full h-56 object-cover" />
                <div className="p-3 ">
                  <div className="flex gap-2 mb-4">
                    <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                      Webshop design
                    </button>
                    <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                      marketing
                    </button>
                  </div>
                  <h2 className="text-xl font-bold font-plus-jakarta text-[18px]  text-[#263238] mt-14 mb-2">
                    SEO: De Sleutel tot Online Succes
                  </h2>
                  <p className="text-[#7E7E7E] font-plus-jakarta text-[14px] mb-11 line-clamp-3">
                    Zichtbaarheid in zoekmachines bepaalt of jouw bedrijf gevonden
                    wordt of verdwijnt in de massa. Leer hoe effectieve SEO-technieken
                    jouw online aanwezigheid versterken.
                  </p>
                  
                </div>
               </div>
                <button className="ml-3 mb-4 relative  hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md">
                    Lees meer
                  </button>
              </div>
              {/* Card 6 */}
              <div
                onClick={() => navigate("/Van-Offline-naar-Online")}
                className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
               {/*  */}
               <div className="md:min-h-[456px]">
               <img src={img8} alt="Blog 3" className="w-full h-56 object-cover" />
                <div className="p-3">
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                      marketing
                    </button>
                    <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                      Website building
                    </button>
                    <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                      Branding
                    </button>
                  </div>
                  <h2 className="text-xl font-bold font-plus-jakarta text-[18px]  text-[#263238] mt-4 mb-2">
                    Van Visie naar Realiteit: De Kunst van een Sterk Merk
                  </h2>
                  <p className="text-[#7E7E7E] font-plus-jakarta text-[14px] mb-12 line-clamp-3">
                    Een merk is meer dan een logo; het is een visie die tot leven komt
                    met de juiste strategie en experts. Internationale bedrijven die
                    groot denken, moeten ook aandacht hebben voor de kleinste details
                    – van een naadloze webshop tot verfijnde marketing. Succes zit in
                    de perfectie van elk aspect.
                  </p>
                  
                </div>
               </div>
                <button className="ml-3 mb-4 relative hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md">
                    Lees meer
                  </button>
              </div>
            </div>
    </>
  );
};

export default Blog;
