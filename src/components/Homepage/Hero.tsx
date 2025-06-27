import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
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
        className="w-full h-screen z-[100] flex flex-col justify-start items-center gap-10 hero-top pt-45"
        id="hero"
      >
        <h3 className="text-2xl text-center cursor-default pb-3 mx-auto">
          AMPLIFYING{" "}
          <div className="emphasis text-3xl text-bold text-[#f76b1c60] inline-block duration-200">
            DIGITAL
          </div>{" "}
          PRESENCE
        </h3>
        <h1 className="text-7xl text-center mx-auto w-[63%]">
          Best IT Solutions Company in{" "}
          <span className="text-8xl location text-[#f76b1c]">Chandigarh</span>{" "}
        </h1>
        <p className="text-lg/6 text-center mx-auto w-[70%]">
          Transforming brands, crafting success your trusted partner NETBOND
          (BEST IT SOLUTION COMPANY IN CHANDIGARH-INDIA)
          <div className="text-xl font-bold">
            “We don’t just market, we create legacies."
          </div>
        </p>
        <div className="flex gap-15 items-center justify-center">
          <button
            type="button"
            className="btn border-white/30 px-6 py-2 text-lg text-center border-1 rounded-md hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white duration-200 cursor-pointer"
          >
            Get Started
          </button>
          <button
            type="button"
            className="secondary-btn btn border-[#f76b1c] px-6 py-2 text-lg text-center border-1 rounded-md hover:shadow-xl shadow-white hover:ring-2 hover:ring-white hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-[#f76b1c] duration-200 cursor-pointer"
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
