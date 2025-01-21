import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/logo.svg";

function NavBar() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="main-nav">
        <a href="#">
          <img src={Logo} alt="Jewelry Parts Logo" className="logo" />
        </a>

        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#new">
              New
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#type1">
              Type 1
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#type2">
              Type 2
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#type3">
              Type 3
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#collection">
              Collection
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#contact-us">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="sub-nav">
        <button className="nav-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button className="nav-btn">
          <i className="fa-regular fa-heart"></i>
        </button>
        <button className="nav-btn">
          <i className="fa-regular fa-user"></i>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
