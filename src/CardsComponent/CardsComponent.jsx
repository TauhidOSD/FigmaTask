import { useEffect, useState } from "react";
import InputField from "../InputField/InputField";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

// import InputField from "./InputField"; // Import the InputField component { cards }

const CardsComponent = () => {

  // useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  // const [showInputField, setShowInputField] = useState(false);

  // const handleCardClick = () => {
  //   setShowInputField(true); // Hide cards and show InputField
  // };


  // Card show 

  const [cards, setCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const [inputValue, setInputValue] = useState("");
  const [showInputField, setShowInputField] = useState(false);

  const navigate = useNavigate();

  // ✅ FIX: Correct public path
  useEffect(() => {
    fetch("/FakeData/data.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  const handleCardClick = (id) => {
    setSelectedCardId(id);
    console.log(id);

    setShowInputField(true);
    setInputValue("");
  };

  const handleNavigate = () => {
    const selectedCard = cards.find((card) => card.id === selectedCardId);

    console.log(selectedCardId);

    if (selectedCard) {
      navigate(`/payment/${selectedCardId}`, {
        state: {
          ...selectedCard,
          inputMessage: inputValue,
        },
      });
    }
  };




//const cards= useLoaderData();




  return (
    <div className="p-8">
      {showInputField ? (
        <InputField id={selectedCardId} /> // Show InputField when a card is clicked
      ) : (
        <>
          <h1 className="text-3xl font-semibold font-plus-jakarta text-gray-800 mb-6 text-left">
          Kies een thema
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {cards.map((card) => (
    <div
      key={card.id}
      onClick={() => handleCardClick(card.id)}
      className={`flex flex-col border rounded-lg shadow-md overflow-hidden cursor-pointer ${
        selectedCardId === card.id ? "ring-2 ring-blue-400" : ""
      }`}
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-48 object-cover"
      />
      
      <div className="flex flex-col flex-grow p-4">
        <h2 className="text-lg font-semibold">{card.title}</h2>
        
        <ul className="text-sm list-disc pl-5 mt-2 text-gray-500">
          {card.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <button
          onClick={handleNavigate(card.id)}
          className="bg-[rgba(126,126,126,1)] w-full mt-auto text-white px-4 py-2 rounded-xl hover:bg-blue-600"
        >
          {card.buttonText}
        </button>
      </div>
    </div>
        ))}
      </div>


          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {cards.map(card => (
            <Link key={card.id} onClick={handleCardClick}  className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded" />
              <h2 className="text-lg font-bold mt-4">{card.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{card.description}</p>
              <ul className="list-disc ml-4 mt-2 text-sm text-gray-700">
                {card.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <button className="mt-4 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
                {card.buttonText}
              </button>
            </Link>
          ))}
    </div> 
    
    */}



    

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) =>(
              <div
                key={card?.id}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition cursor-pointer"
                onClick={handleCardClick} // Click event to show InputField
              > 
                <img
                  src={card?.image}
                  alt={card.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h2>
                <p className="text-gray-600 my-2">{card.description}</p>
                <ul className="list-disc pl-5 text-gray-700">
                  {card.list.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                  {card.buttonText}
                </button>
              </div>
            ))}
          </div> */}
        </>
      )}
    </div>
  );
};

export default CardsComponent;






// import { useEffect } from "react";

// const CardsComponent = ({ cards }) => {


//   // useEffect(() => {
//   //     window.scrollTo(0, 0);
//   //   }, []);
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//         Choose A Theme
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cards.map((card) => (
//           <div
//             key={card?.id}
//             className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition cursor-pointer"
//           >
//             <img
//               src={card?.image}
//               alt={card.title}
//               className="w-full h-40 object-cover rounded-lg mb-4"
//             />
//             <h2 className="text-lg font-semibold text-gray-800">
//               {card.title}
//             </h2>
//             <p className="text-gray-600 my-2">{card.description}</p>
//             <ul className="list-disc pl-5 text-gray-700">
//               {card.list.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//             <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
//               {card.buttonText}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardsComponent;


// // import { useEffect } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";

// // const CardsComponent = () => {

// //   useEffect(() => {
// //         window.scrollTo(0, 0); 
// //       }, []);

// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const cards = location.state?.cards || [];

// //   const handleCardClick = () => {
//   //  navigate("/InputField");
// //   };

// //   return (
// //     <div className="p-8">
// //       <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
// //         Choose A Theme
// //       </h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {cards.map((card) => (
// //           <div
// //             key={card?.id}
// //             className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition cursor-pointer" // Add cursor-pointer for better UX
// //             onClick={handleCardClick} // Add onClick to handle navigation
// //           >
// //             <img
// //               src={card?.image}
// //               alt={card.title}
// //               className="w-full h-40 object-cover rounded-lg mb-4"
// //             />
// //             <h2 className="text-lg font-semibold text-gray-800">
// //               {card.title}
// //             </h2>
// //             <p className="text-gray-600 my-2">{card.description}</p>
// //             <ul className="list-disc pl-5 text-gray-700">
// //               {card.list.map((feature, index) => (
// //                 <li key={index}>{feature}</li>
// //               ))}
// //             </ul>
// //             <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
// //               {card.buttonText}
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CardsComponent;
