import {  FaUpload } from "react-icons/fa";
import das from "../assets/das.png";
import bg1 from "../assets/Appnet.jpeg";
import { useEffect,useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const PrijzenMarketing = () => {


  // Dropdown 1 of app 

  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    'Mobiele App',
    'Webapplicatie',
    'Hybride App (Web & Mobiel)',
    'SaaS-platform',
    'E-commerce / Webshop App',
    'CRM / Bedrijfssoftware',
    'IoT & Smart Device App',
    'Gaming App',
    'Overige (met invulveld)'
  ];


  // Dropdown of platform versist  selectedDoelgroep

  const [selectedPlatform, setSelectedPlatform] = useState('');

  const platforms = [
    'iOS',
    'Android',
    'Webbrowser',
    'Windows',
    'macOS',
    'Cross-platform (React Native / Flutter)',
    'Nog niet zeker',
  ];


  // Dropdown of Doelgroep

  const [selectedDoelgroep, setSelectedDoelgroep] = useState('');

  const odelgroeps = [
    'Bedrijven (B2B)',
    'Consumenten (B2C)',
    'Overheid & Non-Profit',
    'Startups',
   ' E-commerce & Retail',
    'Educatie & Training',
    'Fintech & Banking',
    'Zorg & Gezondheid'
  ];


  // Dropdown of Leefts

  const [selectedLeeft, setSelectedLeeft] = useState('');

  const leefts = [
    'Jongeren (13-18 jaar)',
    'Jongvolwassenen (18-30 jaar)',
    'Volwassenen (30-50 jaar)',
   ' Senioren (50+)',
    'Mannen',
   ' Vrouwen',
    'Beide'
  ];


  // Dropdown of 
  const [selectedBudget, setSelectedBudget] = useState('');

  const budgetOptions = [
    '€5.000 - €10.000 (Basisfunctionaliteiten, MVP)',
    '€10.000 – €25.000 (Middelgrote app, extra functies)',
    '€25.000 – €50.000 (Complexe applicatie, maatwerk)',
    '€50.000+ (Grote projecten, schaalbare oplossingen)',
    'Nog niet zeker',
  ];

  



  // check box 

  const [selectedGender, setSelectedGender] = useState({
    man: false,
    vrouw: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSelectedGender((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };




  const showAlert=()=>{
    Swal.fire({
      title: "Bedankt voor je aanvraag!",
      text: "We hebben je gegevens ontvangen en sturen je binnenkort een offerte. Mocht je vragen hebben, neem gerust contact met ons op.",
      icon: "success"
    });
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_adb605b','template_31qworp', form.current, {
        publicKey: 'zVpdm4YG_4bymkiyw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  return (

    <>
      <div className="bg-[#F5F5F5] w-full flex flex-col items-center py-16">
        <h1 className="text-xl font-bold text-gray-800">
          App ontwikkeling Prijsplannen
        </h1>
        <h1 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
          Home
          <img className="w-5 h-[2px]" src={das} alt="separator" />
          Prijzen
        </h1>
      </div>
      {/*Hero section P-M */}
      <div
        className="hero h-[520px] md:h-[444px] lg:h-[444px]"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="px-4 md:px-8 lg:px-12">
            <h1 className="mb-4 text-3xl md:text-5xl font-bold text-[#FFFFFF] font-plus-jakarta">
              Applicatie Ontwikkeling
            </h1>
            <p className="mb-4 lg:ml-20 lg:mr-20 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
              Bij Younitech staan we bekend om onze toewijding aan het leveren
              van hoogwaardige app-ontwikkelingsdiensten die voldoen aan de
              unieke behoeften van onze klanten. Of je nu een iOS, Android of
              cross-platform app nodig hebt, ons ervaren team van ontwikkelaars
              staat klaar om jouw ideeën tot leven te brengen. Van concept tot
              lancering en daar voorbij, we zorgen ervoor dat jouw app zowel
              functioneel als gebruiksvriendelijk is.
            </p>
            <p className="mb-2 pt-4 text-sm md:text-base font-semibold text-[#FFFFFF] font-plus-jakarta">
            Vul het onderstaande formulier in om jouw aanvraag zo volledig mogelijk te maken.
            </p>
            <p className="mb-4 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
            Hulp nodig? Neem contact met ons op via
              <a href="/contactpagina"> <span className="text-[#407BFF]">contactpagina.</span></a>
            </p>
          </div>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} >
            {/* First Part */}
      <div className="md:px-36 px-6 mx-auto">
        <div className=" flex md:gap-[496px]">
          <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold md:mt-8 mt-4 mb-4">
            Basisinformatie:
          </h2>
          <h2 className=" md:-ml-56  text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold mb-4 md:mt-8 mt-4  hidden sm:block ">
            Technische details:
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
          {/* Left Side Inputs */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
              Naam (Voornaam en achternaam)
              </label>
              <input
                type="text"
                name="name"
                placeholder="Naam"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Bedrijfsnaam (indien van toepassing)
              </label>
              <input
                type="text"
                name="cname"
                placeholder="Naam"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  E -mailadres
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="E -mail"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  Telefoonnummer
                </label>
        
                <input
                  type="tel"
                  name="telephone"
                  placeholder="Bijv. +31 6 12345678"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Right Side Inputs */}

          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold md:mb-4 md:hidden block mt-12 ">
              Technische details:
            </h2>

            <div className="md:grid md:grid-cols-2 gap-6">
              {/* Left Side Input */}
              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Heeft u een huidige app of een prototype?
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="huidige"
                    placeholder="Ja/nee, zo ja: geef details of upload"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Right Side Input (Moved Up) */}
              <div className="">
                <label className="block text-gray-700 font-medium mt-5"></label>
                <div className="border md:mt-11 md:w-full border-gray-300 rounded-lg p-3 w-full flex items-center justify-around cursor-pointer bg-black hover:bg-gray-800 transition">
                  <label
                    htmlFor="imageUpload"
                    className="text-white cursor-pointer"
                  >
                    Upload afbeelding
                  </label>
                  <FaUpload className="text-white text-lg" />
                  <input type="file" name="file" className="hidden" id="imageUpload" />
                </div>
              </div>

              {/* Image Upload Option */}
            </div>
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Integratievereisten
              </label>
              <input
                type="text"
                name="integrat"
                placeholder="bijv. API's, betalingsgateways, services van derden"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Backend -behoeften
              </label>
              <input
                type="text"
                name="backend"
                placeholder="bijv. Database, serverhosting, cloudservices"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Preferred Technology Stack
              </label>
              <input
                type="text"
                name="preferred"
                placeholder="Eventuele specifieke programmeertalen of kaders"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd part */}

      <div className="md:px-0 px-6">
        <div className="md:px-36 mx-auto">
          <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold mb-4">
            App -projectinformatie:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Side Inputs */}
            <div className="flex flex-col gap-4">
              <div>

              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  Type app
                </label>
                <select
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className={`block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${selectedOption === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
                >
                  
                  <option value="" disabled hidden>
                  Welk type applicatie wil je laten ontwikkelen?
                  </option>
                  {options.map((option, index) => (
                    <option key={index} value={option} className="text-gray-700">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Platform(s) vereist
              </label>
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className={`block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${selectedPlatform === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
              >
                
                <option  value="" disabled hidden>
                Op welke platforms moet de app beschikbaar zijn?
                </option>
                {platforms.map((platform, index) => (
                  <option key={index} value={platform} className="text-gray-700">
                    {platform}
                  </option>
                ))}
              </select>

              </div>

              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  App -functies
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="functies"
                    placeholder="Korte beschrijving van functies, bijv. Gebruikersaanmelding, etc"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                </div>
              </div>

              {/* upload image option */}
              <div className="">
                <div className="my-4">

                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Doelgroep
              </label>
              <select
                value={selectedDoelgroep}
                onChange={(e) => setSelectedDoelgroep(e.target.value)}
                className={`block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${selectedDoelgroep === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
              >
               
                <option value="" disabled hidden>
                Demografie, gebruikersbehoeften, enz
                </option>
                {odelgroeps.map((odelgroep, index) => (
                  <option key={index} value={odelgroep} className="text-gray-700">
                    {odelgroep}
                  </option>
                ))}
              </select>
                  
                </div>

                <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Leeftijdscategorie
              </label>
              <select
                value={selectedLeeft}
                onChange={(e) => setSelectedLeeft(e.target.value)}
                className={`block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${selectedLeeft === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
              >
                <option value="" disabled hidden>
                Uitkiezen
                </option>
                {leefts.map((leeft, index) => (
                  <option key={index} value={leeft} className="text-gray-700 ">
                    {leeft}
                  </option>
                ))}
              </select>
                </div>

                  <div className="font-plus-jakarta text-gray-700 mt-5">
              <h3 className="text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-4">Op basis van demografie & geslacht</h3>
              <div className="flex space-x-6">
                <label className="inline-flex items-center text-gray-400">
                  <input
                    type="checkbox"
                    name="man"
                    checked={selectedGender.man}
                    onChange={handleChange}
                    className="w-4 h-4 mr-2 border-gray-400 rounded focus:ring-0"
                  />
                  Man
                </label>
                <label className="inline-flex items-center text-gray-400">
                  <input
                    type="checkbox"
                    name="vrouw"
                    checked={selectedGender.vrouw}
                    onChange={handleChange}
                    className="w-4 h-4 mr-2 border-gray-400 rounded focus:ring-0"
                  />
                  Vrouw
                </label>
              </div>
            </div>

            <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mt-4 mb-1">
                Ontwerpvoorkeuren
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="functies"
                    placeholder="Eenvoudig, verfijnd, kleurrijk, modern, etc."
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                </div>
              </div>


              </div>
            </div>

            {/* Right Side Inputs */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold mb-4">
                Begroting
              </h2>
              <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
              Budgetbereik
            </label>
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className={`block w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${
                selectedBudget === '' ? 'text-gray-400 ' : 'text-gray-700'
              }`}
            >
              <option value="" disabled hidden>
                Wat is het beschikbare budget voor de ontwikkeling?
              </option>
              {budgetOptions.map((budget, index) => (
                <option key={index} value={budget} className="text-gray-700">
                  {budget}
                </option>
              ))}
            </select>
              </div>

              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  Gewenste voltooiingsdatum
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="gewenste"
                    placeholder="Naam"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              {/* comment box */}
              <div>
                <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold mb-4">
                  Aanvullende opmerkingen:
                </h2>
                <h2 className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  Verzoek en vragen
                </h2>

                <textarea
                  name="message"
                  placeholder="Verzoeken en vragen"
                  className="textarea  textarea-bordered textarea-lg w-full max-w-full h-48"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center md:my-8 my-4 ">
          <button onClick={showAlert} className="btn hover:bg-[#468AFFE6] bg-[#468AFF]  md:px-32 px-36 py-2 text-[#FFFFFF] text-lg md:text-md lg:text-xl">
          Start Nu!
          </button>
        </div>
      </div>
      </form>
    </>
  );
};

export default PrijzenMarketing;
