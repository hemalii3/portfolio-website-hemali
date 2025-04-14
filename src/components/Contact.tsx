
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-data-darkBg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <div className="bg-data-darkCard p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-data-darkAccent mr-4">
                    <Mail size={20} className="text-data-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-300">Email@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-data-darkAccent mr-4">
                    <Phone size={20} className="text-data-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-300">+43 XXXX XXXXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-data-darkAccent mr-4">
                    <MapPin size={20} className="text-data-blue" />
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
                    <Github size={20} className="text-data-teal" />
                  </a>
                  <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-data-darkAccent hover:bg-data-darkAccent/70 transition-colors">
                    <ExternalLink size={20} className="text-data-teal" />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-data-darkAccent hover:bg-data-darkAccent/70 transition-colors">
                    <ExternalLink size={20} className="text-data-teal" />
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-data-darkAccent hover:bg-data-darkAccent/70 transition-colors">
                    <ExternalLink size={20} className="text-data-teal" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="gradient-border rounded-lg p-[1px]">
              <div className="bg-data-darkCard p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-data-darkAccent border border-data-darkAccent focus:border-data-blue outline-none transition"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-data-darkAccent border border-data-darkAccent focus:border-data-blue outline-none transition"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-data-darkAccent border border-data-darkAccent focus:border-data-blue outline-none transition"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-data-blue to-data-purple text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
