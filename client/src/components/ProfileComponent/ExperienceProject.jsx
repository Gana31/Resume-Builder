import React, { useState } from 'react';

const ExperienceProject = ({collectData, userData  }) => {
  const [experiences, setExperiences] = useState(userData.experiences || [{ company: '', years: '', place: '', range: '',jobDescription:'' }]);
  const [projects, setProjects] = useState(userData.projects || [{ title: '', description: '', range: '',technology:'' }]);

  const handleAddItem = (items, setItems, newItem) => {
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (items, setItems, index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleSubmitData = () => {
    // Collect all the data
    const dataToCollect = { experiences, projects };
    collectData (dataToCollect );
  };

  return (
    <div className="p-4 space-y-4">
      <div>
        <h5 className="font-bold">Experience</h5>
        <hr className="my-4" />

        {experiences.map((experience, index) => (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4" key={index}>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-1">Company</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name={`company-${index}`}
                placeholder="Company"
                required
                value={experience.company}
                onChange={(e) => {
                  const updatedExperiences = [...experiences];
                  updatedExperiences[index].company = e.target.value;
                  setExperiences(updatedExperiences);
                }}
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-1">Years</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name={`years-${index}`}
                placeholder="Years"
                required
                value={experience.years}
                onChange={(e) => {
                  const updatedExperiences = [...experiences];
                  updatedExperiences[index].years = e.target.value;
                  setExperiences(updatedExperiences);
                }}
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-1">Place</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name={`place-${index}`}
                placeholder="Place"
                required
                value={experience.place}
                onChange={(e) => {
                  const updatedExperiences = [...experiences];
                  updatedExperiences[index].place = e.target.value;
                  setExperiences(updatedExperiences);
                }}
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-1">Year Range</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name={`range-${index}`}
                placeholder="Year Range"
                required
                value={experience.range}
                onChange={(e) => {
                  const updatedExperiences = [...experiences];
                  updatedExperiences[index].range = e.target.value;
                  setExperiences(updatedExperiences);
                }}
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-1">Job Description</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name={`Job Description-${index}`}
                placeholder="Job Description"
                required
                value={experience.jobDescription}
                onChange={(e) => {
                  const updatedExperiences = [...experiences];
                  updatedExperiences[index].jobDescription = e.target.value;
                  setExperiences(updatedExperiences);
                }}
              />
            </div>
            <div className="col-span-1 flex justify-end items-center">
              <button
                className="bg-red-500 text-white p-1 rounded-md w-16 text-sm hover:bg-red-700"
                onClick={() => handleRemoveItem(experiences, setExperiences, index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <button
          className="bg-blue-500 text-white p-2 rounded-md mt-2"
          onClick={() =>
            handleAddItem(experiences, setExperiences, {
              company: '',
              years: '',
              place: '',
              range: '',
              jobDescription:'',
            })
          }
        >
          Add Experience
        </button>
        <hr className="my-4" />
      </div>

      <div>
        <h5 className="font-bold mt-4">Project</h5>
        <hr className="my-4" />

        {projects.map((project, index) => (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4" key={index}>
            <div className="col-span-3">
              <label className="block text-sm font-semibold mb-1">Title</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name={`title-${index}`}
                placeholder="Title"
                required
                value={project.title}
                onChange={(e) => {
                  const updatedProjects = [...projects];
                  updatedProjects[index].title = e.target.value;
                  setProjects(updatedProjects);
                }}
              />
            </div>

            <div className="col-span-3">
              <label className="block text-sm font-semibold mb-1">Description</label>
              <textarea
                className="w-full p-2 border rounded"
                name={`description-${index}`}
                placeholder="Description"
                required
                value={project.description}
                onChange={(e) => {
                  const updatedProjects = [...projects];
                  updatedProjects[index].description = e.target.value;
                  setProjects(updatedProjects);
                }}
              ></textarea>
            </div>

            <div className="col-span-3">
              <label className="block text-sm font-semibold mb-1">Year Range</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name={`range-${index}`}
                placeholder="Year Range"
                required
                value={project.range}
                onChange={(e) => {
                  const updatedProjects = [...projects];
                  updatedProjects[index].range = e.target.value;
                  setProjects(updatedProjects);
                }}
              />
            </div>
            <div className="col-span-3">
              <label className="block text-sm font-semibold mb-1">Technology Used</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name={`technology-${index}`}
                placeholder=" Technology Used"
                required
                value={project.technology}
                onChange={(e) => {
                  const updatedProjects = [...projects];
                  updatedProjects[index].technology = e.target.value;
                  setProjects(updatedProjects);
                }}
              />
            </div>
            <div className="col-span-1 flex justify-end items-center">
              <button
                className="bg-red-500 text-white p-1 rounded-md w-16 text-sm hover:bg-red-700"
                onClick={() => handleRemoveItem(projects, setProjects, index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <button
          className="bg-blue-500 text-white p-2 rounded-md mt-2"
          onClick={() =>
            handleAddItem(projects, setProjects, {
              title: '',
              description: '',
              range: '',
              technology:'',
            })
          }
        >
          Add Project
        </button>
        <hr className="my-4" />
      </div>

      <div className="flex justify-center items-center content-center">
        <button
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
          onClick={handleSubmitData}
        >
          Submit Data
        </button>
      </div>
    </div>
  );
};

export default ExperienceProject;
