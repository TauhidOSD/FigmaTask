import img from "../assets/rafiki1.png"
const Overons = () => {
  return (
    <div className="md:px-36 px-8 py-12 bg-gray-50">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Wat wij doen
          </h1>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-lg text-gray-600 leading-relaxed">
            Bij Younitech brengen we bedrijven verder met innovatieve, op maat
            gemaakte digitale oplossingen. Of het nu gaat om het ontwerpen van
            dynamische websites, het bouwen van krachtige applicaties, of het
            ontwikkelen van strategische marketingcampagnes, wij zorgen ervoor
            dat technologie voor u werkt.
          </h2>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Wij helpen bedrijven om:
            </h2>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Groter bereik en impact te creëren.</li>
              <li>
                Efficiëntie te verbeteren met slimme technologische oplossingen.
              </li>
              <li>
                Klantbeleving te optimaliseren en merkloyaliteit te versterken.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Section  */}

      <div className="bg-[#F8F8F8] my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="p-6 text-start ">
          <h1 className="text-4xl font-bold text-[#468AFF]">$36M</h1>
          <p className="mt-2 text-lg ">aan afgeronde projecten wereldwijd.</p>
        </div>
        <div className="p-6 text-start">
          <h1 className="text-4xl font-bold text-[#468AFF]">19M+</h1>
          <p className="mt-2 text-lg">
            klanten geholpen met betrouwbare en schaalbare oplossingen.
          </p>
        </div>
        <div className="p-6  text-start">
          <h1 className="text-4xl font-bold text-[#468AFF]">$48M+</h1>
          <p className="mt-2 text-lg">
            aan omzetgroei gerealiseerd voor onze partners.
          </p>
        </div>
        <div className="p-6 text-start ">
          <h1 className="text-4xl font-bold text-[#468AFF]">1056</h1>
          <p className="mt-2 text-lg">
            succesvolle projecten afgerond in Noord-Amerika en Europa.
          </p>
        </div>
      </div>

      {/* Third Section  */}

      <div className="flex flex-col lg:flex-row items-center my-16 lg:gap-12">
  {/* Left Section */}
  <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
    <h1 className="text-3xl font-bold text-blue-600">Onze Missie</h1>
    <h2 className="text-2xl font-semibold text-gray-800">
      “Uw succes is onze missie.”
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed">
      Bij Younitech geloven we dat technologie meer is dan een tool; het is een
      katalysator voor groei, efficiëntie en innovatie. Ons doel is om bedrijven
      uit te rusten met de digitale middelen die ze nodig hebben om zich te
      onderscheiden in een steeds veranderende markt.
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-3">
      <li>Wij luisteren naar uw behoeften en vertalen uw visie naar praktische oplossingen.</li>
      <li>Wij bouwen strategieën die zorgen voor duurzame resultaten en groei.</li>
      <li>Wij benutten de kracht van technologie om bedrijven naar een hoger niveau te tillen.</li>
    </ul>
  </div>

  {/* Right Section */}
  <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
    <img
      src={img}
      alt="Onze Missie"
      className="max-w-full lg:max-w-[90%] rounded-xl shadow-lg"
    />
  </div>
</div>

    </div>
  );
};

export default Overons;
