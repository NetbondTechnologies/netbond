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
      })

      return () => split.revert();
    },[]
  );



  return (
    <div
      className=" font-bold w-[90%] info-section rounded-xl mx-auto bg-white border-3 py-15"
      ref={sectionRef}
    >
      <h2 className="text-7xl headingInfo text-center pb-10" ref={containerRef}>
        Our Task , Your Ask
      </h2>
      <div
        className={`w-[89%] mx-auto paragraphDiv para flex flex-col justify-center text-center gap-2 text-2xl`}
        ref={paragraphRef}
      >
        <div>
          {" "}
          At NETBOND, we bring your business vision to life through innovative
          and
        </div>
        <div>
          {" "}
          effective IT solutions, website development, and software services.
        </div>
        <div>
          {" "}
          Based in the vibrant city of Zirakpur, Chandigarh, we proudly serve
        </div>
        <div> clients not just in India, but across the globe.</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          {" "}
          Our mission is to help businesses like yours grow and succeed in the
        </div>
        <div>
          {" "}
          fast-changing digital world. From building your online presence to
        </div>
        <div>
          {" "}
          developing smart software, we’re here to take your business to the
          next
        </div>
        <div> level — anywhere in the world.</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          {" "}
          Transforming businesses, crafting success — your trusted partner
        </div>
        <div> NETBOND. We don’t just build — we create digital legacies.</div>
      </div>
    </div>
  );
};

export default Info;
