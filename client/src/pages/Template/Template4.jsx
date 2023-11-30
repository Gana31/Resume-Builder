import React from 'react';

const Template4 = ({ user }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white p-6 ">
        <div className="text-center">
          <h1 className="text-3xl text-red-700 font-bold">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-xl text-gray-700">{user.email}</p>
          <p className="text-xl text-gray-700">{user.address}</p>
          <p className="text-xl text-gray-700">{user.mobileNumber}</p>
        </div>

        <hr className="my-3" />

        <div className="mt-3">
          <h2 className="text-xl font-bold text-red-700">Career Objective</h2>
          <p className="text-gray-800">{user.careerObjective}</p>
        </div>

        <hr className="my-3" />

        <div className="mt-3">
          <h2 className="text-xl font-bold text-red-700">Education</h2>
          {user.education &&
            user.education.map((education, index) => (
              <div className="mt-2" key={index}>
                <h3 className="text-lg font-semibold flex justify-between">
                  <p className="flex">
                    <p className="font-bold pr-4"> Degree : </p> {education.qualification} <p>({education.range})</p>
                  </p>
                </h3>
                <p className="text-gray-700">
                  <b className="font-bold pr-4">Institution:</b> {education.institution}
                </p>
                <p className="text-gray-700">
                  <b className="font-bold pr-4">Percentage:</b> {education.percentage}%
                </p>
              </div>
            ))}
        </div>

        <hr className="my-3" />

        <div className="mt-3">
          <h2 className="text-xl font-bold text-red-700 ">Experience</h2>
          {user.experiences &&
            user.experiences.map((exp, index) => (
              <div className="mt-2" key={index}>
                <h3 className="text-lg font-semibold">
                  {exp.company} ({exp.range})
                </h3>
                <p className="text-gray-700">
                  <b>Location:</b> {exp.place}
                </p>
              </div>
            ))}
        </div>

        <hr className="my-3" />

        <div className="mt-3">
          <h2 className="text-xl font-bold text-red-700 ">Projects</h2>
          {user.projects &&
            user.projects.map((project, index) => (
              <div className="mt-2" key={index}>
                <h3 className="text-lg font-semibold">
                  {project.title} ({project.range})
                </h3>
                <p className="text-gray-700">{project.rating}</p>
              </div>
            ))}
        </div>
        
        <hr className="my-3" />

        <div className="mt-3 ">
          <h2 className="text-xl font-bold text-red-700 my-3 ">Skills</h2>
          <div className="flex flex-wrap">
            {user.skills &&
              user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {skill.technology}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template4;
