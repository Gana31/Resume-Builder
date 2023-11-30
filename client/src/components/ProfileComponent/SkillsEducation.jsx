import React,{useState} from "react";

function SkillsEducation({collectData , userData  }) {
  const [education, setEducation] = useState(userData.education || [{ qualification: "", percentage: "", institution: "", range: "" }]);
    const [skills, setSkills] = useState(userData.skills || [{ technology: "", rating: "" }]);
  
    const handleAddEducation = () => {
      setEducation([...education, { qualification: "", percentage: "", institution: "", range: "" }]);
    };
  
    const handleRemoveEducation = (index) => {
      const updatedEducation = [...education];
      updatedEducation.splice(index, 1);
      setEducation(updatedEducation);
    };
  
    const handleAddSkill = () => {
      setSkills([...skills, { technology: "", rating: "" }]);
    };
  
    const handleRemoveSkill = (index) => {
      const updatedSkills = [...skills];
      updatedSkills.splice(index, 1);
      setSkills(updatedSkills);
    };

    const handleSubmitData = () => {
      // Collect all the data
      const dataToCollect = { education, skills };
      collectData (dataToCollect);
    };
  return (
    <div>
    <h5 className="font-bold">Education</h5>
    <hr className="my-4" />
    {education.map((item, index) => (
      <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1">
          <label className="block text-sm font-semibold mb-1">Qualification</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Qualification"
            value={item.qualification}
            onChange={(e) => {
              const updatedEducation = [...education];
              updatedEducation[index].qualification = e.target.value;
              setEducation(updatedEducation);
            }}
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-semibold mb-1">Percentage</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Percentage"
            value={item.percentage}
            onChange={(e) => {
              const updatedEducation = [...education];
              updatedEducation[index].percentage = e.target.value;
              setEducation(updatedEducation);
            }}
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-semibold mb-1">Institution</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Institution"
            value={item.institution}
            onChange={(e) => {
              const updatedEducation = [...education];
              updatedEducation[index].institution = e.target.value;
              setEducation(updatedEducation);
            }}
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-semibold mb-1">Year Range</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Year Range"
            value={item.range}
            onChange={(e) => {
              const updatedEducation = [...education];
              updatedEducation[index].range = e.target.value;
              setEducation(updatedEducation);
            }}
          />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <button
            className="py-2 px-4 bg-red-500 text-white rounded-md w-20 text-sm hover:bg-red-700"
            onClick={() => handleRemoveEducation(index)}
          >
            Remove
          </button>
        </div>
      </div>
    ))}
    <button
      className="bg-blue-500 text-white p-2 rounded-md mt-2"
      onClick={handleAddEducation}
    >
      Add Education
    </button>
  
    <h5 className="font-bold mt-4">Skills</h5>
    <hr className="my-4" />
    {skills.map((item, index) => (
      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <label className="block text-sm font-semibold mb-1">Technology</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Technology"
            value={item.technology}
            onChange={(e) => {
              const updatedSkills = [...skills];
              updatedSkills[index].technology = e.target.value;
              setSkills(updatedSkills);
            }}
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-semibold mb-1">Rating</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Rating"
            value={item.rating}
            onChange={(e) => {
              const updatedSkills = [...skills];
              updatedSkills[index].rating = e.target.value;
              setSkills(updatedSkills);
            }}
          />
        </div>
        <div className="col-span-1 flex justify-end items-center">
          <button
            className="py-2 px-4 bg-red-500 text-white rounded-md w-20 text-sm hover:bg-red-700"
            onClick={() => handleRemoveSkill(index)}
          >
            Remove
          </button>
        </div>
      </div>
    ))}
    <button
      className="bg-blue-500 text-white p-2 rounded-md mt-2"
      onClick={handleAddSkill}
    >
      Add Skill
    </button>
    <hr className="my-4" />
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
}

export default SkillsEducation;
