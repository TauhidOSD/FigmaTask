import logo from "../assets/logo black 1.png";
import phone from "../assets/Vector1.png";
import email from "../assets/Vector.png";
import instra from "../assets/bx_bxl-instagram-alt.png";
import twiter from "../assets/Group.png";
import linkedin from "../assets/Vector 2.png";

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-8 md:px-36">
      <div className="max-w-7xl mx-auto grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div className="space-y-5">
          <img src={logo} alt="Logo" className="mb-6 w-40" />
          <p className="text-gray-900 text-sm leading-relaxed">
            Younitech is een softwarebedrijf gespecialiseerd in app-ontwikkeling, marketing en branding. Het bedrijf onderscheidt zich door een unieke aanpak in een wereld vol concurrentie.
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4">
              <img src={phone} alt="Phone" className="w-6 h-6" />
              <span className="text-gray-900 text-sm">085-203 15 20</span>
            </div>
            <div className="flex items-center gap-4">
              <img src={email} alt="Email" className="w-6 h-6" />
              <span className="text-gray-900 text-sm">Info@younitech.nl</span>
            </div>
          </div>
          <div className="flex space-x-8 mt-8">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instra} alt="Instagram" className="w-7 h-7 cursor-pointer hover:opacity-70 transition-opacity" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twiter} alt="Twitter" className="w-7 h-7 cursor-pointer hover:opacity-70 transition-opacity" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-7 h-7 cursor-pointer hover:opacity-70 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Handige Links</h3>
          <ul className="space-y-4 text-gray-900 text-sm">
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Functies</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">About</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Service</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Team</li>
          </ul>
        </div>

        {/* Help & Support */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Hulp en Ondersteuning</h3>
          <ul className="space-y-4 text-gray-900 text-sm">
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Veelgestelde Vragen</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Neem Contact Op</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Ondersteuning</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Bronnen</h3>
          <ul className="space-y-4 text-gray-900 text-sm">
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Gidsen en Bronnen</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Team</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Hulpmiddelen</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Ondersteuning</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 text-center text-gray-600 text-sm border-t pt-6">
        &copy; {new Date().getFullYear()} Younitech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
