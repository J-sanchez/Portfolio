import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { me } from "../../data";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import AboutMePhotos from "./AboutMePhotos";

const ProjectCard = ({
  index,
  name,
  description,
    description2,
    description3,
  description4,

}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
    >
      <div className='relative w-full md:w-3/5 pr-2'>
        <AboutMePhotos />
      </div>

      <div className={`mt-20 w-full md:w-3/5 mr-1 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight pb-2'>{name}</h3>
        <p className='mb-2 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description}</p>
              <p className='mb-2 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description2}</p>
              <p className='mb-2 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description3}</p>
              <p className='mb-32 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description4}</p>
      </div>
    </motion.div>
  );
};

const AboutMe = () => {
  return (
    <div className='text-center md:text-left md:px-20 lg:px-20'>
      <motion.div variants={textVariant()}>
        <h4 className={`${styles.sectionText} text-center`}>About Me</h4>
      </motion.div>

      <div className='mt-10 md:mt-20 sm:mt-15 flex flex-col gap-10 md:gap-20'>
        {me.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMe, "about me");
