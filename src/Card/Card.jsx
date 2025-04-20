import img1 from "../assets/Link → blog-6.jpg.png";
import img2 from "../assets/Link → blog-6.jpg (1).png";

import img4 from "../assets/Article (5).png";

import img7 from "../assets/cardImg.png";
import img8 from "../assets/cardImg1.png";
import img9 from "../assets/card9.png";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-36">
      {/* Header Section */}
      <div className="text-center  mb-10">
        <h1 className="text-3xl lg:text-[35px] font-plus-jakarta font-bold text-[#263238] mb-4">
          Inspiratie en Inzichten
        </h1>
        <h3 className="text-lg lg:text-[16px] md:px-52 font-plus-jakarta   text-[#7E7E7E] leading-relaxed">
          Blijf op de hoogte van trends, tips en succesverhalen met onze
          blogselectie. Ontdek nieuwe ideeën om uw digitale strategie te
          versterken.
        </h3>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Card 1 */}
        <div
          onClick={() => navigate("/shift")}
          className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
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
            <h2 className="text-xl font-bold font-plus-jakarta text-[18px]  text-[#263238] mb-2">
              Van Idee naar Realiteit: Klantgerichte App-ontwikkeling
            </h2>
            <p className="text-[#7E7E7E] font-plus-jakarta text-[14px] mb-4 line-clamp-3">
              Een succesvolle app begint met een slim concept, maar de echte
              uitdaging ligt in de uitvoering. Wij ontwikkelen op maat gemaakte
              applicaties die perfect aansluiten bij de wensen van onze klanten
              én hun doelgroep. Een goed ontworpen website is meer dan een
              visitekaartje. Leer hoe u met design, snelheid en content uw
              conversies....
            </p>
            <button className=" relative hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md ">
              Lees meer 
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => navigate("/finguide")}
          className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
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

            <h2 className="text-xl font-bold font-plus-jakarta text-[18px]  text-[#263238] mb-2">
              Branding in de Digitale Wereld: Bouwen aan een Sterk Merk
            </h2>
            <p className="text-[#7E7E7E] font-plus-jakarta text-[14px] mb-4 line-clamp-3">
              In een tijdperk vol digitale prikkels is een krachtige
              merkidentiteit geen luxe, maar een noodzaak. Ontdek hoe
              strategische branding jouw merk herkenbaar en onvergetelijk maakt.
            </p>
            <button className="relative hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md">
              Lees meer
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => navigate("/fluentlee")}
          className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
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
            <h2 className="text-xl font-bold font-plus-jakarta text-[18px]  text-[#263238] mb-2">
              De Toekomst van Mobiele Apps: Trends die je Niet Mag Missen
            </h2>
            <p className="text-[#7E7E7E] font-plus-jakarta text-[14px] line-clamp-3">
              Technologie verandert razendsnel. Welke ontwikkelingen zijn
              cruciaal om als bedrijf relevant te blijven? Wij delen inzichten
              en strategieën om mee te groeien met de markt.
            </p>
            <button className="relative hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md ">
              Lees meer
            </button>
          </div>
        </div>
        {/* Card 4 */}
        <div
          onClick={() => navigate("/ahooy")}
          className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img src={img4} alt="Blog 3" className="w-full h-56 object-cover" />
          <div className="p-3">
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                marketing
              </button>
            </div>
            <h2 className="text-xl font-bold font-plus-jakarta text-[18px]  text-[#263238] mb-2">
              Meer dan Alleen een App: Hoe je jouw Product naar de Markt Brengt
            </h2>
            <p className="text-[#7E7E7E] font-plus-jakarta text-[14px] mb-4 line-clamp-3">
              Een app bouwen is één ding, maar een succesvolle lancering vergt
              een doordachte marketingstrategie. Wij combineren SEO, SMMA en
              offline marketing om jouw app écht impact te laten maken.
            </p>
            <button className="relative hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md">
              Lees meer
            </button>
          </div>
        </div>
        {/* Card 5 */}
        <div
          onClick={() => navigate("/henna")}
          className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
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
            <h2 className="text-xl font-bold font-plus-jakarta text-[18px]  text-[#263238] mb-2">
              SEO: De Sleutel tot Online Succes
            </h2>
            <p className="text-[#7E7E7E] font-plus-jakarta text-[14px] mb-4 line-clamp-3">
              Zichtbaarheid in zoekmachines bepaalt of jouw bedrijf gevonden
              wordt of verdwijnt in de massa. Leer hoe effectieve SEO-technieken
              jouw online aanwezigheid versterken.
            </p>
            <button className="relative  hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md">
              Lees meer
            </button>
          </div>
        </div>
        {/* Card 6 */}
        <div
          onClick={() => navigate("/sarbuh")}
          className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
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
            <h2 className="text-xl font-bold font-plus-jakarta text-[18px]  text-[#263238] mb-2">
              Van Visie naar Realiteit: De Kunst van een Sterk Merk
            </h2>
            <p className="text-[#7E7E7E] font-plus-jakarta text-[14px] mb-4 line-clamp-3">
              Een merk is meer dan een logo; het is een visie die tot leven komt
              met de juiste strategie en experts. Internationale bedrijven die
              groot denken, moeten ook aandacht hebben voor de kleinste details
              – van een naadloze webshop tot verfijnde marketing. Succes zit in
              de perfectie van elk aspect.
            </p>
            <button className="relative hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md">
              Lees meer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
