import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "../useMediaQuery";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const VidSection: React.FC = () => {
  const isLargeScreen = useMediaQuery("(min-width: 769px)");
  useGSAP(() => {
    if(!isLargeScreen) return;
    let headingArr = Array.from(
      document.querySelectorAll(".vid-title") as NodeListOf<HTMLElement>
    );
    if (headingArr.length > 1) {

      headingArr.forEach((e: Element, i: number) => {
        gsap.to(e, {
          y: i * 80,
          ease: "linear",
          stagger: 0.2,
          scrollTrigger: {
            trigger: e,
            start: "top 90%",
            end: "top 40%",
            scrub: 1,
          },
        });
      });
    }
    return ()=>{
       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  },[]);

  return (
    <div className="videoSection px-[2%] my-10 mx-auto">
      <div className="vidSection-title xl:text-6xl lg:text-4xl text-4xl/10 md:text-5xl/15 md:py-10 text-center">
        <h1 className="vid-title w-fit mx-auto lg:translate-x-0 md:-translate-x-40 -translate-x-17 relative inline-block md:mr-[20px]">
          Problem <span> Solvers</span>{" "}
          <div className="absolute right-[10px] -rotate-45 -bottom-[70px] lg:block hidden">
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        </h1>
        <h1 className="vid-title w-fit mx-auto relative inline-block md:mr-[20px]">
          {" "}
          <span>Creative </span> Thinkers{" "}
          <div className="absolute right-[10px] -rotate-45 -bottom-[70px] lg:block hidden">
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        </h1>
        <h1 className="vid-title w-fit mx-auto relative lg:translate-x-0 md:translate-x-40 translate-x-17 inline-block md:mr-[20px]">
          Change <span> Makers</span>
        </h1>
      </div>

      <div className="end xl:w-[90%] md:w-[95%] mx-auto h-[90%] lg:mt-[200px] mt-[100px] bg-black rounded-4xl overflow-hidden">
        <video
          src="./Services-2.mp4"
          className="w-[100%] h-[90%]"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className="xl:w-[88%] w-[92%] text-center xl:mb-0 mb-10 py-[50px] mx-auto">
        <p className="md:text-2xl text-below-vid text-(--davys-gray)">
          As a strategic branding design agency , we’re here to solve problems,
          share our expertise and challenge the convention. come join us to
          discover a fresh prespective.
        </p>
      </div>

      <div className="xl:w-[90%] md:w-[95%] pb-[50px] mx-auto">
        <h1 className="xl:text-5xl md:text-4xl text-3xl pb-10 text-(--jet)">
          Why choose Netbond Marketers As Your Creative Agency?
        </h1>
        <p className="xl:text-xl w-[95%] mx-auto text-lg pb-15 text-(--davys-gray)">
          Get the best. Scale with quality , Achieve more with Netbond Marketers
        </p>
        <p className="xl:text-2xl w-[95%] mx-auto md:text-xl text-lg text-(--davys-gray)">
          Netbond Technologies brings 8+ years of expertise in delivering
          impactful marketing solutions. Our team specializes in branding,
          social media, SEO, and data-driven campaigns to help your business
          thrive.We focus on personalized strategies that boost visibility,
          engagement, and conversions, ensuring measurable results for your
          brand. With creativity and dedication at our core, we transform ideas
          into growth opportunities. Choose netbond Technologies to elevate your
          brand, stand out in the digital world, and achieve lasting success.
          Let’s build the future of your business together!
        </p>
      </div>
    </div>
  );
};

export default VidSection;
