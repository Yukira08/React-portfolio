import React from "react";

import { FiMail, FiPhone } from "react-icons/fi";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact__header">Contact</h1>
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
        <form>
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
              />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
          </div>
          <input type="text" class="form-control" placeholder="Subject" />
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <div className="center">
            <button type="button" className="mt-5 custom__button">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
