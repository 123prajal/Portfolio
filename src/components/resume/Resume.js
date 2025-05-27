import React, { useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from "./Experience"

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');
const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/Resume.pdf';
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };


  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Resume" />
        <button
          onClick={handleDownload}
          className="absolute right-0 bg-designColor text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition-all duration-300 text-lg font-semibold"
        >
          Download CV
        </button>
      </div>
      
      {/* Navigation Menu */}
      <div className="w-full flex justify-center mb-14">
        <ul className="inline-flex flex-wrap justify-center gap-4 md:gap-8">
          <li
            onClick={() => setActiveTab('education')}
            className={`cursor-pointer px-4 py-2 text-xl font-medium border-b-2 transition-all ${
              activeTab === 'education'
                ? "border-designColor text-designColor"
                : "border-transparent text-gray-400 hover:text-gray-300"
            }`}
          >
            Education
          </li>
          <li
            onClick={() => setActiveTab('skills')}
            className={`cursor-pointer px-4 py-2 text-xl font-medium border-b-2 transition-all ${
              activeTab === 'skills'
                ? "border-designColor text-designColor"
                : "border-transparent text-gray-400 hover:text-gray-300"
            }`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => setActiveTab('experience')}
            className={`cursor-pointer px-4 py-2 text-xl font-medium border-b-2 transition-all ${
              activeTab === 'experience'
                ? "border-designColor text-designColor"
                : "border-transparent text-gray-400 hover:text-gray-300"
            }`}
          >
            Experience
          </li>
        </ul>
      </div>

      {/* Content Sections */}
      <div className="mt-8">
        {activeTab === 'education' && <Education />}
        {activeTab === 'skills' && <Skills />}
        {activeTab === 'experience' && <Experience />}
      </div>
    </section>
  );
}

export default Resume;