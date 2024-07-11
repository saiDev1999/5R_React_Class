import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import loggingComponent from "../../hoc/logging";

function Navbar(prop) {
  const linkStyle = {
    textDecoration: "none",
  };

  const listStyle = {
    margin: 10,
  };
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item" style={listStyle}>
            {/* <a className="nav-link active" href="#">
              Home
            </a> */}
            <NavLink to={"/"} style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li className="nav-item" style={listStyle}>
            {/* <a className="nav-link" href="#">
              About
            </a> */}
            <NavLink to={"/about"} style={linkStyle}>
              About
            </NavLink>
          </li>
          <li className="nav-item" style={listStyle}>
            {/* <a className="nav-link" href="#">
              Settings
            </a> */}
            <NavLink to={"/setting"} style={linkStyle}>
              Settings
            </NavLink>
          </li>
          <li className="nav-item" style={listStyle}>
            {/* <a className="nav-link" href="#">
              Contact
            </a> */}
            <NavLink to={"/contact"} style={linkStyle}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default loggingComponent(Navbar);
