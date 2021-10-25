import React from "react";
import "./Contact.css";
import twitter from "./Images/twitter.png";
import linkedin from "./Images/linkedin.png";
import github from "./Images/github.png";

function Contact() {
  return (
    <div className="contact-section">
      <p>
        Currently seeking opportunities to learn, grow and work with imaginative
        people
      </p>
      <p className="blue">Interested in working with me?</p>
      <a className="email" href="mailto: achristie0319@gmail.com">
        Let's Chat
      </a>
      <p className="connect">Connect with me!</p>
      <a href="https://twitter.com/ach0319">
        <img src={twitter}></img>
      </a>
      <a href="https://www.linkedin.com/in/ashley-m-christie/">
        <img src={linkedin}></img>
      </a>
      <a href="https://github.com/ach0319">
        <img className="github" src={github}></img>
      </a>
    </div>
  );
}

export default Contact;
