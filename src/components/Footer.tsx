
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-data-darkCard">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-bold font-code gradient-text">Hemali.Suthar</a>
          </div>
          
          <div className="text-sm text-gray-400">
            &copy; {currentYear} Hemali Suthar. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <a href="#hero" className="text-gray-400 hover:text-data-blue transition-colors">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
