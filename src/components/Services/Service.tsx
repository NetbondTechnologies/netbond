import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import type { ReactElement } from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "../useMediaQuery";

interface Service {
  heading: string;
  icon: ReactElement;
  link: string;
  description: string;
}

interface Data {
  head: string;
  body: string;
}

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

const Service = () => {
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery("(min-width: 769px)");

  const productStrategy = [
    "Strategy Workshops",
    "Idea Validation",
    "Market Research",
    "Product Positioning",
    "UX Research",
    "Functional Decomposition",
  ];
  const uiDesign = ["User Flows", "Prototyping"];
  const uxDesign = ["Moodboards", "Visual Design", "Hand-off"];

  const companyData: Data[] = [
    {
      head: "$100M",
      body: "In funding secured owning to our designs.",
    },
    {
      head: "+2 Million",
      body: "Increase in customer base",
    },
    {
      head: "1 000 000+",
      body: "Of Active marketplace users",
    },
    {
      head: "$100M",
      body: "In funding secured owning to our designs.",
    },
    {
      head: "+2 Million",
      body: "Increase in customer base",
    },
    {
      head: "1 000 000+",
      body: "Of Active marketplace users",
    },
  ];
  const servicesItems: Service[] = [
    {
      heading: "Website Design",
      icon: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
      link: "/webDev",
      description:
        "Crafting visually stunning and user-friendly websites to establish a powerful online footprint for your brand.",
    },
    {
      heading: "Graphic Designing",
      icon: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
      link: "/graphicDesigning",
      description:
        "Creating visually appealing and engaging graphic designs that resonate with your target audience.",
    },
    {
      heading: "Application Development",
      icon: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
      link: "/appDev",
      description:
        "Innovative and scalable app solutions tailored to meet your business needs and enhance user experiences.",
    },
    {
      heading: "B2B Services",
      icon: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
      link: "/business-services",
      description:
        "Grow your business with our impactful B2B strategies, that'll make your business stand out.",
    },
    {
      heading: "GMB",
      icon: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
      link: "/gmb",
      description:
        "Enhance your brand visibility and customer engagement with Google My Business listings.",
    },
    {
      heading: "SEO",
      icon: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
      link: "/seo",
      description:
        "Boost your online presence with optimized strategies that drive organic traffic and improve search rankings.",
    },
    {
      heading: "B2B Services",
      icon: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
      link: "/business-services",
      description:
        "Services offered to the businesses and companies to help them grow and get into the limelight.",
    },
  ];
  useGSAP(() => {
    if (!isLargeScreen) return;
    ScrollTrigger.create({
      trigger: ".offer-heading",
      start: "top 10%",
      end: "+=150%",
      pin: true,
    });

    gsap.fromTo(
      ".offer-text",
      { width: 0, opacity: 0 },
      {
        width: "90%",
        duration: 1,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".offer-text",
          start: "top 60%",
          end: "top 50%",
        },
      }
    );

    gsap.to(".posterBG", {
      yPercent: 12,
      scrollTrigger: {
        trigger: ".poster",
        start: "top 90%",
        end: "bottom 10%",
        scrub: 1,
      },
    });

    const productTags = gsap.utils.toArray(".product-tags");
    const uiTags = gsap.utils.toArray(".ui-tags");
    const uxTags = gsap.utils.toArray(".ux-tags");

    productTags.forEach((tag: any, i: number) => {
      gsap.to(tag, {
        translateX: `${(210 / productTags.length) * i}`,
        scrollTrigger: {
          trigger: ".belowPoster",
          start: "top 95%",
          end: "bottom 10%",
          scrub: 1,
        },
      });
    });
    uiTags.forEach((tag: any, i: number) => {
      gsap.to(tag, {
        translateX: `${(210 / uiTags.length) * i}`,
        scrollTrigger: {
          trigger: ".belowPoster",
          start: "top 95%",
          end: "bottom 10%",
          scrub: 1,
        },
      });
    });
    uxTags.forEach((tag: any, i: number) => {
      gsap.to(tag, {
        translateX: `${(210 / uxTags.length) * i}`,
        scrollTrigger: {
          trigger: ".belowPoster",
          start: "top 95%",
          end: "bottom 10%",
          scrub: 1,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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

    const split = new SplitText(".hero-text", { type: "lines", mask: "lines" });
    gsap.from(split.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.1,
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      split.revert();
    };
  }, []);

  return (
    <>
      <div className="service">
        <div className="service-container pt-35 md:pt-50 shadow-2xl rounded-b-xl shadow-[#f76b1c] pb-15 md:pb-25 lg:pb-30 xl:pb-40">
          <h1 className="xl:text-8xl md:text-5xl lg:text-7xl text-3xl text-center md:text-start w-[95%] service-header font-stretch-50% px-[5%] hero-text">
            {`We're a full - service digital studio`.toUpperCase()}
          </h1>
        </div>
        <h2 className="md:pb-10 xl:text-7xl lg:text-5xl md:text-4xl text-2xl text-center md:text-start w-[90%] mx-auto md:my-20 my-10 xl:pr-[40%]">
          Digital Product Design Services and Solutions We offer
        </h2>
        <span className="offer-text block md:text-lg lg:text-2xl/8 xl:text-3xl/10 text-sm md:mx-[5%] mx-[2%] mt-1 md:my-15 overflow-x-hidden md:py-10 xl:py-15 py-5 px-5 md:px-10 md:border-l-25 border-l-12 bg-white border-(--pumpkin) font-bold ">
          <span className="md:h-[14%] lg:h-[15%] h-[10%] overflow-y-hidden block">
            We lead your startup at every step of its growth, providing
            unparalleled personal service at every interaction. Whether it’s
            launching an MVP, revamping an existing product, securing funding
            with <span className="gradient-text">UI PROTOTYPES</span>,
            increasing customer engagement, we develop a suite of
            custom-tailored design services to fulfill your expectations.
          </span>
        </span>
        <div className="offers flex lg:flex-row flex-col px-[5%] lg:py-45 py-25 items-start">
          <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl w-fit pb-8 lg:pb-2 mx-auto offer-heading lg:w-[50%]">
            <span className="text-[#f76b1c]">NetBond</span> offers you
          </h2>

          <ul className="lg:w-[50%] w-full">
            {servicesItems.map((value: Service) => {
              return (
                <>
                  <li
                    className="pt-5 border-t-2 flex justify-between cursor-pointer items-start hover:bg-[#f76c1cd9]  hover:px-5 hover:text-white border-black pb-10 offer-items group ease-out duration-500"
                    onClick={() => {
                      navigate(`${value.link}`);
                    }}
                  >
                    <div>
                      <span className="xl:text-4xl lg:text-3xl text-2xl font-bold pb-4 block">
                        {value.heading}
                      </span>
                      <span className="xl:text-xl block">
                        {value.description}{" "}
                      </span>
                    </div>
                    <div className="arr-icon rotate-90 group-hover:rotate-45 duration-100 ease-in origin-cente">
                      {value.icon}
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        <div className="companies w-[90%] mx-auto">
          <h2 className="lg:text-lg md:text-2xl md:w-[50%] text-xl lg:w-[30%] xl:w-[18%] mx-auto mb-10 text-center">
            Industries we serve with Our Digital UX Design Expertise
          </h2>
          <h5 className="lg:text-4xl text-lg lg:w-[80%] mx-auto mb-10 lg:mb-30 text-center">
            {" "}
            Our industry – specific Knowledge and digital product design
            expertise contribute to solving the right problems, creating the
            right products, and designing the products.{" "}
          </h5>

          <div className="company-data grid select-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:px-[5%]">
            {companyData.map((value: Data, i: number) => {
              if (i === companyData.length - 1) {
                return (
                  <>
                    <div className="data bg-[#f76c1c] rounded-xl px-[5%] py-[4%]">
                      <h3 className="text-4xl pb-20">{value.head}</h3>
                      <h4 className="text-md">{value.body}</h4>
                    </div>
                  </>
                );
              } else {
                return (
                  <>
                    <div className="data bg-(--jet) rounded-xl px-[5%] py-[4%]">
                      <h3 className="text-4xl pb-20">{value.head}</h3>
                      <h4 className="text-md">{value.body}</h4>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>

        <div className="poster-area w-full md:h-[600px] lg:h-[800px] h-[800px] relative">
          <div className="posterBG w-full h-[100%] rounded-2xl absolute left-0 top-0 shadow-2xl"></div>
          <div className="poster w-full h-[800px] my-20 object-cover overflow-y-hidden px-[10%]">
            <div className="lg:top-1/2 relative lg:-translate-y-1/4 pt-20 lg:pt-0 poster-text">
              <h2 className="xl:text-7xl lg:text-5xl md:text-4xl text-3xl pb-15">
                Digital Product Design Process
              </h2>
              <h3 className="lg:text-2xl text-lg pb-10">
                We do not take on projects that involve blind conformity or
                designing out of context. We won’t settle for a user interface
                design that is misaligned with your product and digital
                strategy. Neither will we launch web development ventures
                without user testing to validate our design solutions.
              </h3>
              <h3 className="lg:text-2xl text-lg pb-10">
                Instead, we create scalable digital products that meet the ever
                – evolving demands of our customers, ensuring long – term
                sustainability.
              </h3>
              <button
                className="px-8 py-2  text-sm md:text-base bg-[#E26E02] text-white rounded-md font-medium hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white transition-all duration-200 cursor-pointer"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        <div className="belowPoster w-[90%] select-none mx-auto flex lg:flex-row flex-col justify-end lg:h-[340px] items-start lg:border-t-1 lg:mt-50 mt-20 mb-30 border-black">
            <h4 className="pt-5 text-xl lg:hidden w-fit mx-auto pb-10">Product Strategy</h4>
          <div className="px-2 product-strategy border-l-2 lg:border-l-1 product-item flex flex-wrap items-center justify-center lg:block h-full border-black lg:w-[27.5%]">
            <h4 className="pt-5 hidden lg:block pb-10">Product Strategy</h4>

            {productStrategy.map((value: string) => {
              return (
                <>
                  <div className="px-4 pt-2 pb-2.5 product-tags xl:w-[60%] lg:w-fit w-auto font-bold text-sm text-white bg-[#141414] mb-1 rounded-4xl">
                    {value}
                  </div>
                </>
              );
            })}
          </div>
            <h4 className="pt-5 font-bold text-xl lg:hidden w-fit mx-auto pb-10">UX Design</h4>

          <div className="px-2 ux-design border-l-2 lg:border-l-1 product-item h-full lg:w-[15%] flex flex-wrap items-center justify-center lg:block border-black">
            <h4 className="pt-5 font-bold hidden lg:block pb-10">UX Design</h4>

            {uxDesign.map((value: string) => {
              return (
                <>
                  <div className="px-4 pt-2 pb-2.5 ux-tags lg:w-full w-auto font-bold text-sm text-white bg-[#141414] mb-1 rounded-4xl">
                    {value}
                  </div>
                </>
              );
            })}
          </div>
            <h4 className="pt-5 font-bold text-xl lg:hidden w-fit mx-auto pb-10">UI Design</h4>

          <div className="px-2 ui-design border-l-2 lg:border-l-1 product-item h-full lg:w-[16%] flex flex-wrap items-center justify-center lg:block border-black">
            <h4 className="pt-5 font-bold hidden lg:block pb-10">UI Design</h4>

            {uiDesign.map((value: string) => {
              return (
                <>
                  <div className="px-4 pt-2 pb-2.5 ui-tags lg:w-[90%] w-auto font-bold text-sm text-white bg-[#141414] mb-1 rounded-4xl">
                    {value}
                  </div>
                </>
              );
            })}
          </div>
          <div className="px-2 delivery border-l-1 hidden lg:block product-item h-full w-[12%] border-black">
            <h4 className="pt-5 font-bold pb-10">Delivery</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
