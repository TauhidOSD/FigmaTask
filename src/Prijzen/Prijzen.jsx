import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/rafiki6.png";
import img1 from "../assets/Group 1000005744.png";

const Prijzen = () => {
    const [cards, setCards] = useState([]); // State to hold fetched data
    const [selectedCard, setSelectedCard] = useState(null); // Track selected card
    const navigate = useNavigate(); // Navigate to another route

    // Handle card click
    const handleCardClick = async (cardId) => {
        setSelectedCard(cardId); // Mark the clicked card
        try {
            const response = await fetch("/FakeData/data.json");
            const data = await response.json();
            setCards(data.slice(0, 5)); // Load 5 cards
            navigate("/CardComponent", { state: { cards: data.slice(0, 5) } }); // Navigate with data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="px-6 py-12">
            {/* Heading */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-800">Build Your Own Website</h1>
                <p className="mt-4 text-gray-600">Choose the plan that suits your needs</p>
            </div>

            {/* Cards */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                {/* Standard Template */}
                <div
                    onClick={() => handleCardClick(1)}
                    className={`cursor-pointer bg-[#DAE8FF59] shadow-md rounded-2xl p-6 flex flex-col items-center max-w-xs ${
                        selectedCard === 1 ? "border-4 border-blue-500" : ""
                    }`}
                >
                    <img
                        src={img}
                        alt="Standard Template"
                        className="w-full h-40 object-cover mb-4 rounded-t-2xl"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">Standard Template</h2>
                    <p className="mt-2 text-center text-gray-600">
                        Duis vestibulum, massa sit amet bibendum, mauris lacus varius nunc, dapibus.
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
                        className="w-full h-40 object-cover mb-4 rounded-t-2xl"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">Customized Website</h2>
                    <p className="mt-2 text-center text-gray-600">
                        Duis vestibulum, massa sit amet bibendum, mauris lacus varius nunc, dapibus.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Prijzen;
