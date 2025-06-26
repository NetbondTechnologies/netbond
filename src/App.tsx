import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Homepage/Hero";
import Info from "./components/Homepage/Info";
import Navbar from "./components/Navbar";
import Services from "./components/Homepage/Services";
import Display from "./components/Homepage/Display";
import VidSection from "./components/Homepage/VidSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import FAQs from "./components/Homepage/FAQs";

export interface FAQ_Props{
  question: string;
  answer: string;
}

gsap.registerPlugin(useGSAP, ScrollSmoother);

function App() {

  const FAQ_Home: FAQ_Props[] = [
    {question: "What services do you offer as a creative digital marketing agency?", answer: "We provide a full suite of services, including  SEO, PPC, Web Design, Social Media Marketing, Content Creation and E-mail Marketing, all tailored to meet your specific goals and business needs."}
  ]  

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: false,
      normalizeScroll: false,
    });
  });

  let divArr: number[] = [1, 2, 3, 4, 5];
  useEffect(() => {
    let IntroDiv = document.getElementsByClassName(
      "introDiv"
    )[0] as HTMLElement;
    let welcome = document.getElementsByClassName("welcome")[0] as HTMLElement;
    let timeout = setTimeout(() => {
      if (IntroDiv) {
        IntroDiv.style.display = "none";
      }
    }, 2600);
    let timeout2 = setTimeout(() => {
      if (welcome) {
        welcome.style.display = "none";
      }
    }, 1500);
    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, []);
  return (
    <>
      <div className="introDiv absolute w-screen h-screen flex ">
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
        <h1 className="absolute welcome z-6 text-9xl text-white font-bold left-1/2 -translate-x-1/2 text-center top-[50%] translate-y-[-50%]">
          {" "}
          Welcome{" "}
        </h1>
      </div>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Info />
          <Services />
          <Display />
          <VidSection />
          <FAQs/>
        </div>
      </div>
    </>
  );
}

export default App;
