import NavLogo from "../assets/logo black 1.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

// Dropdown Component for Prijzen
const PrijzenDropdown = () => {
  const navigate=useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-black"
      >
        Diensten
        <ChevronDownIcon
          className="w-5 h-5 text-gray-500 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <a href="#" onClick={()=>navigate("/appmarket")} className="block px-4 py-2 hover:bg-gray-100">App Ontwikkeling</a>
          <a href="#" onClick={()=>navigate("/Diensten")} className="block px-4 py-2 hover:bg-gray-100">Branding</a>
          <a href="#" onClick={()=>navigate("/marketing")} className="block px-4 py-2 hover:bg-gray-100">Marketingsdiensten</a>
          <a href="/prijzen" className="block px-4 py-2 hover:bg-gray-100">Website Builder</a>
        </div>
      )}
    </div>
  );
};

// Dropdown Component for Diensten
const DienstenDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-black"
      >
        Prijzen
        <ChevronDownIcon
          className="w-5 h-5 text-gray-500 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
         <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
         <a href="/startpagina" className="block px-4 py-2 hover:bg-gray-100">App Ontwikkeling</a>
         <a href="/PrijzenBranding" className="block px-4 py-2 hover:bg-gray-100">Branding</a>
         <a href="/PrijzenMarkeing" className="block px-4 py-2 hover:bg-gray-100">Marketingsdiensten</a>
         <a href="/prijzen" className="block px-4 py-2 hover:bg-gray-100">Website Builder</a>
       </div>
      )}
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-[#FFFFFF] md:px-32 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-5">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src={NavLogo} alt="Logo" className="h-8 lg:h-10 w-auto" />
        </a>

        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-white mt-2 p-2 shadow-lg rounded-box w-42 right-0 z-10"
          >
            <li className="z-20 -ml-4"><PrijzenDropdown /></li> {/* Prijzen Dropdown */}
            <li className="z-10 -ml-4"><DienstenDropdown /></li> {/* Diensten Dropdown */}

            {/* <li><a href="/startpagina">Startpagina</a></li> */}
            <li><a href="/Overons">Over Ons</a></li>
            <li><a href="/Veelgestelde">FAQ</a></li>
            <li><a href="/blog">Portfolio</a></li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center">
          <PrijzenDropdown /> {/* Prijzen Dropdown */}
          <DienstenDropdown /> {/* Diensten Dropdown */}
          {/* <a href="/startpagina" className="text-gray-900 hover:text-blue-600">Startpagina</a> */}
          <a href="/Overons" className="text-gray-900 hover:text-blue-600">Over Ons</a>
          <a href="/Veelgestelde" className="text-gray-900 hover:text-blue-600">FAQ</a>
          <a href="/blog" className="text-gray-900 hover:text-blue-600">Portfolio</a>
        </div>

        {/* Contact Button */}
        <a
          onClick={() => navigate("/Contact")}
          href="#contact"
          className="hidden lg:block hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
