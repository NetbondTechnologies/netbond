import React from "react";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-[#141414]">
        <div className=" w-[90%] py-[3%] mx-auto flex justify-start gap-20">
          <div className="w-[400px]">
            <img src="asset 0.png" className="w-full" alt="" />
            <div className="w-full mt-5 flex justify-center gap-3">
              <div className="w-[40px] h-[40px] border-1 rounded-4xl border-white p-[8px] text-center hover:bg-[#646464aa] cursor-pointer hover:text-orange-400  text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className="w-[40px] h-[40px] border-1 rounded-4xl border-white p-[8px] text-center hover:bg-[#646464aa] cursor-pointer hover:text-blue-400 text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="w-[40px] h-[40px] border-1 rounded-4xl border-white p-[8px] text-center hover:bg-[#646464aa] cursor-pointer hover:text-blue-600 text-white">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
              <div className="w-[40px] h-[40px] border-1 rounded-4xl border-white p-[8px] text-center hover:bg-[#646464aa] cursor-pointer hover:text-(--pumpkin) text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
          <div className="text-center w-[400px] h-[300px] ">
            <h1 className="text-2xl mb-8 useful-links">Useful Links</h1>
            <div className="w-[400px] flex flex-wrap justify-center gap-x-8 gap-y-10">
              <NavLink
                to="/webDev"
                className="hover:text-orange-400 w-[45%] text-white"
              >
                Web Development
              </NavLink>
              <NavLink
                to="/about"
                className="hover:text-orange-400 w-[45%] text-white"
              >
                About
              </NavLink>
              <NavLink
                to="/"
                className="hover:text-orange-400 w-[45%] text-white"
              >
                App Development
              </NavLink>
              <NavLink
                to="/gmb"
                className="hover:text-orange-400 w-[45%] text-white"
              >
                GMB
              </NavLink>
              <NavLink
                to="/seo"
                className="hover:text-orange-400 w-[45%] text-white"
              >
                SEO
              </NavLink>
              <NavLink
                to="/"
                className="hover:text-orange-400 w-[45%] text-white"
              >
                Social Media
              </NavLink>
              <NavLink
                to="/"
                className="hover:text-orange-400 w-[45%] text-white"
              >
                Graphic Design
              </NavLink>
              <NavLink
                to="/"
                className="hover:text-orange-400 w-[45%] text-white"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="w-[400px]">
            <h1 className="text-2xl mb-8 useful-links">Our Address : </h1>
            <div className="address text-lg">
              <span className="font-bold block ">
                Netbond Technologies Pvt. Ltd.
              </span>
              SCO 41,2nd Floor,Royal Estate, Near Oxford Street, Zirakpur,
              Punjab, Pincode – 140603 E-mail – info@netbondtechnologies.com
              Support@netbondtechnologies.com Phone No. – +91 9056995190
            </div>
          </div>
        </div>
        <div className="banner text-lg text-white font-bold w-full bg-(--pumpkin) py-4 text-center">
            ©2025-Netbond Technologies
        </div>
      </div>
    </>
  );
};

export default Footer;
