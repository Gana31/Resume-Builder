import React from 'react';

const Template2 = ({ user }) => {
  return (
    <div className="p-4 m-auto max-w-2xl bg-blue-100 text-red-500 ">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-700">
          {user.firstName} {user.lastName}
        </h1>
        <p className="text-lg font-semibold">{user.email}</p>
        <p className="text-lg">{user.address}</p>
        <p className="text-lg">{user.mobileNumber}</p>
      </div>

      <hr className="my-3 border-blue-300" />

      <div className="mt-3">
        <h3 className="text-xl font-semibold text-blue-700">Objective</h3>
        <p className="text-blue-800">{user.careerObjective}</p>
      </div>

      <hr className="my-3 border-blue-300" />

      <div className="mt-3">
        <h3 className="text-xl font-semibold text-blue-700">Education</h3>
        {user.education &&
          user.education.map((education, index) => (
            <div className="mt-2" key={index}>
              <h4 className="text-lg font-semibold text-blue-700">
                {education.qualification} ({education.range})
              </h4>
              <p>
                <b className="text-blue-700">Institution:</b> {education.institution}
              </p>
              <p>
                <b className="text-blue-700">Percentage:</b> {education.percentage}%
              </p>
            </div>
          ))}
      </div>

      <hr className="my-3 border-blue-300" />

      <div className="mt-3">
        <h3 className="text-xl font-semibold text-blue-700">Experience</h3>
        {user.experiences &&
          user.experiences.map((exp, index) => (
            <div className="mt-2" key={index}>
              <h4 className="text-lg font-semibold text-blue-700">
                {exp.company} ({exp.range})
              </h4>
              <div>
                <p>
                  <b className="text-blue-700">Location:</b> {exp.place}
                </p>
              </div>
              <p>
                <b className="text-blue-700">Job Description:</b> {exp.jobDescription}
              </p>
            </div>
          ))}
      </div>

      <hr className="my-3 border-blue-300" />

      <div className="mt-3">
        <h3 className="text-xl font-semibold text-blue-700">Projects</h3>
        {user.projects &&
          user.projects.map((project, index) => (
            <div className="mt-2" key={index}>
              <h4 className="text-lg font-semibold text-blue-700">
                {project.title} ({project.range})
              </h4>
              <p className="text-blue-800">{project.rating}</p>
              <div>
                <p>
                  <b className="text-blue-700">Project Description:</b> {project.description}
                </p>
              </div>
            </div>
          ))}
      </div>

      <hr className="my-3 border-blue-300" />

      <div className="mt-3">
        <h3 className="text-xl font-semibold text-blue-700">Skills</h3>
        <div className="flex flex-wrap">
          {user.skills &&
            user.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-blue-800 mr-2 mb-2"
              >
                {skill.technology}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Template2;
