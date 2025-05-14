import { useRef, useState } from "react";
import das from "../assets/das.png";
import img1 from "../assets/Group 1000005744.png";
import img from "../assets/rafiki6.png";
import CardsComponent from "../CardsComponent/CardsComponent";
import SecondCardInputField from "../SecondCardInputField/SecondCardInputField";
// import SecondCardInputField from "../SecondCardInputField"; // Ensure correct import

const Prijzen = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = async (cardId) => {
    setSelectedCard(cardId);

    if (cardId === 1) {
      try {
        const response = await fetch("/FakeData/data.json");
        const data = await response.json();
        setCards(data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    scrollToSection();
  };

  return (
    <>
      <div className="bg-[#F5F5F5] w-full flex flex-col items-center py-16">
        <h1 className="text-xl font-bold text-gray-800">Website Builder</h1>
        <h1 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
          Home
          <img className="w-5 h-[2px]" src={das} alt="separator" />
          Web Shop
        </h1>
      </div>

      <div className="px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800">
            Bouw je eigen website
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Standard Template */}
          <div
            onClick={() => handleCardClick(1)}
            className={`cursor-pointer bg-[#F5F5F5] shadow-md rounded-2xl p-6 flex flex-col items-center max-w-xs ${
              selectedCard === 1 ? "border-4 border-blue-500" : ""
            }`}
          >
            <img
              src={img}
              alt="Standard Template"
              className="w-full max-h-40  object-cover mb-4 rounded-t-2xl"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              Standard Template
            </h2>
            <p className="mt-2 text-start text-gray-600">
              Kies uit een brede selectie professionele templates waarmee je
              snel aan de slag kunt. Vervang eenvoudig foto’s, video’s en tekst
              om de site naar wens aan te passen. Je kunt zelf content
              aanleveren of onze hulp inschakelen. De ideale oplossing voor een
              snelle, professionele website.
            </p>
          </div>

          {/* Customized Website */}
          <div
            onClick={() => handleCardClick(2)}
            className={`cursor-pointer bg-[#F5F5F5] shadow-md rounded-2xl p-6 flex flex-col items-center max-w-xs ${
              selectedCard === 2 ? "border-4 border-blue-500" : ""
            }`}
          >
            <img
              src={img1}
              alt="Customized Website"
              className="w-full max-h-36 object-cover mb-4 rounded-t-2xl"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              Maatwerk Website
            </h2>
            <p className="mt-2 text-start text-gray-600">
              Wil je een website die perfect aansluit bij jouw merk? Wij
              ontwerpen een volledig op maat gemaakte site, afgestemd op jouw
              wensen en stijl. Of je nu een duidelijk idee hebt of ons de
              creatieve vrijheid geeft, wij zorgen voor een uniek en
              professioneel resultaat. Wij helpen je graag jouw visie tot leven
              te brengen!
            </p>
          </div>
        </div>
      </div>

      <div ref={sectionRef}>
        {/* Show CardsComponent when 1st card is clicked */}
        {selectedCard === 1 && <CardsComponent cards={cards} />}

        {/* Show SecondCardInputField when 2nd card is clicked */}
        {selectedCard === 2 && <SecondCardInputField />}
      </div>
    </>
  );
};

export default Prijzen;
