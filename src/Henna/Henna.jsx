
import henna1 from "/article/landing (1).png"
import henna2 from "/article/bridal henna.png"
import henna3 from "/article/event henna 1.png"
import { useEffect } from "react";


const Henna = () => {
   useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
    return (
      <div className="space-y-16 mt-10 mx-auto  ">
        {/* Section 1 */}
        <div className="px-4 md:px-10 lg:ml-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:ml-10 lg:mr-24">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                className="w-full max-w-lg object-contain"
                src={henna1}
                alt="Henna Ghizlan Website Preview"
              />
            </div>
  
            {/* Right Details */}
            <div className="space-y-2">
              <h1 className=" text-xl lg:text-lg text-sky-400 font-bold">
              Een Unieke Webshop voor een Henna-Artist: Creativiteit in Digitale Vorm
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
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. Lorem Ipsum has a
              more-or-less normal distribution of letters, as opposed to using.
            </p>
            <p className="text-left text-sm font-sans text-slate-500 leading-relaxed">
              Content here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as their
              default model text, and a search for lorem ipsum will uncover many web
              sites still in their infancy.
            </p>
          </div>
        </div>
  
        {/* Section 2 */}
        <div className="px-4 md:px-10 space-y-6">
          <div className="flex justify-start lg:ml-24">
            <img
              className="w-full max-w-lg object-contain"
              src={henna2}
              alt="Bridal Henna"
            />
          </div>
          <div className="space-y-4 px-4 sm:px-6 md:px-8 lg:ml-20 lg:mr-20">
            <p className="text-left text-sm text-slate-500 leading-relaxed">
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. Lorem Ipsum has a
              more-or-less normal distribution of letters, as opposed to using.
            </p>
            <p className="text-left text-sm font-sans text-slate-500 leading-relaxed">
              Content here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as their
              default model text, and a search for lorem ipsum will uncover many web
              sites still in their infancy.
            </p>
          </div>
        </div>
  
        {/* Section 3 */}
        <div className="px-4 md:px-10 flex justify-start lg:ml-24">
          <img
            className="w-full max-w-lg object-contain"
            src={henna3}
            alt="Event Henna"
          />
        </div>
      </div>
    );
  };
  
  export default Henna;
  