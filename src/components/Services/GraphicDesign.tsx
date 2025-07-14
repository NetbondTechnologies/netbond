import { useState, type ReactElement } from "react";
import {
  Palette,
  PenTool,
  Layers,
  Video,
  TrendingUp,
  Target,
  Star,
  Maximize,
  Gem,
  Phone,
  Search,
  Lightbulb,
  Rocket,
  ArrowRight,
  ExternalLink,
  Send,
  
  User,
} from "lucide-react";
import Accordion from "../Accordion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText);

interface FAQ {
  question: string;
  answer: string;
}

interface Service {
  icon: ReactElement;
  head: string;
  body: string;
}

interface PortfolioCard {
  icon: ReactElement;
  head: string;
  body: string;
}

interface Strategy {
  icon: ReactElement;
  head: string;
  body: string;
}
interface Testimonial {
  icon: ReactElement;
  head: string;
  designation: string;
  body: string;
}

export default function GraphiDesign() {

  useGSAP(()=>{
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
  }
  ,[])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully! We will contact you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const faqs: FAQ[] = [
    {
      question:
        "What is graphic design, and why is it important for my business?",
      answer:
        "Graphic design involves creating visual content to communicate messages effectively. It enhances your brand identity, attracts customers, and leaves a lasting impression, making it essential for marketing and business growth.",
    },
    {
      question: "How does Netbond Technologies help with graphic design?",
      answer:
        "Netbond Technologies provides professional graphic design services tailored to your brand. From logos to social media visuals, we ensure every design aligns with your goals and resonates with your audience.",
    },
    {
      question: "How long does it take to complete a graphic design project?",
      answer:
        "The timeline depends on the complexity of the project. Simple designs, like logos, may take a few days, while comprehensive branding projects can take several weeks. We always prioritize quality and timely delivery.",
    },
    {
      question: "What are the key components of successful graphic design?",
      answer:
        "Successful graphic design combines creativity, brand consistency, and clear messaging. It incorporates elements like color, typography, and layout to convey your message effectively and aesthetically.",
    },
    {
      question: "Why should I choose Netbond Technologies for graphic design?",
      answer:
        "Netbond Technologies stands out for its creative approach, attention to detail, and dedication to delivering designs that drive results. We work closely with clients to ensure the final product exceeds expectations.",
    },
  ];

  const services: Service[] = [
    {
      icon: <Palette className="w-8 h-8 text-[hsl(22,96%,53%)]" />,
      head: "Graphic Design Services",
      body: " Visual Best is one of the top graphic design companies in India. We offer a variety of graphic design services to help bring your ideas to life. We provide end-to-end graphic design services in zirakpur From logo design to website layouts, we can create professional designs that will make your business stand out.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-[hsl(22,96%,53%)]" />,
      head: "Logo Designing Services",
      body: " Our digital Illustration Services cover a wide range, including blog, web, advertorial, book, caricatures, comics, city,portrait, cover, magazine, and newspaper illustrations. We create impactful visuals for your ideas.",
    },
    {
      icon: <Layers className="w-8 h-8 text-[hsl(22,96%,53%)]" />,
      head: "Templates Development",
      body: " We provide end-to-end Web Design and Development services. We specialize in e-commerce, Webflow, WordPress, and website solutions. Additionally, we offer reliable maintenance services to keep your online presence running smoothly.",
    },
    {
      icon: <Video className="w-8 h-8 text-[hsl(22,96%,53%)]" />,
      head: "Creative Video Services",
      body: "Visual Best provides a variety of explainer video services, including SaaS explainer videos, B-roll, whiteboard animation, 2D animated videos, corporate videos, and screencast videos. We create engaging videos that effectively convey your message and captivate your audience.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[hsl(22,96%,53%)]" />,
      head: "Digital Marketing Services",
      body: "Visual Best delivers comprehensive digital marketing solutions encompassing social media marketing, SEO, lead generation, influencer marketing, video marketing, content marketing, PPC, ad campaigns, press releases, email marketing, lead generation, ORM, and more.",
    },
  ];


  const strategies : Strategy[] = [
    {
      icon: <Target className="w-8 h-8 text-[hsl(22,96%,53%)]" />,
      head: "Relevance",
      body: "Your logo should communicate something significant about your company with each and every part. Everything you choose, including colors and forms, should complement your industry, your core beliefs, and the message you wish to deliver."
    },
    {
      icon: <Star className="w-8 h-8 text-[hsl(22,96%,53%)]" />,
      head: "Uniqueness",
      body: "A logo's uniqueness plays a critical role in setting a company apart from its competitors. To do this, one must create a design that is distinctive and difficult to confuse with other designs in the same industry."
    },
    {
      icon: <Maximize className="w-8 h-8 text-[hsl(22,96%,53%)]" />,
      head: "Versatility",
      body: "A excellent logo may be easily adjusted to a variety of platforms and is ageless. Whether it is seen on a big billboard, the header of a website, or a business card, its design is powerful and constant."
    },
    {
      icon: <Gem className="w-8 h-8 text-[hsl(22,96%,53%)]" />,
      head: "Simplicity",
      body: "Simplicity is key when it comes to logo design. Not only is a basic logo easier on the eyes, but it's also more adaptable and memorable. A clean design makes sure that people can quickly understand the core of your company."
    },
  ]

  const portfolio: PortfolioCard[] = [
    {
      icon: <Palette className="w-12 h-12 text-white" />,
      head: "Brand Identity",
      body: "Creative branding solutions",
    },
    {
      icon: <PenTool className="w-12 h-12 text-white" />,
      head: "Digital Design",
      body: "Modern digital solutions",
    },
    {
      icon: <Layers className="w-12 h-12 text-white" />,
      head: "Print Design",
      body: "Professional print materials",
    },
    {
      icon: <Video className="w-12 h-12 text-white" />,
      head: "Video Content",
      body: "Engaging video design",
    },
  ];

  const testimonials : Testimonial[] = [
    {
      icon: <User className="w-8 h-8 text-[hsl(22,96%,53%)]" />,
      head: "Harrison Hudson",
      designation: "Founder & CEO of XpeedStudio",
      body: "Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast"
    },
    {
      icon: <User className="w-8 h-8 text-[hsl(22,96%,53%)]" />,
      head: "Elizabeth Sofia",
      designation: "Founder & CEO of XpeedStudio",
      body: "Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast"
    },
    {
      icon: <User className="w-8 h-8 text-[hsl(22,96%,53%)]" />,
      head: "Charlie Cooper",
      designation: "Founder & CEO of XpeedStudio",
      body: "Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast"
    },
    {
      icon: <User className="w-8 h-8 text-[hsl(22,96%,53%)]" />,
      head: "Lucy Evelyn",
      designation: "Founder & CEO of XpeedStudio",
      body: "Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast"
    },
  ]

  return (
    <div
      className="min-h-screen  overflow-x-hidden pt-[50px]"
      data-scroll-container
    >
      <section
        className="min-h-screen relative flex items-center justify-center px-4 py-20"
        data-scroll-section
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-[hsl(22,96%,53%)]/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[hsl(22,96%,53%)]/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[hsl(22,96%,53%)] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[hsl(22,96%,53%)]/50 rounded-full animate-pulse delay-1000"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left" data-scroll data-scroll-speed="0.5">
              <div className="glass-card-light rounded-3xl p-8 border border-white/40 backdrop-blur-lg bg-white/80 shadow-2xl">
                <p className="text-[hsl(22,96%,53%)] font-semibold text-lg mb-4 tracking-wide">
                  Explore our expert
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Graphic Design Service In{" "}
                  <span className="text-[hsl(22,96%,53%)]">Zirakpur</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We are your one-stop solution for your complete digital
                  marketing and graphic design requirements. Uplift your brand's
                  perception through our unmatched creative solutions.
                </p>
                <button className="group bg-[hsl(22,96%,53%)] px-8 py-4 font-semibold text-lg rounded-md hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white duration-200 cursor-pointer inline-flex items-center">
                  Learn more
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative" data-scroll data-scroll-speed="-0.3">
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8">
                <div className="signature-gradient rounded-2xl p-12 h-96 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[hsl(22,96%,53%)] backdrop-blur-sm"></div>
                  <div className="relative z-10 text-center">
                    <Palette className="w-16 h-16 text-white mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Creative Design Studio
                    </h3>
                    <p className="text-white/80">Where Ideas Come to Life</p>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-xl rotate-12 animate-bounce"></div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-4 w-8 h-8 bg-white/20 rounded-lg rotate-45 animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description Section */}
      <section
        className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-50/50"
        data-scroll-section
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-scroll data-scroll-speed="0.2">
              <div className="glass-card-light rounded-3xl p-8 border border-white/40 backdrop-blur-lg bg-white/80 shadow-2xl">
                <div className="bg-gradient-to-br from-[hsl(22,96%,53%)]/10 to-[hsl(22,96%,53%)]/20 rounded-2xl h-80 flex items-center justify-center">
                  <div className="text-center">
                    <PenTool className="w-12 h-12 text-[hsl(22,96%,53%)] mb-4 mx-auto" />
                    <h4 className="text-xl font-bold text-gray-800">
                      Pixel Perfect Design
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div data-scroll data-scroll-speed="0.4">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                A Graphic Design Company in Zirakpur that is{" "}
                <span className="text-[hsl(22,96%,53%)]">Pixel Perfect</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Graphic design is more than just visuals; it's a powerful tool
                  for communication, storytelling, and brand recognition. At
                  NetBond Technologies, we offer creative and result-driven
                  graphic designing services in zirakpur tailored to elevate
                  your brand's identity and leave a lasting impression on your
                  audience.
                </p>
                <p>
                  Our team of skilled designers specializes in delivering
                  visually stunning and strategically crafted designs that align
                  with your business goals. Whether you need eye-catching logos,
                  impactful marketing materials, or engaging social media
                  creatives, we bring your ideas to life with precision and
                  creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-20 px-4 bg-[hsl(0,0%,8%)] relative overflow-hidden"
        data-scroll-section
      >
        {/* Background decoration */}
        <div className="absolute inset-0 dark-gradient"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[hsl(22,96%,53%)] to-transparent"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div
            className="text-center mb-16"
            data-scroll
            data-scroll-speed="0.3"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Top Graphic Design Company In{" "}
              <span className="text-[hsl(22,96%,53%)]">Zirakpur</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Visual Best is the leading graphic design company in India. Our
              creative team specializes in digital marketing solutions & graphic
              design that can help your business thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              return (
                <>
                  <div
                    className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 hover:shadow-[hsl(22,96%,53%)]/20 transition-all duration-500 group hover:scale-105"
                    data-scroll
                    data-scroll-speed="0.1"
                  >
                    <div className="bg-[hsl(22,96%,53%)]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[hsl(22,96%,53%)]/30 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.head}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.body}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-transparent"
        data-scroll-section
      >
        <div className="container mx-auto max-w-7xl">
          <div
            className="text-center mb-16"
            data-scroll
            data-scroll-speed="0.3"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              If you can imagine it, we can{" "}
              <span className="text-[hsl(22,96%,53%)]">design it</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Visual Best is one of the top graphic design company in zirakpur.
              Our creative team specialize in digital marketing solutions that
              can help your business thrive. We provide all kinds of creative
              and content design services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {portfolio.map((card) => {
              return (
                <>
                  <div
                    className="backdrop-blur-lg bg-white/80 border border-white/40 shadow-2xl rounded-3xl p-6 hover:shadow-[hsl(22,96%,53%)]/20 transition-all duration-500 group hover:scale-105"
                    data-scroll
                    data-scroll-speed="0.1"
                  >
                    <div className="bg-gradient-to-br from-[hsl(22,96%,53%)]/20 to-[hsl(22,96%,53%)]/40 rounded-2xl h-48 flex items-center justify-center mb-4 overflow-hidden">
                      {card.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      {card.head}
                    </h4>
                    <p className="text-gray-600 text-sm">{card.body}</p>
                  </div>
                </>
              );
            })}
          </div>

          <div className="text-center">
            <button className="group bg-[hsl(22,96%,53%)] px-8 py-4 font-semibold text-lg rounded-md hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white duration-200 cursor-pointer inline-flex items-center">
              See Work Portfolio
              <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-50/50"
        data-scroll-section
      >
        <div className="container mx-auto max-w-7xl">
          <div
            className="text-center mb-16"
            data-scroll
            data-scroll-speed="0.3"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Modern Logo Designs For Every{" "}
              <span className="text-[hsl(22,96%,53%)]">Strategy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Special Something For Your Brand? Professional Logo Designers At
              The Helm!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {
              strategies.map((card)=>{
                return(
                  <>
                     <div
              className="backdrop-blur-lg bg-white/80 border border-white/40 shadow-2xl rounded-3xl p-8 hover:shadow-[hsl(22,96%,53%)]/20 transition-all duration-500 group hover:scale-105"
              data-scroll
              data-scroll-speed="0.1"
            >
              <div className="bg-[hsl(22,96%,53%)]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[hsl(22,96%,53%)]/30 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {card.head}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.body}
              </p>
            </div>
                  </>
                )
              })
            }
           

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 px-4 bg-[hsl(0,0%,8%)] relative overflow-hidden"
        data-scroll-section
      >
        <div className="absolute inset-0 dark-gradient"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div
            className="text-center mb-16"
            data-scroll
            data-scroll-speed="0.3"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              What Our <span className="text-[hsl(22,96%,53%)]">Clients</span>{" "}
              Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            
            {
              testimonials.map((card)=>{
                return(
                  <>
                    <div
              className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 hover:shadow-[hsl(22,96%,53%)]/20 transition-all duration-500"
              data-scroll
              data-scroll-speed="0.1"
            >
              <div className="bg-[hsl(22,96%,53%)]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {card.head}
              </h4>
              <p className="text-[hsl(22,96%,53%)] text-sm mb-4">
                {card.designation}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {card.body}
              </p>
            </div>
                  </>
                )
              })
            }

          </div>
        </div>
      </section>

      <section className="Faqs">
        <Accordion faqs={faqs} />
      </section>

      <section
        className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white"
        data-scroll-section
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-scroll data-scroll-speed="0.3">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Here's what you can{" "}
                <span className="text-[hsl(22,96%,53%)]">Expect</span>
                <br />
                After Form Submission
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[hsl(22,96%,53%)]/20 w-12 h-12 rounded-xl flex items-center justify-center mt-1">
                    <Phone className="w-6 h-6 text-[hsl(22,96%,53%)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">
                      A personalized call from one of our Graphic Designer.
                    </h4>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[hsl(22,96%,53%)]/20 w-12 h-12 rounded-xl flex items-center justify-center mt-1">
                    <Search className="w-6 h-6 text-[hsl(22,96%,53%)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">
                      A detailed evaluation of your business goals and
                      requirements.
                    </h4>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[hsl(22,96%,53%)]/20 w-12 h-12 rounded-xl flex items-center justify-center mt-1">
                    <Lightbulb className="w-6 h-6 text-[hsl(22,96%,53%)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">
                      Suggestions for the best Graphic Designing Strategies.
                    </h4>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[hsl(22,96%,53%)]/20 w-12 h-12 rounded-xl p-3 flex items-center justify-center mt-1">
                    <Rocket className="w-6 h-6 text-[hsl(22,96%,53%)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">
                      An opportunity to understand how Netbond Technologies can
                      help you achieve long-term success online.
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div data-scroll data-scroll-speed="0.1">
              <div className="backdrop-blur-lg bg-white/80 border border-white/40 shadow-2xl rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Get Started Today
                </h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(22,96%,53%)]/20 focus:border-[hsl(22,96%,53%)]"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(22,96%,53%)]/20 focus:border-[hsl(22,96%,53%)]"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(22,96%,53%)]/20 focus:border-[hsl(22,96%,53%)]"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(22,96%,53%)]/20 focus:border-[hsl(22,96%,53%)]"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        handleInputChange("service", e.target.value)
                      }
                      required
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(22,96%,53%)]/20 focus:border-[hsl(22,96%,53%)]"
                    >
                      <option value="">Select a service</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="logo-design">Logo Design</option>
                      <option value="templates">Templates Development</option>
                      <option value="video">Video Services</option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(22,96%,53%)]/20 focus:border-[hsl(22,96%,53%)] resize-none"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[hsl(22,96%,53%)] py-3 px-6 font-semibold inline-flex items-center justify-center rounded-md hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white duration-200 cursor-pointer"
                  >
                    Submit
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
