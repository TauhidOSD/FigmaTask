import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import span4 from "../shassets/span (4).png"
import span5 from "../shassets/span (5).png"
import link13 from "../shassets/Link (13).png"
import img2 from "../assets/avater-testi-2.png.png"
import img3 from "../assets/avater-testi-3.png.png"


const Appmarket = () => {
    
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
      setActiveSection(activeSection === section ? null : section);
    };
  
    return (
        <div>

            {/** First part flex justify-center gap-20 items-center m-20 start from here  */}

            <div className="grid  sm:grid-cols-1 lg:grid-cols-2 m-10 lg:m-20">


        <div className="mb-5">
                <img className="w-96" src="/linkImages/amico.png" alt="" />
        </div>

                

        <div className="mt-10">

        <div className=""><p className=" rounded-3xl bg-fuchsia-100 font-medium p-2 text-base text-center text-fuchsia-500 mb-3 font-sans w-4/6  lg:w-3/6">Ontwerp uw eigen</p></div>
            <h1  className="text-4xl text-left font-medium">Uw visie, onze </h1>
            <h1  className="text-4xl text-left font-medium mb-6">expertise</h1>
            <p className="text-sm text-left text-slate-500"> expertise Bij Younitech begrijpen we dat een sterke,goed ontworpen </p>
            <p className="text-sm text-left text-slate-500"> applicatie essentieel is voorsucces in de moderne wereld.</p>
            <p className="text-sm text-left text-slate-500"> Of u nu een nieuwe mobiele app wilt lanceren, </p>
            <p className="text-sm text-left text-slate-500"> een webapplicatie wilt bouwen of een bestaande applicatie</p>
            <p className="text-sm text-left text-slate-500">wilt optimaliseren – wij zorgen voor oplossingen die impact maken.</p> 

        </div>
</div>

{/** First part end  */}





{/** second  part start */}

<div className="lg:mr-20 lg:ml-20 lg:mt-20 lg:mb-20 gap-5 grid items-center justify-center  lg:grid-cols-3 sm:grid-cols-1">

<div className="flex items-center mr-14">
    <div className="mr-5"> <img src="/grouppic/Group.png" alt="" /></div>
    <div className="">
        <h1 className="text-center text-lg font-medium">Strategie op maat</h1>
        <p className="text-center text-xs text-slate-500">Wij helpen uw visie om te zetten in </p>
        <p className="text-center text-xs text-slate-500">een werkende oplossing</p>
    </div>
</div>


<div className="flex  items-center mr-14">
<div className="mr-5"> <img src="/src/assets/hugeicons_corporate.png" alt="" /></div>
    <div className="">
        <h1 className="text-center text-lg font-medium">Innovatieve ontwerpen</h1>
        <p className="text-center text-xs text-slate-500">Gebruiksvriendelijke interfaces die  </p>
        <p className="text-center text-xs text-slate-500">uw gebruikerservaring verbeteren</p>
    </div>
</div>


<div className="flex items-center">
<div className="mr-5"> <img src="/grouppic/Clip path group (1).png" alt="" /></div>
    <div className="">
        <h1 className="text-center text-lg font-medium">Schaalbare technologie</h1>
        <p className="text-center text-xs text-slate-500"> Apps die met uw bedrijf meegroeien  </p>
        <p className="text-center text-xs text-slate-500">en toekomstbestendig zijn.</p>
    </div>
</div>
</div>


{/** second  part end  */}





{/** third   part start from here */}


<div className="">

<div className=" ml-10 lg:ml-28">
<div className="mt-10 mb-5  mr-20 "><p className="rounded-3xl   bg-fuchsia-100 font-medium lg:p-2  text-base text-center text-fuchsia-500 mb-3 font-sans mt-5 p-3 w-3/5 lg:w-2/12">Ontwerp uw eigen</p></div>
<h1  className="text-3xl mb-5 text-left font-medium">Waarom kiezen voor Younitech?</h1>

</div>


<div className="grid grid-cols-1 lg:grid-cols-2  gap-5 items-center ">

<div className=" flex justify-between ml-10 gap-20 w-auto">
    <div className=" ml-4 lg:ml-20">
    <div className="">

    <div className="flex gap-2  mb-3">
        <div className=""><img src={span4} alt="" /></div>
        <div className="">
        <h1 className="font-medium">Op maat gemaakte oplossingen </h1>

        
        </div>    
    </div>

    <p></p>Elke app wordt volledig afgestemd op uw specifieke eisen en doelstellingen.
    </div>
    

    <div className=" mt-5">
    <div className="">
    <div className="flex gap-2 mb-3">
        <div className=""><img src={span5} alt="" /></div>
        <div className="">
        <h1 className="font-medium">Geavanceerde technologie</h1>
        
        </div>    
    </div>

    <p>Wij maken gebruik van moderne tools en frameworks zoals React Native, Flutter, en AWS.</p>
    </div>
    </div>



    <div className=" mt-5">
    <div className="">
    <div className="flex gap-2 mb-3">
        <div className=""><img src={link13} alt="" /></div>
        <div className="">
        <h1 className="font-medium">End-to-end support</h1>
        </div>    
    </div>

    <p>Van concept tot lancering en daarna – wij staan altijd voor u klaar.</p>

    </div>
    </div>
</div>



</div>

<div className="mr-10"><img className="w-auto" src="/linkImages/rafiki.png" alt="" /></div>

</div>



</div>

{/** third   part end here */}





{/** fourth part start from here 
* 
*/}



<div className=" justify-center mt-7">
<div className="items-center justify-center flex mt-5 mb-4"><p className=" rounded-3xl bg-fuchsia-100 font-medium p-3  text-base text-center text-fuchsia-500 mb-3 font-sans w-2/5  lg:w-2/12">Hoe het werkt</p></div>
<h1  className="text-3xl decoration-4 text-center font-semibold">Hoe wij uw idee tot leven brengen</h1>

</div>

<div className="grid grid-cols-1 lg:grid-cols-4 gap-5 m-10 lg:m-20">

<div className="text-center m-7">
<div className="items-center justify-center flex"><img className="w-15 h-15" src="/textpic/Text (1).png" alt="" /></div>
<h1 className="font-semibold">Concept <br /> en Strategie</h1>

<div className="text-xs">
<p className="text-base text-slate-500 text-center">
We beginnen met een uitgebreide analyse van uw behoeften en doelen
Samen met u ontwikkelen we een duidelijke strategie en roadmap die
uw project richting geeft.
</p>

</div>
</div>


<div className="text-center m-7">
<div className="items-center justify-center flex"><img className="w-15 h-15" src="/textpic/Text (2).png" alt="" /></div>
<h1 className="font-semibold">Ontwikkeling en </h1>
<h1 className="font-semibold">Ontwerp</h1>
<div className="text-xs">


<p className="text-base text-slate-500 text-center">
Ons team creëert een visueel aantrekkelijk en functioneel ontwerp 
dat aansluit bij uw merkidentiteit. Daarna bouwen we de applicatie 
met behulp van de nieuwste technologieën en frameworks.
</p>

</div>
</div>


<div className="text-center m-7">
<div className="items-center justify-center flex"><img className="w-15 h-15" src="/textpic/Link (6).png" alt="" /></div>
<h1 className="font-semibold">Testen en </h1>
<h1 className="font-semibold">Optimalisatie</h1>
<div className="text-xs">

<p className="text-base text-slate-500 text-center">
We voeren rigoureuze tests uit om ervoor te zorgen dat de applicatie
perfect functioneert. Onze focus ligt op kwaliteit, snelheid en prestaties.
</p>

</div>
</div>


<div className="text-center m-7">
<div className="items-center justify-center flex"><img className="w-15 h-15" src="/textpic/Link (7).png" alt="" /></div>
<h1 className="font-semibold">Implementatie en </h1>
<h1 className="font-semibold">Ondersteuning</h1>
<div className="text-xs">
<p className="text-base text-slate-500 text-center">
Na de lancering bieden wij doorlopende ondersteuning en onderhoud, 
zodat uw app altijd up-to-date en operationeel blijft.
</p>
</div>
</div>


</div>



{/** fourth part end here */}




{/** fifth part start from here */}



<div className=" flex flex-col lg:flex-row gap-8 px-6 lg:px-30 py-8" >
<div className="lg:ml-20 lg:mr-16">
            
            <div className="mr-10"><p className="rounded-3xl bg-fuchsia-100 font-medium p-2 text-sm text-center text-fuchsia-500 mb-3 font-sans  lg:w-2/5">Ondersteuning</p></div>
            <h1 className="text-4xl font-sans font-semibold mb-2 text-left ">Veelgestelde</h1>
            <h1 className="text-4xl font-sans font-semibold mb-2 text-left "> Vragen</h1>
            
            <p className="font-sans text-left text-slate-500">Heeft u vragen over onze brandingdiensten? 
            
            <p className="font-sans text-left mt-4">Wij staan klaar om uw vragen te beantwoorden </p>
            en u te begeleiden in het brandingproces.</p>
        </div>
        
        <div className="w-full lg:w-1/2 space-y-6">
                {/* Button 1 */}
                <div>
                  <button
                    onClick={() => toggleSection("logo")}
                    className="w-full bg-[#468AFF] text-white py-2 px-4 text-left rounded-md flex justify-between items-center"
                  >
                    Branding
                    <GoChevronDown
                      className={`transform transition-transform ${
                        activeSection === "logo" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSection === "logo" && (
                    <p className="mt-2 text-gray-600">
                      Branding bouwt een sterke band en vertrouwen op met je doelgroep. We helpen bestaande ondernemers met een authentieke merkbeleving en nieuwe ondernemers met een herkenbare identiteit. Zo versterken we je merk voor duurzame groei.
                    </p>
                  )}
                </div>
        
                {/* Button 2 */}
                <div>
                  <button
                    onClick={() => toggleSection("visualGuidelines")}
                    className="w-full bg-[#468AFF] text-white py-2 px-4 text-left rounded-md flex justify-between items-center"
                  >
                    Visuele Richtlijnen
                    <GoChevronDown
                      className={`transform transition-transform ${
                        activeSection === "visualGuidelines" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSection === "visualGuidelines" && (
                    <p className="mt-2 text-gray-600">
                      Uniformiteit in kleuren, lettertypes en stijl voor consistente
                      branding.
                    </p>
                  )}
                </div>
        
                {/* Button 3 */}
                <div>
                  <button
                    onClick={() => toggleSection("printMedia")}
                    className="w-full bg-[#468AFF] text-white py-2 px-4 text-left rounded-md flex justify-between items-center"
                  >
                    Print- en Digitale Media
                    <GoChevronDown
                      className={`transform transition-transform ${
                        activeSection === "printMedia" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSection === "printMedia" && (
                    <p className="mt-2 text-gray-600">
                      Materialen die zowel online als offline indruk maken.
                    </p>
                  )}
                </div>
              </div>

</div>


{/** fifth part end here */}


{/** sixth part start here flex justify-between m-24 items-center */}


<div className="flex flex-col lg:flex-row gap-8 px-6 md:px-20 lg:px-20 py-10">
  {/* Left Section */}
  <div className="mt-6 ml-10">
                           <p className="rounded-3xl bg-fuchsia-100 p-3 text-center font-medium text-base text-fuchsia-500 mb-3 font-sans  w-2/5 lg:w-3/5">Testimonials</p>
                            
                            <div className="">
                            <h1 className="text-4xl font-sans font-semibold text-left">Wat onze</h1>
                            <h1 className="text-4xl mb-5 font-sans font-semibold text-left relative">klanten zeggen</h1>
                            <img className="-mt-8 w-3/4" src="/article/Heading 2.png" alt=""></img>
                            </div>
                             
                            <p className="font-sans text-left">Wij bieden ondersteuning aan </p>
                            <p className="mb-9 font-sans text-left">meer dan 15.000 bedrijven.</p>
                            <div className=" flex justify-start"> <button className="btn btn-primary font-sans">Nu Kopen</button></div>
            </div>

  {/* Right Section (Cards) */}
  <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Card 1 */}
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">
        5 manieren om uw website te laten opvallen
      </h2>
      <p className="text-gray-600 leading-relaxed">
        “Younitech gaf mijn merk de professionele uitstraling die het nodig had.
        Dankzij hun brandingstrategieën zijn we zichtbaar gegroeid.”
      </p>
      <div className="flex items-center gap-4">
        <img
          src={img3}
          alt="Sophie de Vries"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-800">Sophie de Vries</h3>
          <p className="text-sm text-gray-500">Eigenaar van een retailbedrijf</p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">
        De toekomst van mobiele applicaties
      </h2>
      <p className="text-gray-600 leading-relaxed">
        “Het creatieve team van Younitech heeft onze verwachtingen overtroffen.
        Van logo tot complete huisstijl – alles klopt!”
      </p>
      <div className="flex items-center gap-4">
        <img
          src={img2}
          alt="Mark Janssen"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-800">Mark Janssen</h3>
          <p className="text-sm text-gray-500">CEO van een tech-startup</p>
        </div>
      </div>
    </div>
  </div>
  

  
</div>
      </div>
    

    );
};
  
export default Appmarket;
  