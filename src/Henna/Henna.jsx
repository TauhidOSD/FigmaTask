
import henna1 from "/article/landing (1).png"
import henna2 from "/article/bridal henna.png"
import henna3 from "/article/event henna 1.png"
import sweeatble from "../assets/sweettable 1.png"

import { useEffect } from "react";


const Henna = () => {
   useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
    return (
      <div className="space-y-16 mt-10 mx-auto  ">
        {/* Section 1 */}
        <div className="px-4 md:px-10 lg:ml-12 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:ml-10 lg:mr-24">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                className="w-full max-w-lg object-contain"
                src={henna1}
                alt="Henna Ghizlan Website Preview"
              />
            </div>
  
            {/* Right Details */}
            <div className="space-y-2 ">
              <h1 className=" text-[32px] text-[rgba(70,138,255,1)] font-plus-jakarta font-bold">
              Een Unieke Webshop voor een Henna-Artist: Creativiteit in Digitale Vorm
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
                  View Live Site
                </button>
              </div>
            </div>
          </div>
  
          {/* Description */}
          <div className="mt-10 space-y-4 px-4 sm:px-6 md:px-8 lg:ml-5 lg:mr-20">
            <p className="text-left text-[22px] font-normal font-plus-jakarta text-[rgba(121,121,121,1)] leading-relaxed">
            Voor creatieve artiesten is een standaard webdesign simpelweg niet voldoende. Een Henna-artist wil niet alleen haar vakmanschap tonen via haar werk, maar ook via de uitstraling van haar online aanwezigheid. Daarom was het bij dit project essentieel om een website op maat te ontwikkelen, die niet slechts een kopie was van bestaande sjablonen. De uitdaging? Een platform dat zowel een portfolio als een webshop combineert, zodat klanten eenvoudig zowel diensten als producten kunnen afnemen.
            </p>
            
          </div>
        </div>
  
        {/* Section 2 */}
        <div className="px-4 md:px-10 space-y-6">
          <div className="flex justify-start lg:ml-24">
            <img
              className="w-full max-w-lg object-contain"
              src={henna2}
              alt="Bridal Henna"
            />
          </div>
          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1 className="text-[22px] font-semibold font-plus-jakarta text-[rgba(38,50,56,1)]">Van Concept tot Creatieve Realisatie</h1>
            <p className="text-left text-[22px] font-normal font-plus-jakarta text-[rgba(121,121,121,1)] leading-relaxed">
            De eerste stap was om de wensen en visie van de Henna-artist te begrijpen. In nauwe samenwerking met de klant ontwierpen we een website vanaf nul, zonder gebruik te maken van standaard templates. De site moest niet alleen functioneel zijn, maar ook een weerspiegeling vormen van haar artistieke stijl. Het design werd een verlengstuk van haar
             creativiteit: vloeiende patronen, warme tinten en een intuïtieve gebruikerservaring die haar unieke branding onderstreept.
              <br />
              De website fungeert niet alleen als een portfolio, waarin eerdere werken en projecten schitterend worden weergegeven, maar ook als een webshop waar klanten direct henna-producten en gepersonaliseerde 
              diensten kunnen bestellen. Dit maakt het voor bezoekers eenvoudig om de artistieke expertise van de Henna-artist te ervaren én om direct over te gaan tot aankoop.
            </p>
            
          </div>
        </div>
  
        {/* Section 3 */}
        <div className="px-4 md:px-10 flex justify-start lg:ml-24">
          <img
            className="w-full max-w-lg object-contain"
            src={henna3}
            alt="Event Henna"
          />
        </div>

      {/* Section 4 */}

        <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-28 lg:mr-24">
            <h1 className="text-[22px] font-semibold font-plus-jakarta text-[rgba(38,50,56,1)]">Van Concept tot Creatieve Realisatie</h1>
            <p className="text-left text-[22px] font-normal font-plus-jakarta text-[rgba(121,121,121,1)] leading-relaxed">
            Na de ontwikkeling van de website was het belangrijk dat de marketingstrategie naadloos aansloot op de bestaande branding van de Henna-artist. In plaats van een generieke aanpak, hebben we eerst uitvoerig 
            gekeken naar hoe de artiest zichzelf presenteert via organische content. Haar persoonlijke stijl, tone-of-voice en doelgroep werden in kaart gebracht, waarna we deze inzichten vertaalden naar een effectieve marketingstrategie.
              <br />
              Onze marketingaanpak bestaat uit meerdere lagen, die zowel snelle resultaten als langdurige groei realiseren:
            </p>

            <p className="text-left text-[22px] font-normal font-plus-jakarta text-[rgba(121,121,121,1)] leading-relaxed">
            1. Directe Impact: Krachtige Social Media Strategie
            </p>
            <p className="text-left text-[22px] font-normal font-plus-jakarta text-[rgba(121,121,121,1)] leading-relaxed">
            Snelheid is belangrijk, en daarom focussen we op een snelle en agressieve social media marketingaanpak. Dit houdt in:
            </p>

            <ul className="list-disc list-inside text-left text-sm font-sans  leading-relaxed" >
                <li> <span className="font-plus-jakarta font-normal text-[22px] text-[rgba(121,121,121,1)]">Gerichte advertenties op platforms zoals Instagram en TikTok om de juiste doelgroep te bereiken.</span></li>
                 <li> <span className="font-plus-jakarta font-normal text-[22px] text-[rgba(121,121,121,1)]">Visuele storytelling waarbij de Henna-artist centraal staat.</span></li>
                 <li> <span className="font-plus-jakarta font-normal text-[22px]  text-[rgba(121,121,121,1)]">Interactie met volgers om engagement te verhogen en vertrouwen op te bouwen.</span></li>
                 <li> <span className="font-plus-jakarta font-normal  text-[22px] text-[rgba(121,121,121,1)]">Samenwerkingen met influencers en tevreden klanten om organische groei te stimuleren.</span></li>
        
            </ul>



            <p className="text-left text-[22px] font-normal font-plus-jakarta text-[rgba(121,121,121,1)] leading-relaxed">
            2. Langdurige Groei: SEO en Vindbaarheid
            </p>
            <p className="text-left text-[22px] font-normal font-plus-jakarta text-[rgba(121,121,121,1)] leading-relaxed">
            Hoewel snelle marketingresultaten geweldig zijn, bouwen we ook aan een duurzame lange-termijnstrategie door middel van SEO-optimalisatie. Binnen een periode van 3 tot 9 maanden werken we aan:
            </p>

            <ul className="list-disc list-inside text-left text-sm font-sans  leading-relaxed" >
                <li> <span className="font-plus-jakarta font-normal text-[22px] text-[rgba(121,121,121,1)]">Het verbeteren van de vindbaarheid op zoekmachines zoals Google.</span></li>
                 <li> <span className="font-plus-jakarta font-normal  text-[22px] text-[rgba(121,121,121,1)]">Het ontwikkelen van een sterke contentstrategie via blogs en tutorials over henna-kunst.</span></li>
                 <li> <span className="font-plus-jakarta font-normal text-[22px]  text-[rgba(121,121,121,1)]">Het verkrijgen van backlinks en samenwerkingen met relevante platforms.</span></li>
                 
            </ul>

            <p className="text-left text-[22px] font-normal font-plus-jakarta text-[rgba(121,121,121,1)] leading-relaxed">
            Door deze strategieën slim te combineren, zorgen we ervoor dat de Henna-artist niet alleen snel resultaten boekt, maar ook op de lange termijn blijft groeien.
            </p>

            
          </div>

          {/* Section 5 */}
        <div className="px-4 md:px-10 flex justify-start lg:ml-24">
          <img
            className="w-full max-w-lg object-contain"
            src={sweeatble}
            alt="Event Henna"
          />
        </div>


        <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-28 lg:mr-24">
            <h1 className="text-[22px] font-semibold font-plus-jakarta text-[rgba(38,50,56,1)]">Creativiteit, Functionaliteit en Succes</h1>
            <p className="text-left text-[22px] font-normal font-plus-jakarta text-[rgba(121,121,121,1)] leading-relaxed">
            Een standaard website voldoet niet voor een artiest die leeft van haar creativiteit. Daarom was het ontwikkelen van een volledig op maat gemaakte 
            webshop en portfolio de juiste keuze. Maar een website alleen is niet genoeg—de marketing moet erop aansluiten, zodat het merk consistent en herkenbaar blijft.
            </p>
            <p className="text-left text-[22px] font-normal font-plus-jakarta text-[rgba(121,121,121,1)] leading-relaxed">
            Met een strategische mix van social media marketing en SEO-optimalisatie heeft de Henna-artist nu een krachtige online aanwezigheid die niet alleen haar werk op een prachtige manier presenteert, maar ook zorgt voor groeiende klantenkring 
            en bestellingen. Dit project is een perfect voorbeeld van hoe technologie en creativiteit samenkomen om een uniek, authentiek en winstgevend digitaal platform te creëren.
            </p>

           

      
          </div>


      </div>
    );
  };
  
  export default Henna;
  