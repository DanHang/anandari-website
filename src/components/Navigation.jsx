import { useState } from 'react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-light text-gray-900">
            <span className="font-extralight">ANAN</span>
            <span className="bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent font-medium">DARI</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <a 
            href="#expertise" 
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light text-lg"
            onClick={(e) => handleLinkClick(e, 'expertise')}
          >
            Expertise
          </a>
          <a 
            href="#approche" 
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light text-lg"
            onClick={(e) => handleLinkClick(e, 'approche')}
          >
            Approche
          </a>
          <a 
            href="#cas-clients" 
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light text-lg"
            onClick={(e) => handleLinkClick(e, 'projets')}
          >
            Cas clients
          </a>
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-blue-900 to-gray-800 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Contact
          </a>
        </div>

        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none text-gray-900 relative z-50" 
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span 
              className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}
            ></span>
            <span 
              className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span 
              className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}
            ></span>
          </div>
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col space-y-1">
              <a 
                href="#expertise" 
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 py-3 px-4 rounded-lg transition-all duration-200 text-lg font-light"
                onClick={(e) => handleLinkClick(e, 'expertise')}
              >
                Expertise
              </a>
              <a 
                href="#approche" 
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 py-3 px-4 rounded-lg transition-all duration-200 text-lg font-light"
                onClick={(e) => handleLinkClick(e, 'approche')}
              >
                Approche
              </a>
              <a 
                href="#cas-clients" 
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 py-3 px-4 rounded-lg transition-all duration-200 text-lg font-light"
                onClick={(e) => handleLinkClick(e, 'cas-clients')}
              >
                Cas clients
              </a>
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-900 to-gray-800 text-white py-3 px-4 rounded-lg transition-all duration-200 text-lg font-medium text-center"
                onClick={(e) => handleLinkClick(e, 'contact')}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;

