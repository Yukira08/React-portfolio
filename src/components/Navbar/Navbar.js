import React, { Fragment, useState } from "react";

import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#about">About</a>
      </p>
      <p>
        <a href="#projects">Projects</a>
      </p>
      <p>
        <a href="#contact">Contact</a>
      </p>
    </>
  );
};
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Fragment>
      <nav className="my__navbar">
        <div className="my__navbar-links">
          <a href="#home" className="my__navbar-links_logo">
            KHIN
          </a>
        </div>
        <div class="my__navbar-links_container" id="navbarSupportedContent">
          <Menu />
        </div>
        <div class="my__navbar-menu">
            {toggleMenu ? (
              <FiX size={27} onClick={() => setToggleMenu(false)} />
            ) : (
              <FiMenu size={27} onClick={() => setToggleMenu(true)} />
            )}
            {toggleMenu && (
              <div class="my__navbar-menu-container scale-up-center slide-in-right">
                <div className="my__navbar-links-container">
                  <Menu />
                </div>
              </div>
            )}
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
