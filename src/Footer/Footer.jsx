import logo from "../assets/logo black 1.png";
import { MdOutlineMarkEmailUnread } from "react-icons/md";



import { FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 sm:px-10 md:px-16 lg:px-36">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:gap-16">
        {/* Company Info */}
        <div className="space-y-5 w-full md:w-1/2">
          <img src={logo} alt="Logo" className="mb-6 w-32 sm:w-40" />
          <p className="font-plus-jakarta text-[#263238] text-[16px]  leading-relaxed">
            Younitech is een softwarebedrijf gespecialiseerd in
            app-ontwikkeling, marketing en branding. Het bedrijf onderscheidt
            zich door oprechte en eerlijke bedrijfsvoering, met aandacht voor
            maatschappelijke belangen en kansen voor werknemers, zonder dat
            expliciet uit te dragen. Younitech denkt contrarian en kiest voor
            een unieke aanpak in een wereld vol concurrentie.
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4">
            <MdPhoneInTalk />
              <span className="text-gray-900 text-sm">085-203 15 20</span>
            </div>
            <div className="flex items-center gap-4">
            <MdOutlineMarkEmailUnread />
              <span className="text-gray-900 text-sm">Info@younitech.nl</span>
            </div>
          </div>
          <div className="flex space-x-6 sm:space-x-8 mt-8">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a
              className="h-6 w-6"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLinkedin />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16 mt-10 md:mt-0">
          <div className="space-y-5">
            <h3 className="font-bold font-plus-jakarta text-[16px] text-[#263238] ">Diensten</h3>
            <ul className="space-y-4 text-gray-900 text-sm">
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-plus-jakarta text-[#263238] ">
                <Link to="/appmarket">App ontwikkeling</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-plus-jakarta text-[#263238] ">
                <Link to="/Diensten">Branding</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-plus-jakarta text-[#263238] ">
                <Link to="/marketing">Marketingsdiensten</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-plus-jakarta text-[#263238] ">
                <Link to="/prijzen">Website builder</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="font-bold font-plus-jakarta text-[16px] text-[#263238] ">Prijzen</h3>
            <ul className="space-y-4 text-gray-900 text-sm">
            <li className="hover:text-blue-600 cursor-pointer transition-colors font-plus-jakarta text-[#263238]  ">
                <Link to="/PrijzenMarkeing ">App ontwikkeling</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-plus-jakarta text-[#263238] ">
                <Link to="/PrijzenBranding">Branding</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-plus-jakarta text-[#263238] ">
                <Link to="/startpagina">Marketingsdiensten</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-plus-jakarta text-[#263238] ">
                <Link to="/prijzen">Website builder</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5 ">
            <h3 className=" hover:text-blue-600 cursor-pointer transition-colors font-bold font-plus-jakarta text-[16px] text-[#263238]"><Link to="/Overons">Over ons</Link> </h3>
            <ul className="space-y-4 text-gray-900 text-sm">
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-bold font-plus-jakarta text-[16px] text-[#263238]">
              <Link to="/Veelgestelde"> FAQ</Link>
               
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-bold font-plus-jakarta text-[16px] text-[#263238] ">
              <Link to="/blog"> Portfolio</Link>
                
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-600 text-sm border-t pt-6">
        &copy; {new Date().getFullYear()} Younitech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
