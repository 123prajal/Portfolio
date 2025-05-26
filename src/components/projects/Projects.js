import React from 'react';
import { projectThree, projectTwo, projectOne } from "../../assets/index";
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        
        <ProjectsCard
          title="Futsal Booking App"
          des=" Developed the fully functional futsal boking app using Node.JS, React, Tailwind CSS, and PostgreSQL."
          src={projectTwo}
        />
        <ProjectsCard
          title="Book Management App"
          des="Developed a desktop-based book store system using C#.NET, ASP.NET Core Web API, PostgreSQL, and React"
          src={projectThree}
        />
       
      </div>
    </section>
  );
}

export default Projects