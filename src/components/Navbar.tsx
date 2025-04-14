
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-data-darkBg/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-xl font-bold font-code gradient-text">Hemali.Suthar</a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className="hover:text-data-blue transition-colors">About</a>
              <a href="#education" className="hover:text-data-blue transition-colors">Education</a>
              <a href="#skills" className="hover:text-data-blue transition-colors">Skills</a>
              <a href="#projects" className="hover:text-data-blue transition-colors">Projects</a>
              <a href="#experience" className="hover:text-data-blue transition-colors">Experience</a>
              <a href="#contact" className="hover:text-data-blue transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md hover:bg-data-darkAccent">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-data-darkCard backdrop-blur-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block py-2 px-3 hover:bg-data-darkAccent rounded-md" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#education" className="block py-2 px-3 hover:bg-data-darkAccent rounded-md" onClick={() => setIsMenuOpen(false)}>Education</a>
            <a href="#skills" className="block py-2 px-3 hover:bg-data-darkAccent rounded-md" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" className="block py-2 px-3 hover:bg-data-darkAccent rounded-md" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#experience" className="block py-2 px-3 hover:bg-data-darkAccent rounded-md" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#contact" className="block py-2 px-3 hover:bg-data-darkAccent rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
