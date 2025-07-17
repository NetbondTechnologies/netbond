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
      Head: "Content Creation",
      Body: "Creating engaging and impactful content that resonates with your audience and drives conversions.",
      link: "/socialMedia",
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
      Head: "Social Media Marketing",
      Body: "Strategizing and managing social media campaigns to boost engagement and build strong connections with your audience.",
      link: "/socialMedia",
    },
    {
      Head: "Search Engine Optimization (SEO)",
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
      <div className="pt-[150px] pb-[100px] relative about-bg">
        <h1 className="about-title text-center w-[50%] pl-30 pb-7 hero-text text-7xl">
          About <span className="text-(--pumpkin)">Us</span>
        </h1>
        <p className="text-xl text-center w-[50%] pl-30 hero-text">
          Welcome to <span className="text-(--pumpkin) font-bold">Netbond</span>{" "}
          Technologies, your partner of choice in the ever-evolving digital
          transformation
        </p>
      </div>
      <div className="about-sc-1 my-20 ">
        <div className="about-sc-1-text font-[Figtree] text-2xl flex w-[92%] pr-[4%] bg-white mx-auto gap-10 justify-start items-center">
          <div className="w-[8%] h-[400px] bg-(--pumpkin)"></div>
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
        <h2 className="text-7xl pb-20 text-center">Our Specialization</h2>
        <div className="px-30 py-10 flex flex-wrap justify-center gap-y-20 ">
          {feature.map((value: Feature) => {
            return (
              <div className="w-[48%] px-10">
                <NavLink to={value.link}>
                  <h3 className="inline-block text-4xl pb-5 spl-head">
                    {" "}
                    {value.Head}{" "}
                  </h3>
                </NavLink>
                <p className="text-xl">{value.Body}</p>
              </div>
            );
          })}
        </div>
        <div className="feature-last py-20 px-[5%]">
          <h2 className="text-5xl pb-10 text-center">Digital Marketing</h2>
          <p className="text-2xl">
            <span className="text-(--pumpkin) text-3xl font-bold">
              Offering
            </span>{" "}
            holistic digital marketing solutions to help your business achieve
            its growth objectives.Our team of dedicated professionals is
            passionate about leveraging the latest technologies and strategies
            to create solutions that drive success. We understand your
            business’s unique challenges and opportunities, and we ensure our
            services are aligned perfectly with your goals.With a strong
            foundation built on trust and innovation, Net Bond Technologies has
            become a name synonymous with quality and reliability in the digital
            domain. Our holistic approach and commitment to staying ahead of
            industry trends allow us to deliver results that exceed
            expectations.Partner with Net Bond Technologies, and let us help you
            build a strong digital bond with your audience. We will work
            together to craft solutions that not only meet the requirements of
            today but also enable sustained growth in this continuously evolving
            digital world.
          </p>
        </div>
      </div>
      <hr className="w-[95%] mx-auto border-1 p-0" />
      <div className="about-sc-3 my-20 w-[90%]  mx-auto">
        <h2 className="text-6xl pb-5 text-center"> Why Choose Us</h2>
        <div className="logo-area flex gap-5 pb-20 justify-center items-center">
          <div className="w-[25%] hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <img src="./asset 97.png" className="w-full" alt="" />
          </div>
          <p className="text-xl w-[60%]">
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
                <div className="lg:w-[48%] md:w-[39%] px-[3%] py-[2%] bg-white transition-all duration-300 ease-in-out cursor-default rounded-3xl ">
                  <h2 className="text-3xl md:text-2xl pb-5">{value.head}</h2>
                  <p className="text-xl md:text-lg">{value.body}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="about-sc-4 py-15">
        <h2 className="text-5xl text-center py-10">
          Clients speak out : What they say about our services ?
        </h2>
        <div className="testimonials">
          <h4 className="text-xl mb-10 text-center">Testimonials</h4>
          {testimonials.map((value: Testimonial) => {
            return (
              <section className="relative isolate overflow-hidden bg-white px-6 rounded-4xl w-[90%] mb-10 mx-auto py-10 sm:py-32 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-[#f76c1c62] ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <figure className="mt-10">
                    <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
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
                        <div className="font-semibold text-(--pumpkin)">
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
                        <div className="text-gray-600">{value.designation}</div>
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
