import { FaChevronDown, FaUpload } from "react-icons/fa";
import das from "../assets/das.png";
import bg from "../assets/bg.jpeg";
import { useEffect } from "react";
const PrijzenBranding = () => {


  useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

  return (
    <>
      <div className="bg-[#F5F5F5] w-full flex flex-col items-center py-16">
        <h1 className="text-xl font-bold text-gray-800">
          Branding Prijsplannen
        </h1>
        <h1 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
          Home
          <img className="w-5 h-[2px]" src={das} alt="separator" />
          Prijzen
        </h1>
      </div>
      {/*Hero section p-B */}
      <div
        className="hero h-[500px] md:h-[444px] lg:h-[444px]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="px-4 md:px-8 lg:px-12">
            <h1 className="mb-4 text-3xl md:text-5xl font-bold text-[#FFFFFF] font-plus-jakarta">
              Branding
            </h1>
            <p className="mb-4 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
              Bij Younitech geloven we dat sterke branding essentieel is voor
              het succes van jouw bedrijf. Onze aanpak combineert creativiteit
              met strategie om een merkidentiteit te creëren die resoneert en
              impact maakt. Of het nu gaat om het ontwerpen van een logo, het
              definiëren van je merkverhaal of het ontwikkelen van een
              consistente visuele stijl, wij bieden op maat gemaakte oplossingen
              die jouw merk naar een hoger niveau tillen.
            </p>
            <p className="mb-2 pt-4 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
              Vul het onderstaande formulier in om een zo duidelijk mogelijk
              beeld te schetsen van jouw aanvraag.
            </p>
            <p className="mb-4 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
              Kom je er niet uit? Neem gerust contact met ons op via{" "}
              <span className="text-[#407BFF]">e-mail, telefoon </span> of de{" "}
              <a href="/Contact"><span className="text-[#407BFF]">contactpagina.</span></a>
            </p>
          </div>
        </div>
      </div>

      {/* First Part */}
      <div className="md:px-36 px-6 mx-auto">
        <div className=" flex md:gap-[496px]">
          <h2 className="text-xl text-[#407BFF] font-semibold md:mt-8 mt-4 mb-4">
            Basisinformatie:
          </h2>
          <h2 className="text-xl text-[#407BFF] md:-ml-12 font-semibold mb-4 md:mt-8 mt-4  hidden sm:block ">
            Technisch
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
          {/* Left Side Inputs */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Naam (Eerste en Aarthternaam)
              </label>
              <input
                type="text"
                placeholder="Naam"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Bedrijfsnaam (indien van toepassing)
              </label>
              <input
                type="text"
                placeholder="Naam"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  E -mailadres
                </label>
                <input
                  type="email"
                  placeholder="E -mail"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Telefoonnummer
                </label>
                <input
                  type="email"
                  placeholder="E -mail"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Right Side Inputs */}

          <div className="flex flex-col gap-4">
            <h2 className="text-xl text-[#407BFF] font-semibold md:mb-4 md:hidden block mt-12 ">
              Technisch
            </h2>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Voorkeurskleuren of theams
              </label>
              <input
                type="text"
                placeholder="Eventuele specifieke kleurenschema's of visuele thema's"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Inspiratie of concurrenten
              </label>
              <input
                type="text"
                placeholder="Voorbeelden van merken die u bewondert of concurrenten"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Eventuele specifieke merkelementen die nodig zijn
              </label>
              <input
                type="text"
                placeholder="bijv. Logo, visitekaartjes, brochures, website -ontwerp"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd part */}

      <div className="md:px-0 px-6">
        <div className="md:px-36 mx-auto">
          <h2 className="text-xl mt-8  text-[#407BFF] font-semibold mb-4">
            Informatie over brandingsproject:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Side Inputs */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Type branding
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Uitkiezen"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  De kernwaarden en missie van het merk
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Korte beschrijving"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Doelgroep
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Uitkiezen"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
                </div>
              </div>

              {/* upload image option */}
              <div className="">
                <div className="md:grid md:grid-cols-2 gap-6">
                  {/* Left Side Input */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Huidige branding (indien aanwezig)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Geef details op"
                        className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Right Side Input (Moved Up) */}
                  <div className="">
                    <label className="block text-gray-700 font-medium mt-11"></label>
                    <div className="border w-1/2 border-gray-300 rounded-lg p-3 md:w-full flex items-center justify-around cursor-pointer bg-black hover:bg-gray-800 transition">
                      <label
                        htmlFor="imageUpload"
                        className="text-white cursor-pointer"
                      >
                        Upload afbeelding
                      </label>
                      <FaUpload className="text-white text-lg" />
                      <input type="file" className="hidden" id="imageUpload" />
                    </div>
                  </div>

                  {/* Image Upload Option */}
                </div>

                <div className="my-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    Gewenste look en feel
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Uitkiezen"
                      className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Merkbericht/positionering
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Wat wil je dat je merk met je publiek communiceert?"
                      className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Inputs */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl text-[#407BFF] font-semibold mb-4">
                Begroting
              </h2>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Budgetbereik
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Naam"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Gewenste voltooiingsdatum
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Naam"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              {/* comment box */}
              <div>
                <h2 className="text-xl text-[#407BFF] font-semibold mb-4">
                  Aanvullende opmerkingen:
                </h2>
                <h2 className="block text-gray-700 font-medium mb-1">
                  Aanvullende opmerkingen:
                </h2>

                <textarea
                  placeholder="Verzoeken en vragenBio"
                  className="textarea  textarea-bordered textarea-lg w-full max-w-full"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center md:my-8 my-4 ">
          <button className="btn hover:bg-[#468AFFE6] bg-[#468AFF]  md:px-32 px-36 py-2 text-[#FFFFFF] text-lg md:text-md lg:text-xl">
          Boek een offerte
          </button>
        </div>
      </div>
    </>
  );
};

export default PrijzenBranding;
