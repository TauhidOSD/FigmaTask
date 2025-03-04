

const Sarbuh = () => {
    return (
        <div className="space-y-16 mt-10 mx-auto lg:w-[1260px] 2xl:w-[1440px] ">
        {/* Section 1 */}
        <div className="px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:ml-10 lg:mr-24">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                className="w-full max-w-lg object-contain"
                src="/src/assets/Sarbuh1.png"
                alt="Henna Ghizlan Website Preview"
              />
            </div>
  
            {/* Right Details */}
            <div className="space-y-2">
              <h1 className=" text-xl lg:text-lg text-sky-400 font-bold">
              Shiftguide: De Ultieme Roosterplanning App voor de Uitzendbranche en Multi-Location Bedrijven
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
          <div className="mt-10 space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
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
              src="/src/assets/Sarbuh2.png"
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
        <div className="px-4 md:px-10 flex justify-start lg:ml-24">
          <img
            className="w-full max-w-lg object-contain"
            src="/article/event henna 1.png"
            alt="Event Henna"
          />
        </div>
      </div>
    );
};

export default Sarbuh;