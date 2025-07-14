import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactElement } from "react";
import { useNavigate } from "react-router";

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

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Service = () => {
  const navigate = useNavigate();

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
      heading: "Social Media",
      icon: <FontAwesomeIcon size="xl" icon={faArrowUp} />,
      link: "/socialMedia",
      description:
        "Engage, connect, and grow your audience with impactful social media strategies.",
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

    productTags.forEach((tag: any, i: number)=>{
      gsap.to(tag, {
        translateX: `${(210 / productTags.length) * i}`,
        scrollTrigger: {
          trigger: ".belowPoster",
          start: "top 95%",
          end: "bottom 10%",
          scrub: 1,
        },
      });
    }) 
    uiTags.forEach((tag: any, i: number)=>{
      gsap.to(tag, {
        translateX: `${(210 / uiTags.length) * i}`,
        scrollTrigger: {
          trigger: ".belowPoster",
          start: "top 95%",
          end: "bottom 10%",
          scrub: 1,
        },
      });
    }) 
    uxTags.forEach((tag: any, i: number)=>{
      gsap.to(tag, {
        translateX: `${(210 / uxTags.length) * i}`,
        scrollTrigger: {
          trigger: ".belowPoster",
          start: "top 95%",
          end: "bottom 10%",
          scrub: 1,
        },
      });
    }) 
  }, []);


  return (
    <>
      <div className="service">
        <div className="service-container pt-50 shadow-2xl rounded-b-xl shadow-[#f76b1c] pb-40">
          <h1 className="text-8xl w-[95%] service-header font-stretch-50% px-[5%]">
            {`We're a full - service digital studio`.toUpperCase()}
          </h1>
        </div>
        <h2 className="pb-10 text-7xl w-[90%] mx-auto my-20 pr-[40%]">
          Digital Product Design Services and Solutions We offer
        </h2>
        <span className="offer-text block text-3xl/10 mx-[5%] my-15 overflow-x-hidden py-15 px-10 border-l-25 bg-white border-(--pumpkin) font-bold ">
          <span className="h-[160px] overflow-hidden block">
            We lead your startup at every step of its growth, providing
            unparalleled personal service at every interaction. Whether it’s
            launching an MVP, revamping an existing product, securing funding
            with <span className="gradient-text">UI PROTOTYPES</span>,
            increasing customer engagement, we develop a suite of
            custom-tailored design services to fulfill your expectations.
          </span>
        </span>
        <div className="offers flex px-[5%] py-45 items-start">
          <h2 className="text-6xl offer-heading w-[50%]">
            <span className="text-[#f76b1c]">NetBond</span> offers you
          </h2>

          <ul className="w-[50%]">
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
                      <span className="text-4xl font-bold pb-4 block">
                        {value.heading}
                      </span>
                      <span className="text-xl block">
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
          <h5 className="text-lg w-[18%] mx-auto mb-10 text-center">
            Industries we serve with Our Digital UX Design Expertise
          </h5>
          <h2 className="text-4xl w-[80%] mx-auto mb-30 text-center">
            {" "}
            Our industry – specific Knowledge and digital product design
            expertise contribute to solving the right problems, creating the
            right products, and designing the products.{" "}
          </h2>

          <div className="company-data grid select-none grid-cols-3 gap-2 px-[5%]">
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

        <div className="poster-area w-full h-[800px] relative">
          <div className="posterBG w-full h-[100%] rounded-2xl absolute left-0 top-0 shadow-2xl"></div>
          <div className="poster w-full h-[800px] my-20 object-cover overflow-y-hidden px-[10%]">
            <div className="top-1/2 relative -translate-y-1/4 poster-text">
              <h2 className="text-7xl pb-15">Digital Product Design Process</h2>
              <h3 className="text-2xl pb-10">
                We do not take on projects that involve blind conformity or
                designing out of context. We won’t settle for a user interface
                design that is misaligned with your product and digital
                strategy. Neither will we launch web development ventures
                without user testing to validate our design solutions.
              </h3>
              <h3 className="text-2xl pb-10">
                Instead, we create scalable digital products that meet the ever
                – evolving demands of our customers, ensuring long – term
                sustainability.
              </h3>
            </div>
          </div>
        </div>

        <div className="belowPoster w-[90%] select-none mx-auto flex justify-end h-[340px] items-start border-t-1 mt-50 mb-30 border-black">
          <div className="px-2 product-strategy border-l-1 product-item h-full border-black w-[27.5%]">
            <h4 className="pt-5 pb-10">Product Strategy</h4>

            {productStrategy.map((value: string) => {
              return (
                <>
                  <div className="px-4 pt-2 pb-2.5 product-tags w-[60%] font-bold text-sm text-white bg-[#141414] mb-1 rounded-4xl">
                    {value}
                  </div>
                </>
              );
            })}
          </div>
          <div className="px-2 ux-design border-l-1 product-item h-full w-[15%] border-black">
            <h4 className="pt-5 font-bold pb-10">UX Design</h4>

            {uxDesign.map((value: string) => {
              return (
                <>
                  <div className="px-4 pt-2 pb-2.5 ux-tags w-full font-bold text-sm text-white bg-[#141414] mb-1 rounded-4xl">
                    {value}
                  </div>
                </>
              );
            })}
          </div>
          <div className="px-2 ui-design border-l-1 product-item h-full w-[16%] border-black">
            <h4 className="pt-5 font-bold pb-10">UI Design</h4>

            {uiDesign.map((value: string) => {
              return (
                <>
                  <div className="px-4 pt-2 pb-2.5 ui-tags w-[90%] font-bold text-sm text-white bg-[#141414] mb-1 rounded-4xl">
                    {value}
                  </div>
                </>
              );
            })}
          </div>
          <div className="px-2 delivery border-l-1 product-item h-full w-[12%] border-black">
            <h4 className="pt-5 font-bold pb-10">Delivery</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
