
import React from 'react';
import { Mail, MapPin, Phone, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-data-darkBg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-data-accent">Get In Touch</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="animate-fade-in bg-data-darkCard p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-data-darkAccent mr-4">
                  <Mail size={20} className="text-data-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-300">Email@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-data-darkAccent mr-4">
                  <Phone size={20} className="text-data-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-300">+43 XXXX XXXXXXX</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-data-darkAccent mr-4">
                  <MapPin size={20} className="text-data-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-300">Vienna, Austria</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-data-darkAccent hover:bg-data-darkAccent/70 transition-colors">
                  <Github size={20} className="text-data-secondary" />
                </a>
                <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-data-darkAccent hover:bg-data-darkAccent/70 transition-colors">
                  <ExternalLink size={20} className="text-data-secondary" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-data-darkAccent hover:bg-data-darkAccent/70 transition-colors">
                  <ExternalLink size={20} className="text-data-secondary" />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-data-darkAccent hover:bg-data-darkAccent/70 transition-colors">
                  <ExternalLink size={20} className="text-data-secondary" />
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
