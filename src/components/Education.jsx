import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { education } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education, onClick, isActive, isMobile }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer sm:mb-1 p-2 max-w-xl relative sm:text-left text-center ${
        isMobile ? "text-quaternary" : ""
      }`}
    >
      {(isActive || isMobile) && (
        <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-tertiary my-2 sm:block hidden"></div>
      )}
      <h3
        className={`text-lg lg:text-xl xl:text-2xl font-bold sm:pl-6 ${
          isActive || isMobile ? "text-quaternary" : "text-white"
        }`}
      >
        {education.title}
      </h3>
      <p
        className={`text-md lg:text-lg xl:text-xl sm:font-medium sm:pl-6 ${
          isActive || isMobile ? "text-white" : "text-slate-300"
        }`}
      >
        {education.course_name} | {education.date}
      </p>
    </div>
  );
};

const EducationDetails = ({ education }) => {
  return (
    <div className="-mt-8 pl-28">
      <ul className="max-w-7xl list-none space-y-6 border-0 lg:border-0 rounded-xl lg:rounded-3xl p-4 -mt-2">
        {education.details.map((detail, index) => (
          <li
            key={`education-detail-${index}`}
            className="text-slate-200 font-light text-[10px] xs:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] lg:leading-[30px] p-4"
            dangerouslySetInnerHTML={{ __html: detail }}
          />
        ))}
      </ul>
    </div>
  );
};

const Education = () => {
  const [selectedJob, setSelectedJob] = useState(education[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sm:my-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>
          Education
        </h2>
      </motion.div>
{/* Container with SVG background */}
        <div className="relative mt-40 md:-mt-48 md:p-20 flex flex-col items-center sm:flex-row sm:items-start">
              <div className="absolute inset-0 -z-10">
                  
          <img src="./parallax/portBook.svg" alt="" />
        </div>
      <div className="relative mt-40 md:mt-72 md:p-20 flex flex-col items-center sm:flex-row sm:items-start">
        <div className="flex flex-col z-10 sm:w-auto sm:w-full">
          {education.map((education, index) => (
            <EducationCard
              key={`education-${index}`}
              education={education}
              onClick={() => setSelectedJob(education)}
              isActive={selectedJob === education}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="flex justify-end z-10 sm:block hidden">
          <EducationDetails education={selectedJob} />
        </div>
      </div>
          </div>
      </div>
      
  );
};

export default SectionWrapper(Education, "education");
