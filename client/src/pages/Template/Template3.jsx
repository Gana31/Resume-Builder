import React from 'react';
import './Template3.css';

const Template3 = ({ user }) => {
  return (
    <div className="a4-page">
      <section className="main-section">
        <div className="left-part">
          <div className="contact-container">
            <h2 className="title bg-gray-800 text-white text-center text-uppercase text-lg py-2">
              Contact Me
            </h2>
            <div className="contact-list">
              <div className="icon-container">
                <i className="bi bi-geo-alt-fill" />
              </div>
              <div className="contact-text">
                <p>{user.address}</p>
              </div>
            </div>
            <div className="contact-list">
              <div className="icon-container">
                <i className="bi bi-envelope-fill" />
              </div>
              <div className="contact-text">
                <p>{user.email}</p>
              </div>
            </div>
            <div className="contact-list">
              <div className="icon-container">
                <i className="bi bi-laptop" />
              </div>
              <div className="contact-text">
                <p>{user.mobileNumber}</p>
              </div>
            </div>
          </div>

          <div className="education-container">
            <h2 className="title text-lg font-bold">Education</h2>
            {user.education &&
              user.education.map((education, index) => (
                <div className="course" key={index}>
                  <h2 className="education-title text-sm font-bold">{education.institution}</h2>
                  <h5 className="college-name">{education.percentage}</h5>
                  <p className="education-date">{education.qualification}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="right-part">
          <div className="banner">
            <h1 className="firstname text-4xl">{user.firstName}</h1>
            <h1 className="lastname text-4xl font-normal tracking-wider mt-0.5 my-3">
              {user.lastName}
            </h1>
            <p className="position text-lg mt-0.5" style={{ letterSpacing: '0.3rem' }}>
              {user.jobTitle}
            </p>
          </div>

          <div className="work-container">
            <h2 className="title text-left text-lg font-bold mt-4">Work Experience</h2>
            {user.experiences &&
              user.experiences.map((exp, index) => (
                <div className="work" key={index}>
                  <div className="job-date flex justify-between text-gray-700 mb-2 text-sm font-semibold">
                    <p className="job">{exp.position} Web Devloper</p>
                    <p className="date">{exp.range}</p>
                  </div>
                  <h2 className="company-name text-lg font-semibold text-gray-700 mb-2">
                    {exp.company} | {exp.place}
                  </h2>
                  <p className="work-text text-lg text-justify">{exp.jobDescription}</p>
                </div>
              ))}
          </div>
          <div className="work-container">
            <h2 className="title text-left text-lg font-bold mt-4">Projects</h2>
            {user.projects &&
              user.projects.map((exp, index) => (
                <div className="work" key={index}>
                  <div className="job-date flex justify-between text-gray-700 mb-2 text-sm font-semibold">
                    <p className="job">{exp.title}</p>
                    <p className="date">{exp.range}</p>
                  </div>
                  <h2 className="company-name text-lg font-semibold text-gray-700 mb-2">
                    {exp.
technology}
                  </h2>
                  <p className="work-text text-lg text-justify">{exp.description}</p>
                </div>
              ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Template3;
