import {
  faReact,
  faShopify,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowTrendUp,
  faArrowUpRightDots,
  
  faChartPie,
  faChartSimple,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { type ReactElement } from "react";
gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

interface Skill {
  head: string;
  body: string;
  icon: ReactElement;
}

interface Service {
  title: string;
  description: string;
  SL_no: string;
  features: string[];
}

interface CMS {
  title: string;
  description: string;
  logo: ReactElement;
}

const WebDev: React.FC = () => {
  const cms: CMS[] = [
    {
      title: "WordPress",
      description:
        "At Netbond, we deliver high performance, fully customized WordPress websites that align perfectly with your brand and business goals. Our experts create seamless, user-friendly experiences designed to drive engagement and conversations. With robust security measures and ongoing support, we ensure your WordPress site remains optimized , secure, and scalable as your business grows. ",
      logo: (
        <FontAwesomeIcon
          icon={faWordpress}
          className="text-7xl text-blue-700"
        />
      ),
    },
    {
      title: "Shopify",
      description:
        "At Netbond Technologies, we specialize in designing, developing, and scaling Shopify websites that drive results. Whether you’re launching a new store or optimizing an existing one, our expert team ensures a seamless process from concept to execution. With tailored solutions. Trust Netbond Technologies to turn your eCommerce goals into a scalable, successful online presence.",
      logo: (
        <FontAwesomeIcon icon={faShopify} className="text-7xl text-green-600" />
      ),
    },
    {
      title: "React",
      description:
        "At Netbond Technologies, we harness the power of React to create cutting-edge web applications that deliver outstanding performance and user experiences. Our skilled developers design and implement custom React solutions tailored to your business needs, ensuring scalability, speed, and seamless interactivity. From startups to enterprises, We web development company in zirakpur empowers your digital transformation journey, helping your business stay ahead in today’s competitive landscape.",
      logo: (
        <FontAwesomeIcon icon={faReact} className="text-7xl text-blue-500" />
      ),
    },
  ];
  const services: Service[] = [
    {
      title: "Project Management",
      description:
        "Our expert team delivers end-to-end project management services, ensuring your vision transforms into reality. From initial planning to execution, we handle it all seamlessly.",
      SL_no: "01/",
      features: [
        "+ Mobile & Web Design",
        "+ Iteraction Design",
        "+ UX Research & Plan",
      ],
    },
    {
      title: "Product Management",
      description:
        "With a focus on innovation and efficiency, we help businesses launch and manage products that resonate with their audience, driving growth and sustainability.",
      SL_no: "02/",
      features: ["+ Product Strategy", "+ Roadmap Planning", "+ User Research"],
    },
    {
      title: "Web Design",
      description:
        "Our creative design team delivers exceptional web designs, combining aesthetics and functionality to meet your unique business needs.",
      SL_no: "03/",
      features: [
        "+ Responsive UI/UX",
        "+ Prototyping & Wireframing",
        "+ Performance Optimization",
      ],
    },
    {
      title: "Backend Development",
      description:
        "we website development company in zirakpur, our backend solutions tailored to enhance your platform’s performance, scalability, and reliability.",
      SL_no: "04/",
      features: [
        "+ API Development",
        "+ Database Architecture",
        "+ Security Enhancements",
      ],
    },
  ];
  const Skills: Skill[] = [
    {
      head: "From Vision to Reality",
      body: "Empowering innovative ideas to shape a better tomorrow. We believe in turning imagination into reality, fostering creativity at every step.",
      icon: <FontAwesomeIcon icon={faChartSimple} />,
    },
    {
      head: "From Data to Success",
      body: "Leveraging data-driven strategies to deliver impactful results. Our insights and data-driven strategies fuel success stories and drive meaningful change.",
      icon: <FontAwesomeIcon icon={faChartPie} />,
    },
    {
      head: "Stronger Together",
      body: "Together, we achieve the extraordinary. Building stronger connections through teamwork and shared visions.",
      icon: <FontAwesomeIcon icon={faFileLines} />,
    },
    {
      head: "The Journey to Excellence",
      body: "Unlocking potential and scaling new heights. Our focus on growth ensures lasting value for individuals and organizations.",
      icon: <FontAwesomeIcon icon={faArrowUpRightDots} />,
    },
  ];

  useGSAP(() => {
    const cards = Array.from(
      document.querySelectorAll(".skill-card") as NodeListOf<HTMLElement>
    );
    cards.map((card: any, index) => {
      gsap.fromTo(
        card,
        { yPercent: 100, rotate: 10 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 0.5 * (index + 1),
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".webdev-skills",
            start: "top 80%",
            end: "top 50%",
          },
        }
      );
    });
    const cards2 = Array.from(
      document.querySelectorAll(".cms-platform") as NodeListOf<HTMLElement>
    );
    cards2.map((card: any, index) => {
      gsap.fromTo(
        card,
        { yPercent: 100, rotate: 10 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 0.2 * (index + 1),
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".cms-platforms",
            start: "top 90%",
            end: "top 50%",
          },
        }
      );
    });

    const serviceCovers = Array.from(
      document.querySelectorAll(".webdev-service") as NodeListOf<HTMLElement>
    );
    serviceCovers.map((cover: any) => {
      gsap.from(cover, {
        y: 250,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cover,
          start: "top 92%",
          end: "top 25%",
          scrub: true,
        },
      });
    });

    const allTitles = [document.querySelector(".webdev-skill-head") as HTMLElement,document.querySelector(".webdev-service-head") as HTMLElement,document.querySelector(".webdev-cms-head") as HTMLElement];

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
    
  }, []);

  return (
    <>
      <div className="webdev">
        <div className="webdev-panel w-full pt-[250px] pb-[100px] bg-[url(./Hero.jpg)] shadow-lg rounded-b-2xl shadow-black bg-cover bg-center bg-no-repeat">
          <h1 className="text-9xl mx-[5%] w-[50%]">Website Development</h1>
          <span className="block text-(--pumpkin) mx-[5.5%] text-5xl/30 font-semibold">
            Web Development Company In Zirakpur
          </span>
          <button
            type="button"
            className="btn border-white/30 px-6 mx-[5.5%] py-2 text-lg text-center border-1 rounded-md hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white duration-200 cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
        <div className="webdev-sec-1 py-[8%] px-[5%]">
          <h2 className="text-7xl webdev-skill-head text-center pb-20">
            {" "}
            Empowering Skills To Help{" "}
            <span className="text-(--pumpkin)">You</span>{" "}
          </h2>
          <div className="webdev-skills flex justify-center flex-wrap gap-5 items-center">
            {Skills.map((skill) => {
              return (
                <>
                  <div className="skill-card flex w-[45%] flex-col gap-7 justify-center items-start px-10 py-10 bg-white shadow-xl rounded-2xl">
                    <div className="icon text-5xl mb-3">{skill.icon}</div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {skill.head}
                    </h3>
                    <p className="text-lg">{skill.body}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="webdev-services w-full px-[5%] pt-[8%] pb-[2%] mx-auto bg-(--jet) rounded-t-3xl">
          <h2 className="text-7xl webdev-service-head text-center mb-50">
            <span className="text-(--pumpkin)">We</span> Provide Premium
            Services
          </h2>
          <div className="webdev-services flex flex-col justify-center items-center">
            {services.map((service) => {
              return (
                <>
                  <div className="border-b-2 pb-10 border-white mb-40 overflow-hidden webdev-service-cover">
                    <div className="webdev-service flex justify-center items-start ">
                      <div className="service-title flex flex-col w-[60%] justify-center items-start gap-10">
                        <h3 className="text-4xl">{service.SL_no}</h3>
                        <div className="service-header text-white text-6xl font-bold">
                          {service.title}
                        </div>
                      </div>
                      <div className="service-desc flex flex-col justify-center w-[40%] items-start gap-10">
                        <div className="text-2xl text-white font-semibold">
                          {service.description}
                        </div>
                        <div className="text-lg text-white list-none ml-2">
                          {service.features.map((feature, index) => {
                            return (
                              <li key={index} className="mb-2 font-semibold">
                                {feature}
                              </li>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="webdev-cms w-[90%] py-[8%] mx-auto">
          <h2 className="text-6xl webdev-cms-head px-[5%] mb-[7%]">
            CMS Platform Tailored For{" "}
            <span className="text-(--pumpkin)">Client</span> Needs
          </h2>
          <div className="w-[90%] mx-auto bg-white px-[4%] border-l-30 py-[5%] border-(--pumpkin)">
            <h2 className="text-2xl mb-5">
              {" "}
              CMS and Web Solutions Designed for Your Success{" "}
              <FontAwesomeIcon
                className="ml-2 text-xl text-green-600"
                icon={faArrowTrendUp}
              />
            </h2>
            <div className="mb-10 text-lg font-semibold font-[Figtree]">
              At <span className="text-(--pumpkin)">Netbond</span> Technologies,
              we specialize in creating and customizing Content Management
              Systems (CMS) and dynamic web solutions tailored to meet the
              unique needs of your business. Whether you’re looking to
              streamline content updates, enhance performance, or improve user
              engagement, our team delivers flexible, scalable, and
              user-friendly solutions.
            </div>
            <div className="text-lg font-semibold font-[Figtree]">
              From <span className="text-blue-700">WordPress</span> and{" "}
              <span className="text-green-600">Shopify</span> to modern,
              high-performance <span className="text-blue-400">React</span>
              -based websites, we ensure your platform is optimized for seamless
              functionality and effortless usability. By leveraging the power of
              React, we create fast, responsive, and interactive web experiences
              that empower you to focus on what truly matters—growing your
              business and achieving your goals.
            </div>
          </div>
        </div>
        <div className="cms-platforms w-[90%] mx-auto flex justify-center gap-10 flex-wrap items-start py-[2%]">
          {cms.map((cmsPlatform) => {
            return (
              <>
                <div className="cms-platform flex flex-col w-[45%] p-[5%] shadow-2xl justify-start bg-white rounded-3xl gap-10  hover:shadow-2xl hover:shadow-black transition-all duration-300">
                  <div className="cms-logo">{cmsPlatform.logo}</div>
                  <h2 className="cms-title text-4xl">{cmsPlatform.title}</h2>
                  <div className="cms-description font-semibold text-lg font-[Figtree]">
                    {cmsPlatform.description}
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="join-us w-full py-[8%] pl-[25%] mt-[50px] rounded-t-3xl">
            <h1 className="mb-4 text-6xl ">Tell <span className="text-(--pumpkin)">Us</span> about your Ideas</h1>
            <button
            type="button"
            className="btn border-white/30 px-6 py-2 text-lg text-center border-1 rounded-md hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white duration-200 cursor-pointer"
          >
            Get In Touch
          </button>
            
        </div>
      </div>
    </>
  );
};

export default WebDev;
