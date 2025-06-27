import {
  faArrowTrendUp,
  faAt,
  faCode,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, type ReactElement } from "react";
import { NavLink } from "react-router";

interface DropDown {
  name: string;
  icon: ReactElement;
  description: string;
  link: string;
}
const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);

  const dropdownItems: DropDown[] = [
    {
      name: "Web Development",
      icon: <FontAwesomeIcon size="lg" icon={faCode} />,
      link: "/webDev",
      description:
        "Crafting visually stunning and user-friendly websites to establish a powerful online footprint for your brand.",
    },
    {
      name: "Social Media",
      icon: <FontAwesomeIcon size="lg" icon={faAt} />,
      link: "/socialMedia",
      description:
        "Engage, connect, and grow your audience with impactful social media strategies and creative content.",
    },
    {
      name: "Application Development",
      icon: <FontAwesomeIcon size="lg" icon={faMobileScreenButton} />,
      link: "/appDev",
      description:
        "Innovative and scalable app solutions tailored to meet your business needs and enhance user experiences.",
    },
    {
      name: "GMB",
      icon: <FontAwesomeIcon size="lg" icon={faGoogle} />,
      link: "/gmb",
      description:
        "Get discovered by the right audience with Netbond Technologies’ Google My Business (GMB) Management Services.",
    },
    {
      name: "SEO",
      icon: <FontAwesomeIcon size="lg" icon={faArrowTrendUp} />,
      link: "/seo",
      description:
        "Boost your online presence with optimized strategies that drive organic traffic and improve search rankings.",
    },
    {
      name: "Graphic Designing",
      icon: <FontAwesomeIcon size="lg" icon={faCode} />,
      link: "/graphicDesigning",
      description:
        "We are your one-stop solution for your complete digital marketing and graphic design requirements.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <div
      className={`w-[80vw] fixed top-[20px] navbar ${
        visible ? "navbar--visible" : "navbar--hidden"
      } py-1 shadow-lg backdrop-blur-lg left-1/2 translate-x-[-50%] px-15 rounded-4xl flex items-center justify-between`}
    >
      <img
        className="cursor-pointer nav-logo py-1 px-2 rounded-xl w-[15%] hover:-translate-y-1 hover:shadow-xl duration-300"
        src="./asset 0.png"
        alt=""
      />
      <ul className="nav-items bg-white/85 px-6 py-2 rounded-2xl flex gap-8">
        <li className="relative cursor-pointer w-fit hover:translate-x-2 duration-200">
          About
        </li>
        <li className="flex dropdown items-center w-fit h-[100%] relative cursor-pointer gap-[5px]  hover:translate-x-2 duration-200">
          Services
          <img
            className="w-[10px] dropdown-img mt-1"
            src="./asset 19.svg"
            alt=""
          />
          <div className="w-[5vw] h-[10px] absolute top-[20px] bg-transparent"></div>
          <div className="absolute w-[45vw] dropdown-items flex flex-wrap gap-[10px] justify-center items-center h-auto -left-[300px] px-2 py-4 rounded-xl shadow-xl top-[30px] bg-white">
            {dropdownItems.map((item: DropDown) => {
              return (
                <NavLink
                  to={item.link}
                  className="drop-item flex w-[48%] hover:text-[#f76b1c] hover:-translate-y-[1px] hover:shadow-xl duration-250 px-2 py-3 rounded-xl h-[120px] gap-3 justify-start"
                >
                  <div className="icon mt-[1px] w-[20%]">{item.icon}</div>
                  <div className="nav-data flex flex-col gap-2">
                    <h3 className="text-md">{item.name}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </li>
        <li className="relative cursor-pointer w-fit hover:translate-x-2 duration-200">
          Contact Us
        </li>
      </ul>
      <button
        type="button"
        className="btn border-1 border-white/30 px-4 py-1 ml-10 rounded-md active:scale-95 hover:ring-2 hover:shadow-xl shadow-[#f76b1c] hover:ring-[#f76b1c] hover:ring-offset-2 hover:ring-offset-white hover:scale-105 duration-200 cursor-pointer"
      >
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
