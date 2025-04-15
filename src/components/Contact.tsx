
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Github, Twitter, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      setMessage('');
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-data-darkBg to-data-midnight relative overflow-hidden">
      {/* Background elements with animated particles */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22%3E%3Cg fill=%22white%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M0 0h4v4H0V0zm10 0h4v4h-4V0zm10 0h4v4h-4V0zm10 0h4v4h-4V0zM5 5h4v4H5V5zm10 0h4v4h-4V5zm10 0h4v4h-4V5zM0 10h4v4H0v-4zm5 0h4v4H5v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM0 20h4v4H0v-4zm5 0h4v4H5v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM5 15h4v4H5v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM0 30h4v4H0v-4zm5 0h4v4H5v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM5 25h4v4H5v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM0 40h4v4H0v-4zm5 0h4v4H5v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zM5 35h4v4H5v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4z%22/%3E%3C/g%3E%3C/svg%3E')]">
        </div>
        <div className="particles">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float" 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
                animationDuration: `${3 + Math.random() * 8}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-3xl font-bold inline-block relative">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-pulse-slow">Get In Touch</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">Have a project in mind or just want to connect? Feel free to reach out.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="col-span-1 lg:col-span-7 bg-gradient-to-br from-data-navy/80 to-data-darkBg/80 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-blue-glow animate-slide-up overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 relative inline-block">
                Send a Message
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-data-primary/30"></span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-white/80">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-data-darkBg/50 rounded-lg border border-white/10 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-200 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-white/80">Message</label>
                  <textarea 
                    id="message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="What would you like to discuss?"
                    rows={5}
                    className="w-full px-4 py-3 bg-data-darkBg/50 rounded-lg border border-white/10 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-200 text-white resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 py-6"
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-2 border-white/50 border-t-white rounded-full mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="col-span-1 lg:col-span-5 space-y-6">
            <Card className="bg-gradient-to-br from-data-navy/80 to-data-darkBg/80 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-blue-glow animate-slide-up overflow-hidden group hover:-translate-y-1">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 relative">
                  Contact Information
                  <span className="absolute -bottom-2 left-0 w-20 h-0.5 bg-data-primary/30 group-hover:w-full transition-all duration-700"></span>
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start group/item hover:-translate-x-1 transition-transform">
                    <div className="p-3 rounded-lg bg-data-darkAccent mr-4 group-hover/item:scale-110 transition-transform">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-white">Email</h4>
                      <a href="mailto:hemalisuthar.work@gmail.com" className="text-gray-300 hover:text-white transition-colors">hemalisuthar.work@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start group/item hover:-translate-x-1 transition-transform">
                    <div className="p-3 rounded-lg bg-data-darkAccent mr-4 group-hover/item:scale-110 transition-transform">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-white">Phone</h4>
                      <a href="tel:+43 6677897979" className="text-gray-300 hover:text-white transition-colors">+43 6677897979</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start group/item hover:-translate-x-1 transition-transform">
                    <div className="p-3 rounded-lg bg-data-darkAccent mr-4 group-hover/item:scale-110 transition-transform">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-white">Location</h4>
                      <p className="text-gray-300">Vienna, Austria</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="font-medium mb-4 text-white">Connect on Social Media</h4>
                  <div className="flex gap-4">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-data-darkAccent/70 hover:bg-data-darkAccent text-white hover:scale-110 transition-all">
                      <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-data-darkAccent/70 hover:bg-data-darkAccent text-white hover:scale-110 transition-all">
                      <Linkedin size={18} />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-data-darkAccent/70 hover:bg-data-darkAccent text-white hover:scale-110 transition-all">
                      <Twitter size={18} />
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-data-darkAccent/70 hover:bg-data-darkAccent text-white hover:scale-110 transition-all">
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
