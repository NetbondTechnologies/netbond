import "./App.css";
import { useEffect } from "react";
import HomePage from "./components/HomePage";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import gsap from "gsap";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Transition from "./components/Homepage/Transition";
import Whatsapp from "./components/Whatsapp";

gsap.registerPlugin(useGSAP, ScrollSmoother);

export const handleScrollTop = ()=>{
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function App() {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: false,
      normalizeScroll: false,
    });
  });

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
      
      <Whatsapp/>
    <Transition/>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
