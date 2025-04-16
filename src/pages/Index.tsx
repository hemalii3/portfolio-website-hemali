
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Custom cursor effect
    const cursor = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    window.addEventListener('mousemove', (e) => {
      if (cursor && cursorOutline) {
        const posX = e.clientX;
        const posY = e.clientY;
        
        (cursor as HTMLElement).style.left = `${posX}px`;
        (cursor as HTMLElement).style.top = `${posY}px`;
        
        // Add delay to outline cursor for trailing effect
        setTimeout(() => {
          (cursorOutline as HTMLElement).style.left = `${posX}px`;
          (cursorOutline as HTMLElement).style.top = `${posY}px`;
        }, 80);
      }
    });
    
    return () => {
      window.removeEventListener('mousemove', () => {});
    };
  }, []);
  
  return (
    <Layout>
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Index;
