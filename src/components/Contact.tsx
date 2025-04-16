
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

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
      <h2 className="numbered-heading mb-8">Get In Touch</h2>
      
      <div className="text-center max-w-md mx-auto">
        <p className="text-slate mb-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>
        
        <div className="space-y-6 text-left mb-12">
          <div className="flex items-center">
            <Mail size={20} className="text-green mr-4" />
            <a 
              href="mailto:hemalisuthar.work@gmail.com" 
              className="text-lightest-slate hover:text-green transition-colors"
            >
              hemalisuthar.work@gmail.com
            </a>
          </div>
          
          <div className="flex items-center">
            <Phone size={20} className="text-green mr-4" />
            <a 
              href="tel:+43 6677897979" 
              className="text-lightest-slate hover:text-green transition-colors"
            >
              +43 6677897979
            </a>
          </div>
          
          <div className="flex items-center">
            <MapPin size={20} className="text-green mr-4" />
            <span className="text-lightest-slate">Vienna, Austria</span>
          </div>
        </div>
        
        <a 
          href="mailto:hemalisuthar.work@gmail.com" 
          className="button-outline inline-flex items-center"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
