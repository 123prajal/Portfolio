import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2009- present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc. Hons Computing"
            subTitle="Itahari International College (2022 - present)"
            result=""
            des="Pursuing BSc. Hons in Computing, gaining expertise in software development, algorithms, and data structures, enhancing technical and analytical skills"
          />
          <ResumeCard
            title="School Leaving Certificate"
            subTitle="Bal Kalyan Vidhya Mandir Secondary School(2001 - 2005)"
            result="3.64/4"
            des="Achieved School Leaving Certificate, signifying completion of secondary education and readiness for higher academic challenges."
          />
          <ResumeCard
            title="Secondary Education Examination"
            subTitle="Bal Vidhya Mandir English Boarding School (2009 - 2020)"
            result="3.88/4"
            des="Completed Secondary Education Examination, demonstrating proficiency in core subjects and foundational knowledge for further academic pursuits."
          />
        </div>
      </div>
     

      
    </motion.div>
  );
}

export default Education