import logo from "../assets/logo black 1.png";
import phone from "../assets/Vector1.png";
import email from "../assets/Vector.png";
import instra from "../assets/bx_bxl-instagram-alt.png";
import twiter from "../assets/Group.png";
import linkedin from "../assets/Vector 2.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate=useNavigate();
  return (
    <footer className="bg-sky-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img src={logo} alt="Logo" className="mb-4" />
          <p className="text-gray-900 mb-4">
            Phasellus pulvinar porta turpis sit amet facilis sapien bibendum eu
            praesent massa.
          </p>
          <div className="flex items-center mb-2">
            <img src={phone} alt="Phone" className="mr-2 w-5 h-5" />
            <span className="text-gray-900">(888) 1234-5678</span>
          </div>
          <div className="flex items-center">
            <img src={email} alt="Email" className="mr-2 w-5 h-5" />
            <span className="text-gray-900">info@example.com</span>
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
          <ul className="space-y-2 text-gray-900">
            <li>Functies</li>
            <li>About</li>
            <li className="hover:text-blue-600" onClick={()=>navigate("/henna")}>Service</li>
            <li>Team</li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hulp en Ondersteuning</h3>
          <ul className="space-y-2 text-gray-900">
            <li>Veelgestelde Vragen</li>
            <li>Blog</li>
            <li>Neem Contact Op</li>
            <li>Ondersteuning</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Bronnen</h3>
          <ul className="space-y-2 text-gray-900">
            <li>Gidsen en Bronnen</li>
            <li>Team</li>
            <li>Hulpmiddelen</li>
            <li>Ondersteuning</li>
            
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-900 text-sm">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
