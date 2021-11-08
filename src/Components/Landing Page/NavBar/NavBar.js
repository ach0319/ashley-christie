import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-links">
      <nav>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/about">
          <li>ABOUT</li>
        </Link>
        <Link to="/projects">
          <li>WORK</li>
        </Link>
        <Link to="/contact">
          <li>CONTACT</li>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
