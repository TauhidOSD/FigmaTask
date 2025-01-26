import img1 from "../assets/Link → blog-6.jpg.png";
import img2 from "../assets/Link → blog-6.jpg (1).png";
import img3 from "../assets/Link → blog-6.jpg (2).png";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate=useNavigate();
  return (

    <div className="bg-gray-50 py-12 px-6 lg:px-20">
      {/* Header Section */}
      <div className="text-center  mb-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Inspiratie en Inzichten
        </h1>
        <h3 className="text-lg lg:text-md    text-gray-600 leading-relaxed">
          Blijf op de hoogte van trends, tips en succesverhalen met onze
          blogselectie. Ontdek nieuwe ideeën om uw digitale strategie te
          versterken.
        </h3>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div onClick={()=>navigate("/blog")}  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img src={img1} alt="Blog 1" className="w-full h-56 object-cover" />
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full hover:bg-blue-600 transition duration-300">
                Website Design
              </button>
              <button className="bg-green-500 text-white text-sm px-4 py-1 rounded-full hover:bg-green-600 transition duration-300">
                App Dev
              </button>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              “5 manieren om uw website te laten opvallen”
            </h2>
            <p className="text-gray-600 mb-4">
              Een goed ontworpen website is meer dan een visitekaartje. Leer hoe
              u met design, snelheid en content uw conversies....
            </p>
            <button className="text-blue-500 font-semibold hover:underline">
              Lees meer
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div onClick={()=>navigate("/blog")} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img src={img2} alt="Blog 2" className="w-full h-56 object-cover" />
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full hover:bg-blue-600 transition duration-300">
                Website Design
              </button>
              <button className="bg-green-500 text-white text-sm px-4 py-1 rounded-full hover:bg-green-600 transition duration-300">
                App Dev
              </button>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              “De kracht van branding in een digitale wereld”
            </h2>
            <p className="text-gray-600 mb-4">
              In een tijdperk van constante digitale prikkels is een sterke
              merkidentiteit essentieel. Ontdek hoe u een blijvende....
            </p>
            <button className="text-blue-500 font-semibold hover:underline">
              Lees meer
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div onClick={()=>navigate("/blog")} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img src={img3} alt="Blog 3" className="w-full h-56 object-cover" />
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full hover:bg-blue-600 transition duration-300">
                Website Design
              </button>
              <button className="bg-green-500 text-white text-sm px-4 py-1 rounded-full hover:bg-green-600 transition duration-300">
                App Dev
              </button>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              “De toekomst van mobiele applicaties”
            </h2>
            <p className="text-gray-600 mb-4">
              Mobiele applicaties blijven evolueren. Welke trends mogen
              bedrijven niet missen om relevant te blijven?
            </p>
            <button className="text-blue-500 font-semibold hover:underline">
              Lees meer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
