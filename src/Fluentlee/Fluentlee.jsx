import { useEffect } from "react";

import fluentlee from "/src/assets/Fluentlee.png"
import fluentlee2 from "/src/assets/Fluentlee2.png"
import fluentlee3 from "/src/assets/Flunetlee3.png"

const Fluentlee = () => {
   useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
    return (
        <div className="space-y-16 mt-10 mx-auto  ">
        {/* Section 1 */}
        <div className="px-4 md:px-10 lg:ml-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:ml-10 lg:mr-24">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                className="w-full max-w-lg object-contain"
                src={fluentlee}
                alt="Henna Ghizlan Website Preview"
              />
            </div>
  
            {/* Right Details */}
            <div className="space-y-2">
              <h1 className=" text-[32px] text-[rgba(70,138,255,1)] font-plus-jakarta font-bold">
              FluentLee: Taal Leren op een Onconventionele en Speelse Manier
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
            Taal leren hoeft niet saai of eenzijdig te zijn. Met FluentLee introduceren we een geheel nieuwe manier om een taal onder 
            de knie te krijgen: peer-to-peer leerplatform onder toezicht van een docent. Dit innovatieve taalplatform maakt gebruik van speelse methoden, moderne technologieën en bewezen wetenschappelijke leermethoden om taalontwikkeling toegankelijk en leuk te maken.
            </p>
            
          </div>
        </div>
  
        {/* Section 2 */}
        <div className="px-4 md:px-10 space-y-6">
          <div className="flex justify-start lg:ml-24">
            <img
              className="w-full max-w-lg object-contain"
              src={ fluentlee2}
              alt="Bridal Henna"
            />
          </div>
        
        </div>
  
        {/* Section 3 */}
       

        <div className="px-4 md:px-10 space-y-6">
        
          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1 className="text-[22px] font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold">Leren zonder Grenzen: De Kern van FluentLee</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Traditionele taalcursussen vragen vaak om een rigide commitment, met vaste lessen en strakke roosters. FluentLee biedt een alternatief: flexibiliteit zonder in te leveren op effectiviteit. Dit platform is ontworpen voor volwassenen die hun trainingen willen inplannen op hun eigen tempo—of dat nu in een korte pauze is of tijdens een serieuze studieavond.
            De kern van het concept draait om peer-to-peer interactie. In plaats van alleen te vertrouwen op een docent, kunnen gebruikers actief deelnemen aan gesprekken met medegebruikers die dezelfde taal leren. Dit creëert een dynamische leeromgeving waarin kennisdeling wordt aangemoedigd en taal op een natuurlijke manier wordt toegepast. Een ervaren docent houdt het overzicht en grijpt in waar nodig, zodat het leerproces altijd effectief blijft
            </p>

            <h1 className="text-[22px] font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold">Speelsheid en Motivatie: Een Taal Leren dat Leuk Blijft</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            FluentLee is serieus in opzet, maar maakt leren tegelijkertijd leuk en stimulerend. Gamification speelt een cruciale rol binnen de branding en gebruikerservaring.
            </p>


            <ul className="list-disc list-inside text-left text-sm font-sans  leading-relaxed" >
                <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">AI-gestuurde aanbevelingen: Het systeem analyseert het leerproces en past oefeningen aan op basis van sterke en zwakke punten.</span></li>

                 <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Psychologische leermethoden: Methoden zoals spaced repetition en contextueel leren zorgen voor een diepere verankering van nieuwe kennis.</span></li>

                 <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Multimediale ondersteuning: Audio, video en interactieve scenarios simuleren echte gesprekken en verbeteren luister- en spreekvaardigheid.</span></li>

            </ul>

          </div>

          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1 className="text-[22px] font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold">Technologie en Wetenschap in Perfecte Harmonie</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Een belangrijk aspect van FluentLee is dat de nieuwste technologieën en wetenschappelijk onderbouwde methodieken zijn geïntegreerd in de leerervaring. De app is niet simpelweg een digitaal woordenboek of een verzameling lessen—het is een intelligente leeromgeving die zich aanpast aan de gebruiker.
            </p>


            <ul className="list-disc list-inside text-left text-sm font-sans  leading-relaxed" >
                <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">AI-gestuurde aanbevelingen: Het systeem analyseert het leerproces en past oefeningen aan op basis van sterke en zwakke punten.</span></li>
                 <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Psychologische leermethoden: Methoden zoals spaced repetition en contextueel leren zorgen voor een diepere verankering van nieuwe kennis.</span></li>
                 <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Multimediale ondersteuning: Audio, video en interactieve scenarios simuleren echte gesprekken en verbeteren luister- en spreekvaardigheid.</span></li>
        
            </ul>

          </div>

          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1 className="text-[22px] font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold">Een Branding die Past bij de Missie</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Bij het ontwikkelen van FluentLee stond niet alleen de technologie centraal, maar ook de uitstraling en identiteit van het platform. We hebben gekozen voor een branding die professionaliteit en speelsheid combineert—een visuele stijl die vertrouwen uitstraalt zonder stijf aan te voelen.
            </p>


            <ul className="list-disc list-inside text-left text-sm font-sans  leading-relaxed" >
                <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Kleuren en design: Een combinatie van heldere, uitnodigende kleuren en strakke lijnen die intuïtief en modern aanvoelen.</span></li>
                 <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Toegankelijke UX/UI: Een interface die gebruikers moeiteloos begeleidt, zonder dat ze verstrikt raken in een overload aan functies.</span></li>
                 <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Community-gevoel: Het platform voelt als een plek waar gebruikers zich thuis voelen en gemotiveerd blijven door de interactie met anderen.</span></li>
        
            </ul>

          </div>

          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1 className="text-[22px] font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold">FluentLee: Meer dan een App, een Volledige Leerervaring</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            FluentLee is meer dan alleen een app; het is een volledige leerervaring. Daarom hebben we ook een ondersteunende website ontwikkeld, die functioneert als informatiehub en landingspagina voor nieuwe gebruikers. Hier vinden geïnteresseerden uitgebreide uitleg over de werking van het platform, inspirerende succesverhalen en nuttige resources voor hun leerproces.
            De combinatie van technologie, psychologie en community-based learning maakt FluentLee uniek in de markt. Het is een platform dat taal leren transformeert van een uitdaging naar een leuke, sociale en effectieve ervaring. Met FluentLee wordt taalverwerving niet langer een verplichting, maar een boeiende reis vol interactie en motivatie.
            </p>
          </div>

          <div className="flex justify-start lg:ml-24">
            <img
              className="w-full max-w-lg object-contain"
              src={fluentlee3}
              alt="Bridal Henna"
            />
          </div>
        </div>
                   
      </div>
    );
};

export default Fluentlee;



