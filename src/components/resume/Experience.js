import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Part One */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer Intern"
            subTitle="One Cover Pvt.Ltd | 03 July, 2024 - 15 September, 2024"
            result=""
            des={`• Delivered responsive technical support, improving user retention by 15%.\n• Built and maintained software documentation platforms using JavaScript, Python, and PostgreSQL.\n• Improved team productivity by implementing tools to organize tasks, track bug fixes, and manage feature requests.\n• Collaborated with cross-functional development teams to update the website and implement new features.`}
          />
        </div>
      </div>

      
    </motion.div>
  );
}

export default Experience;