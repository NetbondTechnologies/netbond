import { faArrowRight, faCarSide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);
interface Card {
  title: string;
  image: string;
}

const Display = () => {
  const cardsArr: Card[] = [
    { title: "Understand Your Goals", image: "./asset 11.png" },
    { title: "Customized Strategy", image: "./asset 12.png" },
    { title: "Implement Seamless Solution", image: "./asset 13.png" },
    { title: "Launch Support", image: "./asset 14.png" },
  ];
  

  useGSAP(() => {
    let imgDiv = Array.from(
      document.querySelectorAll(".img-card-div") as NodeListOf<HTMLElement>
    );
    let num: number = 300; 
    imgDiv.forEach((e: Element, i:number) => {
      if(i === 3){
        gsap.fromTo(
        e,
        {
          scale: 1,
        },
        {scale:0.8,
          duration: 0.4,
          ease: "linear",
          scrollTrigger: {
            trigger: e,
            start: "top 5%",
            endTrigger: ".img-cards",
            end: "+=10%",
            pin:true,
            pinSpacing: false,
            scrub: 1,
          },
        }
      );
      }else{
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
            end: "+=" + num +"%",
            pin:true,
            pinSpacing: false,
            scrub: 1,
          },
        }
      );
      }
     num -= 100
    });

  });

  useEffect(() => {
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
        <div className="display-container w-full pt-40 pb-15 items-center flex">
          <div className="w-[60%] h-[605px] relative -left-40">
            <img
              src="./asset 29.png"
              className="absolute z-[2] dispImage"
              alt=""
            />
            <div className="w-[122%] h-[2px] absolute bg-black left-0 top-0 origin-top-left rotate-35 opacity-40"></div>
            <div className="w-[122%] h-[2px] absolute bg-black left-0 origin-top-left -rotate-35 bottom-0 opacity-40"></div>
          </div>
          <div className="z-[5] display-text-all">
            <h3 className="text-9xl/40 cursor-default display-text hover:scale-105 hover:rotate-0 -translate-x-60 rotate-2">
              Conversion
            </h3>
            <h3 className="text-9xl/40 cursor-default display-text hover:scale-105 hover:rotate-0 translate-x-20 rotate-2">
              Through
            </h3>
            <h3 className="text-9xl/40 cursor-default display-text hover:scale-105 hover:rotate-0 -translate-x-60 -rotate-2">
              Immersion
            </h3>
          </div>
        </div>
        <button
          type="button"
          className="secondary-btn overflow-hidden btn btn-2 border-2 border-[#f76b1c] px-6 py-2 text-lg text-center flex items-center border-1 rounded-md hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-white hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-[#f76b1c] duration-200 cursor-pointer"
        >
          Discover What We Do{" "}
          <span className="arrow-two ml-2 inline-block -translate-y-[1px] ">
            <FontAwesomeIcon icon={faCarSide} />
          </span>
        </button>
      </div>
      <div className="card-animation bg-[#141414] mt-30 z-[50] py-25">
        <h1 className="text-9xl w-fit card-title pb-20 mx-auto">
          How does it work <span className="question-mark ml-2">?</span>
        </h1>
        <div className="img-cards w-[80%] text-center relative mx-auto">
          {cardsArr?.map((e: Card, i: number) => {
            return (
              <div
                className="flex justify-around bg-() img-card-div mb-10 z-1"
                key={i}
                
              >
                {" "}
                <h1 className="img-card-title text-8xl pt-60 w-[60%] px-10" id={`img-card-title${i + 1}`}>
                  {e.title}
                </h1>{" "}
                <img className="inline-block  w-[30%] " src={e.image} alt="" />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Display;
