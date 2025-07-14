import {
  faAndroid,
  faApple,
  faFirefoxBrowser,
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
  faStopwatch20,
  faTruck,
  faTruckPlane,
  faUtensils,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { type ReactElement } from "react";
import Accordion from "../Accordion";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

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
  ]
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
  ]
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

  const appdevFAQS = [
    {
    question: "What is mobile app development, and how does it benefit businesses?",
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
]

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".appdev-service-title",
      start: "top 10%",
      end: "+=285%",
      pin: true,
    });
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
  },[]);

  return (
    <section className="appDev">
      <section className="appDev-panel mb-20 pt-[370px] bg-[url(./Spectral.jpg)] rounded-b-3xl shadow-2xl shadow-gray-500 bg-cover px-[5%] pb-[150px]">
        <h1 className="text-8xl mb-8">Application Development</h1>
        <p className="text-lg">
          Mobile Application Development is the process of designing, building,
          and maintaining software applications specifically for mobile devices,
          such as smartphones and tablets. This involves creating user-friendly,
          high-performing, and scalable apps tailored to meet business
          objectives, leveraging advanced technologies, and ensuring seamless
          functionality across multiple platforms like iOS and Android.
        </p>
      </section>
      <section className="appdev-sec-1 w-[90%] mx-auto rounded-3xl flex flex-col items-center justify-center gap-8 mb-20">
        <h2 className="text-4xl mb-5">
          Vast Mobile App Development Service in{" "}
          <span className="text-(--pumpkin)"> Zirakpur</span>
        </h2>
        <div className="chips flex text-center flex-wrap justify-center items-center gap-4">
          <div className="chip w-[45%] px-5 py-4 bg-black text-white text-lg rounded-3xl border-2 border-black hover:bg-white hover:text-black duration-300">
            <FontAwesomeIcon
              className="w-[100%] text-3xl mb-2"
              icon={faApple}
            />{" "}
            iOS App Development
          </div>
          <div className="chip w-[45%] px-5 py-4 bg-black text-white text-lg rounded-3xl border-2 border-black hover:bg-white hover:text-black duration-300">
            <FontAwesomeIcon
              className="w-[100%] text-3xl mb-2"
              icon={faAndroid}
            />{" "}
            Android App Development
          </div>
          <div className="chip w-[45%] px-5 py-4 bg-black text-white text-lg rounded-3xl border-2 border-black hover:bg-white hover:text-black duration-300">
            <FontAwesomeIcon
              className="w-[100%] text-3xl mb-2"
              icon={faWindowRestore}
            />{" "}
            Web App Development
          </div>
          <div className="chip w-[45%] px-5 py-4 bg-black text-white text-lg rounded-3xl border-2 border-black hover:bg-white hover:text-black duration-300">
            <FontAwesomeIcon className="w-[100%] text-3xl mb-2" icon={faN} />{" "}
            Hybrid Native App Development
          </div>
        </div>
      </section>
      <section className="appdev-cta text-center py-20 mb-20">
        <h1 className="text-4xl mb-10">
          Take your business to next level with our Mobile App Development
          Service
        </h1>
        <button
          type="button"
          className="btn border-white/30 px-6 py-2 text-lg text-center border-1 rounded-md hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white duration-200 cursor-pointer"
        >
          Get In Touch
        </button>
      </section>

      <section className="appdev-sec-2 py-25 mb-20 flex px-[5%] items-start">
        <div className="appdev-service-title text-3xl text-(--jet) font-bold w-[40%]">
          Fully Customized Mobile App Development Services For Your{" "}
          <span className="text-(--pumpkin) text-4xl">Business</span>{" "}
          <span className="rotate-90 inline-block ml-2">
            <FontAwesomeIcon icon={faArrowUp} />
          </span>
        </div>

        <ul className="w-[60%]">
          {appDevServices.map((value: AppDevServices) => {
            return (
              <>
                <li className="py-10 border-t-2 flex justify-between cursor-pointer items-start hover:bg-[#f76c1cd9]  hover:px-10 hover:text-white border-black pb-10 offer-items group ease-out duration-500">
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

      <section className="special-features select-none bg-(--jet) px-[5%] py-20">
        <h2 className="text-4xl text-center mb-10">
          Our Special <span className="text-(--pumpkin)">Features</span>
        </h2>
        <p className="mx-auto w-[45%] text-center text-lg">
          At Netbond Technologies, We pride ourselves on delivering exceptional
          solutions that stand out in the digital landscape. Here’s what makes
          us unique in App Development in Zirakpur
        </p>
        <div className="special-features-list flex justify-center py-20 items-center">
          <div className="w-[33%] pr-5">
            <img src="./phone-dummy.png" alt="" />
          </div>
          <div className="special-feat-1 w-[33%]">
            {specialFeatures.map((value: SpecialFeatures) => {
              return (
                <div className="special-feat-item rounded-2xl px-4 group flex items-center gap-3 mb-5">
                  <span className="text-3xl origin-bottom">{value.icon}</span>
                  <div>
                    <h3 className="text-2xl pl-5 font-bold">{value.title}</h3>
                    <p className="text-lg p-5">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="special-feat-2 w-[33%]">
            {specialFeatures2.map((value: SpecialFeatures) => {
              return (
                <div className="special-feat-item px-4 group flex items-center gap-3 mb-5">
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
        <h2 className="text-4xl text-center py-10 ">
          App <span className="font-[Rowdies] text-(--pumpkin)">Screenshots</span>
        </h2>
        <p className="text-xl mx-auto text-center mb-15 w-[45%]">Take a closer look at our app’s intuitive design and user-friendly interface through these detailed screenshots.</p>
        <div className="text-center w-fit mx-auto"><img src="./app-screenshot.png" alt="" /></div>
      </section>

      <section className="form-section-appdev flex justify-center bg-(--jet) py-20 px-[5%] ">
            <div className="form-info flex flex-col gap-10 w-[40%]">
              <h2 className="text-4xl">
                <span className="border-l-10 pl-2 border-(--pumpkin) py-3 ">
                  After
                </span>{" "}
                Form Submission
              </h2>
              <p>
                <ul className="list-disc ml-10 text-lg">
                  <li className="pb-4 text-white">You’ll receive a Call from Our Experts.</li>
                  <li className="pb-4 text-white">We’ll carefully evaluate of your requirements.</li>
                  <li className="pb-4 text-white">A review of Android Application</li>
                  <li className="pb-4 text-white">
                    Suggestions for the best Application Strategies.
                  </li>
                  <li className="pb-4 text-white">
                    Get a feel if Netbond Technologies is Suitable for you
                  </li>
                </ul>
              </p>
            </div>
            <div className="form-component bg-black/70 backdrop-blur-sm rounded-3xl py-6 px-6 w-[55%]">
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label htmlFor="name" className=" block w-full">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input 
                    required
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full bg-white/10 rounded-md px-3 py-1 text-md mb-5 mt-2 focus:ring-3 outline-none focus:ring-(--pumpkin) duration-200"
                />
                <label htmlFor="number" className=" block w-full">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input 
                    required
                  type="tel"
                  name="number"
                  id="number"
                  className="block w-full bg-white/10 rounded-md px-3 py-1 text-md mb-5 mt-2 focus:ring-3 outline-none focus:ring-(--pumpkin) duration-200"
                />
                <label htmlFor="email" className=" block w-full">
                  Email <span className="text-red-600">*</span>
                </label>
                <input 
                    required
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full bg-white/10 rounded-md px-3 py-1 text-md mb-5 mt-2 focus:ring-3 outline-none focus:ring-(--pumpkin) duration-200"
                />
                <label htmlFor="message" className=" block w-full">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="resize-none block w-full bg-white/10 rounded-md px-3 py-1 text-md mb-5 mt-2 focus:ring-3 outline-none focus:ring-(--pumpkin) duration-200"
                  rows={6}
                ></textarea>
                <button
                  type="submit"
                  className="btn border-1 border-white/30 active:scale-95 hover:ring-2 hover:shadow-xl shadow-[#f76b1c] hover:ring-[#f76b1c] hover:ring-offset-2 hover:ring-offset-white hover:scale-105 black/5 rounded-md px-6 py-1 duration-200 text-lg cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
          <section className="appdev-faqs pt-20 bg-(--jet)">
            <Accordion faqs={appdevFAQS}/>
          </section>
    </section>
  );
};

export default AppDev;
