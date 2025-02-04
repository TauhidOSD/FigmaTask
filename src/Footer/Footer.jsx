import logo from "../assets/logo black 1.png";
import phone from "../assets/Vector1.png";
import email from "../assets/Vector.png";
import instra from "../assets/bx_bxl-instagram-alt.png";
import twiter from "../assets/Group.png";
import linkedin from "../assets/Vector 2.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-white py-10 px-6 md:px-36">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img src={logo} alt="Logo" className="mb-4 w-36" />
          <p className="text-gray-900 text-sm leading-relaxed">
            Younitech is een softwarebedrijf gespecialiseerd in app-ontwikkeling, marketing en branding. Het bedrijf onderscheidt zich door een unieke aanpak in een wereld vol concurrentie.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <img src={phone} alt="Phone" className="w-5 h-5" />
              <span className="text-gray-900 text-sm">085-203 15 20</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={email} alt="Email" className="w-5 h-5" />
              <span className="text-gray-900 text-sm">Info@younitech.nl</span>
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <img src={instra} alt="Instagram" className="w-6 h-6 cursor-pointer" />
            <img src={twiter} alt="Twitter" className="w-6 h-6 cursor-pointer" />
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Handige Links</h3>
          <ul className="space-y-2 text-gray-900 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Functies</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer" onClick={() => navigate("/henna")}>Service</li>
            <li className="hover:text-blue-600 cursor-pointer">Team</li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hulp en Ondersteuning</h3>
          <ul className="space-y-2 text-gray-900 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Veelgestelde Vragen</li>
            <li className="hover:text-blue-600 cursor-pointer">Blog</li>
            <li className="hover:text-blue-600 cursor-pointer">Neem Contact Op</li>
            <li className="hover:text-blue-600 cursor-pointer">Ondersteuning</li>
          </ul>
        </div>

        {/* Resources */}
        <div  >
          <h3 className="text-lg font-semibold mb-4">Bronnen</h3>
          <ul className="space-y-2 text-gray-900 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Gidsen en Bronnen</li>
            <li className="hover:text-blue-600 cursor-pointer">Team</li>
            <li className="hover:text-blue-600 cursor-pointer">Hulpmiddelen</li>
            <li className="hover:text-blue-600 cursor-pointer">Ondersteuning</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Younitech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
