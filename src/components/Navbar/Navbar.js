import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <NavLink to="/">
          <div className="nav">
            <span>
              <button>1</button>
            </span>
            <span>Full Name</span>
          </div>
        </NavLink>
        <NavLink to="/personal">
          <div className="nav">
            <span>
              <button>2</button>
            </span>
            <span>Personal Information</span>
          </div>
        </NavLink>
        <NavLink to="/identity">
          <div className="nav">
            <span>
              <button>3</button>
            </span>
            <span>Identifications</span>
          </div>
        </NavLink>
        <NavLink to="/QR">
          <div className="nav">
            <span>
              <button>4</button>
            </span>
            <span>Your QR Code</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
