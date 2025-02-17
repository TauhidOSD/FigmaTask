
import img1 from "../assets/Link → blog-6.jpg.png";
import img2 from "../assets/Link → blog-6.jpg (1).png";
import img3 from "../assets/Link → blog-6.jpg (2).png";
import img4 from "../assets/Article (5).png";
import img5 from "../assets/Article (6).png";
import img6 from "../assets/mehadi.jpg";

const Blog = () => {
    return (
        <div className="bg-gray-50 py-12 px-6 lg:px-36">
              
        
              {/* Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Card 1 */}
                <div className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img src={img1} alt="Blog 1" className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <div className="flex gap-2 mb-4">
                      <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                        Website Design
                      </button>
                      <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                        App Dev
                      </button>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      “5 manieren om uw website te laten opvallen”
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Een goed ontworpen website is meer dan een visitekaartje. Leer hoe
                      u met design, snelheid en content uw conversies....
                    </p>
                    <button className="text-[#FFFFFF] btn bg-[#468AFF] px-8 ">
                      Lees meer
                    </button>
                  </div>
                </div>
        
                {/* Card 2 */}
                <div  className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img src={img2} alt="Blog 2" className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <div className="flex gap-2 mb-4">
                    <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                        Website Design
                      </button>
                      <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                        App Dev
                      </button>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      “De kracht van branding in een digitale wereld”
                    </h2>
                    <p className="text-gray-600 mb-4">
                      In een tijdperk van constante digitale prikkels is een sterke
                      merkidentiteit essentieel. Ontdek hoe u een blijvende....
                    </p>
                    <button className="text-[#FFFFFF] btn bg-[#468AFF] px-8 ">
                      Lees meer
                    </button>
                  </div>
                </div>
        
                {/* Card 3 */}
                <div  className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img src={img3} alt="Blog 3" className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <div className="flex gap-2 mb-4">
                    <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                        Website Design
                      </button>
                      <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                        App Dev
                      </button>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      “De toekomst van mobiele applicaties”
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Mobiele applicaties blijven evolueren. Welke trends mogen
                      bedrijven niet missen om relevant te blijven?
                    </p>
                    <button className="text-[#FFFFFF] btn bg-[#468AFF] px-8 ">
                      Lees meer
                    </button>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img src={img4} alt="Blog 3" className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <div className="flex gap-2 mb-4">
                    <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                        Website Design
                      </button>
                      <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                        App Dev
                      </button>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      “De toekomst van mobiele applicaties”
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Mobiele applicaties blijven evolueren. Welke trends mogen
                      bedrijven niet missen om relevant te blijven?
                    </p>
                    <button className="text-[#FFFFFF] btn bg-[#468AFF] px-8 ">
                      Lees meer
                    </button>
                  </div>
                </div>
                {/* Card 5 */}
                <div  className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img src={img5} alt="Blog 3" className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <div className="flex gap-2 mb-4">
                    <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                        Website Design
                      </button>
                      <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                        App Dev
                      </button>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      “De toekomst van mobiele applicaties”
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Mobiele applicaties blijven evolueren. Welke trends mogen
                      bedrijven niet missen om relevant te blijven?
                    </p>
                    <button className="text-[#FFFFFF] btn bg-[#468AFF] px-8 ">
                      Lees meer
                    </button>
                  </div>
                </div>
                {/* Card 6 */}
                <div  className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img src={img6} alt="Blog 3" className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <div className="flex gap-2 mb-4">
                    <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                        Website Design
                      </button>
                      <button className="bg-[#FFFFFF] text-[#468AFF] text-sm px-4 py-1 rounded-full  transition duration-300">
                        App Dev
                      </button>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      “De toekomst van mobiele applicaties”
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Mobiele applicaties blijven evolueren. Welke trends mogen
                      bedrijven niet missen om relevant te blijven?
                    </p>
                    <button className="text-[#FFFFFF] btn bg-[#468AFF] px-8 ">
                      Lees meer
                    </button>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default Blog;