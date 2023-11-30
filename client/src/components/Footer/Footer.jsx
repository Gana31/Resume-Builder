import React from "react";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-footer p-8 xl:p-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
          {/* Logo */}
          <div className="w-full md:w-1/6">
            <Link to="/" className="text-2xl font-bold relative p-1 bg-footer text-white text-center md:text-left">
              ResumeBuilder<span className="text-primary text-5xl">.</span>{" "}
            </Link>
          </div>
          {/* Social media */}
          <nav className="flex items-center gap-4">
            <a href="#" className="block text-white p-4 bg-primary rounded-full">
              {" "}
              <RiInstagramLine />{" "}
            </a>
            <a href="#" className="block text-white p-4 bg-primary rounded-full">
              {" "}
              <RiFacebookLine />{" "}
            </a>
            <a href="#" className="block text-white p-4 bg-primary rounded-full">
              {" "}
              <RiTwitterLine />{" "}
            </a>
            <a href="#" className="block text-white p-4 bg-primary rounded-full">
              {" "}
              <RiGithubLine />{" "}
            </a>
          </nav>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold text-white text-center md:text-left">
            Company
          </h3>
          <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <Link
              to="/aboutus"
              className="text-gray-300 mt-4 hover:text-white transition-colors"
            >
              About Us
            </Link>
            <Link to="/contactus">
              <button
                type="button"
                className="font-semibold py-2 px-6 bg-primary text-white rounded-xl">
                Contact Us
              </button>
            </Link>
          </nav>
        </div>
        <div className="mt-20">
          <p className="text-gray-300 text-center">
            © ResumeBuilder 2023 - All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;