import { FaChevronDown, FaUpload } from "react-icons/fa";
import das from "../assets/das.png";
import bg1 from "../assets/bg1.jpeg";
import { useEffect } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const PrijzenMarketing = () => {

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
            <p className="mb-4 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
              Bij Younitech staan we bekend om onze toewijding aan het leveren
              van hoogwaardige app-ontwikkelingsdiensten die voldoen aan de
              unieke behoeften van onze klanten. Of je nu een iOS, Android of
              cross-platform app nodig hebt, ons ervaren team van ontwikkelaars
              staat klaar om jouw ideeën tot leven te brengen. Van concept tot
              lancering en daar voorbij, we zorgen ervoor dat jouw app zowel
              functioneel als gebruiksvriendelijk is.
            </p>
            <p className="mb-2 pt-4 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
            Vul het onderstaande formulier in om jouw aanvraag zo volledig mogelijk te maken.
            </p>
            <p className="mb-4 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
           {" "}
            Hulp nodig? Neem contact met ons op via of de 
              <span className="text-[#407BFF]"> e-mail, telefoon </span> of de{" "}
              <a href="/Contact"> <span className="text-[#407BFF]">contactpagina.</span></a>
            </p>
          </div>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} >
            {/* First Part */}
      <div className="md:px-36 px-6 mx-auto">
        <div className=" flex md:gap-[496px]">
          <h2 className="text-xl text-[#407BFF] font-semibold md:mt-8 mt-4 mb-4">
            Basisinformatie:
          </h2>
          <h2 className="text-xl md:-ml-12  text-[#407BFF] font-semibold mb-4 md:mt-8 mt-4  hidden sm:block ">
            Technische details:
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
          {/* Left Side Inputs */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Naam (Eerste en Aarthternaam)
              </label>
              <input
                type="text"
                name="name"
                placeholder="Naam"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
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
                <label className="block text-gray-700 font-medium mb-1">
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
                <label className="block text-gray-700 font-medium mb-1">
                  Telefoonnummer
                </label>
                <input
                  type="number"
                  name="telephone"
                  placeholder="Telephone"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Right Side Inputs */}

          <div className="flex flex-col gap-4">
            <h2 className="text-xl text-[#407BFF] font-semibold md:mb-4 md:hidden block mt-12 ">
              Technische details:
            </h2>

            <div className="md:grid md:grid-cols-2 gap-6">
              {/* Left Side Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
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
              <label className="block text-gray-700 font-medium mb-1">
                Integratievereisten
              </label>
              <input
                type="text"
                name="integrat"
                placeholder="Voorbeelden van merken die u bewondert of concurrenten"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Backend -behoeften
              </label>
              <input
                type="text"
                name="backend"
                placeholder="bijv. Logo, visitekaartjes, brochures, website -ontwerp"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Preferred Technology Stack
              </label>
              <input
                type="text"
                name="preferred"
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
          <h2 className="text-xl mt-2 text-[#407BFF] font-semibold mb-4">
            App -projectinformatie:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Side Inputs */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Type app
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="apptype"
                    placeholder="Uitkiezen"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Platform (s) vereist
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="platform"
                    placeholder="Korte beschrijving"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  App -functies
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="functies"
                    placeholder="Uitkiezen"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
                </div>
              </div>

              {/* upload image option */}
              <div className="">
                <div className="my-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    Doelgroep
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="doelgroep"
                      placeholder="Uitkiezen"
                      className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Ontwerpvoorkeuren
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="Ontwerpvoorkeuren"
                      placeholder="Wat wil je dat je merk met je publiek communiceert?"
                      className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Inputs */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl text-[#407BFF] font-semibold mb-4">
                Begroting
              </h2>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Budgetbereik
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="budgetbereik"
                    placeholder="Naam"
                    className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaChevronDown className="absolute right-3 top-3 text-gray-500" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
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
                <h2 className="text-xl text-[#407BFF] font-semibold mb-4">
                  Aanvullende opmerkingen:
                </h2>
                <h2 className="block text-gray-700 font-medium mb-1">
                  Verzoek en vragen
                </h2>

                <textarea
                  name="message"
                  placeholder="Verzoeken en vragen"
                  className="textarea  textarea-bordered textarea-lg w-full max-w-full"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center md:my-8 my-4 ">
          <button onClick={showAlert} className="btn hover:bg-[#468AFFE6] bg-[#468AFF]  md:px-32 px-36 py-2 text-[#FFFFFF] text-lg md:text-md lg:text-xl">
          Boek een offerte
          </button>
        </div>
      </div>
      </form>
    </>
  );
};

export default PrijzenMarketing;
