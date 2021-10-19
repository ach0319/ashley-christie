import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-links">
      <ul>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">WORK</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
