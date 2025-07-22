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
import { useMediaQuery } from "../useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export interface Services {
  icon: ReactElement;
  heading: string;
  description: string;
  link: string;
  demand: string;
}

const Services: React.FC = () => {
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery("(min-width: 769px)");
  const servicesItems: Services[] = [
    {
      demand: "Most Demanded",
      heading: "Website Design",
      icon: <FontAwesomeIcon size="xl" icon={faCode} />,
      link: "/webDev",
      description:
        "Crafting visually stunning and user-friendly websites to establish a powerful online footprint for your brand.",
    },
    {
      demand: "",
      heading: "Graphic Designing",
      icon: <FontAwesomeIcon size="xl" icon={faCopyright} />,
      link: "/graphicDesigning",
      description:
        "We are your one-stop solution for your complete digital marketing and graphic design requirements.",
    },
    {
      demand: "",
      heading: "Application Development",
      icon: <FontAwesomeIcon size="xl" icon={faMobileScreenButton} />,
      link: "/appDev",
      description:
        "Innovative and scalable app solutions tailored to meet your business needs and enhance user experiences.",
    },
    {
      demand: "Most Demanded",
      heading: "B2B Services",
      icon: <FontAwesomeIcon size="xl" icon={faAt} />,
      link: "/business-services",
      description:
        "Grow your business with our impactful B2B strategies, that'll make your business stand out.",
    },
    {
      demand: "",
      heading: "Strategy",
      icon: <FontAwesomeIcon size="xl" icon={faBullseye} />,
      link: "/gmb",
      description:
        "Strategic solutions to drive growth, innovation, and success in today’s competitive digital landscape to its full potential.",
    },
    {
      demand: "Most Demanded",
      heading: "SEO",
      icon: <FontAwesomeIcon size="xl" icon={faArrowTrendUp} />,
      link: "/seo",
      description:
        "Boost your online presence with optimized strategies that drive organic traffic and improve search rankings.",
    },
  ];

  useGSAP(() => {
    if(!isLargeScreen) return;
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

    return ()=>{
       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    
    }
  },[]);

  return (
    <div className="services w-[90%] bg-(--seasalt) mt-20 md:px-15 px-5 md:pt-10 pt-5 md:pb-30 pb-5 border-3 rounded-xl mx-auto">
      <h2 className="lg:text-6xl text-nowrap xl:text-7xl md:text-6xl text-3xl services-head text-center mt-10 mb-15 xl:mt-15 xl:mb-30 mx-auto relative w-fit rounded-2xl text-[#f76b1c]">
        Services We Provide
      </h2>
      <div className=" flex flex-wrap md:hidden gap-20">
          {servicesItems.map((e: Services, index: number) => {
            return (
              <div
                key={index}
                className="w-full shadow-xl hover:text-[#f76b1c] cursor-default duration-200 hover:-translate-y-[4px] hover:shadow-2xl slide-card flex-shrink-0 flex flex-col gap-8 px-5 py-5 items-start rounded-2xl"
                onClick={() => {
                  navigate(`${e.link}`);
                }}
              >
                <div className="icon-area w-full flex justify-between">
                  <div className="icon translate-y-1 w-[20%]">{e.icon}</div>{" "}
                  <div className="gradient-text text-lg">{e.demand}</div>{" "}
                </div>
                <h3 className="text-3xl text-(--jet)">{e.heading}</h3>
                <p className="text-(--jet) ">{e.description}</p>
                <button className="btn-services btn btn-2 border-1 border-white/30 px-4 py-1 rounded-md active:scale-95 hover:ring-2 hover:shadow-xl shadow-[#f76b1c] hover:ring-[#f76b1c] hover:ring-offset-2 hover:ring-offset-white hover:scale-105 duration-200 cursor-pointer">
                  Check Out{" "}
                  <span className="arrow inline-block ml-1">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      <div className="services-container hidden md:flex h-auto w-[100%] overflow-hidden relative border-x-1 py-9 px-3">
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
                <h3 className="text-3xl text-(--jet)">{e.heading}</h3>
                <p className="text-(--jet) ">{e.description}</p>
                <button className="btn-services btn btn-2 border-1 border-white/30 px-4 py-1 rounded-md active:scale-95 hover:ring-2 hover:shadow-xl shadow-[#f76b1c] hover:ring-[#f76b1c] hover:ring-offset-2 hover:ring-offset-white hover:scale-105 duration-200 cursor-pointer">
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
