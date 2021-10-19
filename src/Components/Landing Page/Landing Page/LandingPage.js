import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-app">
      <div className="typewriter">
        <p className="type_1">Hi, I'm Ashley Christie.</p>
        <p className="type_2">I am a Front-End</p>
        <p className="type_3">Developer.</p>
      </div>
      <div className="star-grid">
        <div className="star-one"></div>
        <div className="star-two"></div>
        <div className="star-three"></div>
        <div className="star-four"></div>
        <div className="star-five"></div>
      </div>
    </div>
  );
}

export default LandingPage;
