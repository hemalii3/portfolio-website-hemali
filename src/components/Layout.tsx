
import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Book } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavItem {
  name: string;
  url: string;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mounted, setMounted] = useState<boolean>(false);
  const [contentVisible, setContentVisible] = useState<boolean>(false);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const mainContentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setMounted(true);
    
    // Fade in main content
    setTimeout(() => {
      setContentVisible(true);
    }, 300);
    
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
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    // Only implement custom cursor on non-mobile devices
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      };
      
      const handleMouseClick = () => {
        const cursor = document.querySelector('.cursor-dot');
        if (cursor) {
          const cursorDot = cursor as HTMLElement;
          cursorDot.style.transform = 'translate(-50%, -50%) scale(0.8)';
          setTimeout(() => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
          }, 150);
        }
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('click', handleMouseClick);
      
      document.body.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        
        if (cursor) (cursor as HTMLElement).style.opacity = '1';
        if (cursorOutline) (cursorOutline as HTMLElement).style.opacity = '1';
      });
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('click', handleMouseClick);
        document.body.removeEventListener('mouseenter', () => {});
      };
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);
  
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      setTimeout(() => {
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);
  
  return (
    <div className="min-h-screen bg-navy text-light-slate max-w-[100vw] overflow-x-hidden px-3 sm:px-6 md:px-12 lg:px-24 text-base sm:text-lg md:text-xl transition-opacity duration-700 ease-in-out"
         style={{ opacity: contentVisible ? 1 : 0 }}>
      <header className="py-6 md:py-14 mb-6 md:mb-14 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold text-white mb-1 sm:mb-4">
            Hemali Suthar
          </h1>
          <h2 className="text-xl sm:text-3xl md:text-4xl text-white/90 mb-3 sm:mb-8">
            <span className="text-[#1EAEDB]">Data Analyst " Web Developer </span>
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-light-slate max-w-3xl mx-auto mb-3 sm:mb-6 px-3 sm:px-4">
            I create<span className="highlight-word">webpages</span>,and work with  <span className="highlight-word">data</span>, <span className="highlight-word"></span> to make decisions <span className="highlight-word">I know my way to make things work.</span> data to make <span className="text-[#1EAEDB] font-semibold"></span>.
          </p>
           
          {/* Social media icons */}
          <div className="flex justify-center space-x-3 sm:space-x-6 mt-3 sm:mt-4">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light-slate hover:text-[#1EAEDB] transition-colors"
              aria-label="GitHub"
            >
              <Github size={isMobile ? 18 : 24} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light-slate hover:text-[#1EAEDB] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={isMobile ? 18 : 24} />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light-slate hover:text-[#1EAEDB] transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={isMobile ? 18 : 24} />
            </a>
            <a 
              href="https://instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light-slate hover:text-[#1EAEDB] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={isMobile ? 18 : 24} />
            </a>
            <a 
              href="https://goodreads.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light-slate hover:text-[#1EAEDB] transition-colors"
              aria-label="Goodreads"
            >
              <Book size={isMobile ? 18 : 24} />
            </a>
          </div>
        </div>
      </header>

      <main ref={mainContentRef} className="max-w-5xl mx-auto px-2">
        {children}
      </main>
      
      {/* Custom cursor - only show on non-mobile */}
      {!isMobile && (
        <>
          <div 
            className="cursor-dot z-[9999]"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              opacity: mounted ? 1 : 0,
            }}
          ></div>
          <div 
            className="cursor-outline z-[9998]"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              opacity: mounted ? 1 : 0,
              transition: 'left 0.15s ease-out, top 0.15s ease-out, opacity 0.3s ease-in-out',
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default Layout;
