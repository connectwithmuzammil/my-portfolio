import React, { useState } from "react";
import "./Style.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <NavLink to="/">
              <span>M</span>uzammil
              {/* <span>T</span>echnical */}
            </NavLink>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
          style={{ background: "#1f242d" }}
        >
          <ul className="ul">
            <li>
              <NavLink to="/" className="navLink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navLink">
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className="navLink">
                services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className="navLink">
                portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navLink">
                contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social_Media">
          <ul className="social_Media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa"
              >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa"
              >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <NavLink
              href="#"
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            >
              <GiHamburgerMenu />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
