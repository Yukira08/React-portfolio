import React from "react";

import about from "../../assets/about.png";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about" id="about">
      <div className="about__img">
        <img src={about} alt="about_img" />
      </div>
      <div className="about__info">
        {/* <div className="about_info-header_bg">bg</div> */}
        <h1>About Me</h1>
        <p>
          I am currently an third-year engineering student in Toyo University. I
          love design and have interest in creating beautiful websites with my
          creativity.
        </p>
        <div className="about__info-icons">
          <a href="https://www.facebook.com/yukijonginnie.krittapak.5" target="_blank">
            <BsFacebook size={40} className="about__icons"/>
          </a>
          <a href="https://www.linkedin.com/in/khinchanmyaesu/" target="_blank">
            <BsLinkedin size={40} className="about__icons"/>
          </a>
          <a href="https://github.com/Yukira08"  target="_blank">
            <BsGithub size={40} className="about__icons"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
