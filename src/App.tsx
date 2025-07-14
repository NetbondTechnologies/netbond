import "./App.css";
import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Routes, Route, useLocation } from "react-router";
import Layout from "./components/Layout";
import gsap from "gsap";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Transition from "./components/Homepage/Transition";
import Service from "./components/Services/Service";
import BusinessService from "./components/Services/BusinessService";
import WebDev from "./components/Services/WebDev";
import AppDev from "./components/Services/AppDev";
import GMB from "./components/Services/GMB";
import SEO from "./components/Services/SEO";
import GraphicDesign from "./components/Services/GraphicDesign";
import NotFound from "./components/NotFound";

gsap.registerPlugin(useGSAP, ScrollSmoother);

export const handleScrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
function App() {
  
  let location = useLocation();

  const [isLocationTrue, setIsLocationTrue] =useState(true); 

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
  content: "#smooth-content",
      smooth: 2,
      effects: false,
      
    });
  }, []);

  useEffect(() => {
    location.pathname === "/" ? setIsLocationTrue(true) : setIsLocationTrue(false);
    return () => {
      setIsLocationTrue(false)
    };
  }, []);
  return (
    <>
      
      {isLocationTrue ? <Transition /> : null}

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/business-services" element={<BusinessService />} />
          <Route path="/webDev" element={<WebDev />} />
          <Route path="/appDev" element={<AppDev />} />
          <Route path="/gmb" element={<GMB />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/graphicDesigning" element={<GraphicDesign />} />
        </Route>
        <Route path="/:any" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
