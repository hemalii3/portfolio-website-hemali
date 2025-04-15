
import React from 'react';
import { Mail, MapPin, Phone, Github, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-data-darkBg to-data-midnight relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22%3E%3Cg fill=%22white%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M0 0h4v4H0V0zm10 0h4v4h-4V0zm10 0h4v4h-4V0zm10 0h4v4h-4V0zM5 5h4v4H5V5zm10 0h4v4h-4V5zm10 0h4v4h-4V5zM0 10h4v4H0v-4zm5 0h4v4H5v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM0 20h4v4H0v-4zm5 0h4v4H5v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM5 15h4v4H5v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM0 30h4v4H0v-4zm5 0h4v4H5v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM5 25h4v4H5v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM0 40h4v4H0v-4zm5 0h4v4H5v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM5 35h4v4H5v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4z%22/%3E%3C/g%3E%3C/svg%3E')]">
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold inline-block relative">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-pulse-slow">Get In Touch</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">Have a project in mind or just want to connect? Feel free to reach out.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <Card className="col-span-1 lg:col-span-1 bg-gradient-to-br from-data-navy to-data-darkBg border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-blue-glow animate-slide-up overflow-hidden">
            <CardContent className="p-8 flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-data-darkAccent mr-4">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white">Email</h4>
                    <a href="mailto:hemalisuthar.work@gmail.com" className="text-gray-300 hover:text-white transition-colors">hemalisuthar.work@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-data-darkAccent mr-4">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white">Phone</h4>
                    <a href="tel:+43 6677897979" className="text-gray-300 hover:text-white transition-colors">+43 6677897979</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-data-darkAccent mr-4">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white">Location</h4>
                    <p className="text-gray-300">Vienna, Austria</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Social Media Connects */}
          <Card className="col-span-1 lg:col-span-2 bg-gradient-to-br from-data-navy to-data-darkBg border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-blue-glow animate-slide-up" style={{animationDelay: '0.1s'}}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-data-midnight/50 hover:bg-data-darkAccent/30 transition-all duration-300 border border-white/5 hover:border-white/20">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-data-darkAccent/30 mb-3 group-hover:bg-data-darkAccent group-hover:scale-110 transition-all duration-300">
                    <Github size={24} className="text-white" />
                  </a>
                  <h4 className="font-medium text-white">GitHub</h4>
                  <p className="text-sm text-white/60 mt-1">Code repositories</p>
                </div>
                
                <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-data-midnight/50 hover:bg-data-darkAccent/30 transition-all duration-300 border border-white/5 hover:border-white/20">
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-data-darkAccent/30 mb-3 group-hover:bg-data-darkAccent group-hover:scale-110 transition-all duration-300">
                    <Linkedin size={24} className="text-white" />
                  </a>
                  <h4 className="font-medium text-white">LinkedIn</h4>
                  <p className="text-sm text-white/60 mt-1">Professional profile</p>
                </div>
                
                <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-data-midnight/50 hover:bg-data-darkAccent/30 transition-all duration-300 border border-white/5 hover:border-white/20">
                  <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-data-darkAccent/30 mb-3 group-hover:bg-data-darkAccent group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"></path>
                      <path d="M8 9l3 3 3-3"></path>
                      <path d="M8 15h8"></path>
                    </svg>
                  </a>
                  <h4 className="font-medium text-white">Medium</h4>
                  <p className="text-sm text-white/60 mt-1">Articles & blogs</p>
                </div>
                
                <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-data-midnight/50 hover:bg-data-darkAccent/30 transition-all duration-300 border border-white/5 hover:border-white/20">
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-data-darkAccent/30 mb-3 group-hover:bg-data-darkAccent group-hover:scale-110 transition-all duration-300">
                    <Twitter size={24} className="text-white" />
                  </a>
                  <h4 className="font-medium text-white">Twitter</h4>
                  <p className="text-sm text-white/60 mt-1">Latest updates</p>
                </div>
                
                <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-data-midnight/50 hover:bg-data-darkAccent/30 transition-all duration-300 border border-white/5 hover:border-white/20">
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-data-darkAccent/30 mb-3 group-hover:bg-data-darkAccent group-hover:scale-110 transition-all duration-300">
                    <Instagram size={24} className="text-white" />
                  </a>
                  <h4 className="font-medium text-white">Instagram</h4>
                  <p className="text-sm text-white/60 mt-1">Visual content</p>
                </div>
                
                <div className="group flex flex-col items-center justify-center text-center p-4 rounded-xl bg-data-navy hover:bg-data-darkAccent transition-all duration-300 border border-white/10 hover:border-white/30">
                  <p className="text-white/80">Want to work together?</p>
                  <a href="mailto:hemalisuthar.work@gmail.com" className="mt-2 inline-block px-5 py-2 rounded-lg bg-white text-data-darkBg font-medium hover:bg-white/90 transition-colors">Send Email</a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
