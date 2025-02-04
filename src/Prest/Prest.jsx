import { useState } from "react";
import bgImg from "../assets/Ellipse 477.png";
import update from "../assets/update.jpg";
import img1 from "../assets/Group 1000005748.png";
import mobile from "../assets/mobile.jpg";

const Prest = () => {
  const [selected, setSelected] = useState(null);
  const [currentImg, setCurrentImg] = useState(img1);

  const data = [
    {
      title: "Schaalbaarheid ",
      description: "Digitale oplossingen die toekomstbestendig zijn.",
      image: update,
    },
    {
      title: "Ondersteuning ",
      description: "24/7 klantenservice om u te ondersteunen waar nodig.",
      image: img1,
    },
    {
      title: "Wereldwijde impact ",
      description: "Technologie die uw bereik vergroot en klanten wereldwijd aanspreekt.",
      image: mobile,
    },
  ];

  const handleSelect = (index) => {
    setSelected(selected === index ? null : index);
    setCurrentImg(data[index].image);
  };

  return (
    <div className="bg-[#263238] mt-8">
      {/* Header Section */}
      <div className="relative top-16">
        <img src={bgImg} alt="Background" className="object-cover ml-96" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#FFFFFF]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-[#FFFFFF]">
            Prestaties die resultaten leveren
          </h2>
          <h2 className="text-xl lg:text-base text-[#FFFFFF]">
            Onze aanpak is gericht op het bieden van
          </h2>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row py-12 px-6 lg:px-20 gap-12">
        {/* Left Side */}
        <div className="lg:w-1/2 mt-24 ml-36">
          {data.map((item, index) => (
            <div key={index} className="mb-8">
              <h2
                className="text-2xl font-semibold text-[#D4D4D8] py-4 cursor-pointer flex items-center justify-start gap-4 relative"
                onClick={() => handleSelect(index)}
              >
                {item.title}
                <span className="text-lg">{selected === index ? "-" : "+"}</span>
                {selected !== index && (
                  <span className="absolute  bottom-[-1px] left-0 w-full h-[1px] bg-[#FFFFFF]"></span>
                )}
              </h2>
              {selected === index && (
                <>
                  <h2 className="text-sm py-4  text-[#FFFFFF] mt-2 relative">
                    {item.description}
                    <span className="absolute  bottom-[-1px] left-0 w-full h-[1px] bg-[#D4D4D8]"></span>
                  </h2>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 relative">
          <img
            src={currentImg}
            alt="Selected Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Prest;
