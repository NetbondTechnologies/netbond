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
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";

export interface FAQ_Props {
  question: string;
  answer: string;
}

gsap.registerPlugin(useGSAP, ScrollSmoother);

function App() {
  const FAQ_Home: FAQ_Props[] = [
    {
      question:
        "What services do you offer as a creative digital marketing agency?",
      answer:
        "We provide a full suite of services, including  SEO, PPC, Web Design, Social Media Marketing, Content Creation and E-mail Marketing, all tailored to meet your specific goals and business needs.",
    },
    {
      question: "How long does it take to design a website?",
      answer:
        "Designing a custom website involves several phases: strategy, planning, design, development, quality assurance, and launch. For an informational website, the process typically takes up to 3 months, allowing time for detailed design and client feedback. Larger, more complex sites with advanced features may require more than 3 months. This timeline includes thorough design of key pages and a user testing phase to ensure optimal performance.",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "Results vary depending on the strategy. SEO and organic campaigns may take a few months, while paid advertising can deliver results almost immediately.",
    },
    {
      question: "Will I receive regular updates on the campaign’s progress?",
      answer:
        "Absolutely! We are committed to honest communication and transparency. You’ll receive regular performance reports and insights to track progress and ensure we’re meeting your expectations.",
    },
    {
      question: "Is digital marketing suitable for small businesses ?",
      answer:
        "Yes, digital marketing is highly effective for small businesses, as it allows you to target specific audiences, work within your budget, and compete with larger companies.",
    },
  ];

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
          <Accordion faqs={FAQ_Home} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
