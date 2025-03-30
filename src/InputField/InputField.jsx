import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown} from "react-icons/fa";
import { FaArrowLeft, FaArrowRight} from "react-icons/fa"; // Import React Icons

const InputField = () => {
  useEffect(() => {
          window.scrollTo(0, 0); 
        }, []);

        
        const [selectedOption, setSelectedOption] = useState('');

        const handleRadioChange = (event) => {
          setSelectedOption(event.target.value);
        };


        const [checkedItems, setCheckedItems] = useState({
          portfolioTonen: false,
          blogSchrijven: false,
          contactGenereren: false,
          onlineCursussenVerkopen: false,
          home:false,
          about:false,
          portfolio:false,
          blog:false,
          contact:false
          
        });

      
        const handleChange = (event) => {
          const { name, checked } = event.target;
          setCheckedItems({ ...checkedItems, [name]: checked });
        };



        


  const navigate = useNavigate(); // Hook to navigate between routes
  const [telephone, setNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [bestaande, setBestaande] = useState("");
  const [hosting, setHosting] = useState("");
  const [logo, setLogo] = useState("");
  const [wensen, setWensen] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here if necessary
    console.log("Form submitted with data:", {
      telephone,
      name,
      email,
      address,
      bestaande,
      hosting,
      logo,
      wensen
    });
  };

  return (
    <div className="md:px-36 px-6 mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 flex justify-between items-center">
        <span> Template Webbuilder Formulier</span>
        {/** <span className="text-sm text-gray-600">{name}</span> */}
      </h2>

      <form onSubmit={handleSubmit}>
        
        {/* Title and Name Inputs 
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-6 md:mb-6">
          <div className="md:mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
             
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder=" Tittle"
              className="md:mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Naam"
              className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email and Image Upload Inputs
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
             
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" E-mail"
              className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        
        */}
        

          {/* <div className="mb-4">
                        <label htmlFor="upload" className="block text-sm font-medium text-gray-700">Upload Image</label>
                        <input
                            type="file"
                            id="upload"
                            onChange={handleFileChange}
                            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div> 
                    

                    <div className=" md:-mt-11 md:w-1/2">
            <label className="block text-gray-700 font-medium md:mt-11"></label>
            <div className="border w-full border-gray-300 rounded-lg p-3 md:w-full flex items-center justify-around cursor-pointer bg-black hover:bg-gray-800 transition">
              <label
                htmlFor="imageUpload"
                className="text-white cursor-pointer"
              >
                Upload afbeelding
              </label>
              <FaUpload className="text-white text-lg" />
              <input type="file" className="hidden" id="imageUpload" />
            </div>
          </div>
        </div>
                    
                    
                    */}
          

        {/* Description Input
        
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Beschrijving van de service"
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        */}
        

  
        
      
      <div className="">
              <div className=" flex md:gap-[496px]">
                <h2 className="text-xl text-[#407BFF] font-semibold md:mt-8 mt-4 mb-4">
                Algemene Informatie
                </h2>
                <h2 className="text-xl  text-[#407BFF] md:-ml-12 font-semibold mb-4 md:mt-8 mt-4   hidden sm:block ">
                Doel van de Website
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
                {/* Left Side Inputs */}
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                    Voornaam & Achternaam*
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="(Invulveld)"
                      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        E -mailadres
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E -mail"
                        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Telefoonnummer
                      </label>
                      <input
                        type="number"
                        name="telephone"
                        value={telephone}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Bijv. +31 6 12345678"
                        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                    Adres*
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder=" (Invulveld)"
                      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                      <label className="block text-gray-700 font-medium mb-1">
                      Vakgebied en specialisatie*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Select"
                          name="branding"
                          className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
                      </div>
                    </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                    Heb je al een bestaande website? Zo ja, wat is de URL?
                    </label>
                    <input
                      type="text"
                      name="cname"
                      value={bestaande}
                      onChange={(e) => setBestaande(e.target.value)}
                      placeholder="(Optioneel invulveld)"
                      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                
                  <div>
                      <h2 className="text-xl mt-8  text-[#407BFF] font-semibold mb-4">
                      Techniek & Hosting
                    </h2>
                    <label className="block text-gray-700 font-medium mb-1">
                    Wil je een eigen domeinnaam?*
                    </label>


                    <div className="flex items-center space-x-5 mb-5">
                    <label className="flex items-center space-x-2 text-gray-500">
                      <input
                        type="radio"
                        name="choice"
                        value="ja"
                        checked={selectedOption === 'ja'}
                        onChange={handleRadioChange}
                      />
                      <span>Ja</span>
                    </label>


                    <label className="flex items-center space-x-2 text-gray-500">
                    <input
                      type="radio"
                      name="choice"
                      value="nee"
                      checked={selectedOption === 'nee'}
                      onChange={handleRadioChange}
                    />
                    <span>Nee</span>
                  </label>

                    </div>

                    <input
                      type="text"
                      name="inspiratie"
                      value={hosting}
                      onChange={(e) => setHosting(e.target.value)}
                      placeholder="indien Ja, geef gewenste domeinnaam op in een invulveld"
                      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>


                  <div className="mt-4">
                      <label className="block text-gray-700 font-medium mb-1">
                      Heb je al hosting of wil je hulp bij het kiezen van een provider?*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Select"
                          name="branding"
                          className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
                      </div>
                    </div>


                    <label className="block text-gray-700 font-medium mb-1">
                    Wil je zelf makkelijk nieuwe content kunnen toevoegen?
                    </label>


                    <div className="flex items-center space-x-5 mb-5">
                    <label className="flex items-center space-x-2 text-gray-500">
                      <input
                        type="radio"
                        name="choice"
                        value="ja"
                        checked={selectedOption === 'ja'}
                        onChange={handleRadioChange}
                      />
                      <span>Ja</span>
                    </label>


                    <label className="flex items-center space-x-2 text-gray-500">
                    <input
                      type="radio"
                      name="choice"
                      value="nee"
                      checked={selectedOption === 'nee'}
                      onChange={handleRadioChange}
                    />
                    <span>Nee</span>
                  </label>

                    </div>


                </div>
      
                {/* Right Side Inputs */}
      
                <div className="flex flex-col gap-4">
                
                  <div >
                    <label className="block text-gray-700 font-medium mb-1">
                    Wat is het hoofddoel van je website?*
                    </label>
                    
                    <div className="flex gap-2">
                    <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="portfolioTonen"
                      checked={checkedItems.portfolioTonen}
                      onChange={handleChange}
                    />
                    <span className="text-sm text-[rgba(146,146,146,1)]">Portfolio tonen</span>
                  </label>
                   
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="blogSchrijven"
                        checked={checkedItems.blogSchrijven}
                        onChange={handleChange}
                      />
                      <span className="text-sm text-[rgba(146,146,146,1)]">Blog schrijven</span>
                    </label>

          	        <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="contactGenereren"
                        checked={checkedItems.contactGenereren}
                        onChange={handleChange}
                      />
                      <span className="text-sm text-[rgba(146,146,146,1)]">Contact genereren</span>
                    </label>


                    <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="onlineCursussenVerkopen"
                      checked={checkedItems.onlineCursussenVerkopen}
                      onChange={handleChange}
                    />
                    <span className="text-sm text-[rgba(146,146,146,1)]">Online cursussen verkopen</span>
                  </label>
                    </div>


                    <div className="mt-4">
                      <label className="block text-gray-700 font-medium mb-1">
                      Wie is je doelgroep?*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder=" (Dropdown, eventueel met mogelijkheid tot meerdere selecties)"
                          name="branding"
                          className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
                      </div>
                    </div>


                  </div>



                  <div>
                      <h2 className="text-xl mt-8  text-[#407BFF] font-semibold mb-4">
                      Logo
                    </h2>
                    <label className="block text-gray-700 font-medium mb-1">
                    Voorkeurskleuren en fonts*
                    </label>
                    <input
                      type="text"
                      name="inspiratie"
                      value={logo}
                      onChange={(e) => setLogo(e.target.value)}
                      placeholder="(Invulveld: geef hier je gewenste kleuren en/of fonts op)"
                      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>


                  <div>
                  <h2 className="text-xl mt-8  text-[#407BFF] font-semibold mb-4">
                  Inhoud & Pagina’s
                    </h2>
                    <label className="block text-gray-700 font-medium mb-1">
                    Welke pagina’s wil je?*
                    </label>

                    <div className="flex gap-2">
                    <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="home"
                      checked={checkedItems.home}
                      onChange={handleChange}
                    />
                    <span className="text-sm text-[rgba(146,146,146,1)]">Home</span>
                  </label>
                   
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="about"
                        checked={checkedItems.about}
                        onChange={handleChange}
                      />
                      <span className="text-sm text-[rgba(146,146,146,1)]">About</span>
                    </label>

          	        <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="portfolio"
                        checked={checkedItems.portfoloio}
                        onChange={handleChange}
                      />
                      <span className="text-sm text-[rgba(146,146,146,1)]">Portfolio</span>
                    </label>


                    <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="blog"
                      checked={checkedItems.blog}
                      onChange={handleChange}
                    />
                    <span className="text-sm text-[rgba(146,146,146,1)]">Blog</span>
                  </label>


                    <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="contact"
                      checked={checkedItems.contact}
                      onChange={handleChange}
                    />
                    <span className="text-sm text-[rgba(146,146,146,1)]">Contact</span>
                  </label>
                    </div>

                  </div>

                  <div className="mt-4">
                      <label className="block text-gray-700 font-medium mb-1">
                      Heb je de teksten en afbeeldingen al of moeten die gemaakt worden?*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Select"
                          name="branding"
                          className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl mt-8  text-[#407BFF] font-semibold mb-4">
                      Extra Wensen
                    </h2>
                    <label className="block text-gray-700 font-medium mb-1">
                    Opmerkingen & Specifieke verzoeken
                    </label>
                    <input
                      type="text"
                      name="inspiratie"
                      value={wensen}
                      onChange={(e) => setWensen(e.target.value)}
                      placeholder="(Vrij veld, optioneel)"
                      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>



                </div>
              </div>
            </div>
      

              <div className="flex justify-center items-center md:my-8 my-4 ">
                <button  className="btn hover:bg-[#468AFFE6] bg-[#468AFF]  md:px-32 px-36 py-2 text-[#FFFFFF] text-lg md:text-md lg:text-xl">
                Start Nu!
                </button>
              </div>
          

        {/* Submit, Next, and Back Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)} // Back button: go to the previous page
            className="flex items-center gap-2 px-6 py-2 bg-[#F5F5F5] text-[#263238] font-semibold rounded-lg focus:outline-none hover:bg-gray-200"
          >
            <FaArrowLeft /> {/* Left arrow icon */}
            Rug
          </button>

          <button
            type="button"
            onClick={() => navigate("/payment")} // Next button: navigate to the payment route
            className="flex items-center gap-2 px-6 py-2 bg-[#468AFF] text-white font-semibold rounded-lg focus:outline-none hover:bg-blue-500"
          >
            Volgende
            <FaArrowRight /> {/* Right arrow icon */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputField;
