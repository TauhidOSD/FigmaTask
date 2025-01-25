import icon from "../assets/Link.png";
import icon1 from "../assets/Link (1).png";
import icon2 from "../assets/Link (2).png";
import icon3 from "../assets/Link (3).png";
import Brand from "../Brand/Brand";



const Diensten = () => {
  return (
    <div>
      {/* first section */}
      <div className="p-6 text-center   space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Snel en Kwalitatief
        </h1>
        <p className="text-[#7E7E7E] leading-relaxed font-semibold px-72 text-center">
          Bij Younitech geloven we in de kracht van een sterke merkidentiteit.
          Onze brandingdiensten zijn ontworpen om uw bedrijf te laten opvallen
          in een competitieve markt. Wij bieden:
        </p>
      </div>

      {/* Card Section  */}
      <div className="grid grid-cols-1 md:px-36 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 ">
        {/* Card 1 */}
        <div className="flex flex-col  items-center text-center  p-6 space-y-4">
          <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
            <img
              src={icon}
              alt="Strategische Merkontwikkeling"
              className="w-8 h-8"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Strategische Merkontwikkeling
          </h2>
          <p className="text-sm text-gray-600">
            Creëer een merk dat de kern van uw bedrijf vertegenwoordigt.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center  p-6 space-y-4">
          <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
            <img src={icon1} alt="Grafisch Ontwerp" className="w-8 h-8" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Grafisch <br /> Ontwerp
          </h2>
          <p className="text-sm text-gray-600">
            Professioneel en creatief design dat past bij uw visie.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center  p-6 space-y-4">
          <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
            <img
              src={icon2}
              alt="Ontwikkeling van Visuele Stijl"
              className="w-8 h-8"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Ontwikkeling <br /> van Visuele Stijl
          </h2>
          <p className="text-sm text-gray-600">
            Logo’s, kleuren en typografie die uw merk versterken.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center  p-6 space-y-4">
          <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
            <img src={icon3} alt="Campagnes en Promotie" className="w-8 h-8" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Campagnes <br /> en Promotie
          </h2>
          <p className="text-sm text-gray-600">
            Consistente en impactvolle communicatie over alle kanalen.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className="p-6 text-center   space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Personaliseer uw Merk voor Online Succes
        </h1>
        <p className="text-[#7E7E7E] leading-relaxed font-semibold px-72 text-center">
          Wij bieden flexibele en creatieve oplossingen die aansluiten op uw
          specifieke behoeften, waaronder:
        </p>
      </div>
      {/* Brand Section */}
     
      <Brand></Brand>
    </div>
  );
};

export default Diensten;
