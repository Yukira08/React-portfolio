import React from "react";

import { FiMail, FiPhone } from "react-icons/fi";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Contact.css";
const Contact = () => {
  const submitFormHandler = (event) => {
    event.preventDefault();
    alert("Message was sent successfully");
  }
  return (
    <div className="contact" id="contact">
      <AnimationOnScroll animateIn="animate__zoomIn">
        <h1 className="contact__header">Contact</h1>
      </AnimationOnScroll>

      <div className="contact__info">
        <div className="mail">
          <p>
            <FiMail size={27} />
            <span>khinchanmyaesu01@gmail.com</span>
          </p>
        </div>
        <div className="phone">
          <p>
            <FiPhone size={27} />
            <span>+81-080-8736-7213</span>
          </p>
        </div>
      </div>
      <div className="contact__form">
        <form onSubmit={submitFormHandler}>
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First name" required
              />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" required />
            </div>
          </div>
          <input type="text" class="form-control" placeholder="Subject" required/>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <div className="center">
            <button type="submit" className="mt-5 custom__button">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
