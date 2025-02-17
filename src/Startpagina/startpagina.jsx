import img from "../assets/rafiki3.png";
import icon from "../assets/Heading 6 (1).png";
import icon1 from "../assets/Heading 6 (2).png";

const Startpagina = () => {
  return (
    <div className=" py-8 flex flex-col md:flex-row gap-8 p-6 md:px-36">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-start gap-4">
        <img src={img} alt="Illustration" className="w-full h- rounded-lg" />
        <h2 className="text-3xl font-bold text-gray-800">
          Kies een plan en begin meteen
        </h2>
        <p className="text-gray-600 leading-relaxed">
          <span className="text-xl font-bold text-[#253238]">
            Kies een plan en start direct:
          </span>{" "}
          Selecteer een van onze plannen, betaal een aanbetaling en ontvang
          direct een offerte in je mailbox. Twijfel je nog en speelt de prijs
          een grote rol? Vraag dan vrijblijvend onze prijslijst aan.
        </p>
        <p className="text-gray-600 leading-relaxed">
          De kosten zijn afhankelijk van het doel dat je wilt bereiken. Een
          lokale bakkerij die meer verkopen in het dorp wil realiseren,
          verschilt bijvoorbeeld van een muziekconcert dat heel West-Europa wil
          bereiken.
        </p>
        <p className="text-gray-600 leading-relaxed">
          De opgegeven prijzen zijn onze servicekosten. Kies je voor een
          agressieve marketingcampagne? Dan worden extra mediakosten direct
          doorgerekend, uiteraard altijd in goed overleg.
        </p>
        <p className="text-[#FF4B32] leading-relaxed">
          ⚠ Let op: Alle vermelde prijzen zijn exclusief BTW.
        </p>
        <p className="text-gray-600 leading-relaxed">
          <span className="text-xl font-bold text-[#253238]">
            Korting voor directe aanbetalingen:
          </span>{" "}
          Voor klanten die direct een aanbetaling doen, bieden wij een korting
          van 20% op onze diensten. Zo profiteer je direct van een voordeliger
          tarief!
        </p>
      </div>

      {/* Right Section (Cards) */}
      <div className="md:w-1/2 grid gap-6">
        {/* First Card */}
        <div className="p-6 border  bg-white shadow-lg rounded-xl  border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <img src={icon} alt="Icon" className="w-4 h-4" />
              <h2 className="text-lg font-semibold text-gray-800">Basispakket</h2>
            </div>
            <h2 className="text-lg font-bold text-gray-800">
            €<span className="text-[#7E7E7E] text-sm">/ maand</span>
            </h2>
          </div>
          <p  className="md:-mb-36">
            <ul className="list-disc pl-5">
              <li>Opzetten Website en Google SEO.</li>
              <li>Nulmeting (Eigen -website).</li>
              <li>Wekelijkse Consultancy (offline Verkoop en marketing).</li>
            
            </ul>
          </p>
        </div>

        {/* Second Card */}
        <div className="p-6 border  bg-white shadow-lg rounded-xl  border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <img src={icon1} alt="Icon" className="w-4 h-4" />
              <h2 className="text-lg font-semibold text-gray-800">Standaard SEO -pakket</h2>
            </div>
            <h2 className="text-lg font-bold text-gray-800">
            €€<span className="text-[#7E7E7E] text-sm">/ maand</span>
            </h2>
          </div>
          <p  className="md:-mb-36">
            <ul className="list-disc pl-5">
              <li>Grondige Websiteanalse.
              </li>
              <li>Marktonderzoek naar concurrenten.
              </li>
              <li>Verbeterde SEO-proof website.
              </li>
              <li>Inusief alles uit het de basePakket.</li>
            </ul>
          </p>
        </div>

        {/* Third Card */}
        <div className="p-6 border  bg-white shadow-lg rounded-xl  border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <img src={icon1} alt="Icon" className="w-4 h-4" />
              <h2 className="text-lg font-semibold text-gray-800">Regelmatig online pakket</h2>
            </div>
            <h2 className="text-lg font-bold text-gray-800">
            €€€<span className="text-[#7E7E7E] text-sm">/ maand</span>
            </h2>
          </div>
          <p  className="md:-mb-36">
            <ul className="list-disc pl-5">
              <li>SEO en Sociale Media Combinatie.
              </li>
              <li>Wekelijkse Post.
              </li>
              <li>Maandelijkse e-mailcampagne.
              </li>
              <li>Opname van Operationele Vlogs.
              </li>
              <li>Bevat alles Uit het reguliere pakket
              </li>
            </ul>
          </p>
        </div>
        {/* Fourth Card */}
        <div className="p-6 border  bg-white shadow-lg rounded-xl  border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <img src={icon1} alt="Icon" className="w-4 h-4" />
              <h2 className="text-lg font-semibold text-gray-800">Premium pakket</h2>
            </div>
            <h2 className="text-lg font-bold text-gray-800">
            €€€€<span className="text-[#7E7E7E] text-sm">/ maand</span>
            </h2>
          </div>
          <p  className="md:-mb-36">
            <ul className="list-disc pl-5">
              <li>Premium SEO en -website.
              </li>
              <li>Creëren van Reguliere -content (plus Beheer).
              </li>
              <li>Professionele, authentieke content.
              </li>
              <li>Inclusief Alles Uit Het Regulier Online Pakket.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Startpagina;
