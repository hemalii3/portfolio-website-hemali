
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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', () => {});
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
  
  // Removed isHome logic and removed navbar rendering
  
  return (
    <div className="min-h-screen bg-navy text-light-slate px-12 md:px-24 lg:px-32 text-xl"> {/* Updated text color & increased font size */}
      <header className="py-12 mb-12 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-7xl font-semibold text-white mb-4">Hemali Suthar</h1> {/* Increased from text-6xl */}
          <h2 className="text-4xl text-white/90 mb-6">Data Analyst</h2> {/* Increased from text-3xl */}
          <p className="text-2xl text-light-slate max-w-3xl mx-auto">
            I see, play, analyze and <span className="text-[#1EAEDB]">visualize</span> data to make <span className="text-[#1EAEDB]">right decisions</span>.
          </p>
          
          {/* Removed navigation bar and social icons from header */}
        </div>
      </header>

      <main ref={mainContentRef} className="max-w-5xl mx-auto">
        {children}
      </main>
      
      {/* Removed mobile bottom nav bar */}
      
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </div>
  );
};

export default Layout;
