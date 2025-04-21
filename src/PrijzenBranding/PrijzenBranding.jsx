//import { FaChevronDown} from "react-icons/fa";
import das from "../assets/das.png";
import bg from "../assets/BrandPrice.jpg";
import { useEffect, useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { Upload } from "lucide-react";

const PrijzenBranding = () => {

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
      .sendForm('service_hxxv27j','template_a2312ql', form.current, {
        publicKey: 'Z3HTMkKpJIM22rfNm',
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




      // Left side checkbox 

      const [selectedGender, setSelectedGender] = useState({
        men: false,
        women: false,
        both: false
      });
    
      const handleChange = (e) => {
        const { name, checked } = e.target;
        setSelectedGender((prev) => ({
          ...prev,
          [name]: checked,
        }));
      };


      // left side file select

      const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Bestand gekozen:', file.name);
      // Handle upload logic here
    }
  };


  // Dropdown 1

  const [brand, setSubjectBrand] = useState('');
  
  const brands = [
    " Visuele Identiteit (logo, kleuren, typografie, huisstijl)",
    "Digitale Branding (website/webshop design, social media visuals)",
    "Corporate Branding (merkstrategie, positionering, storytelling)",
    " Product Branding (verpakking, campagne visuals, promotiemateriaal)",
    "Employer Branding (werkgeversimago, recruitment branding)",
  
  ];

  // Dropdown 2

  const [doel, setSubjectDoel] = useState('');
  
  const doels = [
    " B2B (Bedrijven & Ondernemers)",
    "B2C (Consumenten & Retail)",
    "E-commerce & Webshops",
    " Startups & Scale-ups",
    "Lokale & Dienstverlenende bedrijven",
    "High-end & Luxe merken"
  
  ];

  // Dropdown 3

  const [age, setSubjectAge] = useState('');
  
  const ages = [
    " 0-16 jaar",
    "16-21 jaar",
    "21-35 Jaar",
    " 35-50 jaar",
    "50-65 jaar",
    "65+"
  
  ];

  // Dropdown 4

  const [begroting, setSubjectBegroting] = useState('');
  
  const begrotings = [
    "€1.000 - €5.000 (Basisbranding & logo-ontwerp)",
    "€5.000 - €10.000 (Uitgebreide branding & strategie)",
    " €10.000+ (Complete merkstrategie + digitale branding)",
  
  ];



  return (
    <>
      <div className="bg-[#F5F5F5] w-full flex flex-col items-center py-16">
        <h1 className="text-xl font-bold text-gray-800">
          Branding Prijsplannen
        </h1>
        <h1 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
          Home
          <img className="w-5 h-[2px]" src={das} alt="separator" />
          Prijzen
        </h1>
      </div>
      {/*Hero section p-B */}
      <div
        className="hero h-[500px] md:h-[444px] lg:h-[444px]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="px-4 md:px-8 lg:px-12">
            <h1 className="mb-4 text-4xl md:text-5xl font-bold text-[#FFFFFF] font-plus-jakarta">
              Branding
            </h1>
            <p className="mb-4 ml-24 mr-24 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
              Bij Younitech geloven we dat sterke branding essentieel is voor
              het succes van jouw bedrijf. Onze aanpak combineert creativiteit
              met strategie om een merkidentiteit te creëren die resoneert en
              impact maakt. Of het nu gaat om het ontwerpen van een logo, het
              definiëren van je merkverhaal of het ontwikkelen van een
              consistente visuele stijl, wij bieden op maat gemaakte oplossingen
              die jouw merk naar een hoger niveau tillen.
            </p>
            <p className="mb-2 pt-4 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
            Vul het onderstaande formulier in om een zo duidelijk mogelijk beeld te schetsen van jouw aanvraag.
            </p>
            <p className="mb-4 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
            Kom je er niet uit? Neem gerust contact met ons op via
              <a href="/contactpagina"><span className="text-[#407BFF]"> contactpagina.</span></a>
            </p>
          </div>
        </div>
      </div>

      <form  ref={form} onSubmit={sendEmail}>
          {/* First Part */}
      <div className="md:px-36 px-6 mx-auto">
        <div className=" flex md:gap-[496px]">
          <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold md:mt-8 mt-4 mb-4">
            Basisinformatie:
          </h2>
          <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold md:-ml-56 mb-4 md:mt-8 mt-4  hidden sm:block ">
            Technisch
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
          {/* Left Side Inputs */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
              Naam (Voor en Achternaam)
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
                  placeholder="E-mail"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  Telefoonnummer
                </label>
                <input
                  type="number"
                  name="telephone"
                  placeholder="Bijv. +31 6 12345678"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Right Side Inputs */}

          <div className="flex flex-col gap-4">
            
            <div className="grid grid-cols-2 items-center">
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
              Voorkeurskleuren of themas
              </label>
              <input
                type="text"
                name="theams"
                placeholder="Eventuele specifieke kleurenschema's of visuele thema's"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

              <div className="mt-6 ml-10">
              <button
                      type="button"
                      onClick={handleClick}
                      className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-2 rounded-lg flex items-center gap-2"
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
              </div>

            </div>

 
            <div className="grid grid-cols-2 ">
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Inspiratie of concurrenten
              </label>
              <input
                type="text"
                name="inspiratie"
                placeholder="Voorbeelden van merken die u bewondert of concurrenten"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mt-6 ml-10">
              <button
                      type="button"
                      onClick={handleClick}
                      className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-2 rounded-lg flex items-center gap-2"
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
              </div>
            </div>



            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Eventuele specifieke merkelementen die nodig zijn
              </label>
              <input
                type="text"
                name="eventuele"
                placeholder="bijv. Logo, visitekaartjes, brochures, website -ontwerp"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd part */}

      <div className="md:px-0 px-6">
        <div className="md:px-36 mx-auto">
          <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold mt-8   mb-4">
            Informatie over brandingsproject:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Side Inputs */}
            <div className="flex flex-col gap-4">
              <div>
                <div className="relative">
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Type branding
                </label>
                <select
                  value={brand}
                  onChange={(e) => setSubjectBrand(e.target.value)}
                  className={`block w-full  px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${brand === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
                    >
                  <option value="" disabled hidden>
                  Uitkiezen
                  </option>
                  {brands .map((Uitki, index) => (
                    <option key={index} value={Uitki} className="text-gray-700  ">
                      {Uitki}
                    </option>
                  ))}
                </select>
                </div>
              </div>

              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  De kernwaarden en missie van het merk
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="korte"
                    placeholder="Korte beschrijving"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  Doelgroep
                </label>
                <select
                  value={doel}
                  onChange={(e) => setSubjectDoel(e.target.value)}
                  className={`block w-full  px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${brand === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
                    >
                
                  <option value="" disabled hidden>
                  Uitkiezen
                  </option>
                  {doels .map((option, index) => (
                    <option key={index} value={option} className="text-gray-700  ">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  Ages
                </label>
                <select
                  value={age}
                  onChange={(e) => setSubjectAge(e.target.value)}
                  className={`block w-full  px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${brand === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
                    >
                
                  <option value="" disabled hidden>
                  Uitkiezen
                  </option>
                  {ages.map((option, index) => (
                    <option key={index} value={option} className="text-gray-700  ">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="">
              <h3  style={{ fontWeight: '600', text:'16px',color: 'rgba(38, 50, 56, 1)', fontFamily: 'Plus Jakarta Sans, sans-serif'  }}>Op basis van demografie & geslacht</h3>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', color: '#999' }}>
                  <input
                    type="checkbox"
                    name="men"
                    checked={selectedGender.man}
                    onChange={handleChange}
                    style={{ marginRight: '0.5rem' }}
                  />
                  Men
                </label>
                <label style={{ display: 'flex', alignItems: 'center', color: '#999' }}>
                  <input
                    type="checkbox"
                    name="women"
                    checked={selectedGender.man}
                    onChange={handleChange}
                    style={{ marginRight: '0.5rem' }}
                  />
                  Women
                </label>
                <label style={{ display: 'flex', alignItems: 'center', color: '#999' }}>
                  <input
                    type="checkbox"
                    name="both"
                    checked={selectedGender.vrouw}
                    onChange={handleChange}
                    style={{ marginRight: '0.5rem' }}
                  />
                  Both
                </label>
              </div>
              </div>

              {/* upload image option */}
              <div className="">
                <div className="md:grid md:grid-cols-2 items-center gap-6">
                  {/* Left Side Input */}
                  <div>
                    <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                      Huidige branding (indien aanwezig)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="huidige"
                        placeholder="Geef details op"
                        className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Right Side Input (Moved Up) */}
                  <div className="">
                    <label className="block text-gray-700 font-medium mt-[50px]"></label>
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
                  </div>

                  {/* Image Upload Option */}
                </div>

                <div className="my-4">
                  <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                    Gewenste look en feel
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="gewenste"
                      placeholder="Uitkiezen"
                      className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  
                  </div>
                </div>

                <div>
                  <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                    Merkbericht/positionering
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="merkbericht"
                      placeholder="Wat wil je dat je merk met je publiek communiceert?"
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
                  value={begroting}
                  onChange={(e) => setSubjectBegroting(e.target.value)}
                  className={`block w-full  px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${brand === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
                    >
                
                  <option value="" disabled hidden>
                  Naam
                  </option>
                  {begrotings .map((begrot, index) => (
                    <option key={index} value={begrot} className="text-gray-700  ">
                      {begrot}
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
                    type="date"
                    name="voltoo"
                    placeholder="Date dd-mm-yyy"
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
                  placeholder="Verzoeken en/of vragen"
                  className="  focus:outline-none focus:ring-2 focus:ring-blue-600 textarea  textarea-bordered textarea-lg w-full h-52 max-w-full"
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

export default PrijzenBranding;
