import { useEffect } from "react";

import ahoyy1 from "../assets/Onze1.png"
import ahoyy2 from "../assets/Onze2.png"
import ahoyy3 from "../assets/Onze3.png"


const Ahoyy = () => {

   useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
    return (
        <div className="space-y-16 mt-10 mx-auto  ">
        {/* Section 1 */}
        <div className="px-4 md:px-10 lg:ml-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center lg:ml-10 lg:mr-18">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                className="w-full max-w-lg object-contain"
                src={ahoyy1}
                alt="Henna Ghizlan Website Preview"
              />
            </div>
  
            {/* Right Details */}
            <div className="space-y-2 w-[400px]">
              <h1 className=" text-xl text-[32px] text-[rgba(70,138,255,1)] font-plus-jakarta font-bold">
              Onze Marketingstrategie: Slim, Kostenbewust en Effectief
              </h1>
              
              {/* Details List */}
              <div className="space-y-3 border-b border-slate-200 py-2">
                <div className="flex justify-between items-center px-2">
                  <p className="text-[18px] font-medium font-plus-jakarta text-[rgba(38,50,56,1)] ">Category:</p>
                  <p className="text-[18px] font-plus-jakarta font-normal text-[rgba(73,73,73,1)] ">UI Design</p>
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
            In een wereld waar marketingbudgetten vaak de doorslag geven, kiezen wij voor een andere aanpak. Wij geloven niet in het blindweg uitgeven van geld aan dure advertenties, maar in het strategisch inzetten van middelen om maximale impact te genereren. Onze marketingstrategie draait om efficiëntie, ROI (Return on Investment) en ROAS (Return on Ad Spend). We stretchen elke euro zo ver mogelijk en richten ons op slimme manieren om zichtbaarheid en groei te realiseren.
            </p>
            
          </div>
        </div>
  
        {/* Section 2 */}
        <div className="px-4 md:px-10 space-y-6">
          <div className="flex justify-start lg:ml-24">
            <img
              className="w-full max-w-lg object-contain"
              src={ahoyy2}
              alt="Bridal Henna"
            />
          </div>
          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1 className="text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">SEO: Duurzame Vindbaarheid met Hoog Rendement</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Een van onze kernstrategieën is zoekmachineoptimalisatie (SEO). In plaats van afhankelijk te zijn van betaalde advertenties, bouwen we merken op door een solide organische vindbaarheid te creëren. Dit doen we door:
            </p>


            <ul className="list-disc list-inside text-left text-sm font-sans  leading-relaxed" >
                <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Contentcreatie: Regelmatige, waardevolle en goed geoptimaliseerde content die zowel klanten als zoekmachines aanspreekt.</span></li>
                 <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Technische SEO: Een snelle, gebruiksvriendelijke website met een sterke structuur en mobiele optimalisatie.</span></li>
                 <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Linkbuilding: Kwalitatieve backlinks om de autoriteit en zichtbaarheid te vergroten</span></li>
            </ul>
            <p className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">SEO is een lange-termijnstrategie, maar wanneer goed uitgevoerd, levert het een duurzame en kosteneffectieve stroom van organisch verkeer op. Dit bespaart uiteindelijk op advertentiekosten en zorgt voor een stabiele groei.</p>
          </div>
        </div>
  
        {/* Section 3 */}
        

        <div className="px-4 md:px-10 space-y-6">
        
          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1 className="text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">SMMA: Gericht en Meetbaar Succes op Sociale Media</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Social Media Marketing (SMMA) is een essentieel onderdeel van onze strategie. Hierin combineren we betaalde campagnes met organische content om maximale exposure te genereren.
            </p>


            <ul className="list-disc list-inside text-left text-sm font-sans  leading-relaxed" >
                <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Snelle, agressieve aanpak: In de eerste fase zetten we krachtige advertenties in om zichtbaarheid te vergroten en data te verzamelen.</span></li>
                 <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Gerichte targeting: We analyseren onze doelgroep en testen verschillende advertentievarianten om de meest kosteneffectieve strategie te bepalen.</span></li>
                 <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Conversiegerichte content: Creatieve posts, reels en interacties om engagement te stimuleren en organische groei te bevorderen.</span></li>
                 <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Retargeting en optimalisatie: We hergebruiken verzamelde data om advertenties slimmer en efficiënter te maken.
                 Hierdoor vermijden we verspilling van advertentiebudget en focussen we op hoge ROAS (meer omzet per advertentie-euro).</span></li>
            </ul>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">SEO is een lange-termijnstrategie, maar wanneer goed uitgevoerd, levert het een duurzame en kosteneffectieve stroom van organisch verkeer op. Dit bespaart uiteindelijk op advertentiekosten en zorgt voor een stabiele groei.</p>
          </div>
        </div>



        <div className="px-4 md:px-10 space-y-6">
        
          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1 className="text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">Alternatieve Online en Offline Marketing: Slimme Strategieën die Werken</h1>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Naast SEO en SMMA kijken we altijd naar onconventionele en kostenefficiënte marketingkanalen. Enkele van onze bewezen strategieën:
            </p>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            1. Guerrilla Marketing
            </p>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Creatieve en onverwachte campagnes die viral kunnen gaan zonder torenhoge kosten. Denk aan interactieve social media acties, samenwerkingen met micro-influencers en unieke promoties.
            </p>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            2. Community Building
            </p>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            Een loyale community is goud waard. We zetten in op groepen, forums en ambassadeurs om natuurlijke merkbekendheid te creëren. Klanten worden de grootste promoters van het merk.
            </p>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            3. Direct Response Marketing
            </p>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            E-mailcampagnes, exclusieve deals en persoonlijke aanbiedingen om directe conversies te stimuleren zonder torenhoge advertentiekosten.
            </p>
            <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">
            4. Slimme Offline Strategieën
            </p>


            <ul className="list-disc list-inside text-left text-sm font-sans  leading-relaxed" >
                <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Netwerkevenementen en beurzen waar strategische partnerships worden gevormd.</span></li>
                 <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Lokale samenwerkingen en sponsoring voor gerichte zichtbaarheid.</span></li>
                 <li> <span className="text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal">Flyers en promotieacties op de juiste locaties voor maximale impact.</span></li>
                 
            </ul>

          </div>
        </div>




        <div className="px-4 md:px-10 space-y-6">

        <div className="flex justify-start lg:ml-24">
            <img
              className="w-full max-w-lg object-contain"
              src={ahoyy3}
              alt="Bridal Henna"
            />
          </div>
        
        <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
        <h1 className=" text-left text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">Maximale Impact met Minimale Kosten</h1>
        <p className="text-left text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta font-normal leading-relaxed">Onze marketingstrategie draait om slimme keuzes, data-gestuurde optimalisatie en een efficiënte besteding van budgetten. Door niet klakkeloos te 
          concurreren op dure advertentiekanalen, maar juist te focussen op slimme alternatieve methoden, behalen we maximale impact tegen minimale kosten. Dit stelt ons in staat om niet alleen succesvol, maar ook duurzaam te groeien.</p>

        </div>
      </div>



        
      </div>
    );
};

export default Ahoyy;