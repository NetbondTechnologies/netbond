import React from 'react';
import { Search, BarChart3, PenTool, Globe, Smartphone, Zap, Target, Users, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      description: 'Complete SEO services to improve your website ranking on Google and other search engines.',
      features: ['Keyword Research & Analysis', 'On-Page SEO Optimization', 'Technical SEO Audit', 'Content Optimization']
    },
    {
      icon: Globe,
      title: 'Local SEO Services',
      description: 'Dominate local search results in Zirakpur and surrounding areas with our local SEO expertise.',
      features: ['Google My Business Optimization', 'Local Citations Building', 'Review Management', 'Local Keyword Targeting']
    },
    {
      icon: BarChart3,
      title: 'SEO Analytics & Reporting',
      description: 'Comprehensive SEO reporting and analytics to track your website performance and ROI.',
      features: ['Monthly SEO Reports', 'Keyword Ranking Tracking', 'Traffic Analysis', 'Competitor Analysis']
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'High-quality, SEO-optimized content that engages your audience and improves search rankings.',
      features: ['SEO Content Writing', 'Blog Post Creation', 'Website Copywriting', 'Content Strategy']
    },
    {
      icon: Smartphone,
      title: 'Mobile SEO',
      description: 'Optimize your website for mobile devices to capture the growing mobile search traffic.',
      features: ['Mobile-First Indexing', 'Page Speed Optimization', 'Mobile UX Improvement', 'AMP Implementation']
    },
    {
      icon: Zap,
      title: 'Technical SEO',
      description: 'Advanced technical optimization to ensure search engines can crawl and index your website effectively.',
      features: ['Site Speed Optimization', 'Schema Markup', 'XML Sitemap Creation', 'Robots.txt Optimization']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#E26E02]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E26E02]/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full mb-6 shadow-sm">
            <span className="text-sm font-medium text-[#E26E02]">Our SEO Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[#E26E02]">
              Comprehensive SEO Solutions
            </span>
            <br />
            <span className="text-[#141414]">for Your Business Growth</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            NetBond Technologies offers complete SEO services in Zirakpur to help your business 
            achieve higher search rankings, increased organic traffic, and better online visibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-[#E26E02] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#141414] mb-4 group-hover:text-[#E26E02] transition-colors duration-200">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-[#E26E02] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#E26E02] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-[#E26E02] text-white rounded-md font-medium hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white transition-all duration-200 cursor-pointer">
            Get SEO Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;