import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate

const CardsComponent = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate

    const cards = location.state?.cards || []; // Retrieve data from location state

    const handleCardClick = () => {
        navigate("/InputField"); // Navigate to InputField when a card is clicked
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose A Theme</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition cursor-pointer" // Add cursor-pointer for better UX
                        onClick={handleCardClick} // Add onClick to handle navigation
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-lg font-semibold text-gray-800">{card.title}</h2>
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
        </div>
    );
};

export default CardsComponent;
