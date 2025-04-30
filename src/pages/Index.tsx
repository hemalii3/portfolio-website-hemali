
import React from 'react';
import Layout from '@/components/Layout';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-24">
        <About />
        <Projects />
        <Education />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
