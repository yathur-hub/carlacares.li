
import React from 'react';

const Footer: React.FC = () => {
  const logoUrl = "https://raw.githubusercontent.com/yathur-hub/carlacares_BrandAssets/main/hand%20tree.png";

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 flex items-center justify-center">
                 <img src={logoUrl} alt="CarlaCares Logo Icon" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold text-accentGreen tracking-tight">CarlaCares</span>
            </div>
            <p className="text-textDark/60 text-sm max-w-sm leading-relaxed">
              CarlaCares ist der führende partner für ambulante psychiatrische Pflege im Fürstentum Liechtenstein. Wir begleiten Klienten und Angehörige alltagsnah und mit höchster fachlicher Expertise.
            </p>
            <div className="flex space-x-4 pt-4">
               <div className="w-10 h-10 rounded-lg bg-secondary border border-gray-100 flex items-center justify-center opacity-30">
                  <span className="font-bold text-[10px]">HF</span>
               </div>
               <div className="w-10 h-10 rounded-lg bg-secondary border border-gray-100 flex items-center justify-center opacity-30">
                  <span className="font-bold text-[10px]">KVG</span>
               </div>
            </div>
          </div>

          <div className="flex flex-col justify-start lg:items-end">
            <nav className="flex flex-wrap gap-x-12 gap-y-8 text-sm font-bold uppercase tracking-widest text-textDark/60 lg:justify-end">
              {/* Grouped Pflege & Zuweisende */}
              <div className="flex flex-col space-y-4">
                <a href="#pflege-begleitung" className="hover:text-accentGreen transition-colors whitespace-nowrap">Pflege & Begleitung</a>
                <a href="#fuer-zuweisende" className="text-[11px] text-accentBrown hover:text-accentGreen transition-colors whitespace-nowrap">für Zuweisende</a>
              </div>
              
              <a href="#ueber-mich" className="hover:text-accentGreen transition-colors whitespace-nowrap">Über mich</a>
              <a href="#abrechnung" className="hover:text-accentGreen transition-colors whitespace-nowrap">Abrechnung</a>
            </nav>
          </div>

        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-textDark/40 font-medium">
            &copy; {new Date().getFullYear()} carlacares.li. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center space-x-6 text-[10px] font-bold text-accentGreen/40 uppercase tracking-widest">
             <span>Ambulante Psychiatrische Pflege</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
