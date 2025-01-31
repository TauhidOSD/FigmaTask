const Appmarket = () => {
    return (
      <div className="container mx-auto px-4">
        {/* First Section */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center my-20">
          <div className="flex justify-center">
            <img className="w-full max-w-md" src="/linkImages/amico.png" alt="App Illustration" />
          </div>
          <div>
            <p className="rounded-3xl bg-fuchsia-100 font-medium p-2 text-base text-center text-fuchsia-500 mb-3 w-3/5 mx-auto lg:w-3/6">
              Ontwerp uw eigen
            </p>
            <h1 className="text-4xl font-medium">Uw visie, onze</h1>
            <h1 className="text-4xl font-medium mb-6">expertise</h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Bij Younitech begrijpen we dat een sterke, goed ontworpen applicatie essentieel is voor succes in de moderne wereld.
              Of u nu een nieuwe mobiele app wilt lanceren, een webapplicatie wilt bouwen of een bestaande applicatie wilt optimaliseren – wij zorgen voor oplossingen die impact maken.
            </p>
          </div>
        </div>
  
        {/* Second Section */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 text-center my-20">
          {[
            { img: "/grouppic/Group.png", title: "Strategie op maat", text: "Wij helpen uw visie om te zetten in een werkende oplossing" },
            { img: "/grouppic/Clip path group.png", title: "Innovatieve ontwerpen", text: "Gebruiksvriendelijke interfaces die uw gebruikerservaring verbeteren" },
            { img: "/grouppic/Clip path group (1).png", title: "Schaalbare technologie", text: "Apps die met uw bedrijf meegroeien en toekomstbestendig zijn." }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4 p-4">
              <img className="w-12 h-12" src={item.img} alt={item.title} />
              <div>
                <h1 className="text-lg font-medium">{item.title}</h1>
                <p className="text-xs text-gray-500 leading-tight">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Third Section */}
        <div className="text-center my-20">
          <p className="rounded-3xl bg-fuchsia-100 font-medium p-2 text-base text-center text-fuchsia-500 mb-3 inline-block">
            Ontwerp uw eigen
          </p>
          <h1 className="text-3xl font-medium mb-5">Waarom kiezen voor Younitech?</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <div className="max-w-md space-y-6">
            {["Op maat gemaakte oplossingen", "Geavanceerde technologie", "Ervaring in diverse sectoren", "End-to-end support"].map((title, index) => (
              <div key={index} className="flex items-center gap-3">
                <img className="w-8 h-8" src={`/grouppic/span (${index + 1}).png`} alt={title} />
                <div>
                  <h1 className="font-medium">{title}</h1>
                  <p className="text-xs text-gray-500 leading-tight">
                    {index === 0 ? "Elke app wordt volledig afgestemd op uw specifieke eisen en doelstellingen." :
                     index === 1 ? "Wij maken gebruik van moderne tools en frameworks zoals React Native, Flutter, en AWS." :
                     index === 2 ? "We hebben succesvolle apps ontwikkeld voor e-commerce, gezondheidszorg, fintech en meer." :
                     "Van concept tot lancering en daarna – wij staan altijd voor u klaar."}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <img className="w-full max-w-xs lg:max-w-md" src="/linkImages/rafiki.png" alt="Younitech" />
        </div>
      </div>
    );
  };
  
  export default Appmarket;
  