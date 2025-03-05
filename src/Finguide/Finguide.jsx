
import finguide1 from "/src/assets/Finguide1.png"
import finguide2 from "/src/assets/Finguide2.png"
import finguide3 from "/src/assets/Finguide3.png"


const Finguide = () => {
    return (
        <div className="space-y-16 mt-10 mx-auto  ">
        {/* Section 1 */}
        <div className="px-4 md:px-10 lg:ml-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:ml-10 lg:mr-24">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                className="w-full max-w-lg object-contain"
                src={finguide1}
                alt="Henna Ghizlan Website Preview"
              />
            </div>
  
            {/* Right Details */}
            <div className="space-y-2">
              <h1 className=" text-xl lg:text-lg text-sky-400 font-bold">
              FINGUIDE: Slimme Boekhouding met een Sterke Identiteit
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
            In de wereld van financiële software draait het vaak om cijfers, berekeningen 
            en strakke processen. Maar hoe maak je een boekhoudapplicatie niet alleen 
            functioneel, maar ook aantrekkelijk voor ondernemers? Met FINGUIDE hebben 
            we bij Younitech niet alleen een slimme,
             geautomatiseerde boekhoudapplicatie ontwikkeld, maar deze ook voorzien
              van een sterke branding die vertrouwen en eenvoud uitstraalt. Want 
              boekhouden moet niet alleen accuraat, maar ook toegankelijk en 
              begrijpelijk zijn voor elke ondernemer.
            </p>
            
          </div>
        </div>
  
        {/* Section 2 */}
        <div className="px-4 md:px-10 space-y-6">
          <div className="flex justify-start lg:ml-24">
            <img
              className="w-full max-w-lg object-contain"
              src={finguide2}
              alt="Bridal Henna"
            />
          </div>
          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1 className="text-lg font-medium">Waarom FINGUIDE?</h1>
            <p className="text-left text-sm text-slate-500 leading-relaxed">
            Met het groeiende aantal zzp’ers en mkb-bedrijven in Nederland is er een dringende 
            behoefte aan toegankelijke en efficiënte boekhoudsoftware. Grote corporates hebben belastingadviseurs 
            en accountantskantoren tot hun beschikking, maar de kleine ondernemer heeft vaak noch de tijd, noch
             de financiële middelen om zich hierin te verdiepen. En dat terwijl een goed inzicht in financiën cruciaal
              is voor duurzame groei.
            </p>
            <p className="text-left text-sm font-sans text-slate-500 leading-relaxed">
            FINGUIDE is ontwikkeld met deze visie: een intuïtieve en betaalbare oplossing die ondernemers helpt bij het automatiseren van 
            hun administratie, hen voorziet van slimme adviezen en hen helpt om sterke financiële gewoontes op te bouwen. Dit is geen 
            boekhoudprogramma dat puur op functionaliteit leunt; het is een totaalconcept waarin branding, gebruiksvriendelijkheid en 
            strategische begeleiding samenkomen.
            </p>
            <p className="text-left text-sm font-sans text-slate-500 leading-relaxed">
            De website fungeert niet alleen als een portfolio, waarin eerdere werken en projecten schitterend worden weergegeven,
             maar ook als een webshop waar klanten direct henna-producten en 
             gepersonaliseerde diensten kunnen bestellen. Dit maakt het voor 
             bezoekers eenvoudig om de artistieke expertise van de Henna-artist 
             te ervaren én om direct over te gaan tot aankoop.
            </p>
          </div>
        </div>
  
        {/* Section 3 */}
        
        <div className="px-4 md:px-10 space-y-6">
          <div className="flex justify-start lg:ml-24">
            <img
              className="w-full max-w-lg object-contain"
              src={finguide3}
              alt="Bridal Henna"
            />
          </div>
          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1 className="text-lg font-medium">Branding: Vertrouwen, Simpelheid en Toegankelijkheid</h1>
            <p className="text-left text-sm text-slate-500 leading-relaxed">
            Boekhouding is voor veel ondernemers een verplichting, geen passie. Daarom moest de branding van FINGUIDE 
            anders zijn dan de traditionele, vaak droge uitstraling van boekhoudsoftware. Younitech heeft een 
            merk gecreëerd dat vertrouwen uitstraalt, maar tegelijkertijd vriendelijk en toegankelijk 
            aanvoelt. Dit komt terug in zowel de visuele identiteit als de tone-of-voice van het merk:
            </p>


            <ul className="list-disc list-inside text-left text-sm font-sans  leading-relaxed" >
                <li> <span className="text-[rgba(121,121,121,1)]">Kleurgebruik: FINGUIDE maakt gebruik van een eenvoudig en strak kleurenpalet dat draait om blauw- en grijstonen, gecombineerd met subtiele accentkleuren. Blauw staat voor betrouwbaarheid en stabiliteit, terwijl de zachte grijstinten een moderne en professionele uitstraling geven.</span></li>

                 <li> <span className="text-[rgba(121,121,121,1)]">Gebruiksvriendelijke interface: De app ziet er niet uit als een traditioneel, complex boekhoudprogramma. Heldere visuals, duidelijke instructies en een gestroomlijnd dashboard maken het gebruik laagdrempelig.</span></li>

                 <li> <span className="text-[rgba(121,121,121,1)]">Educatieve content: FINGUIDE biedt meer dan alleen software; het is een bron van kennis. Door middel van tutorials en casestudy’s met echte ondernemers wordt boekhouden begrijpelijk en toepasbaar gemaakt.</span></li>

            </ul>

          </div>

          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1 className="text-lg font-medium">Functionaliteiten die Ondernemers Echt Helpen</h1>
            <p className="text-left text-sm text-slate-500 leading-relaxed">
            
                Los van de branding biedt FINGUIDE alles wat een moderne ondernemer nodig heeft:
            </p>


            <ul className="list-disc list-inside text-left text-sm font-sans  leading-relaxed" >
                <li> <span className="text-[rgba(121,121,121,1)]">Automatiseren van administratieve taken: Facturen uploaden, bonnetjes inscannen en direct verwerken.</span></li>
                 <li> <span className="text-[rgba(121,121,121,1)]">Live inzicht in financiële status: Altijd een actueel overzicht van winst- en verliesrekeningen.</span></li>
                 <li> <span className="text-[rgba(121,121,121,1)]">Cashflowberekeningen en prognoses: Helpt ondernemers vooruit te plannen en financiële valkuilen te vermijden.</span></li>
                 <li> <span className="text-[rgba(121,121,121,1)]">Slimme belastingadviezen: Gericht op het mkb en zzpers, zodat ook kleine bedrijven optimaal profiteren van fiscale voordelen.
                 FINGUIDE is meer dan alleen een boekhoudprogramma; het is een digitale financieel adviseur die ondernemers ondersteunt bij hun groei.</span></li>

            </ul>

          </div>

          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <h1 className="text-lg font-medium">Een Merk dat Groeit met de Ondernemer Mee</h1>
            <p className="text-left text-sm text-slate-500 leading-relaxed">
            De kracht van FINGUIDE ligt in de combinatie van branding en functionaliteit. De applicatie is niet alleen een tool, maar ook een partner voor ondernemers. Het biedt niet alleen cijfers, maar helpt ook bij het maken van strategische beslissingen.
            Door in te zetten op een sterke merkidentiteit, blijft FINGUIDE niet alleen relevant in een concurrerende markt, maar weet het ook een gemeenschap van gebruikers op te bouwen die zich herkennen in de missie van het merk: financiële helderheid en succes voor iedereen, ongeacht de grootte van hun bedrijf.
            </p>

            <p className="text-left text-sm text-slate-500 leading-relaxed">
            Met een website en marketingstrategie die dezelfde kernwaarden uitstralen, wordt FINGUIDE een herkenbaar en vertrouwd merk binnen de fintech-sector. Want een applicatie mag dan nog zo goed werken, zonder de juiste branding blijft het slechts een van de velen. Bij Younitech begrijpen we dat, en met FINGUIDE zetten we een nieuw standaard neer voor fintech-applicaties.
            </p>

          </div>
        </div>
      </div>
    );
};

export default Finguide;