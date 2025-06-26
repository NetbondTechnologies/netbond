import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const VidSection = () => {
  
  
  useGSAP(()=>{
    let headingArr = Array.from(document.querySelectorAll(".vid-title") as NodeListOf<HTMLElement>)
    if (headingArr.length > 1){
      console.log(headingArr);
      
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
  })

  return (
    <div className='videoSection px-[2%] my-10 mx-auto'>
        <div className='vidSection-title text-6xl py-10 text-center'>
            <h1 className='vid-title w-fit mx-auto relative inline-block mr-[20px]'>Problem <span> Solvers</span> <div className="absolute right-[10px] -rotate-45 -bottom-[70px]"><FontAwesomeIcon icon={faAngleLeft} /></div></h1>
            <h1 className='vid-title w-fit mx-auto relative inline-block mr-[20px]'> <span>Creative </span> Thinkers <div className="absolute right-[10px] -rotate-45 -bottom-[70px]"><FontAwesomeIcon icon={faAngleLeft} /></div></h1>
            <h1 className='vid-title w-fit mx-auto relative inline-block mr-[20px]'>Change <span> Makers</span></h1>
        </div>
        
      <div className="end w-[90%] mx-auto h-[90%] mt-[200px] bg-black rounded-4xl overflow-hidden">
        <video src="https://www.netbondtechnologies.com/wp-content/uploads/2024/12/Services-2.mp4" className='w-[100%] h-[]90%' autoPlay loop muted></video>
      </div>

      <div className='w-[88%] text-center py-[50px] mx-auto'>
        <p className="text-2xl text-below-vid">As a strategic branding design agency , we’re here to solve problems, share our expertise and challenge the convention. come and join us to discover a fresh prespective.</p>
      </div>

      <div className='w-[90%] pb-[50px] mx-auto'>
        <h1 className='text-5xl pb-10'>Why choose Netbond Marketers As Your Creative Agency?</h1>
        <p className='text-xl pb-15'>Get the best. Scale with quality , Achieve more with Netbond Marketers</p>
        <p className="text-2xl">Netbond Technologies brings 8+ years of expertise in delivering impactful marketing solutions. Our team specializes in branding, social media, SEO, and data-driven campaigns to help your business thrive.We focus on personalized strategies that boost visibility, engagement, and conversions, ensuring measurable results for your brand. With creativity and dedication at our core, we transform ideas into growth opportunities. Choose netbond Technologies to elevate your brand, stand out in the digital world, and achieve lasting success. Let’s build the future of your business together!</p>
      </div>
    </div>
  )
}

export default VidSection