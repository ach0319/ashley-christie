import React from "react";
import "./About.css";
import bootstrap from "./images/bootstrap-social-logo.png";
import css from "./images/css.png";
import html from "./images/html.png";
import javascript from "./images/javascript.jpg";
import react from "./images/react.png";
import profile from "./images/profile-picture.jpeg";

function About() {
  return (
    <div className="about-page">
      <div className="about-me">
        <p>
          I am a self-taught Front-End Developer currently reside in the
          beautiful state of New York. I strongly beleive that increasing access
          and utility in technology can build self determination and enhance a
          user's experience. I enjoy the process of solving difficult problems
          and trying to figure out what can make a product better and enhance
          the user's experience. From completing solo projects and working with
          other developers to complete a group project, I welcome challenges to
          level up my skills.
        </p>
      </div>
      <div className="technologies">
        <p>
          Beyond the company of my computer, I love to read books, write short
          stories and spend time outdoors
        </p>
        <p>Technologies:</p>
        <div className="icons">
          <img src={html}></img>
          <img src={css}></img>
          <img src={javascript}></img>
          <img src={bootstrap}></img>
          <img src={react}></img>
        </div>
      </div>
      <div className="profile-picture">
        <img src={profile}></img>
      </div>
    </div>
  );
}

export default About;
