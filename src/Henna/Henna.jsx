const Henna = () => {
    return (
      <div className="space-y-16">
        {/* Section 1 */}
        <div className="px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                className="w-full max-w-sm object-contain"
                src="/article/landing (1).png"
                alt="Henna Ghizlan Website Preview"
              />
            </div>
  
            {/* Right Details */}
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-3xl text-sky-400 font-semibold">
                Henna Ghizlan Website
              </h1>
              <p className="text-sm sm:text-base font-serif text-slate-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
  
              {/* Details List */}
              <div className="space-y-3 border-t border-b border-slate-200 py-4">
                <div className="flex justify-between items-center px-2">
                  <p className="text-sm text-slate-500">Category:</p>
                  <p className="text-sm text-slate-500 font-medium">UI Design</p>
                </div>
                <div className="flex justify-between items-center px-2">
                  <p className="text-sm text-slate-500">Tools:</p>
                  <p className="text-sm text-slate-500 font-medium">Figma</p>
                </div>
                <div className="flex justify-between items-center px-2">
                  <p className="text-sm text-slate-500">Project date:</p>
                  <p className="text-sm text-slate-500 font-medium">February, 2020</p>
                </div>
                <div className="flex justify-between items-center px-2">
                  <p className="text-sm text-slate-500">Share this:</p>
                  <p className="text-sm text-slate-500 font-medium">
                    Facebook, Twitter, Linkedin
                  </p>
                </div>
              </div>
  
              <div className="mt-5">
                <button className="btn btn-sm btn-info w-full max-w-xs text-xs text-white">
                  View Live Site
                </button>
              </div>
            </div>
          </div>
  
          {/* Description */}
          <div className="mt-10 space-y-4 px-4 sm:px-6 md:px-8">
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
          <div className="flex justify-center">
            <img
              className="w-full max-w-lg object-contain"
              src="/article/bridal henna.png"
              alt="Bridal Henna"
            />
          </div>
          <div className="space-y-4 px-4 sm:px-6 md:px-8">
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
        <div className="px-4 md:px-10 flex justify-center">
          <img
            className="w-full max-w-lg object-contain"
            src="/article/event henna 1.png"
            alt="Event Henna"
          />
        </div>
      </div>
    );
  };
  
  export default Henna;
  