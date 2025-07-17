import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Whatsapp from "./Whatsapp";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollSmoother);
interface Props{
  location: string;
}

const Layout: React.FC<Props> = ({location}) => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      normalizeScroll: true
    });
  }, []);
  return (
    <>
      <Whatsapp />
      <Navbar location={location}/>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
