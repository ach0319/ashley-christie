import React from "react";
import "./MyWork.css";
import favmobile from "./Images/FavFontsMobile.PNG";
import favfonts from "./Images/FavoriteFontsApplication.png";
import housemobile from "./Images/HouseHeroMobile.PNG";
import househero from "./Images/HouseHeroApplication.png";
import Tutormobile from "./Images/TutoringMobile.png";
import TutorMe from "./Images/TutorMeApplication.png";
import WhenMobile from "./Images/WhenRUFreeMobile.PNG";
import WhenRUFree from "./Images/WhenRUFree.png";
import luna from "./Images/LunaPerformanceImage.png";
import device from "./Images/LandingPageScreenshot.PNG";

function Projects() {
  return (
    <div className="projects-section">
      <div className="fav-fonts">
        <div className="images">
          <img className="laptop" src={favfonts}></img>
          <img className="mobile" src={favmobile}></img>
        </div>
        <div className="caption">
          <h3>Favorite Fonts</h3>
          <p>
            {" "}
            A responsive application that makes it easier to discover new fonts
            and bring personality to your website
          </p>
          <ul>
            <li className="tech">
              <mark className="html">HTML</mark>
            </li>
            <li className="tech">
              <mark className="css">CSS</mark>
            </li>
            <li className="tech">
              <mark className="js">JavaScript</mark>
            </li>
            <li className="tech">
              <mark className="solo">SOLO PROJECT</mark>
            </li>
          </ul>
          <a href="https://favorite-fonts-application.herokuapp.com/">
            LIVE LINK
          </a>
          <a href="https://github.com/ach0319/Chingu-Favorite-Fonts-App">
            VIEW CODE
          </a>
        </div>
      </div>
      <hr></hr>
      <div className="house-hero">
        <div className="images">
          <img className="laptop" src={househero}></img>
          <img className="mobile" src={housemobile}></img>
        </div>
        <div className="caption">
          <h3>House Hero</h3>
          <p>
            A responsive mortgage calculator application that will help you
            figure out what home you can afford.
          </p>
          <ul>
            <li className="tech">
              <mark className="html">HTML</mark>
            </li>
            <li className="tech">
              <mark className="css">CSS</mark>
            </li>
            <li className="tech">
              <mark className="js">JavaScript</mark>
            </li>
            <li className="tech">
              <mark className="group">TEAMPROJECT</mark>
            </li>
          </ul>
          <a href="https://loving-shannon-21b085.netlify.app/">LIVE LINK</a>
          <a href="https://github.com/chingu-voyages/v26-toucans-team-01">
            VIEW CODE
          </a>
        </div>
      </div>
      <hr></hr>
      <div className="tutor-me">
        <div className="images">
          <img className="laptop" src={TutorMe}></img>
          <img className="mobile" src={Tutormobile}></img>
        </div>
        <div className="caption">
          <h3>Tutor Me </h3>
          <p>
            A tutor search application that connects people to tutors based on
            subject/topic along with youtube videos based on subject matter.
          </p>
          <ul>
            <li className="tech">
              <mark className="html">HTML</mark>
            </li>
            <li className="tech">
              <mark className="css">CSS</mark>
            </li>
            <li className="tech">
              <mark className="js">JavaScript</mark>
            </li>
            <li className="tech">
              <mark className="bs">Bootstrap</mark>
            </li>
            <li className="tech">
              <mark className="group">TEAM PROJECT</mark>
            </li>
          </ul>
          <a href="https://toucans01tutorme.netlify.app/">LIVE LINK</a>
          <a href="https://github.com/chingu-voyages/v29-toucans-team-01">
            VIEW CODE
          </a>
        </div>
      </div>
      <hr></hr>
      <div className="When-RU-Free">
        <div className="images">
          <img className="laptop" src={WhenRUFree}></img>
          <img className="mobile" src={WhenMobile}></img>
        </div>
        <div className="caption">
          <h3>When RU Free </h3>
          <p>
            When RU Free aims to provide professionals with a responsive, modern
            way to find the best time to meet as a group.
          </p>
          <ul>
            <li className="tech">
              <mark className="html">HTML</mark>
            </li>
            <li className="tech">
              <mark className="css">CSS</mark>
            </li>
            <li className="tech">
              <mark className="js">JavaScript</mark>
            </li>
            <li className="tech">
              <mark className="bs">Bootstrap</mark>
            </li>
            <li className="tech">
              <mark className="group">TEAM PROJECT</mark>
            </li>
          </ul>
          <a href="https://chingu-voyages.github.io/WhenRUfree/">LIVE LINK</a>
          <a href="https://github.com/chingu-voyages/WhenRUfree">VIEW CODE</a>
        </div>
      </div>
      <hr></hr>
      <div className="luna">
        <div className="images">
          <img className="laptop" src={luna}></img>
        </div>
        <div className="caption">
          <h3>Luna Performance</h3>
          <p>
            Luna Performance is a dynamic responsive website for a detailing
            business. Some features include an ecommerce shop, instagram and
            testimonials carousel.
          </p>
          <ul>
            <li className="tech">
              <mark className="html">HTML</mark>
            </li>
            <li className="tech">
              <mark className="css">CSS</mark>
            </li>
            <li className="tech">
              <mark className="js">JavaScript</mark>
            </li>
            <li className="tech">
              <mark className="bs">Bootstrap</mark>
            </li>
            <li className="tech">
              <mark className="solo">SOLO PROJECT</mark>
            </li>
          </ul>
          <a href="https://keen-hoover-311d56.netlify.app//">LIVE LINK</a>
          <a href="https://github.com/ach0319/Luna-Performance">VIEW CODE</a>
        </div>
      </div>
      <hr></hr>
      <div className="device-loaner">
        <div className="images">
          <img className="laptop" src={device}></img>
        </div>
        <div className="caption">
          <h3>Device-Loaner</h3>
          <p>
            Device Loaner will make requesting a device from your IT department
            more accessible. By signing into your account you are able to place
            a request from a variety of devices through your IT department and
            know what is available.
          </p>
          <ul>
            <li className="tech">
              <mark className="html">HTML</mark>
            </li>
            <li className="tech">
              <mark className="css">CSS</mark>
            </li>
            <li className="tech">
              <mark className="js">JavaScript</mark>
            </li>
            <li className="tech">
              <mark className="react">React</mark>
            </li>
            <li className="tech">
              <mark className="group">TEAM PROJECT</mark>
            </li>
          </ul>
          <a href="https://jovial-mcclintock-f98a35.netlify.app/">LIVE LINK</a>
          <a href="https://github.com/chingu-voyages/v33-geckos-team-05">
            VIEW CODE
          </a>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Projects;
