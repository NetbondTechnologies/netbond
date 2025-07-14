import React from 'react';
import { CheckCircle, Users, Award, TrendingUp, Target, MapPin, Clock, Star } from 'lucide-react';

const About = () => {
  const achievements = [
    { number: '500+', label: 'SEO Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years of Experience' },
    { number: '98%', label: 'Client Satisfaction Rate' }
  ];

  const features = [
    'Proven track record with 500+ successful SEO projects',
    'Expert team with 5+ years of SEO experience in Zirakpur',
    'Data-driven SEO strategies for measurable results',
    'Transparent reporting and regular progress updates',
    'Local SEO expertise for Zirakpur and Punjab businesses',
    '100% white-hat SEO techniques and Google compliance'
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: 'Result-Oriented Approach',
      description: 'We focus on delivering measurable results that impact your bottom line.'
    },
    {
      icon: Users,
      title: 'Expert SEO Team',
      description: 'Our certified SEO professionals have years of experience in digital marketing.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Growth Track Record',
      description: 'We have helped hundreds of businesses achieve significant organic growth.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards in all our SEO services and deliverables.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#141414] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#E26E02]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E26E02]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <span className="text-sm font-medium text-[#E26E02]">About NetBond Technologies</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Leading</span>
              <br />
              <span className="text-[#E26E02]">
                SEO Company in Zirakpur
              </span>
              <br />
              <span className="text-gray-300">Punjab, India</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              NetBond Technologies is a premier SEO company based in Zirakpur, Punjab. With over 5 years 
              of experience in digital marketing, we have established ourselves as the go-to SEO agency 
              for businesses looking to improve their online presence and search engine rankings.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#E26E02] mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#E26E02] text-white rounded-md font-medium hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white transition-all duration-200 cursor-pointer">
                Learn More About Us
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl font-bold text-[#E26E02] mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-[#E26E02] mr-3" />
                <h3 className="text-lg font-bold text-white">Serving Zirakpur & Beyond</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                <div>• Zirakpur</div>
                <div>• Chandigarh</div>
                <div>• Mohali</div>
                <div>• Panchkula</div>
                <div>• Derabassi</div>
                <div>• Kharar</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#E26E02]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#E26E02]/10 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Why Choose <span className="text-[#E26E02]">NetBond Technologies</span>?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We are committed to delivering exceptional SEO results that drive real business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-[#E26E02] rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;