
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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    <div className="min-h-screen bg-navy text-slate px-12 md:px-24 lg:px-32 text-lg"> {/* Increased base font size from default */}
      <header className="py-12 mb-12 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl font-semibold text-white mb-4">Hemali Suthar</h1> {/* Increased from text-5xl */}
          <h2 className="text-3xl text-white/80 mb-6">Data Analyst</h2> {/* Increased from text-2xl */}
          <p className="text-xl text-slate max-w-3xl mx-auto">
            I see, play, analyze and visualize data to make right decisions.
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

