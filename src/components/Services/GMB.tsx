import React from "react";
import {
  Search,
  Star,
  MapPin,
  Phone,
  Mail,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Target,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Accordion from "../Accordion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface Stat {
  number: string;
  label: string;
}

interface Testimonial {
  name: string;
  business: string;
  rating: number;
  text: string;
}

interface GMBFaq {
  question: string;
  answer: string;
}

const GMB: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "GMB Profile Setup",
      description:
        "Complete Google My Business profile creation and optimization for maximum visibility.",
      features: [
        "Profile verification",
        "Business info optimization",
        "Photo uploads",
        "Initial reviews setup",
      ],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Review Management",
      description:
        "Monitor, respond, and generate positive reviews to build trust and credibility.",
      features: [
        "Review monitoring",
        "Response management",
        "Review generation",
        "Reputation tracking",
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Local SEO",
      description:
        "Optimize your local search presence to rank higher in map results.",
      features: [
        "Keyword optimization",
        "Local citations",
        "Map pack ranking",
        "Local content strategy",
      ],
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance Analytics",
      description:
        "Track and analyze your GMB performance with detailed insights and reports.",
      features: [
        "Search analytics",
        "Customer insights",
        "Performance reports",
        "ROI tracking",
      ],
    },
  ];

  const stats: Stat[] = [
    { number: "500+", label: "Businesses Helped" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "250%", label: "Average Growth" },
    { number: "24/7", label: "Support Available" },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Rajesh Kumar",
      business: "Kumar Electronics",
      rating: 5,
      text: "Netbond Technologies transformed our online presence. Our Google My Business listing now brings in 3x more customers!",
    },
    {
      name: "Priya Sharma",
      business: "Sharma Dental Clinic",
      rating: 5,
      text: "Professional service and excellent results. Our local search rankings improved dramatically within weeks.",
    },
    {
      name: "Amit Singh",
      business: "Singh Auto Repairs",
      rating: 5,
      text: "The team's expertise in GMB optimization is outstanding. Highly recommend their services to any business.",
    },
  ];

  const faqs: GMBFaq[] = [
    {
      question: "What is Google My Business (GMB) and why is it important?",
      answer: "Google My Business (GMB) is a free tool that helps businesses manage their online presence across Google, including Search and Maps. It’s crucial for increasing visibility, attracting local customers, and building trust through verified business information in zirakpur."
    },
    {
      question: "How can Netbond Technologies help with GMB?",
      answer: "At Netbond Technologies, we provide end-to-end GMB management services, including profile setup, optimization, content creation, citation building, and performance tracking. Our goal is to ensure your business stands out in local search results."
    },
    {
      question: "What information should be included in my GMB profile?",
      answer: "Your GMB profile should include accurate business details like name, address, phone number, operating hours, website link, services offered, and high-quality photos. We ensure all this information is optimized and up-to-date."
    },
    {
      question: "Can GMB help improve my local search rankings?",
      answer: "Yes! A well-optimized GMB profile can significantly boost your local SEO rankings. By providing accurate information, engaging content, and managing reviews, we help your business appear prominently in local search results."
    },
    {
      question: "What is GMB ROI tracking?",
      answer: "GMB ROI tracking involves monitoring how your GMB profile drives customer actions like calls, website visits, and directions. Our advanced tracking helps you measure the effectiveness of your GMB efforts and refine strategies for better results."
    },
  ]
  
  useGSAP(()=>{
      
      const elemArr: HTMLElement[] = [
        document.querySelector(".percent") as HTMLElement,
        document.querySelector(".plus-one") as HTMLElement,
        document.querySelector(".plus-two") as HTMLElement,
      ];
      elemArr.map((elem: HTMLElement ,index: number) => {
        gsap.to(elem, {
          textContent: index === 0 ? "98" : index === 1 ? "5" : "500",
          duration: 3,
          ease: "power4.inOut",
          snap: { textContent: 1 },
          stagger: 1,
          scrollTrigger: {
            trigger: "#stat-container",
            start: "top 80%",
            end: "top 30%",
          }
        });
      });

      gsap.from(".bar",{
        width: "0%",
        duration: 3,
        ease:"power4.inOut",
        scrollTrigger: {
          trigger: "#stat-container",
          start: "top 80%",
          end: "top 30%",
        }
      })

      const allTitles = Array.from(document.getElementsByTagName("h2") as HTMLCollectionOf<HTMLElement>)

    allTitles.map((title: HTMLElement) => {
      const split = new SplitText(title, { type: "lines" ,mask: "lines"});
      gsap.from(split.lines, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "top 30%",
        },
      });
    })
  },[])


  return (
    <div className="min-h-screen bg-white">
      <section className="pt-[150px] pb-20 px-4 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-12 border border-gray-200 shadow-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Dominate Local Search with
                <span className="text-[#f76b1c]"> Google My Business</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business visibility in Zirakpur and beyond. Our
                expert GMB optimization services help you attract more
                customers, build trust, and grow your revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  type="button"
                  className="btn border-white/30 px-6 py-2 text-lg text-center group border-1 rounded-l-md rounded-r-none hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white duration-200 cursor-pointer"
                >
                  <span>Start Your GMB Journey</span>
                  <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-3 transition-all duration-300" />
                </button>
                <button className="bg-white/80 backdrop-blur-md text-[#f76b1c] hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white px-8 py-4 rounded-r-full rounded-l-md font-semibold hover:bg-white transition-all duration-300 border cursor-pointer border-[#f76b1c]/20">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat: Stat, index: number) => (
              <div key={index} className="text-center">
                <div className="bg-white backdrop-blur-md rounded-xl p-6 border border-gray-200 hover:border-[#f76b1c]/80 transition-colors duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-[#f76b1c] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#f76b1c]">GMB Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Google My Business solutions designed to maximize
              your local search presence and drive real business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service: Service, index: number) => (
              <div key={index} className="group">
                <div className="bg-white backdrop-blur-md rounded-2xl p-8 border border-gray-200 hover:border-[#f76b1c]/30 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-[#f76b1c] mb-6 group-hover:text-[#e55a0f] transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#f76b1c] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-500 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="stats-heading">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Choose{" "}
                <span className="text-[#f76b1c]">Netbond Technologies?</span>
              </h2>
              <div className="spacee space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f76b1c]/20 backdrop-blur-md rounded-lg p-3 border border-[#f76b1c]/30">
                    <Award className="w-6 h-6 text-[#f76b1c]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Proven Expertise
                    </h3>
                    <span className="text-gray-300 block">
                      5+ years of experience optimizing Google My Business
                      listings for businesses across industries.
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f76b1c]/20 backdrop-blur-md rounded-lg p-3 border border-[#f76b1c]/30">
                    <TrendingUp className="w-6 h-6 text-[#f76b1c]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Measurable Results
                    </h3>
                    <span className="text-gray-300 block">
                      Track your progress with detailed analytics and see real
                      improvements in visibility and customer engagement.
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f76b1c]/20 backdrop-blur-md rounded-lg p-3 border border-[#f76b1c]/30">
                    <Users className="w-6 h-6 text-[#f76b1c]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Dedicated Support
                    </h3>
                    <span className="text-gray-300 block">
                      Our team provides ongoing support and optimization to
                      ensure your GMB listing continues to perform.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative" id="stat-container">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#f76b1c] rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="sub-stat">
                      <h4 className="font-semibold text-white">
                        Local Zirakpur Experts
                      </h4>
                      <span className="text-gray-300 text-sm block">
                        Deep understanding of local market
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Local SEO Score</span>
                      <span>
                        
                      <span className="text-green-400 font-medium percent">
                        0
                      </span> <span className="text-green-400 inline">%</span>
                      </span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-[#f76b1c] h-2 rounded-full bar w-[98%]"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                    <div className="text-2xl font-bold inline-block text-[#f76b1c] mb-1 plus-one">
                    </div>
                    <span className="text-[#f76b1c] text-2xl inline">+</span>
                    <div className="text-gray-300 text-sm">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                    <div className="text-2xl font-bold text-[#f76b1c] mb-1 inline-block plus-two">
                      
                    </div><span className="text-[#f76b1c] text-2xl inline">+</span>
                    <div className="text-gray-300 text-sm">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="text-[#f76b1c]">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what businesses in
              Zirakpur are saying about our GMB services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <div key={index}>
                <div className="bg-white backdrop-blur-md rounded-2xl p-8 border border-gray-200 hover:border-[#f76b1c]/30 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i: number) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.business}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Ready to <span className="text-[#f76b1c]">Get Started?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business visibility today. Contact us for a free
                GMB audit and consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#f76b1c]/10 backdrop-blur-md rounded-lg p-3 border border-[#f76b1c]/30">
                    <MapPin className="w-6 h-6 text-[#f76b1c]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-600">Zirakpur, Punjab, India</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#f76b1c]/10 backdrop-blur-md rounded-lg p-3 border border-[#f76b1c]/30">
                    <Phone className="w-6 h-6 text-[#f76b1c]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+91 9056995190</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#f76b1c]/10 backdrop-blur-md rounded-lg p-3 border border-[#f76b1c]/30">
                    <Mail className="w-6 h-6 text-[#f76b1c]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@netbondtechnologies.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 backdrop-blur-md rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get Your GMB Audit
              </h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f76b1c] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f76b1c] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Business Name"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f76b1c] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your business..."
                    rows={4}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f76b1c] focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="btn border-white/30 px-6 py-2 group text-lg text-center border-1 rounded-md hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white duration-200 cursor-pointer"
                >
                  <span>Get GMB Audit</span>
                  <ArrowRight className="w-5 inline-block ml-2 group-hover:translate-x-3 transition-all duration-200 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Accordion faqs={faqs}/>
    </div>
  );
};

export default GMB;
