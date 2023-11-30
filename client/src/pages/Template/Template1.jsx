import React from 'react';

const Template1 = ({user}) => {
    return(
        <div className="p-4 m-auto max-w-2xl bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-lg font-semibold">{user.email}</p>
          <p className="text-lg">{user.address}</p>
          <p className="text-lg">{user.mobileNumber}</p>
        </div>
  
        <hr className="my-3" />
  
        <div className="mt-3">
          <h3 className="text-xl font-semibold">Objective</h3>
          <p>{user.careerObjective}</p>
        </div>
  
        <hr className="my-3" />
  
        <div className="mt-3">
          <h3 className="text-xl font-semibold">Education</h3>
          {user.education &&
            user.education.map((education, index) => (
              <div className="mt-2" key={index}>
                <h4 className="text-lg font-semibold">
                  {education.qualification} ({education.range})
                </h4>
                <p>
                  <b>Institution:</b> {education.institution}
                </p>
                <p>
                  <b>Percentage:</b> {education.percentage}%
                </p>
              </div>
            ))}
        </div>
  
        <hr className="my-3" />
  
        <div className="mt-3">
          <h3 className="text-xl font-semibold">Experience</h3>
          {user.experiences &&
            user.experiences.map((exp, index) => (
              <div className="mt-2" key={index}>
                <h4 className="text-lg font-semibold">
                  {exp.company} ({exp.range})
                </h4>
                <p>
                  <b>Location:</b> {exp.place}
                </p>
              </div>
            ))}
        </div>
  
        <hr className="my-3" />
  
        <div className="mt-3">
          <h3 className="text-xl font-semibold">Projects</h3>
          {user.projects &&
            user.projects.map((project, index) => (
              <div className="mt-2" key={index}>
                <h4 className="text-lg font-semibold">
                  {project.title} ({project.range})
                </h4>
                <p>{project.rating}</p>
              </div>
            ))}
        </div>
  
        <hr className="my-3" />
  
        <div className="mt-3">
          <h3 className="text-xl font-semibold">Skills</h3>
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
      );
}

export default Template1;