
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    setIsMounted(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', url: '#about' },
    { name: 'Education', url: '#education' },
    { name: 'Skills', url: '#skills' },
    { name: 'Projects', url: '#projects' },
    { name: 'Experience', url: '#experience' },
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'nav-shadow bg-[#0a192f]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-xl font-bold font-mono text-[#64ffda]">H.S</a>
          </div>
          
          <div className="hidden md:block">
            <ol className="flex items-center space-x-5">
              {navItems.map((item, i) => (
                <li key={i} style={{ transitionDelay: `${i * 100}ms` }} className={`${isMounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                  <a href={item.url} className="nav-link">
                    <span>0{i + 1}.</span> {item.name}
                  </a>
                </li>
              ))}
            </ol>
          </div>
          
          <div className="hidden md:block">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button-outline">
              Resume
            </a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 rounded-md text-[#64ffda] hover:bg-[#64ffda]/10"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#112240]/90 backdrop-blur-xl z-40 flex items-center justify-center">
          <div className="px-2 py-3 space-y-8 flex flex-col items-center">
            {navItems.map((item, i) => (
              <a 
                key={i}
                href={item.url} 
                className="text-[#ccd6f6] hover:text-[#64ffda] text-center text-xl font-semibold transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-[#64ffda] font-mono text-sm mb-1">0{i + 1}.</div>
                {item.name}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button-outline mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
