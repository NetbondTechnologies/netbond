import React from 'react';
import { 
  Building2, 
  Target, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Award, 
  Lightbulb,
  MessageSquare,
  Database,
  Rocket,
  Settings,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Play
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface Process {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Testimonial {
  name: string;
  position: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
}

interface Benefit {
  title: string;
  description: string;
  metric: string;
}

const App: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Lead Generation & Prospecting",
      description: "Advanced B2B lead generation strategies that identify and convert high-quality prospects into sales opportunities.",
      features: ["LinkedIn automation", "Email sequences", "Cold outreach", "Lead scoring"]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sales Process Optimization",
      description: "Streamline your sales funnel and increase conversion rates with data-driven optimization techniques.",
      features: ["Pipeline analysis", "CRM optimization", "Sales training", "Performance tracking"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "B2B Digital Marketing",
      description: "Comprehensive digital marketing strategies designed specifically for B2B companies and decision makers.",
      features: ["Content strategy", "SEO/SEM", "Account-based marketing", "Marketing automation"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Business Intelligence & Analytics",
      description: "Transform your business data into actionable insights with custom dashboards and reporting systems.",
      features: ["Custom dashboards", "Data integration", "Predictive analytics", "ROI tracking"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Training & Development",
      description: "Comprehensive training programs to upskill your sales and marketing teams for B2B success.",
      features: ["Sales methodology", "Tool training", "Best practices", "Ongoing support"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Technology Integration",
      description: "Seamlessly integrate and optimize your tech stack for maximum efficiency and ROI.",
      features: ["CRM setup", "Marketing automation", "API integrations", "Workflow optimization"]
    }
  ];

  const processes: Process[] = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current processes, identify gaps, and understand your business goals.",
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a customized B2B strategy tailored to your industry and target market.",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the strategy with our expert team while training your internal staff.",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description: "Continuously monitor, optimize, and scale your B2B operations for sustained growth.",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "David Chen",
      position: "Chief Revenue Officer",
      company: "TechFlow Dynamics",
      rating: 5,
      text: "Netbond's B2B expertise transformed our entire sales process. We've seen a 300% increase in qualified leads and our sales cycle has shortened by 40%.",
      avatar: "DC"
    },
    {
      name: "Sarah Williams",
      position: "VP of Marketing",
      company: "Industrial Solutions Inc",
      rating: 5,
      text: "Their account-based marketing approach helped us penetrate enterprise accounts we couldn't reach before. ROI increased by 250% in just 6 months.",
      avatar: "SW"
    },
    {
      name: "Michael Rodriguez",
      position: "Founder & CEO",
      company: "B2B Innovations",
      rating: 5,
      text: "The team's deep understanding of B2B sales cycles and buyer behavior is unmatched. They've become an integral part of our growth strategy.",
      avatar: "MR"
    }
  ];

  const benefits: Benefit[] = [
    {
      title: "Increased Lead Quality",
      description: "Generate higher-quality leads that convert better",
      metric: "85% improvement"
    },
    {
      title: "Shorter Sales Cycles",
      description: "Reduce time from prospect to closed deal",
      metric: "40% faster"
    },
    {
      title: "Higher Conversion Rates",
      description: "Convert more prospects into paying customers",
      metric: "60% increase"
    },
    {
      title: "Better ROI",
      description: "Maximize return on your marketing investment",
      metric: "250% ROI"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Diagonal Split Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-orange-100"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[#f76b1c] text-white px-6 py-3 rounded-full text-sm font-semibold">
              <Building2 className="w-4 h-4" />
              <span>B2B Growth Specialists</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-[#141414] leading-tight">
              Scale Your
              <span className="block text-[#f76b1c]">B2B Empire</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              We help ambitious B2B companies break through growth barriers with proven strategies, cutting-edge technology, and expert execution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-[#f76b1c] text-white px-8 py-4 rounded-none font-bold text-lg hover:bg-[#e55a0f] transition-all duration-300 flex items-center justify-center space-x-3">
                <span>Get Free Strategy Call</span>
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-[#141414] text-[#141414] px-8 py-4 rounded-none font-bold text-lg hover:bg-[#141414] hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-black text-[#f76b1c]">500+</div>
                <div className="text-sm text-gray-600 font-medium">B2B Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#f76b1c]">$50M+</div>
                <div className="text-sm text-gray-600 font-medium">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#f76b1c]">98%</div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:ml-16">
            <div className="bg-white p-8 shadow-2xl border-l-8 border-[#f76b1c]">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#141414]">Growth Metrics</h3>
                  <div className="flex items-center space-x-1 text-green-500">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">+285%</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Lead Generation</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-20 h-2 bg-[#f76b1c] rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold text-[#141414]">85%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sales Conversion</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-18 h-2 bg-[#f76b1c] rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold text-[#141414]">75%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Customer Retention</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-22 h-2 bg-[#f76b1c] rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold text-[#141414]">92%</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#f76b1c] rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#141414]">Top B2B Agency 2024</div>
                      <div className="text-sm text-gray-600">Industry Recognition</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card Grid Layout */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#f76b1c] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              OUR SERVICES
            </div>
            <h2 className="text-5xl font-black text-[#141414] mb-6">
              B2B Growth Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services designed to accelerate your B2B growth and dominate your market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: Service, index: number) => (
              <div key={index} className="group">
                <div className="bg-white p-8 h-full border-l-4 border-transparent hover:border-[#f76b1c] transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#f76b1c] text-white rounded-none flex items-center justify-center group-hover:bg-[#141414] transition-colors duration-300">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-[#f76b1c]">{String(index + 1).padStart(2, '0')}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#141414] mb-4 group-hover:text-[#f76b1c] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center text-gray-500 text-sm">
                        <ChevronRight className="w-4 h-4 text-[#f76b1c] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <button className="text-[#f76b1c] font-semibold hover:text-[#e55a0f] transition-colors flex items-center space-x-1">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Timeline Design */}
      <section className="py-24 px-4 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#f76b1c] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              OUR PROCESS
            </div>
            <h2 className="text-5xl font-black text-white mb-6">
              How We Drive B2B Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven 4-step methodology ensures consistent results and sustainable growth for your B2B business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process: Process, index: number) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#f76b1c] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    {process.icon}
                  </div>
                  
                  <div className="text-6xl font-black text-[#f76b1c] mb-4 opacity-50">
                    {process.step}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {process.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {process.description}
                  </p>
                </div>
                
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-[#f76b1c] opacity-30 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Split Layout */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#f76b1c] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                PROVEN RESULTS
              </div>
              <h2 className="text-5xl font-black text-[#141414] mb-8">
                Measurable B2B Growth
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Our data-driven approach delivers consistent, measurable results that directly impact your bottom line.
              </p>
              
              <div className="space-y-8">
                {benefits.map((benefit: Benefit, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#f76b1c] text-white rounded-none flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#141414] mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 mb-2">{benefit.description}</p>
                      <div className="text-2xl font-black text-[#f76b1c]">{benefit.metric}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-50 p-12 border-l-8 border-[#f76b1c]">
                <h3 className="text-2xl font-bold text-[#141414] mb-8">Success Metrics Dashboard</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[#141414]">Revenue Growth</span>
                      <span className="text-[#f76b1c] font-bold">+285%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full">
                      <div className="w-4/5 h-3 bg-gradient-to-r from-[#f76b1c] to-orange-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[#141414]">Lead Quality</span>
                      <span className="text-[#f76b1c] font-bold">+180%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full">
                      <div className="w-3/4 h-3 bg-gradient-to-r from-[#f76b1c] to-orange-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[#141414]">Sales Velocity</span>
                      <span className="text-[#f76b1c] font-bold">+150%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full">
                      <div className="w-2/3 h-3 bg-gradient-to-r from-[#f76b1c] to-orange-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[#141414]">Customer LTV</span>
                      <span className="text-[#f76b1c] font-bold">+220%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full">
                      <div className="w-5/6 h-3 bg-gradient-to-r from-[#f76b1c] to-orange-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-[#141414] text-white">
                  <div className="text-center">
                    <div className="text-3xl font-black text-[#f76b1c] mb-2">$2.5M+</div>
                    <div className="text-sm">Average Revenue Increase Per Client</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Horizontal Cards */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#f76b1c] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              CLIENT SUCCESS
            </div>
            <h2 className="text-5xl font-black text-[#141414] mb-6">
              B2B Leaders Trust Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from executives who have transformed their businesses with our B2B expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <div key={index} className="bg-white p-8 border-l-4 border-[#f76b1c] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i: number) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed italic text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#f76b1c] text-white rounded-full flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[#141414]">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
                    <div className="text-[#f76b1c] text-sm font-semibold">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Modern Form Design */}
      <section className="py-24 px-4 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block bg-[#f76b1c] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                GET STARTED
              </div>
              <h2 className="text-5xl font-black text-white mb-8">
                Ready to Scale Your B2B Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Schedule a free strategy session and discover how we can accelerate your B2B growth.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#f76b1c] rounded-none flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Direct Line</div>
                    <div className="text-gray-300">+91 98765 43210</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#f76b1c] rounded-none flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">B2B Inquiries</div>
                    <div className="text-gray-300">b2b@netbondtech.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#f76b1c] rounded-none flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">B2B Headquarters</div>
                    <div className="text-gray-300">Zirakpur, Punjab, India</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#f76b1c] rounded-none flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Business Hours</div>
                    <div className="text-gray-300">Mon-Fri: 9AM-6PM IST</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12">
              <h3 className="text-2xl font-bold text-[#141414] mb-8">Get Your Free B2B Growth Audit</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="w-full border-2 border-gray-200 rounded-none px-4 py-3 text-[#141414] placeholder-gray-500 focus:outline-none focus:border-[#f76b1c] transition-colors"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="w-full border-2 border-gray-200 rounded-none px-4 py-3 text-[#141414] placeholder-gray-500 focus:outline-none focus:border-[#f76b1c] transition-colors"
                  />
                </div>
                
                <input 
                  type="email" 
                  placeholder="Business Email"
                  className="w-full border-2 border-gray-200 rounded-none px-4 py-3 text-[#141414] placeholder-gray-500 focus:outline-none focus:border-[#f76b1c] transition-colors"
                />
                
                <input 
                  type="text" 
                  placeholder="Company Name"
                  className="w-full border-2 border-gray-200 rounded-none px-4 py-3 text-[#141414] placeholder-gray-500 focus:outline-none focus:border-[#f76b1c] transition-colors"
                />
                
                <textarea 
                  placeholder="Describe your biggest B2B challenge..."
                  rows={4}
                  className="w-full border-2 border-gray-200 rounded-none px-4 py-3 text-[#141414] placeholder-gray-500 focus:outline-none focus:border-[#f76b1c] transition-colors resize-none"
                ></textarea>
                
                <button 
                  type="submit"
                  className="w-full bg-[#f76b1c] text-white py-4 rounded-none font-bold text-lg hover:bg-[#e55a0f] transition-colors duration-300 flex items-center justify-center space-x-3"
                >
                  <span>Schedule Free Strategy Call</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
              
              <div className="mt-6 p-4 bg-gray-50 border-l-4 border-[#f76b1c]">
                <p className="text-sm text-gray-600">
                  <strong>Free 30-minute consultation</strong> - No commitment required. We'll analyze your current B2B processes and provide actionable insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;