import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

gsap.registerPlugin(useGSAP);

const Transition = () => {

  useGSAP(()=>{
    let tl = gsap.timeline();
    tl.to(".welcome", {
      duration: 1.5,
      opacity: 1,
      ease: "power1.inOut",
    })
    tl.to(".welcome", {
      duration: 0.5,
      opacity: 0,
      ease: "power1.inOut",
  })
  tl.to(".introBlock", {
    translateY : "-100%",
    ease: "ease",
    duration :0.7,
    stagger:{
      amount: 0.5,
      from: 'center',
    }
  })
  tl.to(".introDiv", {
    display: "none",
    ease: "power4.inOut",
    duration :0.1,
  })
  
})
      let divArr: number[] = [1, 2, 3, 4, 5];
  return (
    <>
        <div className="introDiv fixed w-screen h-screen flex ">
        {divArr.map((item: number): React.JSX.Element => {
          return (
            <>
              <div
                key={item}
                className="introBlock h-full w-[20%] bg-black"
              ></div>
            </>
          );
        })}
        <h1 className="absolute welcome z-6 lg:text-9xl text-5xl md:7xl text-white font-bold left-1/2 -translate-x-1/2 text-center top-[50%] translate-y-[-50%]">
          {" "}
          Welcome{" "}
        </h1>
      </div>
    </>
  )
}

export default Transition