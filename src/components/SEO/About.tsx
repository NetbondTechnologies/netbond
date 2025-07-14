import React from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  

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
  },[])

  return (
   
  );
};

export default About;