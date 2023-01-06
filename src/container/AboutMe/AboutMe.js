import React from "react";

import about from "../../assets/about.png";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { Zoom } from "react-awesome-reveal";
import "./AboutMe.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const AboutMe = () => {
  return (
    <div className="about" id="about">
      <div className="about__img">
        <Zoom>
          <img src={about} alt="about_img" />
        </Zoom>
      </div>
      <div className="about__info">
        <AnimationOnScroll animateIn="animate__fadeInRight">
          <h1>About Me</h1>
        </AnimationOnScroll>
          <p>
            I am currently an third-year engineering student in Toyo University.
            I love design and have interest in creating beautiful websites with
            my creativity.
          </p>
          <div className="about__info-icons">
            <a
              href="https://www.facebook.com/yukijonginnie.krittapak.5"
              target="_blank"
            >
              <BsFacebook className="about__icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/khinchanmyaesu/"
              target="_blank"
            >
              <BsLinkedin className="about__icons" />
            </a>
            <a href="https://github.com/Yukira08" target="_blank">
              <BsGithub className="about__icons" />
            </a>
          </div>
        
      </div>
    </div>
  );
};

export default AboutMe;
