import bgImg from "../assets/Background (5).png";
import image from "../assets/Image.png";
import icon from "../assets/icon.png";
import icon1 from "../assets/Icon (1).png";

const Waaram = () => {
  return (
    <div className="relative bg-white py-12">
      {/* Background Section */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] lg:h-[400px] bg-cover bg-center">
        <img src={bgImg} className="h-[620px] -mt-48 w-[460px]" alt="" />
      </div>

      {/* Content Section */}
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 gap-8">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 flex justify-center z-10">
          <img
            src={image}
            alt="Visual Representation"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>

        {/* Right Side: Text */}
        <div className="lg:w-1/2 z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            Waarom kiezen voor Younitech?
          </h2>
          <p className="text-lg lg:text-xl mb-6 text-gray-700 leading-relaxed">
            Met Younitech kiest u voor een partner die uw visie begrijpt en
            omvormt tot praktische resultaten. Wij bieden:
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-2xl text-green-500">✔</span>
              Technologische oplossingen die met uw bedrijf meegroeien.
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl text-green-500">✔</span>
              Een focus op meetbare resultaten en een naadloze klantbeleving.
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl text-green-500">✔</span>
              Toegang tot een team van ervaren experts.
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row justify-start items-center gap-8 p-6 rounded-lg ">
            {/* Left Section */}
            <div className="flex flex-col items-start text-center lg:text-left">
              <div className="mb-4">
                <img src={icon} alt="Experience Icon" className="w-18 h-12" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">5 Years of</h2>
              <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-start text-center lg:text-left">
              <div className="mb-4">
                <img src={icon1} alt="Projects Icon" className="w-16 h-12" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">50+ Projects</h2>
              <h2 className="text-2xl font-bold text-gray-800">
                Done Together
              </h2>
            </div>
          </div>

          <div>
            <button className="bg-[#263238] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#1e2a30] transition duration-300 ease-in-out">
              Ontdek meer over onze aanpak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waaram;
