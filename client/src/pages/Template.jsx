import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import MainTemplate from './Template/MainTemplate';
import Template1Image from '../Resources/Template1.png';
import Template2Image from '../Resources/Template2.png';
import Template3Image from '../Resources/Template3.png';
import Template4Image from '../Resources/Template4.png';

const templates = [
  {
    id: 1,
    title: 'Resume Title 1',
    image: Template1Image,
  },
  {
    id: 2,
    title: 'Resume Title 2',
    image: Template2Image,
  },
  {
    id: 3,
    title: 'Resume Title 3',
    image: Template3Image,
  },
  {
    id: 4,
    title: 'Resume Title 4',
    image: Template4Image,
  },
  // Add more templates to the array as needed
];

const Template = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isTemplateSelected, setIsTemplateSelected] = useState(false);
  const componentRef = useRef();

  const handleDivClick = (templateNumber) => {
    setSelectedTemplate(templateNumber);
    setIsTemplateSelected(true);
  };

  const handleBackToTemplates = () => {
    setSelectedTemplate(null);
    setIsTemplateSelected(false);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-screen-lg mx-auto">
        {isTemplateSelected ? (
          <div>
            <button
              onClick={handleBackToTemplates}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4"
            >
              Back
            </button>
            <button
              onClick={handlePrint}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4"
            >
              Print
            </button>
            <div ref={componentRef}>
              <MainTemplate selectedTemplate={selectedTemplate}/>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {templates.map((template) => (
              <div
                key={template.id}
                className="p-4 border border-gray-200 rounded-lg cursor-pointer transition transform hover:scale-105 shadow-md"
                onClick={() => handleDivClick(template.id)}
              >
                <div className="relative">
                  <div className="bg-blue-100 p-4 rounded-t-lg">
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-fit object-cover rounded-lg"
                    />
                  </div>
                  <h2 className="text-xl flex justify-center font-semibold mt-2 text-blue-600 bg-white p-2 rounded-b-lg">
                    {template.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Template;
