
import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, Instagram, Book, ExternalLink } from 'lucide-react';
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
    { name: 'Projects', url: '#projects' },
    { name: 'Education', url: '#education' }
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
    // Check for hash in URL and scroll to section on initial load
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
      {/* Sidebar */}
      <aside className="lg:w-[350px] lg:h-screen px-6 py-10 lg:fixed lg:top-0 lg:left-0 flex flex-col justify-between z-10">
        <div>
          <div className="mb-12">
            <Link to="/" className="text-2xl font-mono text-lightest-slate hover:text-green">
              <div className="logo-container">
                <div className="logo-text">HS</div>
              </div>
            </Link>
          </div>
          
          {isHome && (
            <nav className="hidden lg:block">
              <ol className="flex flex-col space-y-5">
                {navItems.map(({ name, url }, i) => (
                  <li key={i} className="nav-item">
                    <Link 
                      to={url} 
                      className={`nav-link flex items-center text-sm group transition-all duration-200 ${activeSection === url.substring(1) ? 'active text-green' : 'text-lightest-slate'}`}
                    >
                      <span className={`nav-line mr-4 h-px bg-green transition-all duration-300 ${activeSection === url.substring(1) ? 'w-16' : 'w-8 group-hover:w-16'}`}></span>
                      <span className="font-mono text-xs mr-1 text-green">{`0${i + 1}.`}</span>
                      <span className="hover:text-green transition-colors">{name}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
        
        <div className="hidden lg:block">
          <div className="flex flex-col items-center space-y-5">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightest-slate hover:text-green transform hover:-translate-y-1 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightest-slate hover:text-green transform hover:-translate-y-1 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightest-slate hover:text-green transform hover:-translate-y-1 transition-all duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightest-slate hover:text-green transform hover:-translate-y-1 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://goodreads.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightest-slate hover:text-green transform hover:-translate-y-1 transition-all duration-200"
              aria-label="Goodreads"
            >
              <Book size={20} />
            </a>
            <div className="h-24 w-px bg-lightest-slate/20 mt-4"></div>
          </div>
        </div>
      </aside>
      
      {/* Main Content - Scrollable */}
      <main 
        ref={mainContentRef}
        className="lg:ml-[350px] flex-1 lg:h-screen lg:overflow-y-auto custom-scrollbar pb-10"
      >
        <div className="max-w-3xl mx-auto px-6 py-24">
          {children}
        </div>
        
        {/* Mobile Nav */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-navy-shadow p-4 flex justify-around z-50 border-t border-lightest-navy">
          {navItems.map(({ name, url }, i) => (
            <Link 
              key={i}
              to={url} 
              className={`flex flex-col items-center text-xs ${activeSection === url.substring(1) ? 'text-green' : 'text-lightest-slate'}`}
            >
              <span className="font-mono text-[10px] mb-1">{`0${i + 1}`}</span>
              <span>{name}</span>
            </Link>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center text-xs text-lightest-slate"
          >
            <ExternalLink size={12} className="mb-1" />
            <span>Resume</span>
          </a>
        </div>
      </main>
      
      {/* Custom Cursor Effect */}
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </div>
  );
};

export default Layout;
