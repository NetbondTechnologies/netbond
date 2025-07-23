import {
  faArrowTrendUp,
  faAt,
  faCode,
  faICursor,
  faMobileScreenButton,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, type ReactElement } from "react";
import { NavLink, useNavigate } from "react-router";
import { handleScrollTop } from "../App";
import { Menu } from "lucide-react";

interface DropDown {
  name: string;
  icon: ReactElement;
  description: string;
  link: string;
}
interface Props {
  location: string;
}
const Navbar: React.FC<Props> = ({ location }) => {
  const [visible, setVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const navigate = useNavigate();
  const [menu, setMenu] = useState<boolean>(false);

  const [servicesOpen, setServicesOpen] = useState<boolean>(false);

  const dropdownItems: DropDown[] = [
    {
      name: "Web Development",
      icon: <FontAwesomeIcon size="lg" icon={faCode} />,
      link: "/webDev",
      description:
        "Crafting visually stunning and user-friendly websites to establish a powerful online footprint for your brand.",
    },
    {
      name: "B2B Services",
      icon: <FontAwesomeIcon size="lg" icon={faAt} />,
      link: "/business-services",
      description:
        "Grow your business with our impactful B2B strategies, that'll make your business stand out.",
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
      icon: <FontAwesomeIcon size="lg" icon={faICursor} />,
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
    <>
      <span
        className={`fixed w-screen md:hidden block h-full z-9999 ${
          menu ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0"
        } left-0 bottom-0 bg-black text-white text-2xl px-5 duration-300 py-3`}
      >
        <div
          className="absolute top-10 right-10"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <FontAwesomeIcon size="xl" icon={faXmark} />
        </div>
        <div className="menu-items pt-20">
          <div className=" bg-opacity-90 text-white z-50 flex flex-col justify-start pt-20 space-y-8 text-3xl">
            <NavLink className={`"hover:underline ${
                              location === "/about"
                                ? "text-(--jet)"
                                : "text-white/90"
                            }`} to={"/about"} onClick={()=>{
                              setMenu(!menu)
                            }}>
              About Us
            </NavLink>

            <div className="flex flex-col">
              <div
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-2"
              >
                <span>Services</span>
                <span>{servicesOpen ? "▲" : "▼"}</span>
              </div>

              <div
                className={`grid ml-5 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                  servicesOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0 "
                } text-lg`}
              >
                <div className="overflow-hidden flex-col justify-around gap-1 flex text-2xl">
                  {dropdownItems.map((item: DropDown) => {
                    return (
                      <>
                        <NavLink
                          to={item.link}
                          onClick={() => {
                            handleScrollTop();
                            setMenu(!menu);
                            
                          }}
                          className={`drop-item hover:text-[#f76b1c] ${
                            location === item.link
                              ? "-translate-y-[1px] text-[#f76b1c] shadow-xl"
                              : ""
                          } hover:-translate-y-[1px] hover:shadow-xl py-2 duration-250 px-2 rounded-xl gap-3 justify-start`}
                        >
                          <div
                            className={`text-md ${
                              location === item.link
                                ? "text-(--jet)"
                                : "text-white/90"
                            }`}
                          >
                            {item.name}
                          </div>
                        </NavLink>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>

            <NavLink className={`"hover:underline ${
                              location === "/contact"
                                ? "text-(--jet)"
                                : "text-white/90"
                            }`} to={"/contact"} onClick={()=>{
                              setMenu(!menu)
                            }}>
              Contact Us
            </NavLink>

            <button
              type="button"
              onClick={() => {
                navigate(
                  location === "/" ||
                    location === "/contact" ||
                    location === "/about"
                    ? "/services"
                    : "/contact"
                );
                handleScrollTop();
                setMenu(!menu);
              }}
              className="btn border-1 border-white/30 px-4 py-2 text-xl mt-20 rounded-md active:scale-95 hover:ring-2 hover:shadow-xl shadow-[#f76b1c] hover:ring-[#f76b1c] hover:ring-offset-2 hover:ring-offset-white hover:scale-105 duration-200 cursor-pointer"
            >
              {location === "/" ||
              location === "/contact" ||
              location === "/about"
                ? "Get Started"
                : "Get in Touch"}
            </button>
          </div>
        </div>
      </span>
      <div
        className={`lg:w-[80vw] w-[98vw] md:w-[85vw] fixed top-[20px] select-none navbar ${
          visible ? "navbar--visible" : "navbar--hidden"
        } py-1 shadow-lg backdrop-blur-lg left-1/2 translate-x-[-50%] xl:px-15 rounded-4xl flex items-center justify-between pl-3 pr-8`}
      >
        <img
          className="cursor-pointer nav-logo md:py-1 px-2 rounded-xl lg:w-[18%] xl:w-[15%] md:w-[25%] w-40 hover:-translate-y-1 hover:shadow-xl duration-300"
          src="./asset 0.png"
          alt=""
          onClick={() => {
            navigate("/");
            handleScrollTop();
          }}
        />
        <ul className="nav-items bg-white/85 xl:px-6 py-2 xl:text-base md:text-sm rounded-2xl hidden md:flex xl:gap-8 md:gap-4 md:px-4">
          <li
            className="relative cursor-pointer w-fit hover:translate-x-2 duration-200"
            onClick={() => {
              navigate("/about");
              handleScrollTop();
            }}
          >
            About
          </li>
          <li className="flex dropdown items-center w-fit h-[100%] relative cursor-pointer gap-[5px] hover:translate-x-2 duration-200">
            Services
            <img
              className="w-[10px] dropdown-img mt-1"
              src="./asset 19.svg"
              alt=""
            />
            <div className="w-[5vw] h-[10px] absolute top-[20px] bg-transparent"></div>
            <div className="absolute xl:w-[45vw] md:w-[80vw] dropdown-items flex flex-wrap gap-[10px] justify-center items-center h-auto xl:-left-[300px] md:right-1/3 lg:right-1/10 xl:translate-x-0 translate-x-1/2 px-2 py-4 rounded-xl shadow-xl top-[30px] bg-white">
              {dropdownItems.map((item: DropDown) => {
                return (
                  <NavLink
                    to={item.link}
                    onClick={() => {
                      handleScrollTop();
                    }}
                    className={`drop-item flex w-[48%] hover:text-[#f76b1c] ${
                      location === item.link
                        ? "-translate-y-[1px] text-[#f76b1c] shadow-xl"
                        : ""
                    } hover:-translate-y-[1px] hover:shadow-xl duration-250 px-2 py-3 rounded-xl h-[120px] gap-3 justify-start`}
                  >
                    <div className="icon mt-[1px] w-[20%]">{item.icon}</div>
                    <div className="nav-data flex flex-col gap-2">
                      <h3
                        className={`text-md ${
                          location !== item.link ? "text-(--jet)" : ""
                        }`}
                      >
                        {item.name}
                      </h3>
                      <p
                        className={`text-sm ${
                          location !== item.link ? "text-(--davys-gray)" : ""
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </li>
          <li
            className="relative cursor-pointer w-fit hover:translate-x-2 duration-200"
            onClick={() => {
              navigate("/contact");
              handleScrollTop();
            }}
          >
            Contact Us
          </li>
        </ul>
        <div
          className="md:hidden active:bg-gray-300 rounded-full p-2 duration-300"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <Menu size={28} />
        </div>
        <button
          type="button"
          onClick={() => {
            navigate(
              location === "/" ||
                location === "/contact" ||
                location === "/about"
                ? "/services"
                : "/contact"
            );
            handleScrollTop();
          }}
          className="btn border-1 border-white/30 px-4 py-1 xl:text-base xl:ml-10 md:ml-2 hidden md:block rounded-md active:scale-95 hover:ring-2 hover:shadow-xl shadow-[#f76b1c] hover:ring-[#f76b1c] hover:ring-offset-2 hover:ring-offset-white hover:scale-105 duration-200 cursor-pointer"
        >
          {location === "/" || location === "/contact" || location === "/about"
            ? "Get Started"
            : "Get in Touch"}
        </button>
      </div>
    </>
  );
};

export default Navbar;
