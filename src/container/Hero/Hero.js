import React from "react";

import right from "../../assets/right.png";
import { Zoom, Slide } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import { AnimationOnScroll } from "react-animation-on-scroll";

import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero__info">
        <Slide>
          <h3>Hello</h3>
          <div className="hero__info-name">
            <h1>I'm Khin Chan</h1>
            <h1>Myae Su</h1>
          </div>
          <p>
            <Typewriter
              options={{
                strings: ["Front-end Developer", "Web Developer"],
                autoStart: true,
                loop: true,
                changeDeleteSpeed: 10,
              }}
            />
          </p>
          <a href={require("../../assets/My_Resume.pdf")} download="Resume">
            Download CV
          </a>
        </Slide>
      </div>
      <div className="hero__img">
        <Zoom>
          <img src={right} alt="my_img" />
        </Zoom>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
