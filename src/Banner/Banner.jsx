import one from "../assets/1 (2).png";
import two from "../assets/4 (2).png";
import three from "../assets/2.png";
import four from "../assets/3.png";
import five from "../assets/5.png";
import six from "../assets/Background (4).png";

const Banner = () => {
  return (
    <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-12 lg:py-20">
      {/* Text Section */}
      <div className="lg:w-1/2 space-y-6 z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Younitech - Uw Partner in Digitale Innovatie
        </h2>
        <p className="text-lg text-gray-700">
          “Transformeer uw digitale aanwezigheid met op maat gemaakte oplossingen”
        </p>
        <p className="text-md text-gray-600">
          Bij Younitech begrijpen we dat een sterke online aanwezigheid essentieel is voor succes in de moderne wereld. Met jarenlange ervaring in webdesign, applicatieontwikkeling, marketing, en branding helpen we bedrijven van elke omvang om te groeien en te excelleren. Onze expertise combineert creativiteit met technologie om resultaten te leveren die impact maken.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative lg:w-1/2 flex items-center justify-center">
        {/* Background Image */}
        <img
          src={six}
          alt="Background"
          className="w-full h-[400px] lg:h-[500px] object-cover"
        />

        {/* Overlay Images */}
        <div className="absolute flex flex-col gap-6 items-center">
          {/* Top Images */}
          <div className="flex ">
            <img
              src={one}
              alt="Overlay 1"
              className="-ml-64 mt-16 w-36 h-36 lg:w-96 lg:h-56"
            />
            <img
              src={two}
              alt="Overlay 2"
              className="-ml-8 mt-8 w-40 h-36 lg:w-52 lg:h-40"
            />
          </div>

          {/* Bottom Images */}
          <div className="flex  ">
            <img
              src={three}
              alt="Overlay 3"
              className="w-36 h-36  lg:w-[348px] -ml-48 -mt-32 lg:h-[336px]"
            />
            <img
              src={four}
              alt="Overlay 4"
              className="w-36 h-36 -ml-20  lg:w-[336px] -mt-52 lg:h-[304px]"
            />
            <img
              src={five}
              alt="Overlay 5"
              className="w-36 h-36 lg:w-[336px] -ml-[400px] mt-8 lg:h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
