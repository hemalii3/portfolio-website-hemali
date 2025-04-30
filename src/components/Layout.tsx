
import React, { useState, useEffect, useRef } from 'react';
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
    
    // Custom cursor implementation
    const cursor = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    document.addEventListener('mousemove', (e) => {
      if (cursor) {
        (cursor as HTMLElement).style.left = `${e.clientX}px`;
        (cursor as HTMLElement).style.top = `${e.clientY}px`;
      }
      
      if (cursorOutline) {
        setTimeout(() => {
          (cursorOutline as HTMLElement).style.left = `${e.clientX}px`;
          (cursorOutline as HTMLElement).style.top = `${e.clientY}px`;
        }, 100);
      }
    });
    
    // Add click effect to cursor
    document.addEventListener('click', () => {
      if (cursor) {
        const cursorDot = cursor as HTMLElement;
        cursorDot.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(() => {
          cursorDot.style.transform = '';
        }, 150);
      }
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', () => {});
      document.removeEventListener('click', () => {});
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
      
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </div>
  );
};

export default Layout;
