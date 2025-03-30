import { useEffect, useState } from "react";
import InputField from "../InputField/InputField";
// import InputField from "./InputField"; // Import the InputField component

const CardsComponent = ({ cards }) => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [showInputField, setShowInputField] = useState(false);

  const handleCardClick = () => {
    setShowInputField(true); // Hide cards and show InputField
  };

  return (
    <div className="p-8">
      {showInputField ? (
        <InputField /> // Show InputField when a card is clicked
      ) : (
        <>
          <h1 className="text-3xl font-semibold font-plus-jakarta text-gray-800 mb-6 text-left">
          Kies een thema
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
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
          </div>
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
