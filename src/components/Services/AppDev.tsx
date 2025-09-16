import {
  faAndroid,
  faApple,
  
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUp,
  faBolt,
  faBriefcaseMedical,
  faCartShopping,
  faComments,
  faCubes,
  faDollarSign,
  faGears,
  faGlobe,
  faGraduationCap,
  faHexagonNodes,
  faHouse,
  faIndustry,
  faJugDetergent,
  faLayerGroup,
  faMagnifyingGlass,
  faMobileScreenButton,
  faN,
  faShareNodes,
  faStopwatch,
  faTruck,
  faTruckPlane,
  faUtensils,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import  { type ReactElement } from "react";
import Accordion from "../Accordion";
import { SplitText } from "gsap/SplitText";
import {  useNavigate } from "react-router";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { handleScrollTop } from "../../App";
import { useMediaQuery } from "../useMediaQuery";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText, ScrollToPlugin);

interface AppDevServices {
  title: string;
  arrow: ReactElement;
  icon: ReactElement;
}

interface SpecialFeatures {
  title: string;
  description: string;
  icon: ReactElement;
}

interface AppDevFAQS {
  question: string;
  answer: string;
}

const AppDev = () => {
  const navigate = useNavigate();

  const specialFeatures: SpecialFeatures[] = [
    {
      title: "Super Performance",
      description:
        "Delivering exceptional speed and efficiency to ensure seamless operations across all platforms.",
      icon: <FontAwesomeIcon icon={faBolt} />,
    },

    {
      title: "Search Optimization",
      description:
        "Boosting your online presence with advanced optimization techniques for better search visibility and ranking.",
      icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
    },
    {
      title: "Organized Code",
      description:
        "Writing clean, structured, and scalable code for efficient development and long-term maintainability.",
      icon: <FontAwesomeIcon icon={faLayerGroup} />,
    },
  ];
  const specialFeatures2: SpecialFeatures[] = [
    {
      title: "100% Response Time",
      description:
        "Guaranteeing instant responsiveness to provide an optimal user experience every time.",
      icon: <FontAwesomeIcon icon={faStopwatch} />,
    },
    {
      title: "Maintaining Milestones",
      description:
        "Achieving project goals on time with a focus on quality, precision, and client satisfaction.",
      icon: <FontAwesomeIcon icon={faGears} />,
    },

    {
      title: "Customer Support",
      description:
        "Providing round-the-clock assistance to address your concerns and ensure uninterrupted service.",
      icon: <FontAwesomeIcon icon={faComments} />,
    },
  ];
  const appDevServices: AppDevServices[] = [
    {
      icon: <FontAwesomeIcon icon={faMobileScreenButton} />,
      title: "On-demand App Solution",
      arrow: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
    },
    {
      icon: <FontAwesomeIcon icon={faCartShopping} />,
      title: "E-Commerce and Market App Solution",
      arrow: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
    },
    {
      icon: <FontAwesomeIcon icon={faUtensils} />,
      title: "Food and Beverage Solution",
      arrow: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
    },
    {
      icon: <FontAwesomeIcon icon={faTruck} />,
      title: "Pickup and Delivery Solution",
      arrow: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
    },
    {
      icon: <FontAwesomeIcon icon={faCubes} />,
      title: "Blockchain Development",
      arrow: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
    },
    {
      icon: <FontAwesomeIcon icon={faGlobe} />,
      title: "Internet of Things (IoT)",
      arrow: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
    },
    {
      icon: <FontAwesomeIcon icon={faShareNodes} />,
      title: "Social Networking Solution",
      arrow: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
    },
    {
      icon: <FontAwesomeIcon icon={faBriefcaseMedical} />,
      title: "Healthcare and Medical Solutions",
      arrow: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
    },
    {
      icon: <FontAwesomeIcon icon={faJugDetergent} />,
      title: "Laundry and Home Services",
      arrow: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
    },
    {
      icon: <FontAwesomeIcon icon={faTruckPlane} />,
      title: "Transportation Solution",
      arrow: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
    },
    {
      icon: <FontAwesomeIcon icon={faHouse} />,
      title: "Real Estate Solution",
      arrow: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
    },
    {
      icon: <FontAwesomeIcon icon={faDollarSign} />,
      title: "Banking And Finance",
      arrow: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
    },
    {
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
      title: "Education and Learning",
      arrow: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
    },
    {
      icon: <FontAwesomeIcon icon={faIndustry} />,
      title: "Manufacturing Business Solution",
      arrow: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
    },
    {
      icon: <FontAwesomeIcon icon={faHexagonNodes} />,
      title: "Enterprise Mobility Solution",
      arrow: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
    },
  ];

  const appdevFAQS: AppDevFAQS[] = [
    {
      question:
        "What is mobile app development, and how does it benefit businesses?",
      answer:
        "Mobile app development involves creating applications designed for mobile devices, enabling businesses to enhance user engagement, improve customer experiences, and boost overall efficient.",
    },
    {
      question: "What types of mobile apps can you develop?",
      answer:
        "We specialize in developing native, hybrid, and cross-platform apps tailored for iOS, Android, and other platforms based on your business requirements.",
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "The timeline depends on the app’s complexity, features, and design. On average, it may take anywhere from 2 to 6 months for a complete app development cycle.",
    },
    {
      question: "Can you help with app updates and maintenance after launch?",
      answer:
        "Yes, we offer comprehensive post-launch support, including updates, bug fixes, and feature enhancements to ensure your app remains relevant and functional.",
    },
    {
      question: "How do you ensure data security in mobile apps?",
      answer:
        "We follow best practices for app security, including data encryption, secure APIs, and compliance with industry standards to safeguard user data and privacy.",
    },
  ];
    const isLargeScreen = useMediaQuery("(min-width: 769px)");

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
    
    const button = document.querySelector(".cta-btn");
    if (button) {
      button.addEventListener("click", () => {
        gsap.to(window, {
          scrollTo: { y: "#contacts", offsetY: 80, autoKill: true },
          duration: 1,
        });
      });
    }

    const allTexts = Array.from(
          document.querySelectorAll(".hero-text") as NodeListOf<HTMLElement>
        );
        allTexts.map((e: HTMLElement) => {
          const split = new SplitText(e, { type: "lines", mask: "lines" });
          gsap.from(split.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            delay:0.4,
            stagger: 0.2,
          });
        });
    
    return ()=>{
      button?.removeEventListener("click", () => {
        gsap.to(window, {
          scrollTo: { y: "#contacts", offsetY: 80, autoKill: true },
          duration: 1,
        });
      });
    }
  }, []);

  useGSAP(()=>{
    if(!isLargeScreen) return;
    ScrollTrigger.create({
      trigger: ".appdev-service-title",
      start: "top 10%",
      end: "+=285%",
      pin: true,
    });
    return()=>{
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  },[])

  return (
    <section className="appDev">
      <section className="appDev-panel md:mb-20 mb-10 xl:pt-[370px] lg:[250px] md:pt-[180px] pt-[130px] bg-[url(./Spectral.jpg)] rounded-b-3xl shadow-2xl shadow-gray-500 bg-cover px-[5%] pb-[50px] md:pb-[150px]">
        <h1 className="md:text-8xl text-5xl mb-8 hero-text">
          Application Development
        </h1>
        <p className="lg:text-lg md:block hidden hero-text">
          Mobile Application Development is the process of designing, building,
          and maintaining software applications specifically for mobile devices,
          such as smartphones and tablets. This involves creating user-friendly,
          high-performing, and scalable apps tailored to meet business
          objectives, leveraging advanced technologies, and ensuring seamless
          functionality across multiple platforms like iOS and Android.
        </p>
        <p className="md:text-lg text-sm md:hidden hero-text">
          Mobile Application Development is the process of designing, building,
          and maintaining software applications specifically for mobile devices,
          such as smartphones and tablets.
        </p>
      </section>
      <section className="appdev-sec-1 w-[90%] mx-auto rounded-3xl flex flex-col items-center justify-center gap-8 mb-20">
        <h2 className="md:text-4xl text-center md:text-start text-2xl mb-5">
          Vast Mobile App Development Service in{" "}
          <span className="text-(--pumpkin)"> Zirakpur</span>
        </h2>
        <div className="chips flex text-center flex-wrap justify-center items-center gap-4">
          <div className="chip w-full md:w-[45%] px-5 py-4 bg-black text-white text-lg rounded-3xl border-2 border-black hover:bg-white hover:text-black duration-300">
            <FontAwesomeIcon
              className="w-[100%] text-3xl mb-2"
              icon={faApple}
            />{" "}
            iOS App Development
          </div>
          <div className="chip w-full md:w-[45%] px-5 py-4 bg-black text-white text-lg rounded-3xl border-2 border-black hover:bg-white hover:text-black duration-300">
            <FontAwesomeIcon
              className="w-[100%] text-3xl mb-2"
              icon={faAndroid}
            />{" "}
            Android App Development
          </div>
          <div className="chip w-full md:w-[45%] px-5 py-4 bg-black text-white text-lg rounded-3xl border-2 border-black hover:bg-white hover:text-black duration-300">
            <FontAwesomeIcon
              className="w-[100%] text-3xl mb-2"
              icon={faWindowRestore}
            />{" "}
            Web App Development
          </div>
          <div className="chip w-full md:w-[45%] px-5 py-4 bg-black text-white text-lg rounded-3xl border-2 border-black hover:bg-white hover:text-black duration-300">
            <FontAwesomeIcon className="w-[100%] text-3xl mb-2" icon={faN} />{" "}
            Hybrid Native App Development
          </div>
        </div>
      </section>
      <section className="appdev-cta text-center py-20 mb-20">
        <h1 className="md:text-4xl text-2xl md:px-0 px-[5%] mb-10">
          Take your business to next level with our Mobile App Development
          Service
        </h1>
        <button
          type="button"
          className="btn cta-btn border-white/30 px-6 py-2 md:text-lg text-center border-1 rounded-md hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white duration-200 cursor-pointer"
        >
          Get In Touch
        </button>
      </section>

      <section className="appdev-sec-2 lg:py-25 py-10 mb-20 flex lg:flex-row flex-col px-[5%] items-start">
        <div className="appdev-service-title md:text-3xl lg:mb-0 mb-10 text-2xl text-(--jet) font-bold lg:w-[40%]">
          Fully Customized Mobile App Development Services For Your{" "}
          <span className="text-(--pumpkin) md:text-4xl text-2xl">
            Business
          </span>{" "}
          <span className="lg:rotate-90 rotate-180 md:text-2xl text-lg inline-block ml-2">
            <FontAwesomeIcon icon={faArrowUp} />
          </span>
        </div>

        <ul className="lg:w-[60%] w-full">
          {appDevServices.map((value: AppDevServices) => {
            return (
              <>
                <li
                  className="py-10 service-app border-t-2 flex justify-between cursor-pointer items-start hover:bg-[#f76c1cd9]  hover:px-10 hover:text-white border-black pb-10 offer-items group ease-out duration-500"
                  onClick={() => {
                    navigate("/contact");
                    handleScrollTop();
                  }}
                >
                  <div>
                    <span className="text-2xl w-[30%] block">{value.icon}</span>
                    <span className="text-2xl font-bold block">
                      {value.title}{" "}
                    </span>
                  </div>
                  <div className="arr-icon rotate-90 group-hover:rotate-45 duration-100 ease-in origin-center">
                    {value.arrow}
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </section>

      <section className="special-features select-none bg-(--jet) px-[5%] pt-20 lg:pb-10 xl:py-20">
        <h2 className="md:text-4xl text-3xl text-center mb-10">
          Our Special <span className="text-(--pumpkin)">Features</span>
        </h2>
        <p className="mx-auto xl:w-[45%] lg:w-[70%] text-center md:text-lg">
          At Netbond Technologies, We pride ourselves on delivering exceptional
          solutions that stand out in the digital landscape. Here’s what makes
          us unique in App Development in Zirakpur
        </p>
        <div className="lg:w-[33%] hidden mx-auto lg:block xl:hidden mt-15 pr-5">
            <img src="./phone-dummy.png" alt="" />
          </div>
        <div className="special-features-list flex lg:flex-row flex-col justify-center py-20 items-center">
          <div className="lg:w-[33%] lg:hidden xl:block md:w-[70%] mb-15 lg:mb-0 pr-5">
            <img src="./phone-dummy.png" alt="" />
          </div>
          <div className="special-feat-1 xl:w-[33%] lg-w-[49%]">
            {specialFeatures.map((value: SpecialFeatures) => {
              return (
                <div className="special-feat-item rounded-2xl px-4 group flex items-center gap-3 lg:mb-5 mb-10">
                  <span className="text-3xl origin-bottom">{value.icon}</span>
                  <div>
                    <h3 className="text-2xl pl-5 font-bold">{value.title}</h3>
                    <p className="text-lg p-5">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="special-feat-2 xl:w-[33%] lg-w-[49%] mb-15 lg:mb-0">
            {specialFeatures2.map((value: SpecialFeatures) => {
              return (
                <div className="special-feat-item px-4 group flex items-center gap-3 lg:mb-5 mb-10">
                  <span className="text-3xl origin-bottom">{value.icon}</span>
                  <div>
                    <h3 className="text-2xl pl-5 font-bold">{value.title}</h3>
                    <p className="text-lg p-5">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="screenshots pb-30 bg-(--jet)">
        <h2 className="md:text-4xl text-3xl text-center py-10 ">
          App{" "}
          <span className="font-[Rowdies] text-(--pumpkin)">Screenshots</span>
        </h2>
        <p className="md:text-xl px-[5%]  mx-auto text-center mb-15 lg:w-[70%] xl:w-[45%]">
          Take a closer look at our app’s intuitive design and user-friendly
          interface through these detailed screenshots.
        </p>
        <div className="text-center px-[1%] w-fit mx-auto">
          <img src="./app-screenshot.png" alt="" />
        </div>
      </section>

      <section className="appdev-faqs md:pt-20 pt-10 bg-(--jet)">
        <Accordion faqs={appdevFAQS} />
      </section>
    </section>
  );
};

export default AppDev;
