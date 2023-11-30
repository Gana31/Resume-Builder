import React from 'react'
import Template4Image from '../Resources/About.png';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

export default function About() {
  return (<>
       <section id="about-section" className="py-10 px-12 flex justify-between items-center">
      <div className="about-left flex justify-center">
        <img src={Template4Image}alt="About Img" className="w-96 transform translate-y-12" />
      </div>

      <div className="about-right w-2/5">
        <h4>My Story</h4>
        <h1 className="text-purple-800 text-3xl font-bold mb-2">About Me</h1>
        <p className="text-gray-700 text-base leading-6">
        "At Resume Builder, we are passionate about helping individuals create outstanding resumes that stand out in the competitive job market. Our user-friendly and intuitive resume builder is designed to empower you to craft a professional and customized resume tailored to your unique skills and experiences. Whether you're a seasoned professional or just starting your career, our platform offers the tools and guidance you need to showcase your qualifications effectively. We understand the importance of a well-crafted resume in today's fast-paced world, and we're here to make the process easy and efficient for you. Join us on your journey to professional success, and let your resume reflect your true potential."
        </p>
        <div className="address mt-6">
          <ul>
            <li className="flex items-center mb-3">
              <span className="address-logo text-orange-500">
                <i className="fas fa-paper-plane"></i>
              </span>
              <p className="mr-2">Address:</p>
              <p>Chhatrapati Sambhajinagar, Maharashtra, India</p>
            </li>
            <li className="flex items-center mb-3">
              <span className="address-logo text-orange-500">
                <i className="fas fa-phone-alt"></i>
              </span>
              <p className="mr-2">Phone No:</p>
              <p>+91 987-654-4321</p>
            </li>
            <li className="flex items-center">
              <span className="address-logo text-orange-500">
                <i className="far fa-envelope"></i>
              </span>
              <p className="mr-2">Email ID:</p>
              <p>resumebuikder@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="expertise mt-6">
          <h3 className="text-xl font-semibold mb-2">My Expertise</h3>
          <ul className="flex space-x-4">
            <li className="flex items-center">
              <span className="expertise-logo text-orange-500">
                <i className="fab fa-html5"></i>
              </span>
              <p>HTML</p>
            </li>
            <li className="flex items-center">
              <span className="expertise-logo text-orange-500">
                <i className="fab fa-css3-alt"></i>
              </span>
              <p>CSS</p>
            </li>
            <li className="flex items-center">
              <span className="expertise-logo text-orange-500">
                <i className="fab fa-node-js"></i>
              </span>
              <p>Java Script</p>
            </li>
            <li className="flex items-center">
              <span className="expertise-logo text-orange-500">
                <i className="fab fa-react"></i>
              </span>
              <p>React Js</p>
            </li>
            <li className="flex items-center">
              <span className="expertise-logo text-orange-500">
                <i className="fab fa-react"></i>
              </span>
              <p>Node Js</p>
            </li>
            <li className="flex items-center">
              <span className="expertise-logo text-orange-500">
                <i className="fab fa-react"></i>
              </span>
              <p>MongoDB</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>

  )
}
