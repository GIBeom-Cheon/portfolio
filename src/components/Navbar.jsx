import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <div className="Navbar">
        <ul className="navbarList">
          <li className="navbarList1">
            <Link className="home" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="about" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="skill" to="/skill">
              Skill
            </Link>
          </li>
          <li>
            <Link className="profile" to="/web">
              Web Project
            </Link>
          </li>
          <li>
            <Link className="profile" to="/react">
              React Project
            </Link>
          </li>
        </ul>
      </div>
      <div className="decoBox">
        <div className="decoBoxTxt">
          <div className="decoBoxTxt1">{location.pathname}</div>
          <div className="decoBoxTxt2">gibeom's portfolio</div>
        </div>
      </div>
    </>
  );
}
