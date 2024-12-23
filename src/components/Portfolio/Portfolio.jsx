import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { portfolio } from "../../data";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import { ComputerCanvas } from ".";

const Portfolio = ({ scrollContainer }) => {
  const [selectedJob, setSelectedJob] = useState(portfolio[0]);
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
          Portfolio
        </h2>
      </motion.div>

          <div className="relative -mt-36 md:-mt-36 md:p-18 flex flex-col items-center sm:flex-row sm:items-start">
              <div className="relative h-[1500px] w-full mt-6 overflow-hidden text-center">
              <div className="absolute items-center mt-72 pt-1 ml-72 pl-11 inset-3 z-40">
              <iframe
                    width="720" 
                    height="422"
                    src="./codeRecording.gif" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share" allowfullscreen></iframe>
        </div>
                  <ComputerCanvas scrollContainer={scrollContainer} />
              </div>
      
        </div>

      </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
