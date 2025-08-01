import "./App.css";
import { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import { Routes, Route, useLocation } from "react-router";
import Layout from "./components/Layout";
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
import axios from "axios";
import Loader from "./components/Loader";

export const handleScrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function App() {
  const [data, setData] = useState<any>({
    name: "",
  });

  let apData = {
    service_id: import.meta.env.VITE_SERVICE_ID,
    template_id: import.meta.env.VITE_TEMPLATE_ID,
    user_id: import.meta.env.VITE_PUBLIC_ID,
    template_params: data,
  };

  const sendApplication = async () => {
    if (data.name.length > 0) {
      try {
        setIsLoading(true);
        let response = await axios.post(
          "https://api.emailjs.com/api/v1.0/email/send",
          apData
        );
        setData({
          name: "",
          firstName: "",
        });
        if (response.status === 200) {
          setMessage("Application Sent ✔");
          setTimeout(() => {
            setIsLoading(false);
            setMessage("Sending Application...");
          }, 1000);
        }
      } catch (error) {
        setMessage("Something Went Wrong :( , Try After 2 minutes");
        setTimeout(() => {
          setIsLoading(false);
          setMessage("Sending Application...");
        }, 1000);
      }
    } else {
      console.log("Please Fill All The Fields");
    }
  };

  let location = useLocation();
  const [updateLocation, setUpdateLocation] = useState<string>(
    location.pathname
  );
  const [isLocationTrue, setIsLocationTrue] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("Sending Application...");

  useEffect(() => {
    sendApplication();
  }, [data.name]);

  useEffect(() => {
    setUpdateLocation(location.pathname);
    location.pathname === "/"
      ? setIsLocationTrue(true)
      : setIsLocationTrue(false);
    return () => {
      setIsLocationTrue(false);
    };
  }, [location.pathname]);
  return (
    <>
      {isLocationTrue ? <Transition /> : null}
      {isLoading ? <Loader text={message} /> : null}

      <Routes>
        <Route element={<Layout location={updateLocation} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact setData={setData} />} />
          <Route path="/services" element={<Service />} />
          <Route
            path="/business-services"
            element={<BusinessService setData={setData} />}
          />
          <Route path="/webDev" element={<WebDev />} />
          <Route path="/appDev" element={<AppDev />} />
          <Route path="/gmb" element={<GMB setData={setData} />} />
          <Route path="/seo" element={<SEO setData={setData} />} />
          <Route
            path="/graphicDesigning"
            element={<GraphicDesign setData={setData} />}
          />
        </Route>
        <Route path="/:any" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
