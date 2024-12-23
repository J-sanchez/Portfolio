import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Contact, Portfolio, Hero, Navbar, AboutMe, Education, PortfolioTwo, PortfolioThree } from "./components";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="me" className='relative z-30 bg-body -mt-14'>
            <AboutMe />
                  </div>
                  <div id="education" className='relative z-30 bg-body'>
            <Education />
                  </div>
          <div id="portfolio" className='relative z-30 bg-body'>
            <Portfolio scrollContainer={wrapperRef}/>
                  </div>
                  <div id="portfolio" className='relative z-30 bg-body'>
            <PortfolioTwo scrollContainer={wrapperRef}/>
                  </div>
                  <div id="portfolio" className='relative z-30 bg-body'>
            <PortfolioThree scrollContainer={wrapperRef}/>
          </div>
          <div id="contact" className='relative z-30 bg-body'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
