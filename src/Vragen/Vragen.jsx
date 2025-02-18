import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const Vragen = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        <div>
          <button className="bg-[rgba(180,121,217,0.15)] text-[rgba(180,121,217,1)] py-2 px-4 rounded-full font-bold text-[18px] ">
            Ondersteuning
          </button>
        </div>
        <h2 className="text-xl font-semibold">Veelgestelde Vragen</h2>
        <h3 className="text-lg text-gray-700">
          Heeft u vragen over onze brandingdiensten?
        </h3>
        <p className="text-gray-600">
          Wij staan klaar om uw vragen te beantwoorden en u te begeleiden in het
          brandingproces.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 space-y-4">


        
        
              {/* Right Section with Buttons */}
              <div className="w-full  space-y-6">
                {/* Button 1 */}
                <div>
                  <button
                    onClick={() => toggleSection("logo")}
                    className="w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-[#FFFFFF] text-[#263238] py-2 px-4 text-left rounded-md flex justify-between items-center"
                  >
                   Wat is branding precies?
                    <GoChevronDown
                      className={`transform transition-transform ${
                        activeSection === "logo" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSection === "logo" && (
                    <p className="mt-2 text-gray-600">
                      Branding is het proces van het creëren en beheren van een unieke identiteit voor je bedrijf, product of dienst. Het omvat alles, van je logo en kleuren tot je merkwaarden en de manier waarop klanten je merk ervaren. Branding gaat om het opbouwen van vertrouwen en een emotionele band met je doelgroep
                    </p>
                  )}
                </div>
        
                {/* Button 2 */}
                <div>
                  <button
                    onClick={() => toggleSection("visualGuidelines")}
                    className="w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-[#FFFFFF] text-[#263238] py-2 px-4 text-left rounded-md flex justify-between items-center"
                  >
                    Waarom is branding zo belangrijk voor mijn bedrijf?
                    <GoChevronDown
                      className={`transform transition-transform ${
                        activeSection === "visualGuidelines" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSection === "visualGuidelines" && (
                    <p className="mt-2 text-gray-600">
                     Branding helpt je bedrijf zich te onderscheiden in de markt, maakt het makkelijker om klanten aan te trekken en loyaliteit op te bouwen. Het geeft je merk een duidelijke identiteit, zorgt voor herkenbaarheid en versterkt je boodschap, wat essentieel is voor lange-termijn succes.
                    </p>
                  )}
                </div>
        
                {/* Button 3 */}
                <div>
                  <button
                    onClick={() => toggleSection("printMedia")}
                    className="w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-[#FFFFFF] text-[#263238] py-2 px-4 text-left rounded-md flex justify-between items-center"
                  >
                   Hoe begin ik met het opbouwen van mijn merk?
                    <GoChevronDown
                      className={`transform transition-transform ${
                        activeSection === "printMedia" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSection === "printMedia" && (
                    <p className="mt-2 text-gray-600">
                      Het begint met het begrijpen van wie je bent als bedrijf, wat je wilt bereiken en wie je doelgroep is. Daarna ontwikkelen we samen een merkstrategie, inclusief visuele elementen (logo, kleuren) en de boodschap die je wil uitdragen. Dit vormt de basis voor al je marketingactiviteiten
                    </p>
                  )}
                </div>

                  {/* Button 4 */}
                <div>
                  <button
                    onClick={() => toggleSection("forthToggle")}
                    className="w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-[#FFFFFF] text-[#263238] py-2 px-4 text-left rounded-md flex justify-between items-center"
                  >
                   Kan ik branding zelf doen, of moet ik een professional inschakelen?
                    <GoChevronDown
                      className={`transform transition-transform ${
                        activeSection === "forthToggle" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSection === "forthToggle" && (
                    <p className="mt-2 text-gray-600">
                      Hoewel het mogelijk is om branding zelf te doen, kan een professional je helpen om een consistente en strategische benadering te ontwikkelen. We zorgen ervoor dat je merk zich op de juiste manier presenteert, met aandacht voor alle belangrijke elementen die vaak over het hoofd worden gezien.
                    </p>
                  )}
                </div>

                {/* Button 5 */}
                <div>
                  <button
                    onClick={() => toggleSection("fifthToggle")}
                    className="w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-[#FFFFFF] text-[#263238] py-2 px-4 text-left rounded-md flex justify-between items-center"
                  >
                    Hoe lang duurt het om een merk te bouwen?
                    <GoChevronDown
                      className={`transform transition-transform ${
                        activeSection === "fifthToggle" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSection === "fifthToggle" && (
                    <p className="mt-2 text-gray-600">
                      Het proces van branding is continu en kan variëren afhankelijk van je doelen en de marktomstandigheden. Een solide merkstrategie kan binnen enkele maanden worden ontwikkeld, maar het bouwen van merkherkenning en -loyaliteit is een doorlopend proces dat vaak jaren duurt. Het is belangrijk om consistent te blijven in je branding en merkcommunicatie
                    </p>
                  )}
                </div>
              </div>
      </div>
    </div>
  );
};

export default Vragen;
