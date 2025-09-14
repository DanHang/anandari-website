import { Linkedin, Mail, MapPin } from 'lucide-react';

function Footer() {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="text-2xl font-light text-white mb-6">
              <span className="font-extralight">ANAN</span>
              <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent font-medium">DARI</span>
            </div>
            <p className="text-gray-400 leading-relaxed font-light mb-6">
              Expert en intégration stratégique d'IA pour dirigeants visionnaires. 
              Transformez votre vision en avantage concurrentiel durable.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/dan-hang/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@anandari.com" 
                aria-label="Email" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-amber-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#expertise" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-light"
                  onClick={(e) => handleLinkClick(e, 'expertise')}
                >
                  Expertise
                </a>
              </li>
              <li>
                <a 
                  href="#approche" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-light"
                  onClick={(e) => handleLinkClick(e, 'approche')}
                >
                  Approche
                </a>
              </li>
              <li>
                <a 
                  href="#cas-clients" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-light"
                  onClick={(e) => handleLinkClick(e, 'projets')}
                >
                  Cas clients
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-light"
                  onClick={(e) => handleLinkClick(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 font-light">05 Rue Villiot, 75012 Paris</p>
                  <p className="text-gray-500 text-sm font-light">Interventions internationales</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 font-light">contact@anandari.com</p>
                  <p className="text-gray-500 text-sm font-light">Réponse sous 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-light">
            © 2025 Anandari SASU. Tous droits réservés. SIRET : 949696959 00012
          </p>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm font-light transition-colors duration-300">
              Mentions légales
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm font-light transition-colors duration-300">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

