import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { FaChevronDown} from "react-icons/fa";
//import { ChevronDown } from 'lucide-react';
import { FaArrowLeft, FaArrowRight} from "react-icons/fa"; // Import React Icons //FaArrowRight
import { Upload } from "lucide-react";



const InputField = () => {
  useEffect(() => {
          window.scrollTo(0, 0); 
        }, []);


        // Right side 1st dropdown input box
        //const [selectedOption, setSelectedOption] = useState('')
        // const [isOpen, setIsOpen] = useState(false);

        // const options = ['Studenten', 'Scholen', 'Bedrijven', 'Ouders', 'Overige (met invulveld)'];


        // const handleOptionClick = (option) => {
        //   setSelectedOption(option);
        //   setIsOpen(false);

        // };




         // Right side 2nd dropdown input box
        // const [activeOption, setActiveOption] = useState('');
        // const [dropdownOpen, setDropdownOpen] = useState(false);

        // const choices = ['Al aanwezig', 'Moeten gemaakt worden'];

        // const selectOption = (choice) => {
        //   setActiveOption(choice);
        //   setDropdownOpen(false);
        // };



        const fileInputRef = useRef(null);
          const [error, setError] = useState('');
          const [fileName, setFileName] = useState('');
        
          const MAX_FILE_SIZE_MB = 10;
        
          const handleClick = () => {
            fileInputRef.current.click();
          };
        
          const handleFileChange = (e) => {
            const file = e.target.files[0];
        
            if (file) {
              const fileSizeMB = file.size / (1024 * 1024);
        
              if (fileSizeMB > MAX_FILE_SIZE_MB) {
                setError(`Het bestand is te groot. Max. 10MB toegestaan.`);
                setFileName('');
              } else {
                setError('');
                setFileName(file.name);
        
                // ✅ Upload logic here
                console.log('✅ Bestand gekozen:', file.name);
                // Example: You could send it via FormData to an API
                // const formData = new FormData();
                // formData.append('file', file);
                // await fetch('/upload', { method: 'POST', body: formData });
              }
            }
          };




        const [contentAccess, setContentAccess] = useState('');
        //const [seoControl, setSeoControl] = useState('');
  


        // Dropdown 1 of Vakgebied 
  
    const [selectedSpecies, setSelectedSpecies] = useState('');
  
    const species = [
      'Basisonderwijs',
      'Grafisch ontwerp',
      'IT-training',
      'Zakelijke dienstverlening',
      'Retail / E-commerce',
      'Overige (met invulveld)',
    ];

    // Dropdown 2 of Provides 
    const [selectedProvides, setSelectedProvides] = useState('');
  
    const provides = [
      'Ik heb al hosting',
      'Ik heb hulp nodig bij het kiezen'
    ];



    // Dropdown 3 of Vakgebied 
  
    const [selectedDoelgroep, setSelectedDoelgroep] = useState('');
  
    const doelgroeps = [
      'Studenten',
      'Scholen',
      'Bedrijven',
      'Ouders',
      'Overige (met invulveld)'
    ];


    // Dropdown 4 of Vakgebied 
  
    const [selectedWorden, setSelectedWorden] = useState('');
  
    const wordens = [
      'Al aanwezig',
      'Moeten gemaakt worden'
    ];
        


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
  //const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //const [address, setAddress] = useState("");
  const [bestaande, setBestaande] = useState("");
  //const [hosting, setHosting] = useState("");
  const [logo, setLogo] = useState("");
  const [wensen, setWensen] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here if necessary
    console.log("Form submitted with data:", {
      telephone,
      name,
      email,
      //adres,
      bestaande,
      //hosting,
      logo,
      wensen
    });
  };



{/**For validation start  */}


const [formData, setFormData] = useState({
  name: '',
  adres: ''
});


const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const noErrors = Object.keys(errors).length === 0;
    const allFilled = Object.values(formData).every(field => field.trim() !== '');
    setIsFormValid(noErrors && allFilled);
  }, [errors, formData]);


  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };


  const validateField = (name, value) => {
    let fieldErrors = { ...errors };


    if (name === 'name') {
      if (!value.trim()) {
        fieldErrors.name = 'Name is required';
      } else {
        delete fieldErrors.name;
      }
    }

    if (name === 'adres') {
      if (!value.trim()) {
        fieldErrors.adres = 'Address is required';
      } else {
        delete fieldErrors.adres;
      }
    }


    setErrors(fieldErrors);
};










{/**For validation end  */}













 const [wantsDomain, setWantsDomain] = useState(null);


  return (
<>



<div className="px-2 sm:px-4 md:px-8 lg:px-32 ">
      <h2 className="text-3xl font-semibold text-[rgba(29,32,38,1)] font-plus-jakarta mb-6 flex justify-between items-center">
        <span> Template Webbuilder Formulier</span>
        <span className="text-sm text-gray-600">{name}</span>
      </h2>

      <form onSubmit={handleSubmit}>
        
      
      <div className="">
              <div className=" flex md:gap-[496px]">
                <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-semibold font-plus-jakarta md:mt-8 mt-4 mb-4">
                Algemene Informatie
                </h2>
                <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-semibold font-plus-jakarta md:-ml-72  mb-4 md:mt-8 mt-4   hidden sm:block ">
                Doel van de Website
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
                {/* Left Side Inputs */}
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                    Voornaam & Achternaam*
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleCardChange}
                      placeholder="(Invulveld)"
                      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
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
                      <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                        Telefoonnummer
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={telephone}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Bijv. +31 6 12345678"
                        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                    Adres*
                    </label>
                    <input
                      type="text"
                      name="adres"
                      value={formData.adres}
                      onChange={handleCardChange}
                      placeholder=" (Invulveld)"
                      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.adres && <p className="text-red-500 text-sm">{errors.adres}</p>}
                  </div>

                  <div>
                  <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                  Vakgebied en specialisatie*
                    </label>
                    <select
                      value={selectedSpecies}
                      onChange={(e) => setSelectedSpecies(e.target.value)}
                      className={`block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                        ${selectedSpecies === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
                    >
                      
                      <option value="" disabled hidden>
                      Select
                      </option>
                      {species.map((specie, index) => (
                        <option key={index} value={specie} className="text-gray-700">
                          {specie}
                        </option>
                      ))}
                    </select>
                    </div>

                  <div>
                    <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
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
                      <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-semibold font-plus-jakarta md:mt-4   mb-4">
                      Techniek & Hosting
                    </h2>
                    <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
              Wil je een eigen domeinnaam?*
                </label>
                <div>
       
                <div className="flex items-center gap-4">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="domain"
                    value="ja"
                    onChange={() => setWantsDomain(true)}
                  />
                  Ja
                </label>

                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="domain"
                    value="nee"
                    onChange={() => setWantsDomain(false)}
                  />
                  Nee
                </label>
              </div>

              {wantsDomain && (
                <div className="mt-4 mb-4">
                  <input
                    type="text"
                    placeholder="Invul veld"
                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              </div>

                  </div>


                  <div className="mt-4">
                  <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                  Heb je al hosting of wil je hulp bij het kiezen van een provider?*
                </label>
                <select
                  value={selectedProvides}
                  onChange={(e) => setSelectedProvides(e.target.value)}
                  className={`block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${selectedProvides === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
                >
                  
                  <option value="" disabled hidden>
                  (Dropdown, eventueel met mogelijkheid tot meerdere selecties)
                  </option>
                  {provides.map((provide, index) => (
                    <option key={index} value={provide} className="text-gray-700">
                      {provide}
                    </option>
                  ))}
                </select>
                    </div>


                    <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                    Wil je zelf makkelijk nieuwe content kunnen toevoegen?
                    </label>


                    <div className="flex items-center space-x-5 mb-5">
                    <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contentAccess"
                      value="ja"
                      checked={contentAccess === 'ja'}
                      onChange={(e) => setContentAccess(e.target.value)}
                      className="w-4 h-4 mr-2 border-gray-400 text-black focus:ring-0"
                    />
                    Ja
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contentAccess"
                      value="nee"
                      checked={contentAccess === 'nee'}
                      onChange={(e) => setContentAccess(e.target.value)}
                      className="w-4 h-4 mr-2 border-gray-400 text-black focus:ring-0"
                    />
                    Nee
                  </label>

                    </div>


                </div>
      
                {/* Right Side Inputs */}
      
                <div className="flex flex-col gap-4">
                
                  <div >
                    <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                    Wat is het hoofddoel van je website?*
                    </label>
                    
                    <div className="grid grid-cols-2 md:grid md:grid-cols-3">
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


                    <div className="mt-4 ">
                      {/*<label className="block text-gray-700 font-medium mb-1">
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
                      </div>*/}


              
                    <div>
                    <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                    Wie is je doelgroep?*
                    </label>
                    <select
                      value={selectedDoelgroep}
                      onChange={(e) => setSelectedDoelgroep(e.target.value)}
                      className={`block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                        ${selectedDoelgroep === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
                    >
                      
                      <option value="" disabled hidden>
                      (Dropdown, eventueel met mogelijkheid tot meerdere selecties)
                      </option>
                      {doelgroeps.map((doelgroep, index) => (
                        <option key={index} value={doelgroep} className="text-gray-700">
                          {doelgroep}
                        </option>
                      ))}
                    </select>
                    </div>
                    
                    </div>


                  </div>


                  <div>
                      <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-semibold font-plus-jakarta md:mt-4   mb-4">
                      Logo
                    </h2>
                    <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
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
                  <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-semibold font-plus-jakarta md:mt-4    mb-4">
                  Inhoud & Pagina’s
                    </h2>
                    <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                    Welke pagina’s wil je?*
                    </label>

                    <div className="grid grid-cols-3 md:grid md:grid-cols-5">
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

      
                    <div>
                    <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                    Heb je de teksten en afbeeldingen al of moeten die gemaakt worden?*
                    </label>
                    <select
                      value={selectedWorden}
                      onChange={(e) => setSelectedWorden(e.target.value)}
                      className={`block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                        ${selectedWorden === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
                    >
                      
                      <option value="" disabled hidden>
                      Select
                      </option>
                      {wordens.map((worden, index) => (
                        <option key={index} value={worden} className="text-gray-700">
                          {worden}
                        </option>
                      ))}
                    </select>
                    </div>
              
                    
                    </div>




                    <div>
                      <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-semibold font-plus-jakarta md:mt-4   mb-4">
                      Extra Wensen
                    </h2>
                    <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
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
                  <div className="mb-6" >
                              <h2 className="text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold  md:mt-4 mt-2 mb-4">
                              Voeg hier bestanden toe die je aanvraag verduidelijken, zoals screenshots, documenten of voorbeelden. Max. 10MB per bestand.
                              </h2>
                              <button
                                    type="button"
                                    onClick={handleClick}
                                    className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2"
                                  >
                                    Upload afbeelding
                                    <Upload size={16} />
                                  </button>
                  
                                  <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                  />
                  
                                  {/* File name shown when valid */}
                                  {fileName && (
                                    <p className="mt-2 text-sm text-green-600">Bestand geselecteerd: {fileName}</p>
                                  )}
                  
                                  {/* Error message if too big */}
                                  {error && (
                                    <p className="mt-2 text-sm text-red-600">{error}</p>
                                  )}
                              
                                  </div>
                </div>
              </div>
            </div>
      

              
          

        {/* Submit, Next, and Back Buttons */}
        <div className="grid  grid-cols-2 mx-auto gap-6 md:max-w-[280px]  md:grid md:grid-cols-2  mt-10">
          <button
            type="button"
            onClick={() => navigate(-1)} // Back button: go to the previous page
            className=" flex  items-center gap-2 px-6 py-2 bg-[#F5F5F5] text-[#263238] font-semibold rounded-lg focus:outline-none hover:bg-gray-200"
          >
            <FaArrowLeft /> {/* Left arrow icon */}
            Terug
          </button>

          <button
            type="button"
            disabled={!isFormValid} 
            onClick={() => navigate("/payment")} // Next button: navigate to the payment route
            className="flex  items-center gap-2 px-4 py-2 bg-[#468AFF] text-white font-semibold rounded-lg focus:outline-none hover:bg-blue-500"
          >
            Volgende
            < FaArrowRight /> 
          </button>
        </div>
      </form>
    </div>
</>
    
  );
};

export default InputField;
