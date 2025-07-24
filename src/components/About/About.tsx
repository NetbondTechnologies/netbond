import React from "react";
import { NavLink } from "react-router";
import Accordion from "../Accordion";
import type { FAQ_Props } from "../HomePage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText);

interface Feature {
  Head: string;
  Body: string;
  link: string;
}
interface Strength {
  head: string;
  body: string;
}
interface Testimonial {
  review: string;
  image: string;
  name: string;
  designation: string;
}

const About: React.FC = () => {

  const FAQS: FAQ_Props[] = [
    {
      question: "How can Netbond Technology help my startup grow in a competitive market?",
      answer: "We offer end-to-end digital marketing services tailored to your startup’s needs. From building a strong online presence with a professional website to executing targeted marketing campaigns, we ensure your brand stands out and reaches the right audience. Our data-driven approach helps maximize your ROI and achieve sustainable growth."
    }
  ]

  const testimonials: Testimonial[] = [
    {
      review:
        "NetBond Technologies has completely redefined our brand identity. They designed a logo that perfectly captures the unique vibe of our café. Their digital marketing solutions have also significantly strengthened our online presence. Our website is now not only beautiful but also user-friendly. They met the branding and marketing needs we had in Zirakpur. Highly recommend!",
      image: "./placeholder.png",
      name: "Raghav Sharma",
      designation: "Founder, Raghav's Café",
    },
    {
      review:
        "NetBond Technologies gave our branding and digital marketing strategy a fresh direction. They created an exceptional logo for us that helped establish a strong identity for our company. The website design was also completed very efficiently, and now it provides a seamless and engaging experience for our customers. If you're looking to grow your business's online presence, NetBond is the best choice.",
      image: "./placeholder.png",
      name: "Priya Kapoor",
      designation: "Marketing Head, Zirakpur Mart",
    },
    {
      review:
        "Our business needed strong branding and a professional website, and NetBond Technologies helped us achieve that. They designed a creative and meaningful logo that perfectly represents our brand. The website design was also completed efficiently, making it easy to navigate and visually appealing for our clients. Their digital marketing services have also given us great exposure in the local market. NetBond is a reliable partner.",
      image: "./placeholder.png",
      name: "Amit Verma",
      designation: "CEO, Verma Enterprises",
    },
  ];

  const feature: Feature[] = [
    {
      Head: " Website Development",
      Body: "Creating responsive, user-friendly, and high-performing websites to enhance your online presence.",
      link: "/webDev",
    },
    {
      Head: "B2B Services",
      Body: "We help ambitious B2B companies break through growth barriers with cutting-edge technology and execution.",
      link: "/business-services",
    },
    {
      Head: "App Development",
      Body: "Designing seamless and feature-rich mobile and web applications for an exceptional user experience.",
      link: "/appDev",
    },
    {
      Head: "Graphics and Video Editing",
      Body: "Creating visually stunning graphics and videos that amplify your brand identity.",
      link: "/graphicDesigning",
    },
    {
      Head: "Google My Business",
      Body: "Our expert GMB optimization services help you attract more customers, build trust, and grow your revenue.",
      link: "/gmb",
    },
    {
      Head: "Search Engine Optimization",
      Body: "Optimizing your online presence to rank higher in search engines and attract organic traffic.",
      link: "/seo",
    },
  ];

  const strengths: Strength[] = [
    {
      head: "LOCAL EXPERTISE GLOBAL IMPACT",
      body: "We know Zirakpur’s market and can design strategies that resonate with local audiences while achieving global results.",
    },
    {
      head: "RELATIONSHIPS",
      body: "Building meaningful connections, we align the right people and ideas to challenge the status and foster growth.",
    },
    {
      head: "RESPONSIBILTY",
      body: "Committed to excellence, we take ownership of every challenge, driving transformation with integrity and purpose.",
    },
    {
      head: "COST EFFECTIVE",
      body: "Delivering high-quality solutions tailored to meet your needs without compromising on value or efficiency.",
    },
  ];

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
  },[])

  return (
    <>
      <div className="lg:pt-[150px] pt-[110px] pb-[30px] lg:pb-[100px] relative about-bg">
        <h1 className="about-title lg:text-center pl-10 lg:w-[50%] lg:pl-30 pb-7 hero-text xl:text-7xl lg:text-6xl md:text-5xl text-4xl">
          About <span className="text-(--pumpkin)">Us</span>
        </h1>
        <p className="lg:text-xl md:text-lg lg:text-center pl-10 md:w-[75%] lg:w-[50%] lg:pl-30 hero-text">
          Welcome to <span className="text-(--pumpkin) font-bold">Netbond</span>{" "}
          Technologies, your partner of choice in the ever-evolving digital
          transformation
        </p>
      </div>
      <div className="about-sc-1 my-20 ">
        <div className="about-sc-1-text font-[Figtree] lg:border-none border-l-10 border-(--pumpkin) lg:text-2xl md:text-lg flex lg:flex-row flex-col p-[5%] w-[92%] lg:pr-[4%] bg-white mx-auto lg:gap-10 gap-4 justify-start items-center">
          <div className="w-[8%] h-[400px] lg:block hidden bg-(--pumpkin)"></div>
          <div>
            {" "}
            Since its inception 8 years ago, we have been the frontrunner in
            innovative, bespoke digital solutions for all sizes of businesses.
            We have a mission to help brands succeed in the digital landscape by
            offering end-to-end services meant to fulfill their needs and
            objectives.
          </div>
          <br />
          <br />
          <div>
            {" "}
            At <span className="text-(--pumpkin) font-bold">Netbond</span>{" "}
            Technologies, we have always believed in creating digital solutions
            that bridge the gap between technology and business Excellence and
            customer-centricity are our guiding principles, which has helped us
            become a one-stop solution provider for any and every digital need
            of a client. We have served thousands of clients over the years,
            helping them boost their online presence, increase engagement and
            achieve measurable success in this competitive market.
          </div>
        </div>
      </div>
      <div className="about-sc-2 my-20">
        <h2 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl pb-20 text-center">Our Specialization</h2>
        <div className="lg:px-30 w-[90%] mx-auto py-10 flex flex-wrap flex-col lg:flex-row justify-center gap-5 lg:gap-y-20 ">
          {feature.map((value: Feature, index: number) => {
            return (
              <div className="lg:w-[48%] bg-white w-full rounded-2xl p-5">
                <NavLink to={value.link}>
                  <h3 className="inline-block lg:text-4xl text-2xl pb-5 spl-head">
                    {" "}
                    {(index+1)+". " + value.Head}{" "}
                  </h3>
                </NavLink>
                <p className="lg:text-xl">{value.Body}</p>
              </div>
            );
          })}
        </div>
       
      </div>
      <hr className="w-[95%] mx-auto border-1 p-0" />
      <div className="about-sc-3 my-20 w-[90%]  mx-auto">
        <h2 className="lg:text-6xl md:text-4xl text-2xl pb-5 text-center"> Why Choose Us ?</h2>
        <div className="logo-area flex lg:flex-row flex-col gap-5 pb-20 justify-center items-center">
          <div className="lg:w-[25%] w-[70%] hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <img src="./asset 97.png" className="w-full" alt="" />
          </div>
          <p className="md:text-xl lg:w-[60%]">
            At <span className="text-(--pumpkin) font-bold">Netbond</span>, we
            don’t just provide services – we build lasting digital solutions
            that connect your business to your audience. Our mission is to help
            you reach your marketing goals with precision, creativity, and
            measurable results. Here’s why businesses in Zirakpur trust us:
          </p>
        </div>
        <div className="strengths flex w-[90%] justify-center flex-wrap mx-auto gap-10">
          {strengths.map((value: Strength) => {
            return (
              <>
                <div className="lg:w-[48%] w-full p-[5%] bg-white transition-all duration-300 ease-in-out cursor-default rounded-2xl ">
                  <h2 className="lg:text-3xl md:text-2xl text-xl pb-5">{value.head}</h2>
                  <p className="lg:text-xl md:text-lg ">{value.body}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="about-sc-4 py-15">
        <h2 className="lg:text-5xl md:px-10 md:text-3xl text-2xl text-center py-10">
          Clients speak out : What they say about our services ?
        </h2>
        <div className="testimonials">
          <h4 className="text-xl mb-10 text-center">Testimonials</h4>
          {testimonials.map((value: Testimonial) => {
            return (
              <section className="relative isolate overflow-hidden bg-white px-6 rounded-4xl w-[90%] mb-10 mx-auto py-10 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-[#f76c1c62] ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <figure className="mt-10">
                    <blockquote className="text-center lg:text-xl/8 font-semibold text-gray-900">
                      <p>
                        “{value.review}”
                      </p>
                    </blockquote>
                    <figcaption className="mt-10">
                      <img
                        alt=""
                        src={value.image}
                        className="mx-auto size-10 rounded-full"
                      />
                      <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                        <div className="font-semibold md:text-base text-sm text-(--pumpkin)">
                          {value.name}
                        </div>
                        <svg
                          width={3}
                          height={3}
                          viewBox="0 0 2 2"
                          aria-hidden="true"
                          className="fill-gray-900"
                        >
                          <circle r={1} cx={1} cy={1} />
                        </svg>
                        <div className=  "md:text-base text-sm text-gray-600">{value.designation}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <Accordion faqs={FAQS}/>
    </>
  );
};

export default About;
