import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { handleScrollTop } from "../../App";
import { useNavigate } from "react-router";
import { useMediaQuery } from "../useMediaQuery";

gsap.registerPlugin(ScrollTrigger, useGSAP);
interface Card {
  title: string;
  image: string;
}

const Display = () => {
  
    const isLargeScreen = useMediaQuery("(min-width: 769px)");
  const navigate = useNavigate();
  const cardsArr: Card[] = [
    { title: "Understand Your Goals", image: "./asset 11.png" },
    { title: "Customized Strategy", image: "./asset 12.png" },
    { title: "Implement Seamless Solution", image: "./asset 13.png" },
    { title: "Launch Support", image: "./asset 14.png" },
  ];

  useGSAP(() => {
    if(!isLargeScreen) return;
    let imgDiv = Array.from(
      document.querySelectorAll(".img-card-div") as NodeListOf<HTMLElement>
    );
    let num: number = 270;
    imgDiv.forEach((e: Element, i: number) => {
      if (i === 3) {
        gsap.fromTo(
          e,
          {
            scale: 1,
          },
          {
            scale: 0.8,
            duration: 0.4,
            ease: "linear",
            scrollTrigger: {
              trigger: e,
              start: "top 5%",
              endTrigger: ".img-cards",
              end: "+=10%",
              pin: true,
              pinSpacing: false,
              scrub: 1,
            },
          }
        );
      } else {
        gsap.fromTo(
          e,
          {
            scale: 1,
          },
          {
            scale: 0.8,
            duration: 0.4,
            ease: "linear",
            scrollTrigger: {
              trigger: e,
              start: "top 5%",
              endTrigger: ".img-cards",
              end: "+=" + num + "%",
              pin: true,
              pinSpacing: false,
              scrub: 1,
            },
          }
        );
      }
      num -= 90;
    });
    return ()=>{
       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }, []);

  useEffect(() => {
    if(!isLargeScreen) return;
    let h3Elements = Array.from(
      document.querySelectorAll(
        ".display-text"
      ) as NodeListOf<HTMLHeadingElement>
    );
    h3Elements?.map((e: HTMLHeadingElement) => {
      e.addEventListener("mouseenter", () => {
        h3Elements.map((otherelem: HTMLHeadingElement) => {
          if (otherelem !== e) {
            otherelem.style.color = "transparent";
            otherelem.style.webkitTextStroke = "2px #000000";
          }
        });
      });
      e.addEventListener("mouseleave", () => {
        h3Elements.map((otherelem: HTMLHeadingElement) => {
          if (otherelem !== e) {
            if (e.textContent?.toUpperCase() === "IMMERSION") {
              otherelem.style.color = "#f76b1c";
              otherelem.style.webkitTextStroke = "none";
            }
            otherelem.style.color = "unset";
            otherelem.style.webkitTextStroke = "none";
          }
        });
      });
    });
    return () => {
      h3Elements?.map((e: HTMLHeadingElement) => {
        e.removeEventListener("mouseenter", () => {
          h3Elements.map((otherelem: HTMLHeadingElement) => {
            if (otherelem !== e) {
              otherelem.style.color = "transparent";
              otherelem.style.webkitTextStroke = "2px #000000";
            }
          });
        });
        e.removeEventListener("mouseleave", () => {
          h3Elements.map((otherelem: HTMLHeadingElement) => {
            if (otherelem !== e) {
              otherelem.style.color = "unset";
              otherelem.style.webkitTextStroke = "none";
            }
          });
        });
      });
    };
  }, []);
  return (
    <>
      <div className="flex flex-col items-center display-section justify-center mb-20">
        <div className="display-container w-full relative pt-40 xl:pb-15 items-center xl:flex">
          <div className="xl:w-[60%] md:w-[80%] w-[90%] xl:mx-0 mx-auto xl:h-[605px] h-[350px] md:h-[450px] relative xl:-left-40">
            <img
              src="./asset 29.png"
              className="absolute z-[2] dispImage"
              alt=""
            />
          </div>
          <div className="z-[5] text-center left-1/2 -translate-x-1/2 md:top-50 xl:left-0 xl:translate-x-0 absolute top-30 xl:static  display-text-all">
            <h3 className="lg:text-9xl/40 text-7xl/20 md:text-8xl cursor-default display-text hover:scale-105 hover:rotate-0 xl:-translate-x-60 xl:rotate-2">
              Conversion
            </h3>
            <h3 className="xl:text-9xl/40 lg:text-8xl text-6xl/20 cursor-default display-text xl:text-black text-white w-fit mx-auto xl:mx-0 hover:scale-105 hover:rotate-0 xl:translate-x-20 xl:rotate-2">
              Through
            </h3>
            <h3 className="xl:text-9xl/40 text-7xl/20 md:text-8xl font-bold cursor-default display-text hover:scale-105 hover:rotate-0 xl:-translate-x-60 xl:-rotate-2">
              Immersion
            </h3>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            navigate("/services");
            handleScrollTop();
          }}
          className="secondary-btn overflow-hidden btn btn-2 border-[#f76b1c] px-6 py-2 text-lg text-center flex items-center border-1 rounded-md hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-white hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-[#f76b1c] duration-200 cursor-pointer"
        >
          Discover What We Do{" "}
          <span className="arrow-two ml-2 inline-block -translate-y-[1px] ">
            <FontAwesomeIcon icon={faCarSide} />
          </span>
        </button>
      </div>
      <div className="card-animation bg-[#141414] mt-30 z-[50] py-25">
        <h1 className="xl:text-9xl md:text-7xl text-4xl w-fit card-title pb-20 mx-auto">
          How does it work <span className="question-mark md:text-8xl text-6xl ml-2">?</span>
        </h1>
        <div className="img-cards w-[80%] text-center relative mx-auto">
          {cardsArr?.map((e: Card, i: number) => {
            return (
              <div
                className="flex md:flex-row flex-col justify-between items-center gap-10 xl:items-start xl:justify-around img-card-div mb-20 md:mb-10 z-1"
                key={i}
              >
                {" "}
                <h1
                  className="img-card-title xl:text-8xl lg:text-6xl md:text-5xl text-center xl:text-start pb-5 text-4xl xl:pt-60 w-full md:w-[45%] xl:w-[60%] xl:px-10"
                  id={`img-card-title${i + 1}`}
                >
                  {e.title}
                </h1>{" "}
                <img className="inline-block w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%] " src={e.image} alt="" />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Display;
