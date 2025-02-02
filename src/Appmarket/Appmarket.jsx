import { useState } from "react";

import { GoChevronDown } from "react-icons/go";

const Appmarket = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
      setActiveSection(activeSection === section ? null : section);
    };
  
    return (
        <div>

{/** First part flex justify-center gap-20 items-center m-20 start from here  */}

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 m-20">


        <div className="mb-5">
                <img className="w-96" src="/linkImages/amico.png" alt="" />
        </div>

                

        <div className="">

        <div className=""><p className=" rounded-3xl bg-fuchsia-100 font-medium p-2 text-base text-center text-fuchsia-500 mb-3 font-sans  lg:w-3/6">Ontwerp uw eigen</p></div>
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
<div className="mr-5"> <img src="/grouppic/Clip path group.png" alt="" /></div>
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

<div className="ml-28">
<div className="mt-5 mb-5  mr-20 "><p className="rounded-3xl   bg-fuchsia-100 font-medium lg:p-2  text-base text-center text-fuchsia-500 mb-3 font-sans mt-5 lg:w-2/12">Ontwerp uw eigen</p></div>
<h1  className="text-3xl mb-5 text-left font-medium">Waarom kiezen voor Younitech?</h1>

</div>


<div className="flex justify-center ml-20 mr-20  gap-5 items-center ">
<div className=" flex justify-center ml-10 gap-20 w-auto">
    <div className="">
    <div className="">

    <div className="flex gap-2  mb-3">
        <div className=""><img src="/grouppic/span (3).png" alt="" /></div>
        <div className="">
        <h1 className="font-medium">Op maat gemaakte </h1>
        <h1 className="font-medium"> oplossingen</h1>
        
        </div>    
    </div>

    <h1 className="text-sm text-left font-sans text-slate-500">Elke app wordt volledig afgestemd</h1>
    <h1 className="text-sm text-left font-sans text-slate-500 ">op uw specifieke eisen en </h1>
    <h1 className="text-sm text-left font-sans text-slate-500">doelstellingen.</h1>
    </div>
    

    <div className=" mt-5">
    <div className="">
    <div className="flex gap-2 mb-3">
        <div className=""><img src="/grouppic/span (1).png" alt="" /></div>
        <div className="">
        <h1 className="font-medium">Geavanceerde</h1>
        <h1 className="font-medium" >technologie</h1>
        </div>    
    </div>

    <h1 className="text-xs text-left font-sans text-slate-500">Wij maken gebruik van moderne</h1>
    <h1 className="text-xs text-left font-sans  text-slate-500">tools en frameworks zoals React </h1>
    <h1 className="text-xs text-left font-sans text-slate-500"> Native, Flutter, en AWS.</h1>
    </div>
    </div>
</div>

    <div className="">

    <div className="">
    <div className="">
    <div className="flex gap-2 mb-3">
        <div className=""><img src="/grouppic/span.png" alt="" /></div>
        <div className="">
            <h1 className="font-medium">Ervaring in diverse </h1>
            <h1 className="font-medium">sectoren</h1>
            </div>    
    </div>

    <h1 className="text-xs text-left font-sans text-slate-500">We hebben succesvolle apps </h1>
    <h1 className="text-xs text-left font-sans text-slate-500">ontwikkeld voor e-commerce,</h1>
    <h1 className="text-xs text-left font-sans text-slate-500"> gezondheidszorg, fintech en meer.</h1>
   
    </div>
    

    <div className=" mt-5">
    <div className="">
    <div className="flex gap-2 mb-3">
        <div className=""><img src="/grouppic/Link (5).png" alt="" /></div>
        <div className="">
            <h1 className="font-medium">End-to-end</h1>
            <h1 className="font-medium">support</h1>
            </div>    
    </div>

    <h1 className="text-xs text-left font-sans text-slate-500">Van concept tot lancering </h1>
    <h1 className="text-xs text-left font-sans text-slate-500">en daarna – wij staan altijd </h1>
    <h1 className="text-xs text-left font-sans text-slate-500">voor u klaar.</h1>
    </div>
    </div>
</div>

    </div>
   
</div>


<div className="w-1/2"><img src="/linkImages/rafiki.png" alt="" /></div>

</div>



</div>



{/** third   part end here */}





{/** fourth part start from here 
* 
*/}



<div className=" justify-center mt-7">
<div className="items-center justify-center flex mb-4"><p className=" rounded-3xl bg-fuchsia-100 font-medium p-2 text-base text-center text-fuchsia-500 mb-3 font-sans  lg:w-2/12">Hoe het werkt</p></div>
<h1  className="text-3xl decoration-4 text-center font-semibold">Hoe wij uw idee tot leven brengen</h1>

</div>


<div className="grid lg:grid-cols-4 sm: grid-cols-1 gap-5  m-20">
<div className="text-center m-7">
<div className="items-center justify-center flex"><img className="w-15 h-15" src="/textpic/Text (1).png" alt="" /></div>
<h1 className="font-semibold">Concept en</h1>
<h1 className="font-semibold">Strategie</h1>
<div className="text-xs">
<p className="text-sm text-slate-500 text-center">
We beginnen met een uitgebreide analyse van uw behoeften en doelen
Samen met u ontwikkelen we een duidelijke strategie en roadmap die
uw project richting geeft.
</p>
{/*
     <p className="text-xs text-slate-500 text-center">We beginnen met een uitgebreide</p>
<p className="text-xs text-slate-500 text-center">analyse van uw behoeften en doelen</p>
<p className="text-xs text-slate-500 text-center">Samen met u ontwikkelen we een </p>
<p className="text-xs text-slate-500 text-center">duidelijke strategie en roadmap die</p>
<p className="text-xs text-slate-500 text-center">uw project richting geeft.</p>
*/ }
</div>
</div>


<div className="text-center m-7">
<div className="items-center justify-center flex"><img className="w-15 h-15" src="/textpic/Text (2).png" alt="" /></div>
<h1 className="font-semibold">Ontwikkeling en </h1>
<h1 className="font-semibold">Ontwerp</h1>
<div className="text-xs">


<p className="text-sm text-slate-500 text-center">
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

<p className="text-sm text-slate-500 text-center">
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
<p className="text-sm text-slate-500 text-center">
Na de lancering bieden wij doorlopende ondersteuning en onderhoud, 
zodat uw app altijd up-to-date en operationeel blijft.
</p>
</div>
</div>


</div>



{/** fourth part end here */}




{/** fifth part start from here */}



<div className=" flex flex-col lg:flex-row gap-8 px-6 lg:px-30 py-8" >
<div className="ml-20 mr-16">
            
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


<div className="grid lg:grid-cols-2 m-20 sm:grid-cols-1">
<div className="mt-6 lg:ml-10 sm:-ml-4 mb-5">
           
           <div className="mr-10"><p className="rounded-3xl  bg-fuchsia-100 font-medium p-2 text-sm text-center text-fuchsia-500 mb-3 font-sans sm:w-1/3  lg:w-2/5">Testimonials</p></div>
            
            <div className=" mb-5 ">
            <h1 className="text-4xl font-sans text-left">Wat onze</h1>
            <h1 className="text-4xl mb-5 font-sans text-left relative">klanten zeggen</h1>
            <img className="-mt-8  lg:w-2/4" src="/article/Heading 2.png" alt=""></img>
            </div>
             
            <p className="font-sans text-left">Wij bieden ondersteuning aan </p>
            <p className="mb-9 font-sans text-left">meer dan 15.000 bedrijven.</p>
            <div className=" flex justify-start"> <button className="btn btn-info text-slate-100 btn-sm font-sans">Nu Kopen</button></div>
</div>


<div className="grid lg:grid-cols-2 gap-20 sm:grid-cols-1">
<div className="mr-10">
<div className="card bg-base-100 w-72 shadow-xl h-80">
        <div className="card-body">
            <h2 className="card-title text-lg font-sans">5 manieren om uw website te laten opvallen</h2>
            <p className="text-sm font-sans">“Younitech gaf mijn merk de professionele uitstraling die het nodig had. Dankzij hun 
                brandingstrategieën zijn we zichtbaar gegroeid.”</p>
            <div className="card-actions justify-end">
            </div>

            <div className="flex justify-between items-center mt-5">
            <div className=""><img className="w-16" src="/avatar/avater-testi-3.png.png" alt="" /></div>
            <div className="">
                <div className="text-base font-sans"><h1>Sophie de Vries</h1></div>
                 <div className="text-xs font-sans"><p>eigenaar van een retailbedrijf</p></div>
            </div>
        </div>
        </div>
        </div>
</div>


<div className="">
<div className="card bg-base-100 w-72 shadow-xl h-80">
        <div className="card-body">
            <h2 className="card-title  text-lg font-sans">De toekomst van mobiele applicaties</h2>
            <p className="text-sm font-sans">“Het creatieve team van Younitech heeft onze verwachtingen overtroffen. 
                Van logo tot complete huisstijl – alles klopt!”</p>
            <div className="card-actions justify-end">
            </div>

            <div className="flex justify-between items-center mt-5">
            <div className=""><img className="w-16" src="/avatar/avater-testi-2.png.png " alt="" /></div>
            <div className="">
                <div className="text-base font-sans"><h1>Mark Janssen</h1></div>
                 <div className="text-xs font-sans"><p>CEO van een tech-startup</p></div>
            </div>
        </div>
        </div>
        </div>     
</div>
</div>
</div>

        </div>
    );
};

export default Appmarket;