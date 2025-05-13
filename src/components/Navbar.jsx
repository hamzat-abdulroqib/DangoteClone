import { NavLink } from "react-router-dom";
import React from "react";
import imgbg from "../assets/logo-svg.svg";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute w-100 z-3 navbar-fixed">
        <div className="container">
          <NavLink className="navbar-brand fw-bold display-5" to="/">
            <img src={imgbg} alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-0 ms-md-3">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ms-0 ms-md-3">
                <NavLink className="nav-link" aria-current="page" to="about">
                  About us
                </NavLink>
              </li>
              <li className="nav-item ms-0 ms-md-3">
                <NavLink className="nav-link" to="business">
                  Our Business
                </NavLink>
              </li>
              <li className="nav-item ms-0 ms-md-3">
                <NavLink className="nav-link" to="page">
                  Our Blog
                </NavLink>
              </li>
              <li className="nav-item ms-0 ms-md-3">
                <NavLink className="nav-link" to="career">
                  Career
                </NavLink>
              </li>
              <li className="nav-item ms-0 ms-md-3">
                <NavLink className="nav-link" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
