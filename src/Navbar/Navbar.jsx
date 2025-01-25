import NavLogo from "../assets/logo black 1.png";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-5">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src={NavLogo} alt="Logo" className="h-8 lg:h-10 w-auto" />
          <span className="text-lg font-bold text-gray-800"></span>
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-white mt-2 p-2 shadow-lg rounded-box w-42 right-0 z-10"
          >
            <li><a href="/startpagina">Startpagina</a></li>
            <li><a href="/Overons">Over Ons</a></li>
            <li><a href="#diensten">Diensten</a></li>
            <li><a href="/Veelgestelde">Veelgestelde Vragen</a></li>
            <li><a href="#prijzen">Prijzen</a></li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <a href="/startpagina" className="text-gray-600 hover:text-blue-600">Startpagina</a>
          <a href="/Overons" className="text-gray-600 hover:text-blue-600">Over Ons</a>
          <a href="#diensten" className="text-gray-600 hover:text-blue-600">Diensten</a>
          <a href="/Veelgestelde" className="text-gray-600 hover:text-blue-600">Veelgestelde Vragen</a>
          <a href="#prijzen" className="text-gray-600 hover:text-blue-600">Prijzen</a>
        </div>

        {/* Contact Button */}
        <a href="#contact" className="hidden lg:block btn bg-blue-600 text-white px-6 py-4                                                                                                                                                       rounded-md shadow-md">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
