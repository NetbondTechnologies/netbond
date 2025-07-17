import {
  Search,
  BarChart3,
  PenTool,
  Globe,
  Smartphone,
  Zap,
  Target,
  Users,
  Award,
  ArrowRight,
  TrendingUp,
  MapPin,
  Mail,
  Phone,
  Send,
  Clock,
  CheckCircle,
} from "lucide-react";
import Accordion from "../Accordion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useNavigate } from "react-router";
gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

interface FAQS {
  question: string;
  answer: string;
}

function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const servicesDD = [
    "SEO Audit",
    "Local SEO",
    "E-commerce SEO",
    "Outsources SEO",
    "Small Business SEO",
    "Wordpress SEO",
    "Other",
  ];

  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description:
        "Complete SEO services to improve your website ranking on Google and other search engines.",
      features: [
        "Keyword Research & Analysis",
        "On-Page SEO Optimization",
        "Technical SEO Audit",
        "Content Optimization",
      ],
    },
    {
      icon: Globe,
      title: "Local SEO Services",
      description:
        "Dominate local search results in Zirakpur and surrounding areas with our local SEO expertise.",
      features: [
        "Google My Business Optimization",
        "Local Citations Building",
        "Review Management",
        "Local Keyword Targeting",
      ],
    },
    {
      icon: BarChart3,
      title: "SEO Analytics & Reporting",
      description:
        "Comprehensive SEO reporting and analytics to track your website performance and ROI.",
      features: [
        "Monthly SEO Reports",
        "Keyword Ranking Tracking",
        "Traffic Analysis",
        "Competitor Analysis",
      ],
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description:
        "High-quality, SEO-optimized content that engages your audience and improves search rankings.",
      features: [
        "SEO Content Writing",
        "Blog Post Creation",
        "Website Copywriting",
        "Content Strategy",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile SEO",
      description:
        "Optimize your website for mobile devices to capture the growing mobile search traffic.",
      features: [
        "Mobile-First Indexing",
        "Page Speed Optimization",
        "Mobile UX Improvement",
        "AMP Implementation",
      ],
    },
    {
      icon: Zap,
      title: "Technical SEO",
      description:
        "Advanced technical optimization to ensure search engines can crawl and index your website effectively.",
      features: [
        "Site Speed Optimization",
        "Schema Markup",
        "XML Sitemap Creation",
        "Robots.txt Optimization",
      ],
    },
  ];

  const achievements = [
    { number: "500+", label: "SEO Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years of Experience" },
    { number: "98%", label: "Client Satisfaction Rate" },
  ];

  const features = [
    "Proven track record with 500+ successful SEO projects",
    "Expert team with 5+ years of SEO experience in Zirakpur",
    "Data-driven SEO strategies for measurable results",
    "Transparent reporting and regular progress updates",
    "Local SEO expertise for Zirakpur and Punjab businesses",
    "100% white-hat SEO techniques and Google compliance",
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Result-Oriented Approach",
      description:
        "We focus on delivering measurable results that impact your bottom line.",
    },
    {
      icon: Users,
      title: "Expert SEO Team",
      description:
        "Our certified SEO professionals have years of experience in digital marketing.",
    },
    {
      icon: TrendingUp,
      title: "Proven Growth Track Record",
      description:
        "We have helped hundreds of businesses achieve significant organic growth.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "We tain the highest standards in all our SEO services and deliverables.",
    },
  ];

  useGSAP(() => {
    const allTitles = Array.from(
      document.getElementsByTagName("h2") as HTMLCollectionOf<HTMLElement>
    );

    allTitles.map((title: HTMLElement) => {
      const split = new SplitText(title, { type: "lines", mask: "lines" });
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
    });

    const button = Array.from(
      document.querySelectorAll(".cta-btn") as NodeListOf<HTMLElement>
    );
    if (button) {
      button.forEach((e: HTMLElement) => {
        e.addEventListener("click", () => {
          gsap.to(window, {
            scrollTo: { y: "#contacts", offsetY: 80, autoKill: true },
            duration: 1,
          });
        });
      });
    }

    gsap.from(".bar",{
            height: "0%",
            stagger: 0.1,
            duration: 3,
            ease:"power4.inOut",
            delay: 0.75
            
          })
    
          const metrics = Array.from(document.querySelectorAll(".metric") as NodeListOf<HTMLElement>);
          metrics.map((metric: HTMLElement) => {
            gsap.from(metric, {
              textContent: "0",
              duration: 3,
              ease: "power4.inOut",
              snap: { textContent: 0.5 },
              stagger: 1,
              delay: 0.75
            });
          });
  }, []);

  const faqs: FAQS[] = [
    {
      question: "What is SEO, and why is it important for my business?",
      answer:
        "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results, making it easier for potential customers to find you online. It’s essential for increasing visibility, driving traffic, and boosting conversions.",
    },
    {
      question: "How does Netbond Technologies help with SEO?",
      answer:
        "At Netbond Technologies, we offer comprehensive SEO services, including keyword research, on-page and technical optimization, content creation, link building, and performance tracking to help your business achieve sustainable growth.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy, and results typically start showing within 3 to 6 months. However, our tailored approach ensures consistent progress and measurable improvements over time.",
    },
    {
      question: "What are the key components of a successful SEO strategy?",
      answer:
        "A successful SEO strategy includes keyword optimization, high-quality content, mobile-friendly design, fast-loading pages, technical SEO, and authoritative backlinks. We ensure all these components are perfectly aligned for your business.",
    },
    {
      question: "Why should I choose Netbond Technologies for SEO?",
      answer:
        "With expertise in the latest SEO practices and a personalized approach, Netbond Technologies ensures your business stands out in search results. We focus on delivering results that drive real business growth.",
    },
  ];

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-[50px] overflow-hidden bg-white"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#E26E02]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E26E02]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E26E02]/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-[#E26E02]">Best SEO Company</span>
                <br />
                <span className="text-[#141414]">in Zirakpur</span>
                <br />
                <span className="text-gray-600">Punjab, India</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                NetBond Technologies is the leading SEO company in Zirakpur,
                helping businesses achieve top search rankings and drive organic
                traffic with proven digital marketing strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group cta-btn flex items-center justify-center px-8 py-4 bg-[#E26E02] text-white rounded-md font-medium  hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white transition-all duration-200 cursor-pointer">
                  Get SEO Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E26E02]"><span className="metric">500</span>+</div>
                  <div className="text-sm text-gray-600">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E26E02]"><span className="metric">98</span>%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E26E02]"><span className="metric">5</span>+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">
                        Organic Traffic Growth
                      </span>
                      <TrendingUp className="w-5 h-5 text-[#E26E02]" />
                    </div>

                    <div className="relative h-32 bg-gradient-to-r from-[#E26E02]/10 to-[#E26E02]/20 rounded-xl overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-20 bar bg-[#E26E02] rounded-xl opacity-80"></div>
                      <div className="absolute top-4 right-4 text-right">
                        <div className="text-2xl font-bold text-[#141414]">
                          +<span className="metric">245</span>%
                        </div>
                        <div className="text-sm text-gray-600">Growth</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center mb-2">
                          <Users className="w-4 h-4 text-[#E26E02] mr-2" />
                          <span className="text-sm font-medium text-gray-600">
                            Visitors
                          </span>
                        </div>
                        <div className="text-xl font-bold text-[#141414]">
                          <span className="metric">22</span>.5K
                        </div>
                        <div className="text-xs text-[#E26E02]">
                          +32% this month
                        </div>
                      </div>

                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center mb-2">
                          <Award className="w-4 h-4 text-[#E26E02] mr-2" />
                          <span className="text-sm font-medium text-gray-600">
                            Keywords
                          </span>
                        </div>
                        <div className="text-xl font-bold text-[#141414]">
                          <span className="metric">150</span>+
                        </div>
                        <div className="text-xs text-[#E26E02]">
                          Top 10 ranking
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#E26E02]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E26E02]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full mb-6 shadow-sm">
              <span className="text-sm font-medium text-[#E26E02]">
                Our SEO Services
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#E26E02]">
                Comprehensive SEO Solutions
              </span>
              <br />
              <span className="text-[#141414]">for Your Business Growth</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              NetBond Technologies offers complete SEO services in Zirakpur to
              help your business achieve higher search rankings, increased
              organic traffic, and better online visibility.
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
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
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
            <button className="px-8 py-4 cta-btn bg-[#E26E02] text-white rounded-md font-medium hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white transition-all duration-200 cursor-pointer">
              Get SEO Consultation
            </button>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-20 bg-[#141414] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#E26E02]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E26E02]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                <span className="text-sm font-medium text-[#E26E02]">
                  About NetBond Technologies
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">Leading</span>
                <br />
                <span className="text-[#E26E02]">SEO Company in Zirakpur</span>
                <br />
                <span className="text-gray-300">Punjab, India</span>
              </h2>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                NetBond Technologies is a premier SEO company based in Zirakpur,
                Punjab. With over 5 years of experience in digital marketing, we
                have established ourselves as the go-to SEO agency for
                businesses looking to improve their online presence and search
                engine rankings.
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
                <button
                  className="px-8 py-4 bg-[#E26E02] text-white rounded-md font-medium hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white transition-all duration-200 cursor-pointer"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
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
                  <h3 className="text-lg font-bold text-white">
                    Serving Zirakpur & Beyond
                  </h3>
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
              Why Choose{" "}
              <span className="text-[#E26E02]">NetBond Technologies</span>?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We are committed to delivering exceptional SEO results that drive
              real business growth.
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
                <h4 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 bg-[#141414] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#E26E02]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E26E02]/5 rounded-full blur-3xl"></div>
        </div>

        <div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          id="contacts"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <span className="text-sm font-medium text-[#E26E02]">
                Get In Touch
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Ready to</span>
              <br />
              <span className="text-[#E26E02]">Dominate Search Results?</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get a SEO audit and consultation from the leading SEO company in
              Zirakpur. Let's discuss how we can help your business achieve top
              search rankings.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact NetBond Technologies
                </h3>

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
                      <div className="text-gray-300">
                        info@netbondtechnologies.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#E26E02] rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        Office Location
                      </div>
                      <div className="text-gray-300">
                        Zirakpur, Punjab 140603, India
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#E26E02] rounded-xl flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        Business Hours
                      </div>
                      <div className="text-gray-300">
                        Mon - Sat: 9:00 AM - 7:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-[#E26E02] mr-3" />
                  <h3 className="text-xl font-bold text-white">
                    Why Choose NetBond SEO?
                  </h3>
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
              <h3 className="text-2xl font-bold text-white mb-6">
                Get Your SEO Audit
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
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
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
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
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
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
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#E26E02] focus:border-transparent transition-all duration-200"
                  >
                    <option value="" className="bg-[#141414]">
                      Select a service
                    </option>
                    {servicesDD.map((service, index) => (
                      <option
                        key={index}
                        value={service}
                        className="bg-[#141414]"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
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

      <Accordion faqs={faqs} />
    </>
  );
}

export default App;
