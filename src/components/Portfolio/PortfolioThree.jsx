import React, { useEffect, useState } from 'react';

import { portfolio } from '../../data';
import { SectionWrapper } from '../../hoc';
import { styles } from '../../styles';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, textVariant } from '../../utils/motion';
import BackendPhotos from './BackendRollers';
import FrontendRollers from './FrontendRollers';

const ProjectThree = ({
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
      <div className= 'flex-auto'>
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={'w-full flex flex-row md:flex-row '}
    >

      <div className={`w-full md:w-3/5 mr-1 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight -mt-96 pb-2'>Inventory DB</h3>
                    <p className='mb-2 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl pr-10'>The images are meant to show how backend design focuses on structuring data and defining relationships between entities, ensuring efficient storage and retrieval. The Entity-Relationship Diagram (ERD) visually maps these relationships, guiding the creation of SQL queries to manage data.</p>
                    <p className='mb-2 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl pr-10'>This inventory tracking project, different from above, showcases how the ERD can be useful for creating backend databases. The queries shown also prove that by selecting and joining different tables we can retrieve the necessary data.</p>
                </div>
                <div className='relative mt-2 w-full md:w-3/5 pr-1'>
      < BackendPhotos />
      </div>
            </motion.div>
            <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={'w-full -mt-72 flex flex-row md:flex-row '}
    >
    
     <div className={`w-full md:w-3/5 mr-1 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
       <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight -mt-96 pb-2'>Front-End Design</h3>
       <p className='mb-2 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl pr-10'>Frontend/web design focuses on creating the visual and interactive aspects of a website or application. It involves designing layouts, visuals, and user interfaces that provide a seamless and engaging experience. Whether using traditional 2D elements or advanced 3D graphics, frontend design ensures that the content is both aesthetically appealing and user-friendly. </p>
                    <p className='mb-2 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl pr-10'>The goal of the portfolio is to showcase the different aspects mentioned above.</p>
                    <p className='font-bold mb-2 text-blue-600 text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'><a href="https://github.com/J-sanchez/Portfolio"target="_blank">GitHub: Professional Portfolio</a></p>
             
                </div>
                <div className='relative -mt-8 w-full md:w-3/5 pr-1'>
         <FrontendRollers />
   
     </div>
                </motion.div>
     </div>
  );
};

const PortfolioThree = () => {
  return (
    <div className=' text-center md:text-left md:px-20 lg:px-20'>
<motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionText} text-left`}>Design</h3>
      </motion.div>
      <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight pb-2'>Backend & Frontend</h3>
      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {portfolio.map((project, index) => (
          <ProjectThree key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(PortfolioThree, 'portfolio');
