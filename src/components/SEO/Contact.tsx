import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Award, Star, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const services = [
    'SEO Audit',
    'Local SEO',
    'E-commerce SEO',
    'Outsources SEO',
    'Small Business SEO',
    'Wordpress SEO',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-[#141414] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#E26E02]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E26E02]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <span className="text-sm font-medium text-[#E26E02]">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Ready to</span>
            <br />
            <span className="text-[#E26E02]">
              Dominate Search Results?
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get a SEO audit and consultation from the leading SEO company in Zirakpur. 
            Let's discuss how we can help your business achieve top search rankings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact NetBond Technologies</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#E26E02] rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Phone</div>
                    <div className="text-gray-300">+91 98765 43210</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#E26E02] rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Email</div>
                    <div className="text-gray-300">info@netbondtechnologies.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#E26E02] rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Office Location</div>
                    <div className="text-gray-300">Zirakpur, Punjab 140603, India</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#E26E02] rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Business Hours</div>
                    <div className="text-gray-300">Mon - Sat: 9:00 AM - 7:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-[#E26E02] mr-3" />
                <h3 className="text-xl font-bold text-white">Why Choose NetBond SEO?</h3>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#E26E02] mr-3" />
                  Comprehensive SEO audit 
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#E26E02] mr-3" />
                  No long-term contracts required
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#E26E02] mr-3" />
                  100% white-hat SEO techniques
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#E26E02] mr-3" />
                  Dedicated SEO account manager
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#E26E02] mr-3" />
                  Monthly detailed SEO reports
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#E26E02] mr-3" />
                  Local SEO expertise in Zirakpur
                </li>
              </ul>
            </div>

           
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Get Your SEO Audit</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E26E02] focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E26E02] focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E26E02] focus:border-transparent transition-all duration-200"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E26E02] focus:border-transparent transition-all duration-200"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#E26E02] focus:border-transparent transition-all duration-200"
                >
                  <option value="" className="bg-[#141414]">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service} className="bg-[#141414]">{service}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E26E02] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your SEO goals, current challenges, and what you hope to achieve..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-[#E26E02] text-white rounded-xl font-medium hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white transition-all duration-200 cursor-pointer"
              >
                Get SEO Audit & Consultation
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;