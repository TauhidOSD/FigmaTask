import Img from "../assets/Image (1).png";
import bgImg from "../assets/Ellipse 477.png";

const Prest = () => {
  return (
    <div className="bg-[#263238] mt-8 ">
      {/* Header Section */}
      <div className="relative top-16">
        <img src={bgImg} alt="Background" className=" object-cover ml-96 " />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#FFFFFF]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-[#FFFFFF]">Prestaties die resultaten leveren</h2>
          <h2 className="text-xl lg:text-base text-[#FFFFFF]">Onze aanpak is gericht op het bieden van</h2>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row  py-12 px-6 lg:px-20 gap-12 ">
        {/* Left Side */}
        <div className="lg:w-1/2 mt-24 ml-36">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold  text-[#FFFFFF]">Schaalbaarheid -</h2>
            <h2 className="text-xs text-[#FFFFFF]">Digitale oplossingen die toekomstbestendig zijn.</h2>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#FFFFFF]">Ondersteuning -</h2>
            <h2 className="text-xs text-[#FFFFFF]">24/7 klantenservice om u te ondersteunen waar nodig.</h2>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#FFFFFF]">Wereldwijde impact -</h2>
            <h2 className="text-xs text-[#FFFFFF]">Technologie die uw bereik vergroot en klanten wereldwijd aanspreekt.</h2>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2  relative">
          <img src={Img} alt="Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
          <div className="absolute top-40 left-4 w-40 bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-4xl font-bold text-gray-800">27%</h2>
            <h2 className="text-lg text-gray-600">Productivity increase on average</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prest;
