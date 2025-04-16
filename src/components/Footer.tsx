
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Book } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 mt-24">
      <div className="flex flex-col items-center justify-center text-slate">
        {/* Mobile Social Links */}
        <div className="flex items-center space-x-6 mb-6 lg:hidden">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="https://twitter.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
          <a 
            href="https://instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a 
            href="https://goodreads.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors"
            aria-label="Goodreads"
          >
            <Book size={18} />
          </a>
        </div>
        
        <div className="text-sm font-mono">
          <a 
            href="https://github.com/hemsuthar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-green transition-colors inline-link"
          >
            Designed & Built by Hemali Suthar
          </a>
        </div>
        
        <div className="text-xs mt-2">
          &copy; {currentYear} All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
