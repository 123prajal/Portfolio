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
          title="Futsal Booking Website"
          des=" Developed the frontend of futsal booking app using HTML, CSS and JS"
          src={projectTwo}
        />
        <ProjectsCard
          title="Bonsai Web App"
          des=" Developed and Enhanced the user interface and interactive elements using HTML, CSS and JS"
          src={projectOne}
        />
        <ProjectsCard
          title="Bank Management App"
          des=" Developed a system for managing bank transactions, including features for deposit, withdrawal, and transfer operations using 
          Java "
          src={projectThree}
        />
       
      </div>
    </section>
  );
}

export default Projects