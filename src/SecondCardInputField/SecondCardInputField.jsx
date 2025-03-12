import { FaChevronDown } from "react-icons/fa";
import { useEffect } from "react";

const SecondCardInputField = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="md:px-36 font-plus-jakarta font-semibold text-2xl text-[#1D2026]">
        {" "}
        Share Your Requirements
      </h1>

      {/* First Part */}
      <div className="md:px-36 px-6 mx-auto">
        <div className=" flex md:gap-[496px]">
          <h2 className="text-xl text-[#407BFF] font-semibold md:mt-8 mt-4 mb-4">
            Basisinformatie:
          </h2>
          <h2 className="text-xl text-[#407BFF] md:-ml-12 font-semibold mb-4 md:mt-8 mt-4  hidden sm:block ">
            Technische details:
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
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Website (indien reeds bestaan)
              </label>
              <input
                type="text"
                placeholder="Naam"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right Side Inputs */}

          <div className="flex flex-col gap-4">
            <h2 className="text-xl text-[#407BFF] font-semibold md:mb-4 md:hidden block mt-12 ">
              Technische details:
            </h2>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Heeft u al een domeinnaam en hosting?
              </label>
              <input
                type="text"
                placeholder="Ja/nee, zo ja: vul in"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Gewenste integraties
              </label>
              <input
                type="text"
                placeholder="bijv. Betalingssystemen, CRM, sociale media, nieuwsbrief"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                SEO
              </label>
              <input
                type="text"
                placeholder="bijv. Basic SEO, blogoptimalisatie, advertenties"
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
            Projectinformatie:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Side Inputs */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Type website
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Zakelijke website, e-commerce, portfolio, blog, andere"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Gewenste functies
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Contactformulier, betalingssysteem, boekingssysteem, blog, meertalige, andere"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Ontwerpvoorkeuren
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Korte beschrijving"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
                </div>
              </div>

              {/* upload image option */}
              <div className="">
                <div className=" ">
                  {/* Left Side Input */}
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
                    </div>
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
                Verzoek en vragen
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
            Request Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondCardInputField;
