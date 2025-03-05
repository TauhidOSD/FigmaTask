
import sarburh1 from "/src/assets/Sarbuh1.png"
import sarburh2 from "/src/assets/Sarbuh2.png"


const Sarbuh = () => {
    return (
        <div className="space-y-16 mt-10 mx-auto ">
        {/* Section 1 */}
        <div className="px-4 md:px-10 lg:ml-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:ml-10 lg:mr-24">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                className="w-full max-w-lg object-contain"
                src={sarburh1}
                alt="Henna Ghizlan Website Preview"
              />
            </div>
  
            {/* Right Details */}
            <div className="space-y-2">
              <h1 className=" text-xl lg:text-lg text-sky-400 font-bold">
              Van Offline naar Online: De Digitale Transformatie van een Fruithandelaar
              </h1>
              <p className="text-sm sm:text-base font-serif text-slate-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
  
              {/* Details List */}
              <div className="space-y-3 border-b border-slate-200 py-2">
                <div className="flex justify-between items-center px-2">
                  <p className="text-sm text-slate-500">Category:</p>
                  <p className="text-sm text-slate-500 font-medium">UI Design</p>
                </div>
                
                <div className="space-y-3 border-t border-b border-slate-200 py-3">
                <div className="flex justify-between items-center px-2">
                  <p className="text-sm text-slate-500">Tools:</p>
                  <p className="text-sm text-slate-500 font-medium">Figma</p>
                </div>
              
                </div>
                <div className="">
                <div className="flex justify-between items-center px-2">
                  <p className="text-sm text-slate-500">Project date:</p>
                  <p className="text-sm text-slate-500 font-medium">February, 2020</p>
                </div>
             
                </div>
                <div className=" border-t border-slate-200 pt-3">
                <div className="flex justify-between items-center px-2">
                  <p className="text-sm text-slate-500">Share this:</p>
                  <p className="text-sm text-slate-500 font-medium">
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
            <p className="text-left text-sm text-slate-500 leading-relaxed">
            In een wereld waar digitalisering de norm is, kan het voor traditionele bedrijven een uitdaging zijn om de overstap naar de online markt te maken. Bij Younitech hebben we recentelijk een fruithandelaar geholpen met deze transitie door middel van een fullservice-oplossing op het gebied van branding, marketing en webdesign. Van een volledig geoptimaliseerde webshop tot een doordachte marketingstrategie, we hebben elk aspect aangepakt om zijn business klaar te maken voor de toekomst.
            </p>
            
          </div>
        </div>
  
        {/* Section 2 */}
        <div className="px-4 md:px-10 space-y-6">
          <div className="flex justify-start lg:ml-24">
            <img
              className="w-full max-w-lg object-contain"
              src={sarburh2}
              alt="Bridal Henna"
            />
          </div>
          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1>De Kracht van Branding: Meer dan Alleen een Logo</h1>
            <p className="text-left text-sm text-slate-500 leading-relaxed">
            Branding is de ziel van een bedrijf. Het bepaalt hoe klanten een merk ervaren en hoe het zich onderscheidt van de concurrentie. Voor deze fruithandelaar hebben we niet zomaar een logo en huisstijl ontworpen, maar een complete merkidentiteit gecreëerd die vertrouwen en kwaliteit uitstraalt. We hebben diepgaand onderzocht welke visuele en emotionele triggers klanten aanspreken en hebben deze geïntegreerd in het design en de tone-of-voice van het merk.
            </p>
            <p className="text-left text-sm font-sans text-slate-500 leading-relaxed">
            Een essentieel onderdeel van de branding was de positionering van het merk. In de fruithandel is transparantie en versheid cruciaal. Daarom hebben we storytelling ingezet om klanten een kijkje achter de schermen te geven: van de oorsprong van de producten tot de passie van de handelaar. Dit creëerde een authentieke connectie met de doelgroep en verhoogde de klantloyaliteit.
            </p>
          </div>
        </div>
  


        {/* Section 3 */}
    

        <div className="px-4 md:px-10 space-y-6">
        
          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1 className="text-lg font-medium">Marketing: De Balans tussen Gevoel en Data</h1>
            <p className="text-left text-sm text-slate-500 leading-relaxed">
            Bij Younitech geloven we dat marketing een samenspel is tussen emotie en logische redenering. Wanneer een klant een luxeproduct koopt, draait het niet alleen om de eigenschappen van het product, maar ook om de beleving. Hetzelfde geldt voor versproducten zoals fruit: klanten
             willen niet alleen weten dat het vers is, ze willen het bijna kunnen ruiken en proeven via het scherm.
            </p>
            <p className="text-left text-sm text-slate-500 leading-relaxed">
            Om deze beleving online over te brengen, hebben we gebruikgemaakt van:
            </p>
            
            <ul className="list-disc list-inside text-left text-sm font-sans  leading-relaxed" >
                <li> <span className="text-[rgba(121,121,121,1)]">Visuele storytelling: Hoogwaardige productfotografie en videoproducties die de kwaliteit en versheid van het fruit benadrukken.</span></li>
                 <li> <span className="text-[rgba(121,121,121,1)]">Social media campagnes: Gericht op het bouwen van een community rondom gezonde voeding en duurzame landbouw.</span></li>
                 <li> <span className="text-[rgba(121,121,121,1)]">SEO en SEA strategieën: Om zowel organisch als via betaalde advertenties zichtbaar te zijn voor de juiste doelgroep.</span></li>
                 <li> <span className="text-[rgba(121,121,121,1)]">E-mailmarketing en retargeting: Om klanten betrokken te houden en herhaalaankopen te stimuleren.</span></li>
            </ul>
           
            <p className="text-left text-sm text-slate-500 leading-relaxed">Wat onze aanpak onderscheidt, is dat we data-gedreven beslissingen nemen. We analyseren klantgedrag en optimaliseren voortdurend de campagnes op basis van concrete cijfers. Dit stelt ons in staat om marketingbudgetten efficiënt in te zetten en een maximale ROI (Return on Investment) te realiseren.</p>
          </div>
        </div>


        {/* Section 4 */}
    

        <div className="px-4 md:px-10 space-y-6">
        
          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1 className="text-lg font-medium">Website Design: Een Perfecte Gebruikerservaring</h1>
            <p className="text-left text-sm text-slate-500 leading-relaxed">
            Een webshop moet niet alleen visueel aantrekkelijk zijn, maar ook functioneel en gebruiksvriendelijk. Voor deze fruithandelaar 
            hebben we een volledig op maat gemaakte website ontwikkeld, die niet gebaseerd is op een standaard template maar volledig is afgestemd op de klantbeleving.
            </p>
            <p className="text-left text-sm text-slate-500 leading-relaxed">
            De belangrijkste aspecten van het webdesign waren:
            </p>
            
            <ul className="list-disc list-inside text-left text-sm font-sans  leading-relaxed" >
                <li> <span className="text-[rgba(121,121,121,1)]">Een intuïtieve en snelle gebruikerservaring, zodat klanten moeiteloos hun producten kunnen vinden en bestellen.</span></li>
                 <li> <span className="text-[rgba(121,121,121,1)]">Conversiegericht design, waarbij subtiele psychologische triggers worden ingezet om aankopen te stimuleren.</span></li>
                 <li> <span className="text-[rgba(121,121,121,1)]">Mobiele optimalisatie, omdat een groot deel van de klanten via hun telefoon bestelt.</span></li>
                 <li> <span className="text-[rgba(121,121,121,1)]">Geavanceerde productfilters, zodat klanten eenvoudig het juiste fruit kunnen vinden op basis van categorie, seizoen of herkomst.</span></li>
            </ul>
           
            <p className="text-left text-sm text-slate-500 leading-relaxed">Daarnaast hebben we de webshop geïntegreerd met logistieke en betalingssystemen, zodat de volledige bestel- en leveringsflow soepel verloopt.</p>
            <p className="text-left text-sm text-slate-500 leading-relaxed">Innovatie Gedreven Door IT, Bedrijfskunde en Wetenschap</p>
            <p className="text-left text-sm text-slate-500 leading-relaxed">Wat Younitech uniek maakt, is onze multidisciplinaire aanpak. We combineren expertise uit IT, bedrijfskunde en wetenschap om innovatieve oplossingen te ontwikkelen die niet alleen visueel aantrekkelijk zijn, maar ook commercieel en operationeel effectief.</p>
            <p className="text-left text-sm text-slate-500 leading-relaxed">We maken gebruik van de nieuwste technologieën en zijn niet bang om onconventionele methoden te testen. Door samen te werken met onze klanten en hun specifieke behoeften te begrijpen, zorgen we ervoor dat elke
                 digitale transformatie niet alleen succesvol is, maar ook duurzaam en toekomstbestendig.</p>
          </div>
        </div>




      </div>
    );
};

export default Sarbuh;