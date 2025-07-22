import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useMediaQuery } from "../useMediaQuery";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

const Info = () => {
  let paragraphRef = useRef<HTMLDivElement>(null);
  let sectionRef = useRef<HTMLDivElement>(null);
  let containerRef = useRef<HTMLHeadingElement>(null);
  const isLargeScreen = useMediaQuery("(min-width: 769px)");

  useGSAP(() => {
    if (!isLargeScreen) return;
    const split = new SplitText(paragraphRef.current, {
      type: "lines",
      linesClass: "line",
      mask: "lines",
    });
    gsap.set(paragraphRef, { opacity: 1 });
    gsap.from(split.lines, {
      duration: 0.6,
      y: 150,
      stagger: 0.1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 10%",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });
    gsap.from(".headingInfo", {
      duration: 0.8,
      y: -40,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      split.revert();
    };
  }, []);

  return (
    <div
      className=" font-bold w-[90%] info-section rounded-xl mx-auto bg-white border-3 -mt-40 md:mt-30 lg:mt-35 xl:mt-0 md:py-15 py-10"
      ref={sectionRef}
    >
      <h2
        className="xl:text-7xl lg:text-6xl md:text-5xl text-3xl headingInfo text-center pb-10"
        ref={containerRef}
      >
        Our Task , Your Ask
      </h2>
      <div
        className={`md:w-[89%] w-[90%] mx-auto paragraphDiv para flex flex-col justify-center text-center gap-2 text-base md:text-lg lg:text-xl xl:text-2xl`}
        ref={paragraphRef}
      >
        <div className="md:hidden text-justify">
          At NETBOND, we bring your business vision to life through innovative
          effective IT solutions, website development, and software services.
          <br />
          <br />
          Based in the vibrant city of Zirakpur, Chandigarh, we proudly serve
          clients not just in India, but across the globe. Our mission is to
          help businesses like yours grow and succeed in the fast-changing
          digital world. 
          <br /><br />From building your online presence to developing smart
          software, we’re here to take your business to the next level —
          anywhere in the world. Transforming businesses, crafting success —
          your trusted partner NETBOND. We don’t just build — we create digital
          legacies.
        </div>
        <div className="hidden md:block">
          {" "}
          At NETBOND, we bring your business vision to life through innovative
        </div>
        <div className="hidden md:block">
          {" "}
          effective IT solutions, website development, and software services.
        </div>
        <div className="hidden md:block">
          {" "}
          Based in the vibrant city of Zirakpur, Chandigarh, we proudly serve
        </div>
        <div className="hidden md:block">
          {" "}
          clients not just in India, but across the globe.
        </div>
        <br />
        <br className="lg:block hidden" />
        <br className="lg:block hidden" />
        <br className="lg:block hidden" />
        <br className="lg:block hidden" />
        <div className="hidden md:block">
          {" "}
          Our mission is to help businesses like yours grow and succeed in the
        </div>
        <div className="hidden md:block">
          {" "}
          fast-changing digital world. From building your online presence to
        </div>
        <div className="hidden md:block">
          {" "}
          developing smart software, we’re here to take your business to the
          next
        </div>
        <div className="hidden md:block"> level — anywhere in the world.</div>
        <br />
        <br className="lg:block hidden" />
        <br className="lg:block hidden" />
        <br className="lg:block hidden" />
        <br className="lg:block hidden" />
        <div className="hidden md:block">
          {" "}
          Transforming businesses, crafting success — your trusted partner
        </div>
        <div className="hidden md:block">
          {" "}
          NETBOND. We don’t just build — we create digital legacies.
        </div>
      </div>
    </div>
  );
};

export default Info;
