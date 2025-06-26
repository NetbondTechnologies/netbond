import {
  faArrowRight,
  faArrowTrendUp,
  faAt,
  faBullseye,
  faCode,
  faCopyright,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { type ReactElement } from "react";
import { useNavigate } from "react-router";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

interface Services {
  icon: ReactElement;
  heading: string;
  description: string;
  link: string;
  demand: string;
}

const Services = () => {
  const servicesArr: number[] = [1, 2, 3, 4, 5, 6];
  const navigate = useNavigate();
  const servicesItems: Services[] = [
    {
      demand: "Most Demanded",
      heading: "Website Design",
      icon: <FontAwesomeIcon size="xl" icon={faCode} />,
      link: "/",
      description:
        "Crafting visually stunning and user-friendly websites to establish a powerful online footprint for your brand.",
    },
    {
      demand: "",
      heading: "Branding & Marketing",
      icon: <FontAwesomeIcon size="xl" icon={faCopyright} />,
      link: "/",
      description:
        "Empowering your business with creative strategies to build a unique brand identity and connect with your audience.",
    },
    {
      demand: "",
      heading: "Application Development",
      icon: <FontAwesomeIcon size="xl" icon={faMobileScreenButton} />,
      link: "/",
      description:
        "Innovative and scalable app solutions tailored to meet your business needs and enhance user experiences.",
    },
    {
      demand: "Most Demanded",
      heading: "Social Media",
      icon: <FontAwesomeIcon size="xl" icon={faAt} />,
      link: "/",
      description:
        "Engage, connect, and grow your audience with impactful social media strategies and creative content.",
    },
    {
      demand: "",
      heading: "Strategy",
      icon: <FontAwesomeIcon size="xl" icon={faBullseye} />,
      link: "/",
      description:
        "Strategic solutions to drive growth, innovation, and success in today’s competitive digital landscape to its full potential.",
    },
    {
      demand: "Most Demanded",
      heading: "SEO",
      icon: <FontAwesomeIcon size="xl" icon={faArrowTrendUp} />,
      link: "/",
      description:
        "Boost your online presence with optimized strategies that drive organic traffic and improve search rankings.",
    },
  ];

  useGSAP(() => {
    const split = new SplitText(".services-head", {
      type: "lines",
      linesClass: "line",
      mask: "lines",
    });
    gsap.set(".services-head", { opacity: 1 });
    gsap.from(split.lines, {
      duration: 2,
      y: 100,
      stagger: 0.1,
      ease: "expo.out",
      rotation: 0.01,
      scale: 1,
      scrollTrigger: {
        trigger: ".services",
        start: "top 70%",
        end: "top 20%",
        pin: false,
      },
    });
  });

  return (
    <div className="services w-[90%] bg-(--seasalt) mt-20 px-15 pt-10 pb-30 border-3 rounded-xl mx-auto">
      <h2 className="text-7xl services-head text-center mt-15 mb-30 mx-auto relative w-fit rounded-2xl text-[#f76b1c]">
        Services We Provide
      </h2>
      <div className="services-container flex h-auto w-[100%] overflow-hidden relative border-x-1 py-9 px-3">
        <div className="cards-container ml-10 flex flex-nowrap gap-20">
          {servicesItems.map((e: Services, index: number) => {
            return (
              <div
                key={index}
                className="w-[30%] shadow-xl hover:text-[#f76b1c] cursor-default duration-200 hover:-translate-y-[4px] hover:shadow-2xl slide-card flex-shrink-0 flex flex-col gap-8 px-5 py-5 items-start rounded-2xl"
                onClick={() => {
                  navigate(`${e.link}`);
                }}
              >
                <div className="icon-area w-full flex justify-between">
                  <div className="icon translate-y-1 w-[20%]">{e.icon}</div>{" "}
                  <div className="gradient-text text-lg">{e.demand}</div>{" "}
                </div>
                <h3 className="text-3xl">{e.heading}</h3>
                <p>{e.description}</p>
                <button className="btn-services btn btn-2 border-1 border-white/30 px-4 py-1 border-1 rounded-md active:scale-95 hover:ring-2 hover:shadow-xl shadow-[#f76b1c] hover:ring-[#f76b1c] hover:ring-offset-2 hover:ring-offset-white hover:scale-105 duration-200 cursor-pointer">
                  Check Out{" "}
                  <span className="arrow inline-block ml-1">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
