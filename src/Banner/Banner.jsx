import one from "../assets/1 (2).png";
import two from "../assets/4 (2).png";
import three from "../assets/2.png";
import four from "../assets/3.png";
import five from "../assets/5.png";
// import six from "../assets/Background (4).png";
import six from "../assets/bg.jpg";

const Banner = () => {
  return (
    <div className="relative flex flex-col-reverse md:bg-[#FFFFFF] lg:flex-row items-center justify-between px-6 md:pl-36 md:pr-0  lg:pb-20">
      {/* Text Section */}
      <div className="lg:w-1/2 space-y-6 z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Younitech - <br /> Uw Partner in Digitale <br /> Innovatie
        </h2>
        <p className="text-lg text-gray-700">
          “Transformeer uw digitale aanwezigheid met op maat gemaakte oplossingen”
        </p>
        <p className="text-md text-gray-600">
        Bij Younitech begrijpen we dat een sterke online aanwezigheid essentieel is voor succes in de moderne wereld. Met jarenlange ervaring in webdesign, applicatieontwikkeling, marketing, en branding helpen we bedrijven van elke omvang om te groeien en te excelleren. Onze expertise combineert creativiteit met technologie om resultaten te leveren die impact maken
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2">
        {/* Desktop View */}
        <div className="hidden lg:flex relative items-center justify-center">
          <img
            src={six}
            alt="Background"
            className="w-full h-[524px] object-cover"
          />
          <div className="absolute flex flex-col gap-6 items-center">
            <div className="flex">
              <img src={one} alt="Overlay 1" className="-ml-64 mt-16 w-36 h-36 lg:w-96 lg:h-56" />
              <img src={two} alt="Overlay 2" className="-ml-8 mt-8 w-40 h-36 lg:w-52 lg:h-40" />
            </div>
            <div className="flex">
              <img src={three} alt="Overlay 3" className="w-36 h-36 lg:w-[348px] -ml-48 -mt-32 lg:h-[336px]" />
              <img src={four} alt="Overlay 4" className="w-36 h-36 -ml-20 lg:w-[336px] -mt-52 lg:h-[304px]" />
              <img src={five} alt="Overlay 5" className="w-36 h-36 lg:w-[336px] -ml-[400px] mt-8 lg:h-60" />
            </div>
          </div>
        </div>

        {/* Mobile View: Styled Image Cards */}
        <div className="flex flex-col items-center gap-6 lg:hidden mt-8">
          {[one, two, three, four, five, six].map((img, index) => (
            <div
              key={index}
              className="relative w-full max-w-xs rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img src={img} alt={`Image ${index + 1}`} className="w-full h-auto object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
