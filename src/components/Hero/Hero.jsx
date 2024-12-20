import React from 'react';
import { SpacemanCanvas } from "../../assets/Graphics/SpaceMan";
import Position from "./Position";
import './Hero.css'; // Import the CSS file

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className="parallax__content">
        <div className="content-left">
          <h1>
            Jonathan C. Sanchez
          </h1>
          <Position />
        </div>
        <div className="content-right">
          <div className="streaky-glow">
             <br />
            
          </div>
        </div>
      </div>

      <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" />
      <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" />
      <img className="parallax__mountain1" src="./parallax/3Mountain.svg" alt="" />
      <img className="parallax__mountain2" src="./parallax/4Mountain.svg" alt="" />
      <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" />
      <img className="parallax__sun" src="./parallax/6Sun.svg" alt="" />

      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;