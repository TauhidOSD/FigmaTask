import sophie from "../shassets/avater-testi-1.png.png";
import mark from "../shassets/avater-testi-2.png.png";

const Marketing = () => {
  return (
    <div className="m-4 sm:m-6 my-24 lg:m-18 ">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center m-10">
        <div className="mr-5">
          <div>
            <p className="rounded-3xl bg-fuchsia-100 font-medium p-2 text-base text-center text-fuchsia-500 mb-3 font-sans lg:w-3/6">
              Ontwerp uw eigen
            </p>
          </div>
          <div className="mb-6">
            <h1 className="text-4xl text-left">Marketingont</h1>
            <h1 className="text-4xl text-left mb-3 relative">wikkeling</h1>
            <img className="-mt-6" src="/article/Heading 2.png" alt="" />
          </div>
          <p className="text-left text-xs text-slate-500">Creëer een krachtige marketingstrategie voor uw bedrijf Bij</p>
          <p className="text-left text-xs text-slate-500">Younitech helpen we bedrijven om op te vallen in een steeds</p>
          <p className="text-left text-xs text-slate-500">veranderend digitaal landschap. Wij combineren innovatieve</p>
          <p className="text-left text-xs text-slate-500">technologie met data-gedreven strategieën om uw merk</p>
          <p className="text-left text-xs text-slate-500">zichtbaarder te maken en uw doelgroep te bereiken.</p>

          <div className="flex gap-5 items-center mt-6">
            <img src="/textpic/List → Item.png" alt="" />
            <h1>Data-gedreven strategieën</h1>
          </div>

          <div className="flex gap-5 items-center">
            <img src="/textpic/List → Item.png" alt="" />
            <h1>Multichannel campagnes</h1>
          </div>

          <div className="flex gap-5 items-center">
            <img src="/textpic/List → Item.png" alt="" />
            <h1>Contentcreatie</h1>
          </div>

          <div className="flex gap-5 items-center">
            <img src="/textpic/List → Item.png" alt="" />
            <h1>Resultaatgericht</h1>
          </div>

          <div className="mt-5 mr-6">
            <button className="btn btn-sm btn-info lg:w-40">Neem contact op</button>
          </div>
        </div>

        <div className="mt-10">
          <img className="w-full" src="/linkImages/pana.png" alt="" />
        </div>
      </div>

      {/** second part start from here */}
      <div className="flex items-center justify-center ">
        <p className="rounded-3xl bg-fuchsia-100 font-medium p-2 text-base text-center text-fuchsia-500 mb-3 font-sans lg:w-1/6">
          Ontwerp uw eigen
        </p>
      </div>
      <h1 className="text-4xl text-center font-medium">Marketingont</h1>
      <p className="text-base text-slate-400 text-center mt-2">
        Wij maken het ontwikkelen van uw marketingstrategie eenvoudig:
      </p>

      {/** second part end here */}

      {/** 3rd part start from here */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center m-10">
        <div>
          <img className="w-full" src="/linkImages/consult.png" alt="" />
        </div>
        <div>
          <div className="collapse collapse-arrow bg-sky-400 m-7">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl text-white font-medium">
              Strategische planning
            </div>
            <div className="collapse-content">
              <p className="text-left">Wij analyseren uw doelen en ontwikkelen een</p>
              <p className="text-left">op maat gemaakte strategie.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-sky-400 m-7">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-white font-medium">
              Creatieve uitvoering
            </div>
            <div className="collapse-content">
              <p className="text-left">Onze experts creëren campagnes en content</p>
              <p className="text-left">die uw merk versterken</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-sky-400 m-7">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl text-white font-medium">
              Analyse en optimalisatie
            </div>
            <div className="collapse-content">
              <p className="text-left">Doorlopende analyse en verbetering voor maximale resultaten.</p>
            </div>
          </div>
        </div>
      </div>

      {/** 3rd part end here */}

      {/** 4th part start from here */}
      <div className="flex justify-between items-center h-64 m-16">
        <div>
          <img className="w-32" src="/linkImages/Link → logo-amazon-fill.png.png" alt="" />
        </div>
        <div>
          <img className="w-32" src="/linkImages/Link → logo-feedly-fill.png.png" alt="" />
        </div>
        <div className="text-center">
          <div className="-mb-4 flex justify-center items-center">
            <img className="w-32" src="/linkImages/Link → logo-hopin-fill.png.png" alt="" />
          </div>
          <h1 className="font-bold text-2xl">Sluit u aan bij de 7.000+</h1>
          <h1 className="font-bold text-2xl">bedrijven die ons vertrouwen</h1>
          <p className="mb-7 text-slate-400">U heeft de ideeën, wij hebben de tools</p>
          <button className="btn text-slate-300 btn-primary">Aan de Slag</button>
        </div>
        <div>
          <img className="w-32" src="/linkImages/Link → logo-google-fill.png.png" alt="" />
        </div>
      </div>

      {/** 4th part end here */}

      {/** 5th part start here */}
      <div className="bg-[#F8F8F8] my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="p-6 text-start">
          <h1 className="text-4xl font-bold text-[#468AFF]">$36M</h1>
          <p className="mt-2 text-lg">aan afgeronde projecten wereldwijd.</p>
        </div>
        <div className="p-6 text-start">
          <h1 className="text-4xl font-bold text-[#468AFF]">19M+</h1>
          <p className="mt-2 text-lg">klanten geholpen met betrouwbare en schaalbare oplossingen.</p>
        </div>
        <div className="p-6 text-start">
          <h1 className="text-4xl font-bold text-[#468AFF]">$48M+</h1>
          <p className="mt-2 text-lg">aan omzetgroei gerealiseerd voor onze partners.</p>
        </div>
        <div className="p-6 text-start">
          <h1 className="text-4xl font-bold text-[#468AFF]">1056</h1>
          <p className="mt-2 text-lg">succesvolle projecten afgerond in Noord-Amerika en Europa.</p>
        </div>
      </div>

      {/** 5th part end here */}

      {/** 6th part start here */}
      <div className="bg-custom-bg mt-10 bg-cover bg-center h-dvh w-auto">
        <div className="flex items-center justify-center">
          <p className="rounded-3xl bg-fuchsia-100 font-medium p-2 text-base text-center text-fuchsia-500 mb-3 font-sans lg:w-1/6">
            Getuigenissen
          </p>
        </div>
        <h1 className="text-3xl text-center font-medium">Wat klanten over ons zeggen</h1>

        <div className="w-full lg:mt-10 lg:ml-56 lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">5 manieren om uw website te laten opvallen</h2>
            <p className="text-gray-600 leading-relaxed">
              “Younitech gaf mijn merk de professionele uitstraling die het nodig had. We zagen
              een directe stijging van de omzet na hun marketingstrategie.”
            </p>
            <div className="flex items-center space-x-3">
              <img className="w-10 h-10 rounded-full" src={mark} alt="mark" />
              <div>
                <p className="text-sm text-gray-700 font-semibold">Mark Zoeteman</p>
                <p className="text-xs text-gray-500">CEO, Xpress Design</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Pionieren in digitale marketingstrategieën</h2>
            <p className="text-gray-600 leading-relaxed">
              “Dankzij de innovatieve strategieën van Younitech, hebben we een aanzienlijk
              marktaandeel gewonnen.”
            </p>
            <div className="flex items-center space-x-3">
              <img className="w-10 h-10 rounded-full" src={sophie} alt="sophie" />
              <div>
                <p className="text-sm text-gray-700 font-semibold">Sophie DeVries</p>
                <p className="text-xs text-gray-500">CMO, CoolTech Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** 6th part end here */}
    </div>
  );
};

export default Marketing;
