import React from "react";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import { handleScrollTop } from "../App";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-[#141414] footer">
        <div className=" w-[90vw] py-[3%] mx-auto flex xl:flex-row flex-col justify-start gap-15">
          <div className="xl:w-[33%]">
            <img src="asset 0.png" className="w-full lg:w-[60%] lg:block lg:mx-auto" alt="" />
            <div className="w-full mt-5 flex justify-center gap-3">
              <div className="w-[40px] h-[40px] border-1 rounded-4xl border-white p-[7px] text-center hover:bg-[#646464aa] cursor-pointer hover:text-blue-700 duration-150 text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className="w-[40px] h-[40px] border-1 rounded-4xl border-white p-[7px] text-center hover:bg-[#646464aa] cursor-pointer hover:text-blue-400 duration-150 text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="w-[40px] h-[40px] border-1 rounded-4xl border-white p-[7px] text-center hover:bg-[#646464aa] cursor-pointer hover:text-blue-600 duration-150 text-white">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
              <div className="w-[40px] h-[40px] border-1 rounded-4xl border-white p-[7px] text-center hover:bg-[#646464aa] cursor-pointer hover:text-(--pumpkin) duration-150 text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
          <div className="text-center xl:w-[33%] my-10 xl:my-0 h-[300px] ">
            <h1 className="text-2xl mb-8 useful-links">Useful Links</h1>
            <div className=" flex flex-wrap justify-center gap-x-8 gap-y-10">
              <NavLink
                to="/webDev"
                className="hover:text-orange-400 w-[45%] text-white"
              >
                Web Development
              </NavLink>
              <NavLink
                to="/about"
                className="hover:text-orange-400 w-[45%] text-white"
                onClick={() => {
                  setTimeout(() => {
                    handleScrollTop();
                  }, 50);
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/appDev"
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
                to="/business-services"
                className="hover:text-orange-400 w-[45%] text-white"
              >
                B2B Services
              </NavLink>
              <NavLink
                to="/graphicDesigning"
                className="hover:text-orange-400 w-[45%] text-white"
              >
                Graphic Design
              </NavLink>
              <NavLink
                to="/contact"
                className="hover:text-orange-400 w-[45%] text-white"
                onClick={() => {
                  setTimeout(() => {
                    handleScrollTop();
                  }, 50);
                }}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="xl:w-[33%] xl:pb-0 pb-10">
            <h1 className="text-2xl mb-8 useful-links">Our Address : </h1>
            <div className="address text-lg">
              <span className="font-bold block ">
                Netbond Technologies Pvt. Ltd.
              </span>
              SCO 41,2nd Floor,Royal Estate, Near Oxford Street, Zirakpur,
              Punjab, Pincode – 140603 E-mail – info@netbondtechnologies.com
              Support@netbondtechnologies.com Phone No. – +91 9056995190
            </div>
            <span
              className="text-lg mt-5 cursor-pointer px-3 py-2 bg-(--pumpkin) rounded-2xl w-fit hover:text-orange-400 text-white block duration-200 hover:bg-transparent"
              onClick={() => {
                handleScrollTop();
              }}
            >
              Back to Top
            </span>
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
