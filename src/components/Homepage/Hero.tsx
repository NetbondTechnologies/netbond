import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { handleScrollTop } from "../../App";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let text = document.querySelector(".emphasis") as HTMLElement;
    let interval = setInterval(() => {
      text.classList.toggle("text-[#f76b1c]");
      text.classList.toggle("text-[#f76b1c60]");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        className="w-full h-screen z-[100] flex flex-col justify-start items-center gap-10 hero-top pt-35 lg:pt-45"
        id="hero"
      >
        <h3 className="md:text-2xl text-xl text-center cursor-default md:pb-3 mx-auto">
          AMPLIFYING{" "}
          <div className="emphasis md:text-3xl text-2xl py-2 md:px-0 px-4 md:py-0 text-bold text-[#f76b1c60] inline-block duration-200">
            DIGITAL
          </div>{" "}
          PRESENCE
        </h3>
        <h1 className="lg:text-7xl md:text-6xl text-4xl w-[90%]  text-center mx-auto  lg:w-[63%] md:w-[80%]">
          Best IT Solutions Company in{" "}
          <span className="md:text-8xl text-6xl location text-[#f76b1c]">Chandigarh</span>{" "}
        </h1>
        <p className="md:text-lg/6 text-md/4 text-center mx-auto md:w-[80%] lg:w-[70%] w-[90%]">
          Transforming brands, crafting success your trusted partner <span className="text-(--pumpkin) font-bold">NETBOND</span> 
          <span className="hidden md:block">(BEST IT SOLUTION COMPANY IN CHANDIGARH-INDIA)</span>
          <div className="md:text-xl font-bold pt-4 md:pt-5">
            “We don’t just market, we create legacies."
          </div>
        </p>
        <div className="flex md:gap-15 gap-5 items-center justify-center">
          <button
            type="button"
            onClick={()=>{
              navigate("/services");
              handleScrollTop();
            }}
            className="btn border-white/30 px-6 py-2 md:text-lg text-sm text-center border-1 rounded-md hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white duration-200 cursor-pointer"
          >
            Get Started
          </button>
          <button
            type="button"
            onClick={()=>{
              navigate("/business-services");
              handleScrollTop();
            }}
            className="secondary-btn btn border-[#f76b1c] px-6 py-2 md:text-lg text-sm text-center border-1 rounded-md hover:shadow-xl shadow-white hover:ring-2 hover:ring-white hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-[#f76b1c] duration-200 cursor-pointer"
          >
            Try Our B2B Services{" "}
            <span className="arrow inline-block translate-y-[1px]">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </div>
      </div>
      <div className="overlay -z-1 absolute top-0 left-0 w-full"></div>
    </>
  );
};

export default Hero;
