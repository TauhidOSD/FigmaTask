import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import span4 from "../shassets/span (4).png";
import span5 from "../shassets/span (5).png";
import link13 from "../shassets/Link (13).png";
import img2 from "../assets/avater-testi-2.png.png";
import img3 from "../assets/avater-testi-3.png.png";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/500.css";

const Appmarket = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const [color, setColor] = useState("text-black");
  const [color1, setColor1] = useState("text-black");
  const [color2, setColor2] = useState("text-black");

  const onChangeColor = (setColorFunc) => {
    setColorFunc((prevColor) =>
      prevColor === "text-black" ? "text-blue-500" : "text-black"
    );
  };

  return (
    <div className=" lg:w-[1260px] 2xl:w-[1440px]">
      {/** First part flex justify-center gap-20 items-center m-20 start from here  */}

      <div className="grid  sm:grid-cols-1 lg:grid-cols-2 mx-auto  mt-20 ">
        <div className="mb-5 ml-2 lg:ml-32">
          <img className="w-96" src="/linkImages/amico.png" alt="" />
        </div>

        <div className="mt-10 mb-10 mr-2 lg:mr-32">
          <div className="ml-5 ">
            <p className=" rounded-3xl bg-[rgba(180,121,217,0.15)] text-[rgba(180,121,217,1)] font-bold font-plus-jakarta p-1 lg:p-2 text-[14px] lg:text-[18px] text-center mb-3  w-5/12  lg:w-2/5">
              Ontwerp uw eigen
            </p>
          </div>
          <h1 className="text-[40px] font-bold text-left font-plus-jakarta ml-5">
            Uw visie, onze{" "}
          </h1>
          <h1 className="text-[40px] font-bold text-left font-plus-jakarta mb-6 ml-5">
            expertise
          </h1>
          <p className="text-[18px] text-left text-[rgba(126,126,126,1)] font-medium font-plus-jakarta  ml-5 mr-5">
            Bij Younitech begrijpen we dat een sterke, goed ontworpen applicatie
            essentieel is voor succes in de moderne wereld. Of u nu een nieuwe
            mobiele app wilt lanceren, een webapplicatie wilt bouwen of een
            bestaande applicatie wilt optimaliseren – wij zorgen voor
            oplossingen die impact maken.
          </p>
        </div>
      </div>

      {/** First part end  */}

      {/** second  part start lg:mr-20 lg:ml-20 lg:mt-20 lg:mb-20 */}

      <div className=" mt-10 px-5 lg:px-32 mx-auto  gap-8 grid sm:grid-cols-1 lg:grid-cols-3 items-center justify-center  ">
        <div className=" ">
          <div className="flex items-center">
            <div className="mr-5">
              {" "}
              <img src="/grouppic/Group.png" alt="" />
            </div>
            <h1 className="text-left text-[20px] text-[rgba(38,50,56,1)] font-bold">
              Strategie op maat
            </h1>
          </div>
          <p className="text-left  lg:ml-[78px]  text-[16px] text-[rgba(126,126,126,1)] font-plus-jakarta font-medium">
            Wij helpen uw visie om te zetten in een werkende oplossing
          </p>
        </div>

        <div className="">
          <div className="flex  items-center">
            <div className="mr-5">
              {" "}
              <img src="/src/assets/hugeicons_corporate.png" alt="" />
            </div>
            <div className="">
              <h1 className="text-left text-[20px] text-[rgba(38,50,56,1)] font-bold">
                Innovatieve ontwerpen
              </h1>
            </div>
          </div>
          <p className="text-left lg:ml-[73px] text-[16px] text-[rgba(126,126,126,1)] font-plus-jakarta font-medium">
            Gebruiksvriendelijke interfaces die uw gebruikerservaring verbeteren{" "}
          </p>
        </div>

        <div className="">
          <div className="flex items-center">
            <div className="mr-5">
              {" "}
              <img src="/grouppic/Clip path group (1).png" alt="" />
            </div>
            <div className="">
              <h1 className="text-left text-[20px] text-[rgba(38,50,56,1)] font-bold">
                Schaalbare technologie
              </h1>
            </div>
          </div>

          <p className="text-left lg:ml-[75px] text-[16px] text-[rgba(126,126,126,1)] font-plus-jakarta font-medium">
            {" "}
            Apps die met uw bedrijf meegroeien en toekomstbestendig zijn.{" "}
          </p>
        </div>
      </div>

      {/** second  part end  */}

      {/** third   part start from here */}

      <div className="mx-auto pt-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 items-center lg:px-[60px] ">
          <div className=" flex justify-between ml-2 gap-20 w-auto">
            <div className=" ml-2 lg:ml-12">
              <div className="mt-5 mb-5  mr-20 ">
                <p className="rounded-3xl   bg-[rgba(180,121,217,0.15)] text-[rgba(180,121,217,1)]  p-1 lg:p-2 text-[14px] lg:text-[18px] text-center font-bold mb-3 font-plus-jakarta mt-5 w-3/5 lg:w-3/6">
                  Ontwerp uw eigen
                </p>
              </div>
              <h1 className="text-[36px] mb-10  text-left font-bold font-plus-jakarta ">
                Waarom kiezen voor Younitech?
              </h1>

              <div className="">
                <div className="flex gap-2  mb-3">
                  <div className="">
                    <img src={span4} alt="" />
                  </div>
                  <div className="">
                    <h1 className="font-semibold text-[18px] text-[rgba(38,50,56,1)] font-plus-jakarta">
                      Op maat gemaakte oplossingen{" "}
                    </h1>
                  </div>
                </div>
                <p className="mr-3 font-plus-jakarta text-[15px] font-medium text-[rgba(126,126,126,1)]">
                  Elke app wordt volledig afgestemd op uw specifieke eisen en
                  doelstellingen.
                </p>
              </div>

              <div className=" mt-5">
                <div className="">
                  <div className="flex gap-2 mb-3">
                    <div className="">
                      <img src={span5} alt="" />
                    </div>
                    <div className="">
                      <h1 className="font-semibold text-[18px] text-[rgba(38,50,56,1)] font-plus-jakarta">
                        Geavanceerde technologie
                      </h1>
                    </div>
                  </div>
                  <p className="mr-3 text-[15px] font-medium text-[rgba(126,126,126,1)] font-plus-jakarta ">
                    Wij maken gebruik van moderne tools en frameworks zoals
                    React Native, Flutter, en AWS.
                  </p>
                </div>
              </div>

              <div className=" mt-5">
                <div className="">
                  <div className="flex gap-2 mb-3">
                    <div className="">
                      <img src={link13} alt="" />
                    </div>
                    <div className="">
                      <h1 className="font-semibold text-[18px] text-[rgba(38,50,56,1)] font-plus-jakarta">
                        End-to-end support
                      </h1>
                    </div>
                  </div>
                  <p className="mr-3 font-plus-jakarta text-[15px] font-medium text-[rgba(126,126,126,1)]">
                    Van concept tot lancering en daarna – wij staan altijd voor
                    u klaar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mr-10">
            <img className="w-auto" src="/linkImages/rafiki.png" alt="" />
          </div>
        </div>
      </div>

      {/** third   part end here */}

      {/** fourth part start from here
       *
       */}

      <div className=" justify-center mx-auto  mt-10">
        <div className="items-center justify-center flex mt-10 mb-4">
          <p className=" rounded-3xl bg-[rgba(180,121,217,0.15)] text-[rgba(180,121,217,1)] font-bold p-1 lg:p-2  text-[14px] lg:text-[18px] text-center  mb-3 font-plus-jakarta w-2/6  lg:w-2/12">
            Hoe het werkt
          </p>
        </div>
        <h1 className="md:text-[40px] text-4xl font-bold decoration-4 text-center">
          Hoe wij uw idee tot leven brengen
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 m-10 lg:m-24">
        {[
          {
            imgSrc: "/textpic/Text (1).png",
            title: "Concept en Strategie",
            description:
              "We beginnen met een uitgebreide analyse van uw behoeften en doelen. Samen met u ontwikkelen we een duidelijke strategie en roadmap die uw project richting geeft.",
          },
          {
            imgSrc: "/textpic/Text (2).png",
            title: "Ontwikkeling en Ontwerp",
            description:
              "Ons team creëert een visueel aantrekkelijk en functioneel ontwerp dat aansluit bij uw merkidentiteit. Daarna bouwen we de applicatie met behulp van de nieuwste technologieën en frameworks.",
          },
          {
            imgSrc: "/textpic/Link (6).png",
            title: "Testen en Optimalisatie",
            description:
              "We voeren rigoureuze tests uit om ervoor te zorgen dat de applicatie perfect functioneert. Onze focus ligt op kwaliteit, snelheid en prestaties.",
          },
          {
            imgSrc: "/textpic/Link (7).png",
            title: "Implementatie en Ondersteuning",
            description:
              "Na de lancering bieden wij doorlopende ondersteuning en onderhoud, zodat uw app altijd up-to-date en operationeel blijft.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="text-center p-4 flex flex-col items-center"
          >
            <img className="w-16 h-16 mb-4" src={item.imgSrc} alt="" />
            <h1 className="font-bold text-[20px] font-plus-jakarta mb-2">
              {item.title}
            </h1>
            <p className="text-[15px] font-medium text-gray-600 font-plus-jakarta leading-relaxed text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/** fourth part end here */}

      {/** fifth part start from here */}

      <div className=" flex flex-col lg:flex-row gap-8 px-6 lg:px-30 py-8 mx-auto">
        <div className="lg:ml-20  my-6  lg:mr-16">
          <div className="mr-10">
            <p className="rounded-3xl bg-[#B479D926] text-[#B479D9] font-bold p-1 lg:p-2 lg:text-[18px] text-center  mb-3 font-plus-jakarta   w-3/6  lg:w-3/5">
              Ondersteuning
            </p>
          </div>
          <h1 className="text-[40px]  font-plus-jakarta font-bold mb-2 text-left ">
            Veelgestelde
          </h1>
          <h1 className="text-[40px] font-plus-jakarta font-bold mb-2 text-left ">
            {" "}
            Vragen
          </h1>

          <p className="font-plus-jakarta mt-3  text-left text-[#7E7E7E]">
            Heeft u vragen over onze brandingdiensten?{" "}
          </p>

          <p className="font-plus-jakarta mt-2  text-left text-[#7E7E7E]">
            Wij staan klaar om uw vragen te beantwoorden{" "}
          </p>
          <p className="font-plus-jakarta  mt-2 text-left text-[#7E7E7E]">
            {" "}
            en u te begeleiden in het brandingproces.
          </p>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          {/* Button 1 */}
          <div>
            <button
              onClick={() => {
                toggleSection("logo");
                onChangeColor(setColor);
              }}
              className={`w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-[#FFFFFF] text-[#263238] py-2 px-4 text-left rounded-md flex justify-between items-center ${color}`}
            >
              Hoe lang duurt het om een app te ontwikkelen?
              <GoChevronDown
                className={`transform transition-transform ${
                  activeSection === "logo" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeSection === "logo" && (
              <p className="mt-2 text-gray-600">
                Branding bouwt een sterke band en vertrouwen op met je
                doelgroep. We helpen bestaande ondernemers met een authentieke
                merkbeleving en nieuwe ondernemers met een herkenbare
                identiteit. Zo versterken we je merk voor duurzame groei.
              </p>
            )}
          </div>

          {/* Button 2 */}
          <div>
            <button
              onClick={() => {
                toggleSection("printMedian");
                onChangeColor(setColor1);
              }}
              className={`w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-[#FFFFFF] text-[#263238] py-2 px-4 text-left rounded-md flex justify-between items-center ${color1}`}
            >
              Wat voor soort apps ontwikkelen jullie?
              <GoChevronDown
                className={`transform transition-transform ${
                  activeSection === "printMedia" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeSection === "printMedian" && (
              <p className="mt-2 text-gray-600">
                Wij ontwikkelen een breed scala aan apps, van op maat gemaakte
                mobiele applicaties tot webgebaseerde platforms. We richten ons
                op het creëren van gebruiksvriendelijke apps voor verschillende
                sectoren zoals gezondheid, e-commerce, en onderwijs
              </p>
            )}
          </div>

          {/* Button 3 */}
          <div>
            <button
              onClick={() => {
                toggleSection("printMedia");
                onChangeColor(setColor2);
              }}
              className={`w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-[#FFFFFF] text-[#263238] py-2 px-4 text-left rounded-md flex justify-between items-center ${color2}`}
            >
              Bieden jullie ondersteuning na de lancering?
              <GoChevronDown
                className={`transform transition-transform ${
                  activeSection === "printMedia" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeSection === "printMedia" && (
              <p className="mt-2 text-gray-600">
                Ja, wij bieden volledige ondersteuning na de lancering. Dit
                omvat het monitoren van de prestaties van de app, het oplossen
                van eventuele technische problemen, en het aanbieden van updates
                en onderhoud om ervoor te zorgen dat de app altijd optimaal
                blijft functioneren.
              </p>
            )}
          </div>
        </div>
      </div>

      {/** fifth part end here */}

      {/** sixth part start here flex justify-between m-24 items-center */}

      <div className="flex flex-col lg:flex-row gap-8 px-6 md:px-20 lg:px-20 py-10 mx-auto">
        {/* Left Section */}
        <div className="mt-6 ml-3">
          <p className="rounded-3xl  p-1 lg:p-2 text-center font-bold text-[18px] bg-[#B479D926] text-[#B479D9] mb-3 font-plus-jakarta  w-2/5 lg:w-3/5">
            Testimonials
          </p>

          <div className="">
            <h1 className="text-[40px] font-plus-jakarta font-semibold text-left">
              Wat onze
            </h1>
            <h1 className="text-[40px] font-plus-jakarta mb-5 font-semibold text-left ">
              klanten zeggen
            </h1>
          </div>

          <p className="font-plus-jakarta mt-3 text-[#7e7E7E] text-left">
            Wij ondersteunen een breed{" "}
          </p>
          <p className=" font-plus-jakarta mt-2 text-[#7e7E7E] text-left">
            scala aan bedrijven. Geef je merk
          </p>
          <p className="mb-9 font-plus-jakarta mt-2 text-[#7e7E7E] text-left">
            de boost die het verdient!
          </p>

          <div className=" flex justify-start">
            {" "}
            <button className="px-4 py-2 rounded-lg bg-[rgba(70,138,255,1)] text-[16px] text-[rgba(255,255,255,1)] font-plus-jakarta">
              Boek nu je offerte!
            </button>
          </div>
        </div>

        {/* Right Section (Cards) */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
            Efficiënte Routeplanning met Younitech
            </h2>
            <p className="text-gray-600 leading-relaxed">
              "Voorheen was routeplanning een nachtmerrie – alles ging via Excel
              en efficiëntie was ver te zoeken. Younitech ontwikkelde een
              planningssysteem dat ritten eerlijk en milieuvriendelijk verdeelt.
              Mijn planner kan eindelijk rustig een kop koffie drinken zonder
              boze telefoontjes. Beste keuze van het jaar!"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={img2}
                alt="Sophie de Vries"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Sophie de Vries</h3>
                <p className="text-sm text-gray-500">
                  Eigenaar van een retailbedrijf
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
            Slimmer HR-beheer met Geautomatiseerde Processen
            </h2>
            <p className="text-gray-600 leading-relaxed">
              "Ons HR-proces was chaotisch, met eindeloze vragen over documenten
              en startdata. Dankzij Younitech's CRM-systeem is alles
              geautomatiseerd, krijgen kandidaten direct updates en werkt ons
              team veel efficiënter. Dit bracht rust én verhoogde de
              productiviteit enorm!"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={img3}
                alt="Mark Janssen"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Mark Janssen</h3>
                <p className="text-sm text-gray-500">
                  CEO van een tech-startup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appmarket;
