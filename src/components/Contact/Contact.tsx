import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger, SplitText);
interface Form{
  name: string;
    email: string;
    message: string;
    number: string;
}
const Contact = () => {
   const [formData, setFormData] = useState<Form>({
      name: "",
      email: "",
      message: "",
      number: ""
    });
  
    let handleChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData((prev) => {
        return {
          ...prev,
          [event.target.name]: event.target.value,
        };
      });
    };
    let handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setFormData({
        name: "",
      email: "",
      message: "",
      number: ""
      })
    };
  useGSAP(()=>{
    const allTitles = Array.from(document.getElementsByTagName("h2") as HTMLCollectionOf<HTMLElement>)

    allTitles.map((title: HTMLElement) => {
      const split = new SplitText(title, { type: "lines" ,mask: "lines"});
      gsap.from(split.lines, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "top 30%",
        },
      });
    })

    const split = new SplitText(".hero-text", { type: "lines words", mask: "lines" });
      gsap.from(split.words, {
        yPercent: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.15,
      });
  },[])
  return (
    <>
      <div className="contact">
        <div className="contact-s1">
          <h1 className="xl:text-8xl lg:text-6xl text-5xl lg:pt-45 pt-30 backdrop-blur-sm lg:pb-35 pb-20 text-center hero-text">
            Contact <span className="text-(--pumpkin)">Us</span>
          </h1>
        </div>
        <div className="contact-s2 py-20">
          <div className="connect-w_s flex justify-center w-[90%] lg:mb-40 mb-30 mx-auto items-start">
            <div className="connect-text flex lg:w-[65%] w-full flex-col lg:gap-15 gap-7 justify-center items-start">
              <h2 className="lg:text-5xl md:text-4xl text-3xl">
                {" "}
                <span className="text-(--pumpkin) font-extrabold">
                  Connect
                </span>{" "}
                With Us
              </h2>
              <div className="lg:text-xl md:text-lg lg:mt-[-40px] mt-[-20px]">
                We are here to answer any questions you may have about our
                experiences. Reach out to us and we’ll respond you as soon as we
                can. Even if there is something you have always wanted to
                experience, let us know and we promise we’ll do our best to find
                it for you and send you there.
              </div>
              <button
                type="button"
                className="btn border-1 border-white/30 lg:px-6 px-4 py-2 lg:py-2 text-sm rounded-md active:scale-95 hover:ring-2 hover:shadow-xl shadow-[#f76b1c] hover:ring-[#f76b1c] hover:ring-offset-2 hover:ring-offset-white hover:scale-105 black/5 duration-200 md:text-lg cursor-pointer"
              >
                Schedule A Zoom Call Now
              </button>
            </div>
            <div className="connect-image hidden lg:block w-[30%]">
              <img src="./asset 97.png" className="w-full" alt="" />
            </div>
          </div>

          <div className="form-area flex lg:flex-row flex-col justify-center lg:mb-40 mb-30 w-[90%] mx-auto ">
            <div className="form-info flex flex-col gap-10 w-full lg:w-[40%]">
              <h2 className="lg:text-4xl md:text-3xl text-2xl">
                <span className="border-l-10 pl-2 border-(--pumpkin) py-3 ">
                  After
                </span>{" "}
                Form Submission
              </h2>
              <p>
                <ul className="list-disc ml-10 text-lg">
                  <li className="pb-4">
                    You’ll receive a prompt response from our team.
                  </li>
                  <li className="pb-4">
                    We’ll carefully assess your requirements.
                  </li>
                  <li className="pb-4">A review of your Website (If exists)</li>
                  <li className="pb-4">
                    Receive personalized recommendations for your growth
                    strategy.
                  </li>
                  <li className="pb-4">
                    Get a feel if Netbond Technologies is Suitable for you
                  </li>
                </ul>
              </p>
            </div>
            <div className="form-component bg-white shadow-xl rounded-3xl py-8 lg:px-8 px-5 w-full lg:w-[55%]" id="contact-form">
              <form
                action=""
                onSubmit={(e) => {
                  handleSubmit(e)
                }}
              >
                <label htmlFor="name" className=" block w-full">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  required
                  type="text"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                    handleChange(e);
                  }}
                  placeholder="John Doe"
                  name="name"
                  id="name"
                  className="block w-full bg-black/5 rounded-md px-3 py-2 text-md mb-5 mt-2 focus:ring-3 outline-none focus:ring-(--pumpkin) focus:ring-offset-3 focus:ring-offset-white duration-200"
                />
                <label htmlFor="number" className=" block w-full">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  required
                  type="tel"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                    handleChange(e);
                  }}
                  name="number"
                  placeholder="+91 xxxxx xxxxx"
                  id="number"
                  className="block w-full bg-black/5 rounded-md px-3 py-2 text-md mb-5 mt-2 focus:ring-3 outline-none focus:ring-(--pumpkin) focus:ring-offset-3 focus:ring-offset-white duration-200"
                />
                <label htmlFor="email" className=" block w-full">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  required
                  type="email"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                    handleChange(e);
                  }}
                  placeholder="johndoe@example.com"
                  name="email"
                  id="email"
                  className="block w-full bg-black/5 rounded-md px-3 py-2 text-md mb-5 mt-2 focus:ring-3 outline-none focus:ring-(--pumpkin) focus:ring-offset-3 focus:ring-offset-white duration-200"
                />
                <label htmlFor="message" className=" block w-full">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
                    handleChange(e);
                  }}
                  placeholder="Tell Us about your project here."
                  className="resize-none block w-full bg-black/5 rounded-md px-3 py-2 text-md mb-5 mt-2 focus:ring-3 outline-none focus:ring-(--pumpkin) focus:ring-offset-3 focus:ring-offset-white duration-200"
                  rows={6}
                ></textarea>
                <button
                  type="submit"
                  className="btn border-1 border-white/30 active:scale-95 hover:ring-2 hover:shadow-xl shadow-[#f76b1c] hover:ring-[#f76b1c] hover:ring-offset-2 hover:ring-offset-white hover:scale-105 black/5 rounded-md px-6 py-1 duration-200 text-lg cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="contact-location flex lg:flex-row flex-col-reverse gap-10 justify-center lg:w-[90%] w-[95%] mx-auto">
            <div className="location-details w-full lg:w-[49%]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl pb-8">Contact Address</h2>
              <p className=" contact-head md:text-lg">
                NETBOND TECHNOLOGIES PVT. LTD.
              </p>
              <span className="block pb-5">
                SCO – 41, 2nd floor, oxford street, Near Royal Estate, Zirakpur,
                Punjab – 140603
              </span>
              <hr className="w-[90%] border-1" />
              <p className="pb-5 contact-head md:text-lg">Email - </p>

              <span className="block">info@netbondtechnologies.com</span>
              <span className="block pb-5">
                support@netbondtechnologies.com
              </span>
              <hr className="w-[90%] border-1 " />
              <p className="pb-5 contact-head md:text-lg">Phone Number </p>

              <span className="block">+91 9056995190</span>
              <span className="block">+91 9056995194</span>
            </div>
            <div className="map w-full lg:w-[50%]">
              <div style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height="500"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=NetBond%20Technologies%20%7C%20Branding%20&amp;%20Digital%20Marketing%20Company%20in%20Zirakpur,%202nd%20floor,%20Sco-41,%20Ambala%20Road,%20near%20royal%20estate,%20Zirakpur,%20Punjab%20140603+(Netbond%20Technologies)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.mapsdirections.info/calcular-la-población-en-un-mapa">
                    Calcular Población en el Mapa
                  </a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
