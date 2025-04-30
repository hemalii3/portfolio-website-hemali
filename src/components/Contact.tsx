
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('contact');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <section id="contact" className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="section-heading">Get In Touch</h2>
      
      <div className="text-center max-w-xl mx-auto">
        <p className="text-slate mb-8 text-xl">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hello, 
          I'll do my best to get back to you!
        </p>
        
        <div className="space-y-6 text-left mb-10 bg-light-navy/30 p-8 rounded-lg border border-[#1EAEDB]/30 hover:border-[#1EAEDB]/60 transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center">
            <Mail size={22} className="text-[#1EAEDB] mr-4" />
            <a 
              href="mailto:hemalisuthar.work@gmail.com" 
              className="text-white hover:text-[#1EAEDB] transition-colors inline-link text-xl"
            >
              hemalisuthar.work@gmail.com
            </a>
          </div>
          
          <div className="flex items-center">
            <Phone size={22} className="text-[#1EAEDB] mr-4" />
            <a 
              href="tel:+43 6677897979" 
              className="text-white hover:text-[#1EAEDB] transition-colors inline-link text-xl"
            >
              +43 6677897979
            </a>
          </div>
          
          <div className="flex items-center">
            <MapPin size={22} className="text-[#1EAEDB] mr-4" />
            <span className="text-white text-xl">Vienna, Austria</span>
          </div>
        </div>
        
        <a 
          href="mailto:hemalisuthar.work@gmail.com" 
          className="button-link inline-flex items-center group text-lg font-semibold"
        >
          <span>Say Hello</span>
          <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
