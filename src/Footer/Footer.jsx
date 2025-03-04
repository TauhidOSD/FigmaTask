import logo from "../assets/logo black 1.png";
import phone from "../assets/Vector1.png";
import email from "../assets/Vector.png";

import { FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 sm:px-10 md:px-16 lg:px-36">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:gap-16">
        {/* Company Info */}
        <div className="space-y-5 w-full md:w-1/2">
          <img src={logo} alt="Logo" className="mb-6 w-32 sm:w-40" />
          <p className="text-gray-900 text-sm leading-relaxed">
            Younitech is een softwarebedrijf gespecialiseerd in
            app-ontwikkeling, marketing en branding. Het bedrijf onderscheidt
            zich door oprechte en eerlijke bedrijfsvoering, met aandacht voor
            maatschappelijke belangen en kansen voor werknemers, zonder dat
            expliciet uit te dragen. Younitech denkt contrarian en kiest voor
            een unieke aanpak in een wereld vol concurrentie.
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4">
              <img src={phone} alt="Phone" className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-gray-900 text-sm">085-203 15 20</span>
            </div>
            <div className="flex items-center gap-4">
              <img src={email} alt="Email" className="w-5 h-5 sm:w-6 sm:h-6" />
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
            <a className="h-6 w-6" href="#" target="_blank" rel="noopener noreferrer">
              <ImLinkedin/>
              
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16 mt-10 md:mt-0">
          <div className="space-y-5">
            <h3 className="text-lg font-semibold">Diensten</h3>
            <ul className="space-y-4 text-gray-900 text-sm">
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                App ontwikkeling
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                Branding
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                Marketingsdiensten
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                Website builder
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold">Prijzen</h3>
            <ul className="space-y-4 text-gray-900 text-sm">
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                App ontwikkeling
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                Branding
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                Marketingsdiensten
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                Website builder
              </li>
            </ul>
          </div>

          <div className="space-y-5 ">
            <h3 className="text-lg font-semibold">Over ons</h3>
            <ul className="space-y-4 text-gray-900 text-sm">
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-bold">
                FAQ
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-bold">
                Portfolio
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
