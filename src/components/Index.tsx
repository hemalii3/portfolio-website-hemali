
import React from 'react';
import Layout from '@/components/Layout';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-20">
        <About />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </div>
    </Layout>
  );
};

export default Index;
