import image1 from "../assets/mobile1.jpg";
import image2 from "../assets/Device (2).png";
import image3 from "../assets/rafiki.png";
import { useNavigate } from "react-router-dom";


const Onze = () => {

  const navigate=useNavigate();

  return (
    <div className="bg-[#FFFFFF] py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-semibold text-[#263238]">
          Onze diensten, op maat voor uw succes
        </h2>
      </div>

      {/* Services Section */}
      <div className="container mx-auto flex flex-wrap justify-center gap-8 px-6">
        {/* Service Card 1 */}
        <div onClick={()=>navigate("/appmarket")} className=" p-6 text-center w-full sm:w-64 md:w-80">
          <img
            src={image1}
            alt="Applicaties"
            className="mx-auto h-32 w-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">Applicaties</h2>
          {/* <p className="text-gray-600 mt-2 text-sm">
            Ontwikkel op maat gemaakte applicaties die uw bedrijf ondersteunen.
          </p> */}
        </div>

        {/* Service Card 2 */}
        <div onClick={()=>navigate("/marketing")} className=" p-6 text-center w-full sm:w-64 md:w-80">
          <img
            src={image2}
            alt="Marketing & Branding"
            className="mx-auto h-32 w-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            Marketing & Branding
          </h2>
          {/* <p className="text-gray-600 mt-2 text-sm">
            Creëer een unieke merkidentiteit en bereik uw doelgroep effectief.
          </p> */}
        </div>

        {/* Service Card 3 */}
        <div className=" p-6 text-center w-full sm:w-64 md:w-80">
          <img
            src={image3}
            alt="Hosting & Onderhoud"
            className="mx-auto h-32 w-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            Hosting & Onderhoud
          </h2>
          {/* <p className="text-gray-600 mt-2 text-sm">
            Zorg voor een veilige en betrouwbare digitale infrastructuur.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Onze;
