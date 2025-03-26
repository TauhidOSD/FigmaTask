import { useEffect } from "react";

import shift1 from "/src/shassets/shift_guide.png"
import shift2 from "/src/shassets/shift_guide1.png"
import shift3 from "/src/shassets/shift_guide2.png"
import shift4 from "/src/shassets/shift_guide3.png"

const ShiftMode = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

    return (
        <div className="space-y-16 mt-10 mx-auto  ">
        {/* Section 1 */}
        <div className="px-4 md:px-10 lg:ml-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:ml-10 lg:mr-24">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                className="w-full max-w-4xl object-contain"
               src={shift1}
                alt="Henna Ghizlan Website Preview"
              />
            </div>
  
            {/* Right Details */}
            <div className="space-y-2 ml-14">
              <h1 className=" text-[32px] font-plus-jakarta text-[rgba(70,138,255,1)] font-bold">
              Shiftguide: De Ultieme Roosterplanning App voor de Uitzendbranche en Multi-Location Bedrijven
              </h1>
              
              {/* Details List */}
              <div className="space-y-3 border-b border-slate-200 py-2">
                <div className="flex justify-between items-center px-2">
                  <p className="text-[18px] font-medium font-plus-jakarta text-[rgba(38,50,56,1)]">Category:</p>
                  <p className="text-[18px] font-plus-jakarta font-normal text-[rgba(73,73,73,1)]">UI Design</p>
                </div>
                
                <div className="space-y-3 border-t border-b border-slate-200 py-3">
                <div className="flex justify-between items-center px-2">
                  <p className="text-[18px] font-medium font-plus-jakarta text-[rgba(38,50,56,1)]">Tools:</p>
                  <p className="text-[18px] font-plus-jakarta font-normal text-[rgba(73,73,73,1)]">Figma</p>
                </div>
              
                </div>
                <div className="">
                <div className="flex justify-between items-center px-2">
                  <p className="text-[18px] font-medium font-plus-jakarta text-[rgba(38,50,56,1)]">Project date:</p>
                  <p className="text-[18px] font-plus-jakarta font-normal text-[rgba(73,73,73,1)]">February, 2020</p>
                </div>
             
                </div>
                <div className=" border-t border-slate-200 pt-3">
                <div className="flex justify-between items-center px-2">
                  <p className="text-[18px] font-medium font-plus-jakarta text-[rgba(38,50,56,1)]">Share this:</p>
                  <p className="text-[18px] font-plus-jakarta font-normal text-[rgba(73,73,73,1)]">
                    Facebook, Twitter, Linkedin
                  </p>
                </div>
                </div>
              </div>
  
              <div className="mt-5">
                <button className="relative text-white btn bg-[#468AFF] px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-[#3570D4] hover:scale-105 active:scale-95 focus:outline-none text-sm sm:text-base">
                Bekijk Live site
                </button>
              </div>
            </div>

          </div>
  
          {/* Description */}
          <div className="mt-10 space-y-4 px-4 sm:px-6 md:px-8 lg:ml-5 lg:mr-20">
            
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            In een wereld waar efficiëntie en inzicht in
             personeelskosten cruciaal zijn, introduceert 
             Younitech Shiftguide: de slimme en toegankelijke
              applicatie voor roosterplanning. Ontwikkeld met 
              de uitzendbranche en bedrijven met meerdere vestigingen in 
              gedachten, biedt Shiftguide een innovatieve oplossing om personeel 
              effectief in te zetten, kosten te beheersen en administratieve lasten te verminderen.
            </p>
          </div>
        </div>
  
        {/* Section 2 */}
        <div className="px-4 md:px-10 space-y-6">
          <div className="flex justify-start lg:ml-24">
            <img
              className="w-full max-w-lg object-contain"
              src={ shift2 }
              alt="Bridal Henna"
            />
          </div>
          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1 className="text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">De Kracht van Shiftguide: Meer dan Alleen Roosters</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Waar veel planningssoftware zich beperkt tot het inplannen van medewerkers, gaat Shiftguide een stap verder. De app is ontwikkeld met een diep begrip van de uitdagingen binnen de uitzendbranche en bedrijven die werken met flexibele personeelsinzet op verschillende locaties.
            </p>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Een van de meest onderscheidende functies van Shiftguide is de bruto kostenberekening. Werkgevers en uitzendbureaus kunnen direct inzicht krijgen in de exacte loonkosten, inclusief toeslagen. Dit voorkomt verrassingen achteraf en helpt bedrijven bij het beheren van hun budgetten en winstmarges.
            </p>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Daarnaast is gebruiksgemak een belangrijke pijler van Shiftguide. De applicatie is ontworpen met een eenvoudige en overzichtelijke interface, waardoor zowel werkgevers als werknemers snel de benodigde informatie kunnen vinden. Dankzij de heldere blauw-wit-grijze kleurstelling, kenmerkend voor Younitech, straalt Shiftguide eenvoud, vertrouwen en professionaliteit uit.
            </p>
            
          </div>
        </div>
  
        {/* Section 3 */}
        <div className="px-4 md:px-10 flex justify-start lg:ml-24">
          <img
            className="w-full max-w-lg object-contain"
            src={shift3}
            alt="Event Henna"
          />
        </div>



        <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-28 lg:mr-28">
            <h1 className="text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">1. Roosterplanning op maat</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Met Shiftguide kunnen werkgevers moeiteloos personeel inplannen, rekening houdend met beschikbaarheid, locatievoorkeuren en wetgeving omtrent werktijden. De applicatie houdt automatisch rekening met toeslagen en overuren, waardoor bedrijven geen fouten maken in hun loonadministratie.
            </p>

            <h1 className="text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">2. GPS-gebaseerde in- en uitcheckfunctie</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Een unieke toevoeging aan Shiftguide is de ingebouwde in- en uitcheckfunctie op basis van GPS. Hierdoor kunnen medewerkers eenvoudig registreren wanneer ze op locatie arriveren en vertrekken, wat zorgt voor een nauwkeurige urenregistratie.
            </p>

            <h1 className="text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">3. Ziekte- en absentiemeldingen</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Medewerkers kunnen eenvoudig via de app ziekte of andere onvoorziene omstandigheden melden. Dit stelt planners en HR-afdelingen in staat om snel in te spelen op roosterwijzigingen en vervangingen te regelen.
            </p>

            <h1 className="text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">4. Integratie met financiële applicaties</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Shiftguide is niet alleen een planningstool, maar ook een krachtige schakel in het financiële proces. De applicatie integreert naadloos met POS-systemen en boekhoudsoftware, waardoor goedgekeurde uren direct worden verwerkt voor uitbetaling. Door meerdere authenticatielagen wordt data eerst gevalideerd voordat het naar financiële systemen wordt gestuurd, wat de kans op fouten en fraude minimaliseert.
            </p>
            
          </div>








        {/* Section 4 */}
        <div className="px-4 md:px-10 flex justify-start lg:ml-24">
          <img
            className="w-full max-w-lg object-contain"
            src={shift4}
            alt="Event Henna"
          />
        </div>


        {/** section 5 */}

        <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-28 lg:mr-28">
            <h1 className="text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">Een Oplossing voor het MKB: Betaalbaar en Krachtig</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Veel bestaande roosterplanningstools zijn duur en complex, waardoor kleine en
             middelgrote bedrijven vaak vastzitten aan inefficiënte processen. Shiftguide 
             biedt een betaalbaar alternatief dat tegelijkertijd krachtiger en flexibeler 
             is dan veel high-end softwarepakketten. Dit maakt de applicatie ideaal voor
              het MKB en uitzendbureaus die behoefte 
            hebben aan een schaalbare en gebruiksvriendelijke oplossing.
            </p>
            <br />
            <h1 className="text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">Design, Complexiteit en Pragmatiek in Harmonie</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Younitech staat bekend om zijn focus op balans tussen functionaliteit en 
            gebruiksvriendelijkheid. Shiftguide is ontwikkeld met een visie waarin design,
             complexiteit en pragmatiek in harmonie samenwerken.
            </p>

            <ul className="list-disc list-inside text-left text-sm font-sans  leading-relaxed" >
                <li><span className=" font-semibold font-plus-jakarta text-[rgba(38,50,56,1)] text-[22px]">Design:</span> <span className="text-[rgba(121,121,121,1)] font-plus-jakarta text-[22px] font-normal ">De applicatie straalt eenvoud
                 en professionaliteit uit, zonder afleidende elementen. 
                De kleuren en interface zijn zorgvuldig gekozen om vertrouwen
                 en efficiëntie te bevorderen.</span></li>

                 <li><span className="font-semibold font-plus-jakarta text-[rgba(38,50,56,1)] text-[22px]">Complexiteit:</span> <span className="text-[rgba(121,121,121,1)] font-plus-jakarta text-[22px] font-normal ">De applicatie straalt eenvoud
                 en professionaliteit uit, zonder afleidende elementen. 
                De kleuren en interface zijn zorgvuldig gekozen om vertrouwen
                 en efficiëntie te bevorderen.</span></li>

                 <li><span className="font-semibold font-plus-jakarta text-[rgba(38,50,56,1)] text-[22px]">Pragmatiek:</span> <span className="text-[rgba(121,121,121,1)] font-plus-jakarta text-[22px] font-normal ">De applicatie straalt eenvoud
                 en professionaliteit uit, zonder afleidende elementen. 
                De kleuren en interface zijn zorgvuldig gekozen om vertrouwen
                 en efficiëntie te bevorderen.</span></li>

            </ul>
            
            
            <h1 className="text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">Een Volledige Integratie van Idee tot Realiteit</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Om gebruikers een complete ervaring te bieden, heeft Younitech naast de app
             ook een bijbehorende website ontwikkeld. Deze website volgt dezelfde visuele
              stijl als de applicatie en dient als een informatieve hub waar werkgevers en 
              werknemers alles kunnen vinden over de werking en voordelen van Shiftguide.
               Daarnaast fungeert de website als landingspagina voor marketingcampagnes,
             waardoor geïnteresseerde bedrijven direct kunnen starten met Shiftguide.
            </p>
            
          </div>



      </div>
    );
};

export default ShiftMode;