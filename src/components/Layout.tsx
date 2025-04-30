
import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';

interface NavItem {
  name: string;
  url: string;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mounted, setMounted] = useState<boolean>(false);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 }); // Off-screen initially
  const mainContentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
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
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    // Enhanced cursor implementation
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    // Add click effect to cursor
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
    
    // Show cursor when mouse enters the viewport
    document.body.addEventListener('mouseenter', () => {
      const cursor = document.querySelector('.cursor-dot');
      const cursorOutline = document.querySelector('.cursor-outline');
      
      if (cursor) (cursor as HTMLElement).style.opacity = '1';
      if (cursorOutline) (cursorOutline as HTMLElement).style.opacity = '1';
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleMouseClick);
      document.body.removeEventListener('mouseenter', () => {});
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
  
  return (
    <div className="min-h-screen bg-navy text-light-slate px-12 md:px-24 lg:px-32 text-xl">
      <header className="py-14 mb-14 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-7xl font-semibold text-white mb-4">
            Hemali Suthar
          </h1>
          <h2 className="text-4xl text-white/90 mb-8">
            <span className="text-[#1EAEDB]">Data Analyst</span>
          </h2>
          <p className="text-2xl text-light-slate max-w-3xl mx-auto">
            I <span className="highlight-word">see</span>, <span className="highlight-word">play</span>, <span className="highlight-word">analyze</span> and <span className="highlight-word">visualize</span> data to make <span className="text-[#1EAEDB] font-semibold">right decisions</span>.
          </p>
        </div>
      </header>

      <main ref={mainContentRef} className="max-w-5xl mx-auto">
        {children}
      </main>
      
      {/* Improved custom cursor */}
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
    </div>
  );
};

export default Layout;
