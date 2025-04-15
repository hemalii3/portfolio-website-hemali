
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Add smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.href.includes(window.location.pathname)) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Update URL hash without causing a jump
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  
  return (
    <div className="min-h-screen bg-[#0a192f]">
      <Navbar />
      <main className="px-0 md:px-12 lg:px-24">
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
