import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Whatsapp from "./Whatsapp";

const Layout: React.FC = () => {
  return (
    <>
    <Whatsapp />
      <Navbar />
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
