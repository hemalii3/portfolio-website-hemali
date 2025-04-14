
import React from 'react';
import { Mail, MapPin, Phone, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-data-darkCard to-data-darkBg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="animate-fade-in pink-glass p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-data-primary">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-gradient-to-r from-data-primary/20 to-data-highlight/20 mr-4">
                  <Mail size={20} className="text-data-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-300">hemalisuthar.work@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-gradient-to-r from-data-primary/20 to-data-highlight/20 mr-4">
                  <Phone size={20} className="text-data-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-300">+43 6677897979</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-gradient-to-r from-data-primary/20 to-data-highlight/20 mr-4">
                  <MapPin size={20} className="text-data-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-300">Vienna, Austria</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-6 text-data-primary">Connect with me</h3>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gradient-to-r from-data-primary/10 to-data-highlight/10 hover:from-data-primary/30 hover:to-data-highlight/30 transition-all">
                  <Github size={20} className="text-data-primary" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gradient-to-r from-data-primary/10 to-data-highlight/10 hover:from-data-primary/30 hover:to-data-highlight/30 transition-all">
                  <Linkedin size={20} className="text-data-primary" />
                </a>
                <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gradient-to-r from-data-primary/10 to-data-highlight/10 hover:from-data-primary/30 hover:to-data-highlight/30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-data-primary">
                    <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"></path>
                    <path d="M8 9l3 3 3-3"></path>
                    <path d="M8 15h8"></path>
                  </svg>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gradient-to-r from-data-primary/10 to-data-highlight/10 hover:from-data-primary/30 hover:to-data-highlight/30 transition-all">
                  <Twitter size={20} className="text-data-primary" />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gradient-to-r from-data-primary/10 to-data-highlight/10 hover:from-data-primary/30 hover:to-data-highlight/30 transition-all">
                  <Instagram size={20} className="text-data-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
