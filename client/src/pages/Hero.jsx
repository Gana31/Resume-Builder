import React from "react";
import {
  RiCheckboxBlankCircleFill,
  RiSmartphoneFill, RiMacFill
} from "react-icons/ri";
import { useNavigate ,Link  } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const contacUs = () => {
    navigate("/contactus")
  }
  return (
    <>
      <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
        {/* Information */}
        <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
          <div className="flex flex-col gap-8">
            <div>
            <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
              Web Design Impactful Digital{" "}
              <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block">
                Resume
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              </span>
            </h1>
            </div>
            <div><p className="text-gray-500 text-2xl leading-[2.5rem]">
              "Unlock your career potential with our innovative resume builder – crafting success one word at a time."
            </p></div>
            <div className="flex flex-col md:flex-row items-center gap-4">
            <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/contactus">
              <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
                Contact Us
              </button></Link>
              
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="md:col-span-3 flex items-center justify-center relative">
          {/* Content image */}
          <div>
            <img
              src="https://www.hloom.com/images/Resume-Builder-desktop-banner.png"
            />
          </div>
          {/* Circle */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-primary rounded-full -z-10"></div>

          {/* Logos */}
          <img
            src="figma.png"
            className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[12%] right-[20%] xl:right-[10%]"
          />
          <img
            src="adobe.png"
            className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%]"
          />
        </div>
      </section>
      <div>
      <h1 className="flex justify-center items-center text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]"
      >Services<span className="text-primary text-5xl">.</span></h1>
      </div>
      <div
        id="services"
        className="flex justify-center items-center"
      >
        
        <div
          className="grid grid-cols-1 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <RiSmartphoneFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
              <h3 className="text-[20px] font-bold">Tailored Templates</h3>
              <p className="text-gray-500">
                Choose from a wide range of professionally designed templates to create a resume that suits your unique career goals.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <RiMacFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
              <h3 className="text-[20px] font-bold">Expert Guidance</h3>
              <p className="text-gray-500">
                Receive expert tips and advice at every step, ensuring your resume showcases your skills and achievements effectively.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <RiSmartphoneFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
              <h3 className="text-[20px] font-bold">Keyword Optimization</h3>
              <p className="text-gray-500">
                We help you optimize your resume with industry-specific keywords, increasing your chances of getting noticed by employers
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <RiMacFill className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
              <h3 className="text-[20px] font-bold">Seamless Editing</h3>
              <p className="text-gray-500">
                Our user-friendly interface makes it easy to edit, update, and refine your resume whenever you need, ensuring it's always up-to-date.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;