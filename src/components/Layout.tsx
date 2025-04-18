import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, Instagram, BookMarked, ExternalLink } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

interface NavItem {
  name: string;
  url: string;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mounted, setMounted] = useState<boolean>(false);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  const navItems: NavItem[] = [
    { name: 'About', url: '#about' },
    { name: 'Experience', url: '#experience' },
    { name: 'Education', url: '#education' },
    { name: 'Projects', url: '#projects' }
  ];
  
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      if (!mainContentRef.current) return;
      
      const sections = document.querySelectorAll('section[id]');
      
      let currentActive = '';
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 300) {
          currentActive = section.id;
        }
      });
      
      setActiveSection(currentActive);
    };
    
    const mainContent = mainContentRef.current;
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }
    
    return () => {
      if (mainContent) {
        mainContent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      setTimeout(() => {
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);
  
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-navy text-slate">
      <aside className="lg:w-[40%] lg:h-screen px-12 py-8 lg:fixed lg:top-0 lg:left-0 flex flex-col justify-between z-10">
        <div className="mt-6">
          <div className="mb-4">
            <h1 className="text-4xl font-semibold text-white mb-2">Hemali Suthar</h1>
            <h2 className="text-xl text-white/80 mb-3">Data Analyst</h2>
            <p className="text-slate mb-4">
              I see, play, analyze and visualize data to make right decisions.
            </p>
          </div>
          
          {isHome && (
            <nav className="hidden lg:block">
              <ol className="flex flex-col space-y-1">
                {navItems.map(({ name, url }, i) => (
                  <li key={i} className="nav-item">
                    <Link 
                      to={url} 
                      className={`nav-link flex items-center text-sm group transition-all duration-200 ${activeSection === url.substring(1) ? 'active text-white' : 'text-white/70'}`}
                    >
                      <span className={`nav-line mr-4 h-px bg-white/70 transition-all duration-300 ${activeSection === url.substring(1) ? 'w-16' : 'w-8 group-hover:w-16'}`}></span>
                      <span className="hover:text-white transition-colors">{name}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        
          <div className="mt-4">
            <div className="flex items-center space-x-4 mb-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transform hover:-translate-y-1 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transform hover:-translate-y-1 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transform hover:-translate-y-1 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transform hover:-translate-y-1 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://goodreads.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transform hover:-translate-y-1 transition-all duration-200"
                aria-label="Goodreads"
              >
                <BookMarked size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </aside>
      
      <main 
        ref={mainContentRef}
        className="lg:ml-[40%] flex-1 lg:h-screen lg:overflow-y-auto custom-scrollbar"
      >
        <div className="max-w-3xl mx-auto px-12 py-8">
          {children}
        </div>
      </main>
      
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-navy-shadow p-4 flex justify-around z-50 border-t border-lightest-navy">
        {navItems.map(({ name, url }, i) => (
          <Link 
            key={i}
            to={url} 
            className={`flex flex-col items-center text-xs ${activeSection === url.substring(1) ? 'text-white' : 'text-white/70'}`}
          >
            <span>{name}</span>
          </Link>
        ))}
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center text-xs text-white/70"
        >
          <ExternalLink size={12} className="mb-1" />
          <span>Resume</span>
        </a>
      </div>
      
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </div>
  );
};

export default Layout;
