
import React, { useState } from 'react';

interface HeaderProps {
  currentView: 'home' | 'care' | 'billing' | 'about';
  onNavigate: (view: 'home' | 'care' | 'billing' | 'about') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (view: 'home' | 'care' | 'billing' | 'about') => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'care', label: 'Pflege & Begleitung' },
    { id: 'about', label: 'Über mich' },
    { id: 'billing', label: 'Abrechnung' },
  ] as const;

  const logoUrl = "https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/hand%20tree.png";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo Section */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNav('home')}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
               <img 
                 src={logoUrl} 
                 alt="CarlaCares Logo Icon" 
                 className="w-full h-full object-contain"
               />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-accentGreen leading-none group-hover:text-accentBrown transition-colors">CarlaCares</span>
              <span className="text-[10px] md:text-[11px] text-accentBrown font-semibold uppercase tracking-wider">Liechtenstein</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300 pb-1 border-b-2 ${
                  currentView === link.id 
                  ? 'text-accentGreen border-accentGreen' 
                  : 'text-textDark/60 border-transparent hover:text-accentGreen hover:border-accentGreen/30'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a 
              href="#kontakt"
              className="bg-accentGreen text-white px-6 py-3 rounded-full text-[13px] font-bold uppercase tracking-widest hover:bg-accentBrown transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Kontakt
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-accentGreen"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-50 absolute w-full shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-lg font-bold uppercase tracking-widest text-left ${
                  currentView === link.id ? 'text-accentGreen' : 'text-textDark/60'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4">
              <a 
                href="#kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-accentGreen text-white py-4 rounded-xl font-bold uppercase tracking-widest"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
