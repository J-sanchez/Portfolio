
    
import React, { useEffect, useState } from "react";

import { portfolio } from "../../data";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, textVariant } from "../../utils/motion";
import code1 from '../../assets/6.1_Dashboard_1.png'


const ProjectTwoCard = ({
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
      className={'w-full -mt-2px flex flex-row md:flex-row '}
    >
      <div className='relative mt-2 w-full md:w-3/5 pr-1'>
      <img
                src={code1}
                  alt="First Image"
                   width="660" 
                  height="373"
            className="md:rounded-3xl"
        />
      </div>

      <div className={`w-full md:w-3/5 mr-1 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight pb-2 pl-10'>CRUD With Python</h3>
                    <p className='mb-2 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl pl-10'>This project aims to create a web application for our customer and their international rescue training company. The application uses existing data from animal shelters in the area to identify and categorize available dogs.</p>
                    <p className='mb-2 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl pl-10'>The image to left is a table displaying information specefic to animals in the customer's area. In addition to the table is a map that displays the location of an animal that is chosen from the table.</p>
                    <p className='font-bold mb-2 text-blue-600 text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl pl-10'><a href="https://github.com/J-sanchez/Client-Server-Development"target="_blank">GitHub: Client-Server Development</a></p>
          </div>
            </motion.div>
            <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={'w-full -mt-2px flex flex-row md:flex-row '}
    >
         <div className='relative mt-2 w-full md:w-3/5 pr-1'>
         <iframe
                   
                   className="md:rounded-3xl"
                    src="./E-commerce.gif" 
                    width="620" 
                  height="373"
                   title="YouTube video player" 
                   frameBorder="0" 
                   allow="accelerometer; 
                   autoplay; 
                   clipboard-write; 
                   encrypted-media; 
                   gyroscope; 
                   picture-in-picture; 
                   web-share" allowfullscreen></iframe>
   
     </div>
     <div className={`w-full md:w-3/5 mr-1 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
       <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight pb-2 pl-10'>E-commerce-backend</h3>
       <p className='mb-2 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl pl-10'>The "E-commerce-backend" application is designed to manage and run an online inventory system. Built with MySQL, Sequelize, and Express, it enables users to perform CRUD operations (GET, POST, PUT, DELETE) through a Representational State Transfer (REST) Application Programming Interface (API). </p>
                    <p className='mb-2 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl pl-10'>The video on the left shows the testing of the REST API functionality. Proving the application can in fact perform CRUD operations</p>
                    <p className='font-bold mb-2 text-blue-600 text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl pl-10'><a href="https://github.com/J-sanchez/E-commerce-backend"target="_blank">GitHub: E-commerce-backend</a></p>
             
                </div>
                </motion.div>
     </div>
  );
};

const PortfolioTwo = () => {
  return (
    <div className='-mt-96 text-center md:text-left md:px-20 lg:px-20'>
<motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionText} text-left`}> CRUD</h3>
      </motion.div>
      <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight pb-2'>Create, Read, Update, Delete</h3>
      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {portfolio.map((project, index) => (
          <ProjectTwoCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(PortfolioTwo, "portfolio");
