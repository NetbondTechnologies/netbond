import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

const Info = () => {
  let paragraphRef = useRef<HTMLDivElement>(null);
  let sectionRef = useRef<HTMLDivElement>(null);
  let letterRef = useRef<HTMLSpanElement[]>([]);
  let containerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
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
          end: "+=300%",
          scrub: true,
          pin: true,
        },
      });

      return () => split.revert();
    },
    { scope: sectionRef }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        letterRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "circ.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 98%",
            end: "top 10%",
            scrub: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      className=" font-bold w-[90%] info-section rounded-xl mx-auto bg-white border-3 py-15"
      ref={sectionRef}
    >
      <h2 className="text-7xl headingInfo text-center pb-10" ref={containerRef}>
        {`Our Task , Your Ask`.split("").map((letter, i) => {
          return (
            <span
              key={i}
              style={{
                display: "inline-block",
                marginRight:
                  i === 2 || i === 7 || i === 8 || i === 14 ? "10px" : "0",
              }}
              ref={(er) => {
                if (er) {
                  letterRef.current[i] = er;
                }
              }}
            >
              {letter}
            </span>
          );
        })}
      </h2>
      <div
        className={`w-[89%] mx-auto paragraphDiv para flex flex-col justify-center text-center gap-2 text-2xl`}
        ref={paragraphRef}
      >
       <div> At NETBOND, we bring your business vision to life through innovative and</div>
       <div> effective IT solutions, website development, and software services.</div>
       <div> Based in the vibrant city of Zirakpur, Chandigarh, we proudly serve</div>
       <div> clients not just in India, but across the globe.</div>
        <br />
        <br />
        <br />
        <br />
        <br />
       <div> Our mission is to help businesses like yours grow and succeed in the</div>
       <div> fast-changing digital world. From building your online presence to</div>
       <div> developing smart software, we’re here to take your business to the next</div>
       <div> level — anywhere in the world.</div>
        <br />
        <br />
        <br />
        <br />
        <br />
       <div> Transforming businesses, crafting success — your trusted partner</div>
       <div> NETBOND. We don’t just build — we create digital legacies.</div>
      </div>
    </div>
  );
};

export default Info;
